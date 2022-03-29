import React from "react";
import { formValidations } from "../helpers/formValidations";

const useForm = (initialForm) => {
  // storage form data
  const [form, setForm] = React.useState(initialForm);
  // loader component value
  const [loader, setLoader] = React.useState(false);
  // storage validations error for each input
  const [error, setError] = React.useState({});
  // response from form submit app
  const [response, setResponse] = React.useState(false);

  // EMAIL - FETCH URL AND OPTIONS
  const mailTo = `me@csargomez.com`;
  const url = `https://formsubmit.co/ajax/${mailTo}`;
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...form,
    }),
  };

  // HANDLE CHANGE FUNCTION
  // grab data from inputs and update the form state
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  //HANDLE BLUR FUNCTION
  // use the form info and validate each input
  const handleBlur = (event) => {
    handleChange(event);
    setError(formValidations(form));
  };

  // HANDLE SUBMIT FUNCTION
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(formValidations(form));
    if (Object.keys(error).length === 0) {
      setLoader(true);
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          if (json.success === "true") {
            console.log(json);
            setResponse(json.success);
            setLoader(false);
            setForm(initialForm);
            setTimeout(() => {
              setResponse(false);
            }, 5000);
          } else {
            alert(
              "an error has occurred: Please change the email to a valid email in hooks folder > useForm > email variable ... currently email is email@email which is not valid email"
            );
            setLoader(false);
            setForm(initialForm);
            console.log(json);
          }
        });
    }
  };

  return {
    form,
    loader,
    error,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export { useForm };
