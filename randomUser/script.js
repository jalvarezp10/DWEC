const messageContainer = document.getElementById('message-container');
    const userImage = document.getElementById('user-image');
    const userName = document.getElementById('user-name');
    const userAddress = document.getElementById('user-address');
    const userPhone = document.getElementById('user-phone');
    const userEmail = document.getElementById('user-email');
    const generateUserBtn = document.getElementById('generate-user-btn');
    const addUserBtn = document.getElementById('add-user-btn');
    const usersTable = document.getElementById('users-table');
    const saveUsersXHRBtn = document.getElementById('save-users-xhr-btn');
    const saveUsersFetchBtn = document.getElementById('save-users-fetch-btn');
    let usersData = [];

    function showMessage(message, success = true) {
      const alertClass = success ? 'alert-success' : 'alert-danger';
      const messageHTML = `
        <div class="alert ${alertClass}" role="alert">
          ${message}
        </div>
     
`;
messageContainer.innerHTML = messageHTML;
}


function generateUser() {
  fetch('https://randomuser.me/api/?nat=es')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      userImage.src = user.picture.large;
      userName.textContent = `${user.name.first} ${user.name.last}`;
      userAddress.textContent = `${user.location.street.name} ${user.location.street.number}, ${user.location.city}`;
      userPhone.textContent = user.phone;
      userEmail.textContent = user.email;
    })
    .catch(error => {
      console.log(error);
      showMessage('Error al generar el usuario', false);
    });
}

function addUser() {
  const user = {
    name: userName.textContent,
    phone: userPhone.textContent,
    street: userAddress.textContent,
    email: userEmail.textContent,
    image: userImage.src,
  };
  usersData.push(user);
  const row = `
    <tr>
      <td>${user.name}</td>
      <td>${user.phone}</td>
      <td>${user.street}</td>
      <td>${user.email}</td>
      <td><img src="${user.image}" alt="User Image" style="width: 50px;"></td>
    </tr>
  `;
  usersTable.querySelector('tbody').innerHTML += row;
  showMessage('Usuario añadido correctamente', true);
}

function saveUsersXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'save_users.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        showMessage('Usuarios guardados en BD correctamente', true);
      } else {
        showMessage('Error al guardar usuarios en BD', false);
      }
    }
  };
  xhr.send(JSON.stringify(usersData));
}

function saveUsersFetch() {
  fetch('save_users.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usersData),
  })
    .then(response => {
      if (response.ok) {
        showMessage('Usuarios guardados en BD correctamente', true);
      } else {
        showMessage('Error al guardar usuarios en BD', false);
      }
    })
    .catch(error => {
      console.log(error);
      showMessage('Error al guardar usuarios en BD', false);
    });
}

generateUserBtn.addEventListener('click', generateUser);
addUserBtn.addEventListener('click', addUser);
saveUsersXHRBtn.addEventListener('click', saveUsersXHR);
saveUsersFetchBtn.addEventListener('click', saveUsersFetch);