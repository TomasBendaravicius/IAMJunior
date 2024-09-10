
// let obj = {name:"John", age:30}
// console.log(obj);
// console.log(obj.name, obj.age)
// // alert ('hello')




// let sunsAmzius =  16; 
// if (sunsAmzius <= 10) {
//     console.log ('mano suo yra jaunas');
//     } else if (sunsAmzius < 14) {
//         console.log ('mano suo yra senas');
//     } else {
//         console.log ('super senas suo')
//     }


// let suo = 100;
// if (100 === suo); {
// console.log ('Taip')
// }



// let number = 10;
// let number2 = 15;
// let number3 = 20;
// if (number3 > number2) {
//     console.log ('The value is between 10 and 20');
// } else {
//     console.log ('The value is not in range');
// }


// if (number3 * 5 > number) {
//     console.log ("The value is between 10 and 20");
// } else {
//     console.log ('The value is not in range');

// }


//ciklai------------------------------------------

// const products = ["Laptop", "Smartphone", "Tablet", "Smartwatch"];
// for (let i = 0; i < products.length; i++ ) {
//     console.log (products[i]);
// }


// const users = [
//     { name: 'Alice', email: 'alice@examle.com' },
//     { name: 'Bob', email: 'bob@examle.com' },
//     { name: 'Charlie', email: 'charlie@example.com'},
// ];

// const emailAddresses = [];

// for (let i = 0; i < users.length; i++) {
//     emailAddresses.push(users[i].email);
// }
// console.log(emailAddresses);

//DOM-----------------------------------

// const elementById = document.getElementById ('example');

// console.log(elementById);


// const elementsByTagName = document.getElementsByTagName ('p');

// console.log(elementsByTagName);

//innerhtml--------------------------------------


// const contentDiv = document.getElementById('content');
// contentDiv.innerHTML = '<span>New Content</span>';

  // Changing innerText and textContent
  // const textDiv = document.getElementById('text-content');
  // textDiv.innerText = 'New Text using innerText';
  // textDiv.textContent = 'New Text using textContent';

  //ciklas-------------------------------------

//   const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

//   for(let i = 0; i < fruits.length; i++) {
// console.log(fruits[i])
//   }




// const numbers = [1, 3, 7, 8, 2, 10, 4, 5, 6, 9];
// let bendraSuma = 0;
// for(let i = 0; i < numbers.length; i++ ) {
// if(numbers[i] > 5) {
//   bendraSuma = bendraSuma + numbers[i];
// }
// }
// console.log(bendraSuma);


//EventHandling--------------------------------------------

//  Adding an event listener---------

//  const button = document.getElementById('click-me');
//  button.addEventListener('click', function() {
//      const message = document.getElementById('message');
//      message.textContent = 'Button was clicked!';
//      console.log('ivykis')
//  });


 //arba taip galima rasyti 1. "EventListeners" pridėjimas

// const button = document.getElementById('click-me');
// const message = document.getElementById('message');

// button.addEventListener('click', () =>  {
//   message.textContent = "Mygtukas pasispaude sekmingai"
//   console.log('ivykis')
// } )

//Removing an event listener  2. "EventListeners" pašalinimas------


// const button = document.getElementById('click-me');
// const buttonRemove = document.getElementById('remove')
// const message = document.getElementById('message');

// const funkcija = () => {
//   message.textContent = "Mygtukas pasispaude sekmingai"
//   console.log('ivykis')
// }
// const removeFunkcija = () => {
//   button.removeEventListener('click', funkcija);
//   message.textContent = '';
// }


// button.addEventListener('click', funkcija  );
// buttonRemove.addEventListener('click', removeFunkcija);

//dblclick mygtuko paspaudimas------------------

// const button = document.getElementById('click-me');
// button.addEventListener('dblclick', () => {
//   console.log('hi');
// } )

// const button = document.getElementById('click-me');

// button.addEventListener('mouseover', () => {
//   console.log('hi');
// } )

// button.addEventListener('keydown', (event) => {
//   if(event.code === "Space"){
//     console.log(event)
//   }
// })



// window.addEventListener('resize', (event) => {
//   console.log(event); 
// });



// document.addEventListener('visibilitychange', (event) => {
//   console.log("labas"); 
// });


// const button = document.getElementById('click-me');

// button.addEventListener("dblclick", () => {
//       console.log('hi')  
// })


//arba taip galime parasyti

// button.onclick =  () => {
//   console.log('hi');
// };


//Funkcijos-----------------------------------------------------------

// const button = document.getElementById('click-me');

// const funkcija = () => {
//   button.textContent = ''
// }

// button.addEventListener('click'funkcija)


// const funkcija2 = () => {
//   return ''
// }
// button.textContent = funkcija2 ();


// const funkcija = (kintamasis) => {
//   return 'Labas ' + kintamasis;
// }
// console.log(funkcija('Dominykai'));


// const sudetis = (kintamasis, kintamasis2) => {
//   return kintamasis + kintamasis2;
// }
// console.log(sudetis(1, 2));
// console.log(sudetis(5, 2));
// console.log(sudetis(2, 2));


// (function() {
//   console.log ('This function runs immediatly');
// })()

//Aukstesnio lygio funkcijos CALLBACK----NEVEIKIA!!!!!!!!!!!-----------

// const funkcija = (sudetis) => {
//   return sudetis();
//   }

//  const sudetis = () => {
//   return 2 + 2;
//  }
//  console.log(funkcija(sudetis));



 //--------------------------------
 


//  const add = (x, y) => {
//   return x + y;
//  }

//  const operate = (operation, x, y) => {
//   return operation(x, y);
//  }
//  console.log(operate(add, 2, 3))


//veikiantis pvz!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//  function add(x, y) {
//   return x + y;
// }
// function operate(operation, x, y) {
//   return operation(x, y);
// }
// console.log(operate(add, 2, 3));


// const input = document.getElementById('labas');

// input.addEventListener('input', (event) => {
//   console.log(event.target.value)
// } )


// CHECKBOX-----------------------------------------------

// const checkbox = document.getElementById('checkboxas');
// checkbox.addEventListener('change', () => {
//   console.log(checkbox);
//   console.log(checkbox.checked);
// })

// RAdio mygtukai ---------------------------------

// const radios = document.getElementsByName('radio');

// console.log(radios);

// radios.forEach(radio => {
//   radio.addEventListener('change', () => {
//     if (radio.checked) {
//       console.log(radio.value);
//     }
//   });
// });