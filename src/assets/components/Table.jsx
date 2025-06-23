export default function Table({ headerKeys, items }) {
  return (
    <table className="table table-striped table-hover">
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
  );
}
