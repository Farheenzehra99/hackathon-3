export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
      { name: "name", type: "string", title: "Name" },
      { name: "email", type: "string", title: "Email" },
      { name: "address", type: "string", title: "Address" },
      { name: "createdAt", type: "datetime", title: "Created At" },
      { name: "totalAmount", type: "number", title: "Total Amount" }, // New field for total amount
      {
        name: "cartItems",
        type: "array",
        title: "Cart Items",
        of: [{ type: "cartItem" }],
      },
    ],
  };