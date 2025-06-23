export default function Form({
  csvFileToArray,
  file,
  setFile,
  noPrice,
  setNoPrice,
}) {
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
    <form className="pb-5">
      <div className="form-control w-50 mx-auto">
        <input
          type="file"
          accept=".csv"
          name="file"
          id="file"
          className="form-control"
          onChange={handleOnChange}
        />
        <div className="form-check form-switch pt-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="noPrice"
            checked={noPrice}
            onChange={(e) => setNoPrice(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="noPrice">
            Mostra elementi senza senza prezzo
          </label>
        </div>
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
