import React from "react";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Form = (props) => {
  const {
    form,
    loader,
    error,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>{props.title}</h1>
        <div className="wrapper">
          <div className="wrapper-name">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.name}
              required
            />
            {error.name && <Message msg={error.name} color="error" />}
          </div>
          <div className="wrapper-email">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.email}
              required
            />
            {error.email && <Message msg={error.email} color="error" />}
          </div>
        </div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          placeholder="Subject here..."
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        />
        {error.subject && <Message msg={error.subject} color="error" />}
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          placeholder="Your message here..."
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.message}
          required
        ></textarea>
        {error.message && <Message msg={error.message} color="error" />}
        <input type="submit" value="Submit" />
        {loader && (
          <>
            <Loader />
            <Message msg="sending form..." color="sending" />
          </>
        )}
        {response && (
          <Message msg="The form was submitted successfully" color="success" />
        )}
      </form>
    </>
  );
};

export default Form;
