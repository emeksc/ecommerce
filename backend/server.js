import express from "express";
import stripes from "stripe";
import mongooese from "mongoose";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import dotenv from "dotenv";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const stripe = stripes(
  "sk_test_51IqJE1Ev0U2CTTgSof30Ts5GHEKt0imD4GYA4VVPq4RXyJcsaqx5o2JUEIQuOvHlYlLXAPOeXXytELmRDwbHwBIz00aXMarKGS"
);

mongooese.connect("mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.post("/create-payment-intent", async (req, res) => {
  const { totalAmount } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalAmount,
    currency: "usd",
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
