const users = new Storage('users', User.fromObject);

function add() {
  const id = generateId();
  const { firstName, lastName, phone } = getInputData();

  const isValid = [firstName, lastName, phone].every((input) => Boolean(input));

  if (!isValid) {
    alert('Llenar todos los campos');
    return;
  }

  const newUser = new User(id, firstName, lastName, phone);
  users.createItem(newUser);
  populateTable(users.readItems());
  cleanInputs();
}

function destroy(event) {
  const { id } = getDataTr(event);
  users.deleteItem(id);
  populateTable(users.readItems());
}

function edit(event) {
  const { id, firstName, lastName, phone } = getDataTr(event);
  fillInputs(id, firstName, lastName, phone);
}

function update(event) {
  const { id, firstName, lastName, phone } = getInputData(event);
  users.updateItem(id, (user) => new User(user.id, firstName, lastName, phone));
  cleanInputs();
  populateTable(users.readItems());
}

function getDataTr(icon) {
  const tr = icon.closest('tr');
  const [id, firstName, lastName, phone] = Array.from(tr.children)
    .slice(0, -1)
    .map((input) => input.innerText);
  return { id, firstName, lastName, phone };
}

function getInputData() {
  const formData = new FormData(document.getElementById('formulario'));
  return {
    id: formData.get('id'),
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    phone: formData.get('phone'),
  };
}

function cleanInputs() {
  document.getElementById('formulario').reset();
}

function fillInputs(id, firstName, lastName, phone) {
  document.querySelector('input[name="id"]').value = id;
  document.querySelector('input[name="firstName"]').value = firstName;
  document.querySelector('input[name="lastName"]').value = lastName;
  document.querySelector('input[name="phone"]').value = phone;
}

function populateTable(users) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  users.forEach((user) => tbody.appendChild(createTr(user)));
}

function createTr(user) {
  const tdHTML = `
    <td>${user.getId()}</td>
    <td>${user.getFirstName()}</td>
    <td>${user.getLastName()}</td>
    <td>${user.getPhone()}</td>
    <td>
      <i class='bi bi-pencil-square' onclick='edit(this)'></i>
      <i class='bi bi-trash3' onclick='destroy(this)'></i>
    </td>
  `;
  const tr = document.createElement('tr');
  tr.innerHTML = tdHTML;
  return tr;
}

function generateId() {
  const caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';
  for (let i = 0; i < 5; i++) {
    resultado += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length),
    );
  }
  return resultado;
}

window.onload = () => {
  populateTable(users.readItems());
};
