import "../styles/sidebar.scss";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>

      <button onClick={() => setPage("products")}>Products</button>
      <button onClick={() => setPage("users")}>Users</button>
      <button onClick={() => setPage("cars")}>Cars</button>
    </div>
  );
}

export default Sidebar;