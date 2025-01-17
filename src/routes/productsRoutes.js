const { Router } = require("express");
const controllers = require("../controllers/products/index");

const productRouter = Router();

productRouter.post("/", controllers.createProduct);
productRouter.get("/",  controllers.getProducts);
productRouter.get("/:id", controllers.getProductByProductId);
productRouter.put("/:id", controllers.updateProduct);
productRouter.delete("/:id", controllers.deleteProduct);

module.exports = productRouter