// const product = [
//     {
//     title: "Duster",
//     price: "Rs. 200",
//     rating: 4.5,
// },     
// {
//     title: "Marker",
//     price: "Rs. 70",
//     rating: 4.1,
// },    
// {
//     title: "HDMI Connector",
//     price: "Rs. 900",
//     rating: 4.0,
// }]

// // STEP 1: Create a new element.
// const newCard = document.createElement("div");


// // STEP 2: Set the required content
// newCard.className = "card";
// newCard.innerHTML = `
//             <div class="product-info">
//                 <h4>${product[0].title}</h4>
//                 <p>Price: ${product[0].price}</p>
//                 <p>Rating: ${product[0].rating}⭐️ </p>
//                 <h4>${product[1].title}</h4>
//                 <p>Price: ${product[1].price}</p>
//                 <p>Rating: ${product[1].rating}⭐️ 
//                 </p><h4>${product[2].title}</h4>
//                 <p>Price: ${product[2].price}</p>
//                 <p>Rating: ${product[2].rating}⭐️ </p>`;


// // STEP 3: Attach it to DOM Tree

// //  Part 1: Find the parent element
// const parent = document.getElementById("root");

// //  Part 2: push the newly create element inside the parent
// //append(X), ** appendChild, prepend (X), insertBefore (X), .......
// parent.appendChild(newCard);


const products = [
    {
    title: "Duster",
    price: "Rs. 200",
    rating: 4.5,
},     
{
    title: "Marker",
    price: "Rs. 70",
    rating: 4.1,
},    
{
    title: "HDMI Connector",
    price: "Rs. 900",
    rating: 4.0,
}];

const newText1 = document.createElement("p");
newText1.className = "card";
newText1.innerText = `${products[0].title} is available for ${products[0].price}`;
console.log(newText1);

const newText2 = document.createElement("p");
newText2.className = "card";
newText2.innerText = `${products[1].title} is available for ${products[1].price}`;
console.log(newText2);


const newText3 = document.createElement("p");
newText3.className = "card";
newText3.innerText = `${products[2].title} is available for ${products[2].price}`;
console.log(newText3);

const parent = document.getElementById("root");
parent.appendChild(newText1);
parent.appendChild(newText2);
parent.appendChild(newText3);



