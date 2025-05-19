const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const fruitToAdd = document.getElementById('fruit-to-add');

    const newLi = document.createElement('li');
    newLi.className = 'fruit';

    newLi.innerHTML = fruitToAdd.value + 
        '<button class="delete-btn">x</button>' + 
        '<button class="edit-btn">Edit</button>';

    fruits.appendChild(newLi);
    fruitToAdd.value = '';
});

fruits.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const fruitToDelete = e.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
});

// ✅ Add Edit buttons to existing fruits
const existingFruits = document.querySelectorAll('.fruits li');
existingFruits.forEach(function(li) {
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    li.appendChild(editBtn);
});
