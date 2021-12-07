async function logout() {
<<<<<<< HEAD
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
=======
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
>>>>>>> 89680b04e6a4e5d8b5addbf30e926eee60a5a321
  } else {
    alert(response.statusText);
  }
}

<<<<<<< HEAD
document.querySelector("#logout").addEventListener("click", logout);
=======
document.querySelector('#logout').addEventListener('click', logout);
>>>>>>> 89680b04e6a4e5d8b5addbf30e926eee60a5a321
