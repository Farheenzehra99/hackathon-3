import 'dotenv/config';
import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

async function importData() {
  try {
    console.log('Fetching products from API...');
    const response = await axios.get('https://next-ecommerce-template-4.vercel.app/api/product');
    console.log('API Response:', JSON.stringify(response.data, null, 2));

    // Check if the products data is in the correct format
    const products = Array.isArray(response.data) ? response.data : response.data.products;
    if (!products || !Array.isArray(products)) {
      throw new Error('Invalid API response format: Expected an array of products');
    }

    console.log(`Fetched ${products.length} products`);

    for (const product of products) {
      console.log(`Processing product: ${product.name}`);

      // Log the entire product to inspect its structure
      console.log('Product data:', JSON.stringify(product, null, 2));

      // Check the image field specifically to see its structure
      console.log(`Image field: ${product.image}`);

      // If the image is an object, the URL might be under a nested field
      let imageUrl = '';
      if (typeof product.image === 'string') {
        imageUrl = product.image;
      } else if (product.image && product.image.url) {
        imageUrl = product.image.url;
      } else {
        imageUrl = 'https://via.placeholder.com/300'; // fallback image
      }

      console.log(`Using image URL: ${imageUrl}`);

      const sanityProduct = {
        _type: 'product',
        name: product.name,
        image: imageUrl, // Store the image URL directly
        price: product.price,
        description: product.description,
        discountPercentage: product.discountPercentage || 0,
        isFeaturedProduct: product.isFeaturedProduct || false,
        stockLevel: product.stockLevel || 0,
        category: product.category || 'Uncategorized',
      };

      console.log('Uploading product to Sanity:', sanityProduct.name);
      const result = await client.create(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);
    }

    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

importData();
