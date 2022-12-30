const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', e => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('All fields must be filled');
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);

  formRef.reset();
});
