export default {
    name: "newOrder",
    type: "document",
    title: "New Order",
    fields: [
      { name: "name", type: "string", title: "Customer Name" },
      { name: "email", type: "string", title: "Email Address" },
      { name: "address", type: "string", title: "Shipping Address" },
      { name: "userId", type: "string", title: "User ID" },
      { name: "createdAt", type: "datetime", title: "Order Created At" },
      {
        name: "cartItems",
        type: "array",
        title: "Cart Items",
        of: [{ type: "cartItem" }], // ✅ Uses `cartItem` schema
      },
      { name: "totalAmount", type: "number", title: "Total Amount" },
    ],
  };
  