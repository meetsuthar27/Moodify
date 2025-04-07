document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");
  const applyBtn = document.getElementById("apply");
  const brightness = document.getElementById("brightness");
  const contrast = document.getElementById("contrast");
  const saturation = document.getElementById("saturation");
  const hue = document.getElementById("hue");

  // Load the saved filter for the current website
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let url = new URL(tabs[0].url);
    let domain = url.hostname;

    chrome.storage.sync.get(domain, function (result) {
      let savedFilter = result[domain] || "none";
      if (document.getElementById(savedFilter)) {
        document.getElementById(savedFilter).style.backgroundColor = "#ccc"; // Highlight selected button
      }
    });
  });

  // Apply selected filter when a button is clicked
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.id; // Get selected filter

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let url = new URL(tabs[0].url);
        let domain = url.hostname;

        // Save the selected filter for this website
        chrome.storage.sync.set({ [domain]: filter }, function () {
          console.log(`Saved ${filter} filter for ${domain}`);
        });

        // Apply the filter instantly
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: applyFilter, // Calls applyFilter function
          args: [filter], // Passes filter name (not value)
        });
      });
    });
  });

  // Handle "Apply" button for custom filter
  applyBtn.addEventListener("click", () => {
    const filterValue = `
        brightness(${brightness.value}%)
        contrast(${contrast.value}%)
        saturate(${saturation.value}%)
        hue-rotate(${hue.value}deg)
      `
      .replace(/\s+/g, " ")
      .trim(); // Remove extra spaces

    console.log("Applying custom filter:", filterValue);

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let url = new URL(tabs[0].url);
      let domain = url.hostname;

      // Save custom filter for the website
      chrome.storage.sync.set({ [domain]: filterValue }, function () {
        console.log(`Saved custom filter for ${domain}: ${filterValue}`);
      });

      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: applyFilter, // Calls applyFilter function
        args: [filterValue], // Passes the actual filter string
      });
    });
  });
});

// Function to apply filter on the webpage
function applyFilter(filterValue) {
  // If it's a preset name, use a predefined filter
  const presetFilters = {
    none: "none",
    sepia: "sepia(100%)",
    monochrome: "grayscale(100%)",
    invert: "invert(100%)",
    paper: "grayscale(10%) brightness(110%) contrast(90%) sepia(5%)",
    dimmed: "brightness(70%)",
    dimmed2: "brightness(50%)",
    dimmed3: "brightness(30%)",
    vintage: "sepia(50%) contrast(85%) brightness(105%)",
    noir: "grayscale(100%) contrast(120%) brightness(90%)",
    cyberpunk:
      "hue-rotate(280deg) contrast(120%) saturate(200%) brightness(90%)",
    filmgrain: "grayscale(30%) contrast(110%) brightness(90%)",
    dreamypastel:
      "saturate(150%) brightness(120%) contrast(80%) hue-rotate(20deg)",
    deepnight:
      "brightness(70%) contrast(130%) saturate(80%) hue-rotate(240deg)",
    sunset: "hue-rotate(-40deg) brightness(110%) contrast(105%) saturate(140%)",
  };

  // Apply preset filter or custom filter
  document.documentElement.style.filter =
    presetFilters[filterValue] || filterValue;
}
