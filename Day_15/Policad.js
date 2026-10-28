const POLICAD_QUESTION_DATA = {
  "products": [
    {
      "id": 26,
      "title": "Green Chili Pepper",
      "price": 0.99
    },
    {
      "id": 27,
      "title": "Honey Jar",
      "price": 6.99
    },
    {
      "id": 28,
      "title": "Ice Cream",
      "price": 5.49
    },
    {
      "id": 29,
      "title": "Juice",
      "price": 3.99
    },
    {
      "id": 30,
      "title": "Kiwi",
      "price": 2.49
    },
    {
      "id": 31,
      "title": "Lemon",
      "price": 0.79
    },
    {
      "id": 32,
      "title": "Milk",
      "price": 3.49
    },
    {
      "id": 33,
      "title": "Mulberry",
      "price": 4.99
    },
    {
      "id": 34,
      "title": "Nescafe Coffee",
      "price": 7.99
    },
    {
      "id": 35,
      "title": "Potatoes",
      "price": 2.29
    }
  ],
  "total": 194,
  "skip": 25,
  "limit": 10
};

const data = POLICAD_QUESTION_DATA;

const items = data.products;
// Write your code below
let sum = 0;
let i = 0;
// const n = items.length;
let k = items.length;
let mx = 0;
let my = items.title
while (i<k) {
  console.log(`${items[i]["title"]} : ${Math.round(items[i]["price"]*100)}`);
  sum = sum + items[i]["price"]*100;
  if (mx<items[i].price){
    mx = items[i].price;
    my = items[i].title
    // console.log(`Max Price: ${mx * 100}`);
  };
  i++;
};
// console.log(`Total Price: ${Math.round(sum)}`);
console.log(`Max Price: ${mx * 100} and Item: ${my} `);
console.log(`Total Price: ${sum}`);





