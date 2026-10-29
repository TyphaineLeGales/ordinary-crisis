import {defineArrayMember, defineField, defineType} from 'sanity'
export const postType = defineType({
  name: 'post',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
})