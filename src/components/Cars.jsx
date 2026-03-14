import { useEffect, useState } from "react";
import Table from "./Table";

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      <h1>Cars</h1>
      <Table data={cars} />
    </div>
  );
}

export default Cars;