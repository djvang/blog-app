import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { baseUrlComments } from "../../shared/app-constants.js";

const CommentForm = props => {
  const postComment = body => {
    let fetchPromise = fetch(baseUrlComments, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    fetchPromise
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json);
        props.setComments([...props.comments, json]);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address format";
    }

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.body) {
      errors.body = "Comment field cannot be empty";
    }

    return errors;
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", body: "" }}
        isInitialValid={false}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          postComment({
            ...values,
            postId: props.id
          });
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form className="uk-comment-form uk-margin-medium-top">
            <fieldset className="uk-fieldset">
              <legend className="uk-legend">Add Comment</legend>
              <div className="uk-margin">
                <Field
                  type="text"
                  name="name"
                  className="uk-input"
                  placeholder="Name"
                />
                <ErrorMessage name="name" component="div" />
              </div>
              <div className="uk-margin">
                <Field
                  type="email"
                  name="email"
                  className="uk-input"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="uk-margin">
                <Field
                  type="text"
                  name="body"
                  className="uk-textarea"
                  placeholder="Comment"
                  as="textarea"
                />
                <ErrorMessage name="body" component="div" />
              </div>
              <div className="uk-margin">
                <button
                  className="uk-button uk-button-primary"
                  type="submit"
                  disabled={!isValid}
                >
                  Post Comment
                </button>
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
    </div>
  );
};

CommentForm.propTypes = {
  id: PropTypes.number,
  comments: PropTypes.arrayOf(
    PropTypes.exact({
      postId: PropTypes.number,
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string
    })
  ),
  setComments: PropTypes.func
};

export default CommentForm;
