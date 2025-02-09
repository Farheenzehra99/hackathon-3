export default {
    name: 'alert',
    title: 'Site Alert',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'For internal use only.'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Provide a detailed description for the alert.'
      },
      {
        name: 'imageUrl',
        title: 'Image URL',
        type: 'url',
        description: 'Provide the URL for the image.'
      },
      {
        name: 'alt',
        title: 'Alt Text',
        type: 'string',
        description: 'Alternative text for the image for accessibility.'
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'Specify the price associated with the alert, if applicable.'
      }
    ]
  };