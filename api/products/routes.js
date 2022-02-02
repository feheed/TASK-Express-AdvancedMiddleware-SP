const express = require("express");

const {
  getProducts,
  productCreate,
  productDelete,
  fetchProduct,
} = require("./controllers");

const router = express.Router();

router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProduct(next, productId);
  if (product) req.product = product;
  else next({ status: 404, message: "Not Found" });
});

router.get("/", getProducts);
router.get("/:productId", fetchProduct);
router.post("/", productCreate);
router.delete("/:productId", productDelete);
router.put("/:productId", productUpdate);

module.exports = router;
