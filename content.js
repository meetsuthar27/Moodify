// Get current website domain
let domain = window.location.hostname;

// Retrieve saved filter from Chrome storage
chrome.storage.sync.get(domain, function (result) {
  let savedFilter = result[domain] || "none";
  applyFilter(savedFilter);
});

// Function to apply filter
function applyFilter(filter) {
  const filterStyles = {
    none: "none",
    sepia: "sepia(100%)",
    monochrome: "grayscale(100%) ",
    invert: "invert(100%)",
  };

  document.documentElement.style.filter = filterStyles[filter] || "none";
}
