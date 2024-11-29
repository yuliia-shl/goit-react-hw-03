import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css';
import * as Yup from 'yup';

const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (values, options) => {
    const { name, number } = values;
    handleAddContact(name, number);
    options.resetForm();
  };

  const initValues = {
    name: '',
    number: '',
  };

  // Валідація
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
  });

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initValues}
        validationSchema={contactSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component={'span'} className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field type="phone" name="number" />
            <ErrorMessage
              name="number"
              component={'span'}
              className={s.error}
            />
          </label>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
