document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = this;
  const msg = document.getElementById('successMessage');
  const data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      msg.classList.remove('hidden');
      form.reset();

      setTimeout(() => {
        msg.classList.add('hidden');
      }, 3000);
    } else {
      alert('Došlo je do greške, pokušajte ponovo.');
    }
  }).catch(() => {
    alert('Došlo je do greške, pokušajte ponovo.');
  });
});
