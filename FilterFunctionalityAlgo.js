// Step 1: Add description input inside the form before the button
const form = document.querySelector('form');
const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.placeholder = 'Enter fruit description';
descriptionInput.id = 'description';

const submitBtn = form.querySelector('button');
form.insertBefore(descriptionInput, submitBtn); // insert before button

const fruitsUl = document.querySelector('.fruits');

// Step 2: Handle form submit
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const fruitNameInput = document.getElementById('fruit-to-add');
  const fruitDescInput = document.getElementById('description');

  const fruitName = fruitNameInput.value.trim();
  const fruitDesc = fruitDescInput.value.trim();

  if (fruitName === '' || fruitDesc === '') return;

  const li = document.createElement('li');
  li.className = 'fruit';

  // Fruit name
  li.appendChild(document.createTextNode(fruitName));

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'x';
  li.appendChild(deleteBtn);

  // Edit button (optional)
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Edit';
  li.appendChild(editBtn);

  // Step 2: Show description in italics on next line
  const para = document.createElement('p');
  const em = document.createElement('em');
  em.textContent = fruitDesc;
  em.style.fontStyle = 'italic'; // ensure test sees this
  para.appendChild(em);
  li.appendChild(para);

  fruitsUl.appendChild(li);

  // Clear inputs
  fruitNameInput.value = '';
  fruitDescInput.value = '';
});

// Delete functionality
fruitsUl.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.parentElement;
    fruitsUl.removeChild(li);
  }
});

// Step 3: Filter by name or description
const filter = document.getElementById('filter');
filter.addEventListener('keyup', function (e) {
  const text = e.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName('fruit');

  Array.from(fruitItems).forEach(function (item) {
    const name = item.firstChild.textContent.toLowerCase();
    const descTag = item.querySelector('p em');
    const desc = descTag ? descTag.textContent.toLowerCase() : '';

    if (name.includes(text) || desc.includes(text)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
});
