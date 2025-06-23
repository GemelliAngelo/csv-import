export default function Form({ csvFileToArray, file, setFile }) {
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const fileReader = new FileReader();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = (e) => {
        const text = e.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };
  return (
    <form className="py-5">
      <div className="form-control w-50 mx-auto">
        <input
          type="file"
          accept=".csv"
          name="file"
          id="file"
          className="form-control"
          onChange={handleOnChange}
        />
        <div className="d-flex gap-2 pt-3">
          <button
            className="btn btn-outline-danger w-100"
            onClick={() => {
              setFile();
            }}
          >
            Annulla
          </button>
          <button
            className="btn btn-outline-dark w-100"
            onClick={(e) => {
              handleOnSubmit(e);
            }}
          >
            Stampa CSV in una tabella
          </button>
        </div>
      </div>
    </form>
  );
}
