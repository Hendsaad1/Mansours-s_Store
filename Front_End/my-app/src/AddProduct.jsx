import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [message, setMessage] = useState("");

  const handleAddProduct = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/products/add", {
        name: productName,
        size: 0,
        purchasePrice: 10,
        sellPrice: 20,
      });
      setMessage(" Product added successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMessage(" Failed to add product.");
    }
  };

  return (
    <div className="flex flex-col items-center border-2 border-gray-400 p-8 rounded-xl m-10">
      <label className="mb-2">Product Name:</label>
      <input
        type="text"
        placeholder="Enter Product Name.."
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="border p-2 mb-4 rounded"
      />
      <button
        onClick={handleAddProduct}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Product
      </button>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default AddProduct;
