import { defineField, defineType } from 'sanity'

export const locationType = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Location ID',
      type: 'slug',
      description: 'A stable identifier used to connect this location to a map point.',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),

    defineField({
      name: 'body',
      title: 'Article / Story',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'audios',
      title: 'Audio Clips',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'audioClip',
          title: 'Audio Clip',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'file',
              title: 'Audio File',
              type: 'file',
              options: {
                accept: 'audio/*',
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'transcript',
              title: 'Transcript',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'file.asset',
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
    },
  },
})