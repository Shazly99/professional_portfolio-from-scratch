// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import testimonials from './testimonials'

import works from './works'
import brands from './brands'
import abouts from './abouts'
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'
import cv from './cv'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([cv,works, testimonials, brands, abouts, skills, workExperience, experiences, contact]),
})
