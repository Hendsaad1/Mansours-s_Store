import Product from "../models/product.js";

export const addProducts = async (req, res) => {
  try {
    const { products } = req.body;

    if (!products || !Array.isArray(products)) {
      return res.status(400).json({ success: false, message: "البيانات غير صحيحة" });
    }

    // إدخال أكثر من منتج في مرة واحدة
    const newProducts = await Product.insertMany(products);

    res.status(201).json({ success: true, data: newProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
