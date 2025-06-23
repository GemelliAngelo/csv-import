import { useState } from "react";

import Table from "../components/table";
import Form from "../components/form";

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
