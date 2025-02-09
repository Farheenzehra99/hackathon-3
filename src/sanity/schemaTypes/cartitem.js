export default {
    name: "cartItem",
    type: "object",
    title: "Cart Item",
    fields: [
      { name: "id", type: "string", title: "Product ID" },
      { name: "name", type: "string", title: "Product Name" },
      { name: "quantity", type: "number", title: "Quantity" },
      { name: "price", type: "number", title: "Price" },
    ],
  };