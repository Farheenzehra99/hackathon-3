import { client } from '@/sanity/lib/client';

export async function GET() {
  try {
    // Fetch data from Sanity
    const bags = await client.fetch(`
      *[_type == "bag"] {
        _id,
        name,
        id,
        price,
        image {
          asset->{
            _id,
            url
          }
        }
      }
    `);

    // Return the response as JSON
    return new Response(JSON.stringify(bags), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Handle errors
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
