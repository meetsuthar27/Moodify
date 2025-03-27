document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.getElementById("expand");
  const expandedFilters = document.querySelector(".more-filters"); // Fix: select the actual div
  const toBeHidden = document.querySelector(".to-be-hidden");
  const customFilter = document.querySelector(".custom-btn");
  const customSelector = document.querySelector(".custom-selector");

  //custom - selector;

  let isExpanded = false;
  let isCustomOn = false;

  dropdownBtn.addEventListener("click", () => {
    if (!isExpanded) {
      expandedFilters.classList.remove("hidden");
      toBeHidden.classList.add("hidden");
      document.body.style.height = "600px"; // Adjust this value based on your popup max size
      document.body.style.width = "800px"; // Adjust this value based on your popup max size
    } else {
      expandedFilters.classList.add("hidden");
      toBeHidden.classList.remove("hidden");
      document.body.style.height = "auto";
    }
    isExpanded = !isExpanded;
  });

  customFilter.addEventListener("click", () => {
    if (!isCustomOn) {
      customSelector.classList.remove("hidden");
    } else {
      customSelector.classList.add("hidden");
    }
    isCustomOn = !isCustomOn;
  });
});
