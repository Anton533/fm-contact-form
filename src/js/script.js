const formBtn = document.getElementById('form-btn');

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const last = document.getElementById('last').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  toggleError(name, 'name-error');
  toggleError(last, 'last-name-error');
  toggleError(email, 'email-error');
  toggleError(message, 'message-error');

  if (email !== '' && !email.includes('@')) {
    document.getElementById('email-error').innerText = 'Please enter a valid email address';
    document.getElementById('email-error').classList.add('active');
  }

  const consent = document.getElementById('consent').checked;
  if (consent) {
    document.getElementById('consent-error').classList.remove('active');
  } else {
    document.getElementById('consent-error').classList.add('active');
  }

  const generalEnquiry = document.getElementById('general-enquiry').checked;
  const supportRequest = document.getElementById('support-request').checked;
  if (generalEnquiry || supportRequest) {
    document.getElementById('query-error').classList.remove('active');
  } else {
    document.getElementById('query-error').classList.add('active');
  }
});

function toggleError(field, id) {
  if (field === '') {
    document.getElementById(id).classList.add('active');
  }
  if (field !== '') {
    document.getElementById(id).classList.remove('active');
  }
}
