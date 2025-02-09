import Stripe from 'stripe';

console.log("Loading Stripe API..."); // 🔴 Step 1: Check if Stripe is loading

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-04-10', // ✅ Correct apiVersion
});

export async function POST(req) {
  try {
    console.log("Received a POST request at /api/checkout"); // 🔴 Step 2: Confirm API hit

    const { items } = await req.json();
    console.log("Received Items:", items); // 🔴 Step 3: Log received items

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("❌ Error: STRIPE_SECRET_KEY is missing!");
      return new Response(JSON.stringify({ error: "Stripe API key is missing" }), { status: 500 });
    }

    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Convert to cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    console.log("✅ Stripe Session Created:", session.id); // 🔴 Step 4: Confirm session creation

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    console.error("❌ Error in Checkout API:", error.message); // 🔴 Step 5: Log errors
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY); // 🔴 Step 6: Confirm Stripe key
