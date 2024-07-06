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

  const successMessage = document.getElementById('success-message');
  if (!successMessage) return;
  if (name !== '' && last !== '' && email !== '' && message !== '' && consent && (generalEnquiry || supportRequest)) {
    successMessage.classList.add('show');
  }
  setTimeout(() => successMessage.classList.remove('show'), 3000);
});

function toggleError(field, id) {
  if (field === '') {
    document.getElementById(id).classList.add('active');
  }
  if (field !== '') {
    document.getElementById(id).classList.remove('active');
  }
}

const generalEnquiry = document.getElementById('general-enquiry');
const supportRequest = document.getElementById('support-request');

generalEnquiry.addEventListener('click', () => {
  document.getElementById('general').classList.add('checked');
  document.getElementById('support').classList.remove('checked');
});

supportRequest.addEventListener('click', () => {
  document.getElementById('support').classList.add('checked');
  document.getElementById('general').classList.remove('checked');
});
