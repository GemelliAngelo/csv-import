import { useState } from "react";

function App() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const newArray = csvRows.map((row) => {
      const values = row.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(newArray);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <>
      <form>
        <input
          type="file"
          accept=".csv"
          name="test"
          id="test"
          onChange={handleOnChange}
        />
        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </button>
      </form>
      <table className="table">
        <thead>
          <tr key={"header"}>
            {headerKeys.map((key) => (
              <th scope="col" key={key}>
                {key}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item, index) => (
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
