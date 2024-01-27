export default {
  name: 'tech',
  title: 'tech',
  type: 'document',
  fields: [
    {
      name: 'skill',
      title: 'Skill',
      type: 'string',
    },

    {
      name: 'rate',
      title: 'Rate',
      type: 'string',
    },
    {
      name: 'width',
      title: 'Width',
      type: 'string',
    },
    {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
    }, 
  ],
}
