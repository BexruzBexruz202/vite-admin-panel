import { useEffect, useState } from "react";
import Table from "./Table";
import Edit from "./Edit";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  const loadProducts = () => {
  fetch("http://localhost:3000/products")
    .then((res) => {
      console.log(res);   
      return res.json();
    })
    .then((data) => {
      console.log(data);    
      setProducts(data);
    })
    .catch((err) => console.log(err));
};

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    }).then(() => loadProducts());
  };

  return (
    <div>
      <h1>Products</h1>

      <Table
        data={products}
        onDelete={handleDelete} 
        onEdit={(item) => setEditItem(item)}
      />

      {editItem && (
        <Edit
          item={editItem}
          onClose={() => setEditItem(null)}
          onUpdate={loadProducts}
        />
      )}

      {showAdd && (
        <AddProduct
          onClose={() => setShowAdd(false)}
          onUpdate={loadProducts}
        />
      )}
    </div>
  );
}