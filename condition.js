document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.getElementById("expand");
  const expandedFilters = document.querySelector(".more-filters"); // Fix: select the actual div
  const toBeHidden = document.querySelector(".to-be-hidden");
  const customFilter = document.querySelector(".custom-btn");
  const customSelector = document.querySelector(".custom-selector");

  //custom - selector;

  let isExpanded = false;
  let isCustomOn = false;

  document.querySelectorAll(".filter-container").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-container")
        .forEach((btn) => btn.classList.remove("filter-active"));

      button.classList.add("filter-active");
    });
  });

  dropdownBtn.addEventListener("click", () => {
    if (!isExpanded) {
      expandedFilters.classList.remove("hidden");
      toBeHidden.classList.add("hidden");
      document.body.style.width = "800px"; // Adjust this value based on your popup max size
      document.body.style.height = "auto";
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
