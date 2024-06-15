import "../css/uploadCSV.css"

const UploadCSV = () => {

    const uploadIcon = <i class="fa-solid fa-upload"></i>

    const handleSubmit = (e) => {
        e.preventDefault();
        // await => backend call passing in CSV to update data
    }

    return (
        <div className="main-upload-csv-div">
            <button className="button csv-upload-button" /*onClick={open modal }*/>
                Upload {uploadIcon}
            </button>
        </div>
    )
}

export default UploadCSV;
