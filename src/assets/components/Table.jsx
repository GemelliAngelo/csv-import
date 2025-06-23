export default function Table({ headerKeys, items, noPrice }) {
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

      {noPrice ? (
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((val) => (
                <td key={val}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody>
          {items
            .filter((item) => item.price)
            .map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((val) => (
                  <td key={val}>{val}</td>
                ))}
              </tr>
            ))}
        </tbody>
      )}
    </table>
  );
}
