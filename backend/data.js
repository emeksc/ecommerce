import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Emek",
      email: "admin@emek.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Sedar",
      email: "user@sedar.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Product1",
      category: "Category1",
      image: "/images/p1.png",
      price: 20,
      countInStock: 10,
      brand: "brand",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Product2",
      category: "Category2",
      image: "/images/p2.png",
      price: 250,
      countInStock: 20,
      brand: "brand",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
    },
    {
      name: "Product3",
      category: "Category1",
      image: "/images/p3.png",
      price: 220,
      countInStock: 0,
      brand: "brand",
      rating: 3,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Product4",
      category: "Category2",
      image: "/images/p4.png",
      price: 720,
      countInStock: 5,
      brand: "brand",
      rating: 1.5,
      numReviews: 50,
      description: "high quality product",
    },
    {
      name: "Product5",
      category: "Category5",
      image: "/images/p5.png",
      price: 13,
      countInStock: 12,
      brand: "brand",
      rating: 8,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Product6",
      category: "Category6",
      image: "/images/p6.png",
      price: 7,
      countInStock: 0,
      brand: "brand",
      rating: 5,
      numReviews: 16,
      description: "high quality product",
    },
  ],
};

export default data;
