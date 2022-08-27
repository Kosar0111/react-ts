import * as yup from 'yup'

const validationSchema = yup.object({
  author: yup
    .string()
    .min(5, 'Must be 5 characters at least')
    .max(30, 'Too long title')
    .required('Author is reqield!'),
  description: yup
    .string()
    .min(25, 'Must be 25 characters at least')
    .max(120, 'Too long title')
    .required('Description is required field!')
})

export default validationSchema
