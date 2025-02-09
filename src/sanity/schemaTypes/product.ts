// @sanity/schemaTypes/product.ts

interface ProductField {
  name: string;
  type: string;
  title: string;
  validation?: (Rule: any) => any;
  options?: {
    hotspot?: boolean;
    list?: { title: string; value: string }[];
  };
  description?: string;
  of?: { type: string; options?: { hotspot?: boolean } }[];
}

interface ProductSchema {
  name: string;
  type: string;
  title: string;
  fields: ProductField[];
}

const productSchema: ProductSchema = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: any) => Rule.required().error('Name is required'),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule) => Rule.required().error('Price is required'),
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      validation: (Rule: any) =>
        Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
    },
    {
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Is Featured Product',
    },
    {
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
      validation: (Rule: any) =>
        Rule.min(0).error('Stock level must be a positive number.'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Main Image',
      options: { hotspot: true },
      description: 'Upload the main image of the product.',
    },
    {
      name: 'additionalImages',
      type: 'array',
      title: 'Additional Images',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Upload additional images of the product.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) =>
        Rule.max(150).warning('Keep the description under 150 characters.'),
    },
    {
      name: 'additionalDescription',
      type: 'text',
      title: 'Additional Description',
      description: 'Provide a detailed description of the product.',
    },
    {
      name: 'additionalInfo',
      type: 'text',
      title: 'Additional Info',
      description:
        'Enter additional information about the product (e.g., care instructions, material details).',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      description: 'Add tags for the product (e.g., Leather, Medium).',
    },
    {
      name: 'sizes',
      type: 'array',
      title: 'Sizes',
      of: [{ type: 'string' }],
      description: 'Add available sizes for the product (e.g., Small, Medium).',
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Colors',
      of: [{ type: 'string' }],
      description: 'Add available colors for the product (e.g., Black, Brown, Blue, red ).',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Chair', value: 'Chair' },
          { title: 'Sofa', value: 'Sofa' },
        ],
      },
      validation: (Rule: any) => Rule.required().error('Category is required'),
    },
  ],
};

export default productSchema;