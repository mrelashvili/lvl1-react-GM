import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
// const validationSchema = Yup.object({
//   name: Yup.string().required("At least 10 Letter!"),
//   email: Yup.string().email(`Invalid email form`).required(`Required`),
//   channel: Yup.string().required("Required"),
// });

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log(`Values are:`, values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required name!"),
  email: Yup.string().email(`Invalid email format`).required(`Required email`),
  channel: Yup.string().required(`Required chann`),
});

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email"></Field>
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel"></Field>
          <ErrorMessage name="channel" />
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments"></Field>
        </div>
        <div className="form-control">
          <label htmlFor="address">address</label>
          <Field name="address">
            {(props) => {
              const { field, form, meta } = props;
              console.log(`props`, props);
              return (
                <div>
                  <input type="text" id="adress" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">FAcebook</label>
          <Field type="text" id="facebook" name="social.facebook"></Field>
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <Field type="text" id="twitter" name="social.twitter"></Field>
        </div>

        {/* Arrays */}
        <div className="form-control">
          <label htmlFor="primaryPh">Primary</label>
          <Field type="text" id="primaryPh" name="phoneNumbers[0]"></Field>
        </div>
        <div className="form-control">
          <label htmlFor="secondaryPh">Secondary</label>
          <Field type="text" id="secondaryPh" name="phoneNumbers[1]"></Field>
        </div>

        <div className="form-control">
          <label>List of numbers</label>
          <FieldArray name="phNumbers">
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;

              console.log(`Field Array`, fieldArrayProps);
              return (
                <div>
                  {phNumbers.map((item, index) => {
                    return (
                      <div key={index}>
                        <Field name={`phNumbers[${index}]`} />
                        <button type="button" onClick={() => remove(index)}>
                          -
                        </button>
                        <button type="button" onClick={() => push("")}>
                          +
                        </button>
                      </div>
                    );
                  })}
                </div>
              );
            }}
          </FieldArray>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
