import React from 'react';
import { FieldArray as FormikFieldArray } from 'formik';

// https://formik.org/docs/api/fieldarray
interface IFieldArrayProps {
  name: string;
  children?: () => React.ReactNode;
};

const FieldArray = ({ children, ...other }: IFieldArrayProps) => (
  <FormikFieldArray {...other}>{children}</FormikFieldArray>
);

export default FieldArray;
