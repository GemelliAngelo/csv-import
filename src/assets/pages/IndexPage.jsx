import { useState } from "react";

import Table from "../components/table";
import Form from "../components/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function IndexPage() {
  const [file, setFile] = useState();
  const [noPrice, setNoPrice] = useState(false);
  const [items, setItems] = useState([]);

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((row) => {
      const values = row.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header.trim()] = values[index].trim();
        return object;
      }, {});
      return obj;
    });

    setItems(array);
  };

  const headerKeys = Object.keys(Object.assign({}, ...items));
  return (
    <>
      <div className="text-center">
        <h3 className="text-center">Importa qui il tuo file ".csv"</h3>
        <FontAwesomeIcon icon={faArrowDown} size="lg" bounce />
      </div>

      <Form
        csvFileToArray={csvFileToArray}
        file={file}
        setFile={setFile}
        noPrice={noPrice}
        setNoPrice={setNoPrice}
      />
      <Table headerKeys={headerKeys} items={items} noPrice={noPrice} />
    </>
  );
}
