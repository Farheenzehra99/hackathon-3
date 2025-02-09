import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const SHIPPO_API_KEY = process.env.SHIPPO_API_KEY;

export default async function shippoOrder(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { addressFrom, addressTo, parcels, orderId, totalAmount } = req.body;

  if (!addressFrom || !addressTo || !parcels) {
    return res.status(400).json({ message: "Missing required fields: addressFrom, addressTo, or parcels" });
  }

  try {
    const response = await axios.post(
      "https://api.goshippo.com/shipments/",
      {
        address_from: addressFrom,
        address_to: addressTo,
        parcels,
        async: false,
      },
      {
        headers: {
          Authorization: `Bearer ${SHIPPO_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      orderId,
      totalAmount,
      trackingNumber: response.data.object_id,
      eta: response.data.eta || "3-5 business days",
      status: "Shipment created successfully!",
    });
  } catch (error: any) {
    console.error("Error creating shipment:", error.response?.data || error.message);
    res.status(500).json({
      message: "Failed to create shipment",
      error: error.response?.data || error.message,
    });
  }
}
