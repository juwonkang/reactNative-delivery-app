import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    }),
    defineField({
      name: 'image',
      title: 'Image of Restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of Restaurant',
      type: '  number',
    }),
    defineField({
      name: 'long',
      title: 'Longtitude of Restaurant',
      type: 'image',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Enter a Rating from(1-5starts)',
      validation: (Rule) => Rule.required().min(1).max(5).error('오류다'),
      type: 'number',
    }),
    defineField({
      name: 'type',
      title: 'Category ',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
  ],
})
