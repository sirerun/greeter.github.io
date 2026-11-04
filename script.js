"use strict";

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.removeAttribute("hidden");
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");
    const status = document.querySelector(".copy-status");
    if (!value || !status) return;

    try {
      await navigator.clipboard.writeText(value);
      status.textContent = `${value} copied to clipboard.`;
    } catch {
      status.textContent = `Copy isn’t available here. Select ${value} from the swatch.`;
    }
  });
});
