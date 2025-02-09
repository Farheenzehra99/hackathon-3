export default {
    name: 'allProducts',
    title: 'All Products',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'For internal use only.',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'Unique identifier for the product, typically generated from the title.',
        options: {
          source: 'title', // Generates the slug from the title
          maxLength: 96, // Maximum length for the slug
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Provide a detailed description for the product.',
      },
      {
        name: 'imageUrl',
        title: 'Image URL',
        type: 'url',
        description: 'Provide the URL for the product.',
      },
      {
        name: 'alt',
        title: 'Alt Text',
        type: 'string',
        description: 'Alternative text for the image for product.',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'Specify the price associated with the product, if applicable.',
      },
    ],
  };
  