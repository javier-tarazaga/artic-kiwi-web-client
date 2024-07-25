import React from 'react';
import { Formik, Form as FormikForm, FormikProps, FormikValues } from 'formik';

// https://formik.org/docs/api/formik
interface IFormProps extends Partial<FormikProps<FormikValues>> {
  initialValues: any;
  children: React.ReactNode;
  onSubmit: (arg: any) => void;
  /**
   * A Yup Schema or a function that returns a Yup schema
   */
  validationSchema?: any | (() => any);
};

const Form = ({ children, ...other }: IFormProps) => (
  <Formik {...other}>
    <FormikForm>{children}</FormikForm>
  </Formik>
);

export default Form;
