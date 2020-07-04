const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  let firstName = form['firstname'].value; 
  let lastName = form['lastname'].value;
  let email = form['email'].value;
  let password = form['password'].value;

  if (firstName === ''){
    addMessageError('firstname', 'First Name is required');
  }else {
    removeMessageError('firstname');
  };

  if (lastName === ''){
    addMessageError('lastname', 'Last Name is required');
  }else {
    removeMessageError('lastname');
  };

  if (email === ''){
    addMessageError('email', 'Email is required');
  }else {
    removeMessageError('email');
  };

  if (password === ''){
    addMessageError('password', 'Password is required');
  }else {
    removeMessageError('password');
  };
  
});

function addMessageError (field, message ) {
  let small = form[field].parentNode.querySelector('small');
  small.innerText = message;
  small.style.opacity = '1';
}

function removeMessageError (field) {
  let small = form[field].parentNode.querySelector('small');
  small.style.opacity = '0';
}