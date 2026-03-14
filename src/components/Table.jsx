import "../styles/general.scss";

function Table({ data, onDelete, onEdit }) {
  if (!data.length) return <p>No data</p>;

  const keys = Object.keys(data[0]).filter((k) => k !== "id");

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>

            {keys.map((key) => (
              <td key={key}>{item[key]}</td>
            ))}

            <td className="actions">
              <button className="edit" onClick={() => onEdit(item)}>
                Edit
              </button>

              <button className="delete" onClick={() => onDelete(item.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;