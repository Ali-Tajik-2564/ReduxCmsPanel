import * as Yup from 'yup';

const ArticleSchema = Yup.object().shape({
  name: Yup.string().min(3).max(12).required(),

  body: Yup.string().required(),

  category: Yup.string()
    .required()
    .min(4, 'category value must be have at least 4 character')
    .max(8, 'max character is 8'),
  writer: Yup.string()
    .required()
    .min(4, 'category value must be have at least 4 character')
    .max(8, 'max character is 8'),
});

export default ArticleSchema;
