import { Rule } from '@sanity/types';

export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "imageUrl",
      title: "Image URL",
      type: "url",
      validation: (Rule: Rule) => Rule.required().uri({ allowRelative: true }),
      description: "The URL for the image. You can use an external or relative path.",
    },
    {
      name: "altText",
      title: "Alt Text",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
      description: "Descriptive text for the image for accessibility.",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule: Rule) => Rule.required().max(100),
      description: "The heading text to display.",
    },
  ],
};