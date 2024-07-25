import React from 'react';
import { Field as FormikField, FieldAttributes } from 'formik';

// https://formik.org/docs/api/field
interface IFieldProps extends FieldAttributes<any> {
  children?: React.ReactNode;
};

const Field = ({ children, ...other }: IFieldProps) => <FormikField {...other}>{children}</FormikField>;

export default Field;
