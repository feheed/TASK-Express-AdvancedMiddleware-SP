const Product = require("../../models/Product");

exports.fetchProduct = async (productId, next) => {
  try {
    const foundProduct = await Product.findById(productId);
    return res.json(foundProduct);
  } catch (error) {
    next(error);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.productCreate = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
exports.productDelete = async (req, res) => {
  try {
    const { productId } = req.params;
    const foundProduct = await Product.findById(productId);
    if (foundProduct) {
      foundProduct.remove();
      return res.status(204).end();
    } else {
      next({ status: 404, message: "Product Not Found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.productUpdate = async (req, res) => {
  try {
    const foundProduct = await Product.findById(productId);
    if (foundProduct) {
      const foundProduct = await Product.findById(productId);
      await foundProduct.updateOne(req.body, { new: true });
      return res.json(foundProduct);
    } else {
      next({ status: 404, message: "Product Not Found" });
    }
  } catch (error) {
    next(error);
  }
};
