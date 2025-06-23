import { useState } from "react";

function App() {
  const [file, setFile] = useState();
  const [items, setItems] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((row) => {
      const values = row.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setItems(array);
  };

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

  const headerKeys = Object.keys(Object.assign({}, ...items));

  return (
    <>
      <h1 className="text-center">CSV Input</h1>
      <form className="py-5">
        <div className="input-group w-50 mx-auto">
          <input
            type="file"
            accept=".csv"
            name="file"
            id="file"
            className="form-control"
            onChange={handleOnChange}
          />
          <button
            className="btn btn-dark"
            onClick={(e) => {
              handleOnSubmit(e);
            }}
          >
            Stampa CSV in una tabella
          </button>
        </div>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            {headerKeys.map((key) => (
              <th scope="col" key={key}>
                {key.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((val) => (
                <td key={val}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
