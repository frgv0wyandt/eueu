import { eByClass } from "./helpers";

// Assuming eByClass is a utility function that returns an element by its class name
const modal = document.querySelector(".modal");
const keepPlayingButton = eByClass("keep-playing");

// Optimize by checking if elements exist before adding event listeners
if (modal && keepPlayingButton) {
  keepPlayingButton.addEventListener("click", () => {
    // Ensure the modal has a close method before calling it
    if (typeof modal.close === 'function') {
      modal.close();
    }
  });
}
