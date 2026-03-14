import { useState } from "react";
import "../styles/modal.scss";

function Edit({ item, onClose, onUpdate }) {
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/products/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...item,
        name,
        price: Number(price),
      }),
    }).then(() => {
      onUpdate();
      onClose();
    });
  };

  return (
    <div className="modal">
      <form className="modal-content" onSubmit={handleSubmit}>
        <h2>Edit Product</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />

        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Edit;