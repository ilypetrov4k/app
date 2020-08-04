//  var number = 3.7;
// var myNumber = 3;
//  console.log(myNumber);
//  var myString = 'facts'; // "121 string"
//  var myBoolean = true; // false
//  var myNull = null;
//  var string = "Hello";
// // Number
// var result = 5+5;
// alert();
//  console.log(number + 43);
//  console.log(555 - 43);
//  console.log(number * 43);
//  console.log(number * 43);
//  console.log(number / 43);
//  myNumber = myNumber + 45; // myNumber += 10;
//  console.log(myNumber);
//  myNumber++; // --
//  console.log(myNumber);
//  console.log(Math.round(12.343444)); //Math.round округление
// console.log(Math.ceil(12.343444)); // Math.ceil округление в большую сторону
// console.log(Math.floor(12.6768)); // Math.floor округление в меньшую сторону
// var newNumber = 2.445;
// console.log(newNumber.toFixed(1)); //toFixed чтобы сделать 1 знак после запятой

// // string
//  console.log(myNumber + '55'); // конкотенация
//  console.log(myString + ' string');
//  console.log(string.toLowerCase()); // нижний регистр
//  console.log(string.toUpperCase());// верхний регистр

//  // Masive - Массивы
// var names = ["Alex", "Nikki", "Ivan", "David"]; // 0, 1, 2, 3,
//  console.log(names[0].toUpperCase());
//  names[0] = "BoBa";	// Присвоение в перременную
//  console.log(names[0]);
//  names.push("Света"); // Добавление к массиву команда .Push  
//  console.log(names[4]);
//  console.log(names); // Просмотр всего массива

// // Условия
//  if (10 <= 5) { // или меньше пяти или ровно <= 
//  	console.log("sdfsd");
//  }
//  if (5 == 5) { // Равество ==
//  	console.log("sdfsd");
//  }
//  if (5 === 5) { //Строгое Равество ===
//  	console.log("sdfsd");
//  }
//  if ("Вася" != "Петя") { // Неравно !=
//  	console.log("sdfsd");
//  }
//  if ("Вася" !== "Петя" || myNumber > 30) { // Строгое Неравно !== &&--И 
//  	console.log("sdfsd"); // || - это или
//  }
//  else {
//  	console.log("привет");
//  }
//  if (myNumber > 30) {
// 	console.log("Number more");
//  } else {
//  	console.log("Number litle");
//  }

// // ЦИКЛЫ
//  for (var i = 0; i < 10; i ++) { // код будет выполнятся до того времени, пока не будет ложь.
//  	if (i == 5) {
//  		continue; // остонавливает нумерацию break
//  	} // континью продолжает операцию 5 пропуститься
//  	console.log(i);
//  }
// for (var j = 0; j < names.length; j++) {
//  	console.log(names[j]);
//  }
//  var i = 0;
//  while ( i < 10) {

//  	console.log(i);
//  	i++;
//  }

// // ФУНКЦИИ

//  function sum(x, y) {
//  	return x + y;
//  }
//  console.log(sum(10, 59));
//  console.log(sum(109, 759));

// //Object

// var myObject = {
//  	name: "Bася",
//  	surname: "Bасин",
//  	age: 25,
//  	getFullName: function() {
//  		return this.name + " " + this.surname;
//  	}

//  };
//  myObject.name = "Петя";
// console.log(myObject.name);
// console.log(myObject.getFullName());
//"use strict"; //новый режим (код)


// let number = 5;
// 	const leftBorderWidht = 1;
// 	number = number + 6;
// 	console.log(number);
// 	const obj = {
// 		a: 50
// 	};
// 	obj.a = 10;
// 	console.log(obj);
// 	var name = 'Ivan';
// 	name = 'Alex';
// 	{
// 		let result = 10
// 	// console.log(result);
	