import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const SHIPPO_API_KEY = process.env.SHIPPO_API_KEY;

export default async function liveTracking(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { trackingNumber, carrier } = req.body;

  if (!trackingNumber || !carrier) {
    return res.status(400).json({ message: "Missing required fields: trackingNumber or carrier" });
  }

  try {
    const response = await axios.get(`https://api.goshippo.com/tracks/${carrier}/${trackingNumber}`, {
      headers: {
        Authorization: `ShippoToken ${SHIPPO_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const trackingDetails = response.data;

    res.status(200).json({
      trackingDetails,
    });
  } catch (error: any) {
    console.error("Error fetching tracking details:", error.response?.data || error.message);
    res.status(500).json({
      message: "Failed to fetch tracking details",
      error: error.response?.data || error.message,
    });
  }
}
