// function declaration
// function greet(userName) {
//     console.log(`Hello, ${userName}!`);
// }

// // invocation / run
// greet("Ajay");
// greet("Anuj");
// greet();
// greet();
// console.log("STARTING THE FUNCTION");
// function printPrice(item, itemPriceinUsd) {
//     console.log(`START`);
//     const itemPriceinInr = itemPriceinUsd * 100;
//     console.log(`${item}:${itemPriceinInr}`);
//     console.log("END");
// }
// printPrice("Kiwi",2.49);
// printPrice("Honey",6.99);
// console.log("ENDING THE FUNCTION");

// function add(a, b) {
//     console.log(a + b);
//     return a + b;
// }
// let result = add(2, 3);
// console.log(result);
// console.log(add(10, 20) * 2);

// function check() {
// 	return "done";
//     console.log("Will this print?");
// }
// console.log(check());

function greet(name="Paras", city="Gurugram") {
    console.log(`${name} lives in ${city}`);
}
greet();
greet("Ajay");
greet(undefined, "Pune");
greet("Ajay", "Jaipur");