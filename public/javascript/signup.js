async function signupFormHandler(event) {
<<<<<<< HEAD
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users/signup', {
          method: 'post',
          body: JSON.stringify({
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
          console.log('success');
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
  }
    
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
=======
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();


  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    // check the response status
    if (response.ok) {
      console.log('success');
      document.location.replace('/')
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
>>>>>>> 89680b04e6a4e5d8b5addbf30e926eee60a5a321
