import {defineArrayMember, defineField, defineType} from 'sanity'
export const aboutType = defineType({
    name: 'about',
    type: 'document',
    fields: [ 
        defineField({
            name: 'body',
            type: 'array',
            of: [defineArrayMember({type: 'block'})],
        }),
        defineField({
            name: 'partners',
            type: 'array',
            of: [defineArrayMember({type: 'string'})],
        })
    ]
})