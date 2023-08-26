import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Enter Name"),
  categoryId: Yup.string().required("Select Category"),
  price: Yup.number().required("Price is required").positive(),
  currency: Yup.string().required("Select Currency")
});
export const checkProductForm = async (form: any) => {
  try {
    await schema.validate(form, { abortEarly: false })
  } catch (err) {
    return err.inner.reduce((acc, { path, message }) => {
      acc[path] = message
      return acc
    }, {})
  }
}
export default schema;