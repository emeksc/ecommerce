import express from "express";
import mongooese from "mongoose";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js"

const app = express();
mongooese.connect("mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err,req,res,next)=>{
  res.status(500).send({message:err.message})
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
