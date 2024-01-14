import * as Yup from 'yup';

const ProductSchema = Yup.object().shape({
  name: Yup.string('please enter a string value').min(3).max(12).required(),

  stock: Yup.number('please enter number')
    .min(1, 'min must be at least 1')

    .required('stock is required'),
  off: Yup.number('please enter number')
    .min(1, 'min must be at least 1')
    .max(99, 'max percent is 99')
    .required('off is required'),
  price: Yup.number('please enter number').min(1, 'min must be at least 1'),
});

export default ProductSchema;
