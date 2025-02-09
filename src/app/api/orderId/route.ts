import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const orderId = searchParams.get("orderId");

  if (!orderId) {
    return new Response(JSON.stringify({ message: "Order ID is required" }), { status: 400 });
  }

  try {
    const order = await sanityClient.getDocument(orderId);
    return new Response(JSON.stringify({ order }), { status: 200 });
  } catch (error) {
    console.error("Error fetching order:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch order" }), { status: 500 });
  }
}
