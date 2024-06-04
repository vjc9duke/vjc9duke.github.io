import "./CloseButton.scss";

export default function GetCloseGalleryButton() {
  function closeGallery() {
    const galleryDiv = document.getElementById("galleryPopup");

    // Delete gallery div
    if (galleryDiv) {
      galleryDiv.remove();
    }
    var closeButton = document.getElementById("close-btn");
    closeButton.classList.remove("show");
  }

  return (
    <button
      onClick={closeGallery}
      id="close-btn"
      title="Close Gallery"
      className="close-btn-dark"
    > Close Gallery
    </button>
  );
}
