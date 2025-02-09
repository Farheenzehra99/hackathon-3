import { Rule } from '@sanity/types';

export default {
  name: 'bag',
  title: 'Bag',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Name is required'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', // Generates the slug from the 'name' field
        maxLength: 96,   // Maximum length for the slug
      },
      validation: (Rule: Rule) => Rule.required().error('Slug is required'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Allows cropping
      },
      validation: (Rule: Rule) => Rule.required().error('Image is required'),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().positive().error('Price must be a positive number'),
    },
  ],
};