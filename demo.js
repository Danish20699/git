// // // // // console.log("This is a demo file");
// // // // // console.log("this is about git and github");
// // // // // console.log("and i am learning it now");
// // // // // console.log("this is a demo file");


// // // // // Write your code below:
// // // // // const fruitItem = document.getElementsByClassName("fruit");
// // // // // fruitItem[2].style.backgroundColor = 'yellow';

// // // // // for (let i = 0; i < fruitItem.length; i++){
// // // // //     fruitItem[i].style.fontWeight = 'bold';
// // // // // }
// // // // function changeBackground() {
// // // //     // List of possible colors
// // // //     const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "teal"];
  
// // // //     // Get random index
// // // //     const randomIndex = Math.floor(Math.random() * colors.length);
  
// // // //     // Select random color
// // // //     const randomColor = colors[randomIndex];
  
// // // //     // Debug output
// // // //     console.log("Random color picked:", randomColor);
  
// // // //     // Get the box and change background
// // // //     const box = document.getElementById("colorBox");
// // // //     box.style.backgroundColor = randomColor;
// // // //   }
// // // //   function resetBackground(){
// // // //     const box=document.getElementById("colorBox");
// // // //     box.style.backgroundColor="Blue";
// // // //     console.log("Background color reset to white");
// // // //   }
  

// // // // function changeText(){
// // // //     const box=document.getElementById("myBox");
// // // //     box.innerHTML="Text Changed";
// // // //     console.log("Text updated");
// // // // }
// // // // function changeColor(){
// // // //     const box=document.getElementById("myBox");
// // // //     box.style.backgroundColor="tomato";
// // // //     console.log("Text color changed to red");
// // // // }
// // // // function hideBox(){
// // // //     const box=document.getElementById("myBox");
// // // //     box.style.display="none";
// // // //     console.log("Box hidden");
// // // // }
// // // // function showBox(){
// // // //     const box=document.getElementById("myBox");
// // // //     box.style.display="block";
// // // //     console.log("Box shown");
// // // // }

// // // // function resetBox(){
// // // //     const box=document.getElementById("myBox");
// // // //     box.style.backgroundColor="skyblue";
// // // //     box.style.display="block";
// // // //     box.innerHTML="I am a box";
// // // //     console.log("Box reset to default");
// // // // }

// // // function validateForm() {
// // //     const nameInput = document.getElementById("name");
// // //     const emailInput = document.getElementById("email");
// // //     const passwordInput = document.getElementById("password");
// // //     const errorDiv = document.getElementById("errorMessage");
  
// // //     const name = nameInput.value.trim();
// // //     const email = emailInput.value.trim();
// // //     const password = passwordInput.value;
  
// // //     // Reset styles
// // //     nameInput.classList.remove("invalid", "valid");
// // //     emailInput.classList.remove("invalid", "valid");
// // //     passwordInput.classList.remove("invalid", "valid");
// // //     errorDiv.innerText = "";
  
// // //     // Validate name
// // //     if (name === "") {
// // //       nameInput.classList.add("invalid");
// // //       errorDiv.innerText = "Name is required.";
// // //       return false;
// // //     } else {
// // //       nameInput.classList.add("valid");
// // //     }
  
// // //     // Validate email
// // //     if (!email.includes("@")) {
// // //       emailInput.classList.add("invalid");
// // //       errorDiv.innerText = "Email must contain '@'.";
// // //       return false;
// // //     } else {
// // //       emailInput.classList.add("valid");
// // //     }
  
// // //     // Validate password
// // //     if (password.length < 6) {
// // //       passwordInput.classList.add("invalid");
// // //       errorDiv.innerText = "Password must be at least 6 characters.";
// // //       return false;
// // //     } else {
// // //       passwordInput.classList.add("valid");
// // //     }
  
// // //     alert("Form submitted successfully!");
// // //     return true;
// // //   }
  

// // function validateName() {
// //     const nameInput = document.getElementById("name");
// //     const name = nameInput.value.trim();

// //     if (name === "") {
// //       nameInput.classList.add("invalid");
// //       nameInput.classList.remove("valid");
// //     } else {
// //       nameInput.classList.add("valid");
// //       nameInput.classList.remove("invalid");
// //     }
// //   }

// //   function validateEmail() {
// //     const emailInput = document.getElementById("email");
// //     const email = emailInput.value.trim();

// //     if (!email.includes("@")) {
// //       emailInput.classList.add("invalid");
// //       emailInput.classList.remove("valid");
// //     } else {
// //       emailInput.classList.add("valid");
// //       emailInput.classList.remove("invalid");
// //     }
// //   }

// //   function validatePassword() {
// //     const passwordInput = document.getElementById("password");
// //     const password = passwordInput.value;

// //     if (password.length < 6) {
// //       passwordInput.classList.add("invalid");
// //       passwordInput.classList.remove("valid");
// //     } else {
// //       passwordInput.classList.add("valid");
// //       passwordInput.classList.remove("invalid");
// //     }
// //   }

// //   function validateName() {
// //     const nameInput = document.getElementById("name");
// //     const name = nameInput.value.trim();

// //     if (name === "") {
// //       nameInput.classList.add("invalid");
// //       nameInput.classList.remove("valid");
// //     } else {
// //       nameInput.classList.add("valid");
// //       nameInput.classList.remove("invalid");
// //     }
// //   }

// //   function validateEmail() {
// //     const emailInput = document.getElementById("email");
// //     const email = emailInput.value.trim();

// //     if (!email.includes("@")) {
// //       emailInput.classList.add("invalid");
// //       emailInput.classList.remove("valid");
// //     } else {
// //       emailInput.classList.add("valid");
// //       emailInput.classList.remove("invalid");
// //     }
// //   }

// //   function validatePassword() {
// //     const passwordInput = document.getElementById("password");
// //     const password = passwordInput.value;

// //     if (password.length < 6) {
// //       passwordInput.classList.add("invalid");
// //       passwordInput.classList.remove("valid");
// //     } else {
// //       passwordInput.classList.add("valid");
// //       passwordInput.classList.remove("invalid");
// //     }
// //   }

// // function highLightBoxes(){
// //     const boxes=document.getElementsByClassName("box");
// //     for(let i=0;i<boxes.length;i++){
// //         boxes[i].style.backgroundColor="yellow";
// //     }
// // }
// // function labelBoxes() {
// //     const boxes = document.getElementsByClassName("box");
// //     for (let i = 0; i < boxes.length; i++) {
// //       boxes[i].innerText="Box"+(i+1);
// //     }
// //   }

// // function colorBoxes(){
// //     const boxes=document.getElementsByClassName("box");
// //     boxes[0].style.backgroundColor="red";
// //     boxes[boxes.length-1].style.backgroundColor="blue";
// //     boxes[2].style.backgroundColor="orange";
// // }

// // 1. Select the basket heading by ID and set its color to brown
// // 1. Select the basket heading and set its color to brown
// // querySelector is used to select the first element that matches the specified CSS selector(s) in the document.

// const mainHeading = document.querySelector("#main-heading");
// mainHeading.style.textAlign = 'right';

// const basketHeading = document.querySelector('#basket-heading');
// basketHeading.style.color = 'brown';
// basketHeading.style.marginLeft = '30px';

// const fruits = document.querySelector('.fruits');
// fruits.style.backgroundColor = 'grey';
// fruits.style.borderRadius = '5px'; // You repeated this line; keeping one is enough
// fruits.style.padding = '30px';
// fruits.style.margin = '30px';
// fruits.style.width = '50%';
// fruits.style.listStyleType = 'none';

// // querySelectorAll is used to select all elements that match the specified CSS selector(s)

// const fruitItem = document.querySelectorAll('.fruit');

// for (let i = 0; i < fruitItem.length; i++) {
//   fruitItem[1].style.backgroundColor = 'brown'; 
// fruitItem[1].style.color = 'white';
//   fruitItem[i].style.backgroundColor = 'white';
//   fruitItem[3].style.backgroundColor = 'brown'; 
// fruitItem[3].style.color = 'white';
//   fruitItem[i].style.padding = '10px';
//   fruitItem[i].style.margin = '10px';
//   fruitItem[i].style.borderRadius = '5px'; // this line was wrongly using `fruitItem.style` before
// }

// // Select odd fruit items (1st, 3rd...) and give them light grey background
// const oddfruitItems = document.querySelectorAll('.fruit:nth-child(odd)');
// for (let i = 0; i < oddfruitItems.length; i++) {
//   oddfruitItems[i].style.backgroundColor = 'lightgrey';
// }


// //query selector is used to select the first element that matches the specified CSS selector(s) in the document.

// //querySelectorAll is used to select all elements that match the specified CSS selector(s) in the document.


// ///creating Elements
// // const para=document.getElementById('p');

// // //createing Text Node
// // const paraText=document.createTextNode('Total Fruits: 4');

// // ///appendChild is used to add a new child node to an element
// // para.appendChild(paraText);
// // console.log(para);

// // const divs=document.getElementsByClassName('div');
// // const secondDiv=divs[1];
// // //secondDiv.appendChild(para);

// // const fruitsList=document.getElementById('.fruits');
// // const basketHeading=document.getElementById('basket-heading');
// // secondDiv.insertBefore(para,basketHeading);
// // //insertBefore is used to insert a new node before a specified existing node in the document.



// // //setAttribute is used to set the value of an attribute on the specified element
// // //className is used to set or get the value of the class attribute of an element
// // //Id is used to set or get the value of the id attribute of an element
// // para.className="fruitCount";
// // para.setAttribute('title','fruitTotal');
// // para.id="fruitTotal";
// // console.log(para);

// // Add sub-heading inside first div (after h1)
// // Add sub-heading inside first div (after h1)
// const subHeading = document.createElement('h3');
// subHeading.textContent = "Buy high quality organic fruits online";
// subHeading.style.fontStyle = 'italic'; // italic
// const headerDiv = document.querySelector('#header');
// headerDiv.appendChild(subHeading);

// // Create paragraph before the unordered list
// const para = document.createElement('p');
// para.textContent = "Total fruits: 4";
// para.id = "fruits-total"; // set id

// const secondDiv = document.querySelectorAll('div')[1];
// const fruitList = document.querySelector('.fruits');
// secondDiv.insertBefore(para, fruitList);

// // Style the basket heading
// const basketHeading = document.querySelector('#basket-heading');
// basketHeading.style.color = 'brown';
// basketHeading.style.marginLeft = '30px';

// // Style the fruits list container
// const fruits = document.querySelector('.fruits');
// fruits.style.backgroundColor = 'grey';
// fruits.style.borderRadius = '5px';
// fruits.style.padding = '30px';
// fruits.style.margin = '30px';
// fruits.style.width = '50%';
// fruits.style.listStyleType = 'none';

// // Style all fruit items
// const fruitItems = document.querySelectorAll('.fruit');
// fruitItems.forEach((item, index) => {
//   item.style.backgroundColor = 'white';
//   item.style.padding = '10px';
//   item.style.margin = '10px';
//   item.style.borderRadius = '5px';
// });

// // Change background and text color of Apple and Kiwi
// fruitItems[1].style.backgroundColor = 'brown'; // Apple
// fruitItems[1].style.color = 'white';
// fruitItems[3].style.backgroundColor = 'brown'; // Kiwi
// fruitItems[3].style.color = 'white';




//Display → Enables flexbox by setting display: flex on a container.
// Main Axis & Cross Axis →

// The main axis is determined by flex-direction and defines the primary direction of content flow.
// The cross axis is perpendicular to the main axis and controls the secondary alignment.
// Flex Direction → Defines the main axis (row, row-reverse, column, column-reverse).
// Justify Content → Controls alignment along the main axis (flex-start, center, space-between, etc.).
// Align Items → Aligns items along the cross axis (stretch, center, flex-start, etc.).
// Flex Wrap → Defines whether items should wrap to a new line (nowrap, wrap, wrap-reverse).
// Align Self → Adjusts alignment of a single item within the flex container.
// Gap → Defines space between flex items.
// Flex Grow, Shrink & Basis → Controls item size behavior within a flex container.













































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































