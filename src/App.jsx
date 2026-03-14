import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import Users from "./components/Users";
import Cars from "./components/Cars";
import "./styles/main.scss";

function App() {
  const [page, setPage] = useState("products");

  return (
    <div className="layout">
      <Sidebar setPage={setPage} />

      <div className="content">
        {page === "products" && <Products />}
        {page === "users" && <Users />}
        {page === "cars" && <Cars />}
      </div>
    </div>
  );
}

export default App;