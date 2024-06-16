import "../css/uploadCSV.css";

const UploadCSV = () => {
  const uploadIcon = <i class="fa-solid fa-upload"></i>;

  const handleSubmit = (e) => {
    e.preventDefault();
    // await => backend call passing in CSV to update data
  };

  const openModal = () => {
    const modal = document.querySelector("#modal");
    const openModal = document.querySelector("#openModal");
    const closeModal = document.querySelector("#closeModal");

    if (modal) {
      openModal && openModal.addEventListener("click", () => modal.showModal());

      closeModal && closeModal.addEventListener("click", () => modal.close());
    }
  };

  return (
    <div className="main-upload-csv-div">
      <button
        className="button csv-upload-button"
        id="openModal"
        onClick={openModal}
      >
        Upload {uploadIcon}
      </button>

      <dialog id="modal" class="dialog">
        <button id="closeModal" class="dialog-close-btn">
          X
        </button>
        <button className="button upload-csv" onClick={handleSubmit}>Choose a File</button>
      </dialog>
    </div>
  );
};

export default UploadCSV;
