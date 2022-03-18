const formValidations = (form) => {
  let errors = {};

  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexMessage = /^.{1,255}$/;

  if (!form.name.trim() || !regexName.test(form.name.trim())) {
    errors.name = "Name can't be empty and can't have numbers";
  } else if (!form.email.trim() || !regexEmail.test(form.email.trim())) {
    errors.email = "Invalid email";
  } else if (!form.subject.trim()) {
    errors.subject = "Subject can't be empty";
  } else if (!form.message.trim() || !regexMessage.test(form.message.trim())) {
    errors.message = "Message can't be empty";
  }

  return errors;
};

export { formValidations };
