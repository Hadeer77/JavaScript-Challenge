let header = document.createElement("header");
header.className = "website-header";

let logo =document.createElement("div");
logo.className = "logo";
logo.textContent = "logo";

let menu = document.createElement("ul");
menu.className = "menu";

for(let i = 1; i <= 3; i++){
    let li= document.createElement("li");
    li.textContent = `link ${i}`;
    menu.appendChild(li);
}

header.appendChild(logo);
header.appendChild(menu);

//create the content and 15 products
let content = document.createElement("div");
content.className = "content";

for(let i = 1; i <= 15; i++){
    let productDiv = document.createElement("div");
    productDiv.className = "product";

    let spanNum = document.createElement("span");
    spanNum.textContent = i;

    productDiv.appendChild(spanNum);
    productDiv.append("product");
    content.appendChild(productDiv);
}

//create footer
let footer = document.createElement("footer");
footer.className = "footer";
footer.textContent = "footer";

//insert them in body
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);


// css style 
document.body.style.cssText = `
margin: 0;
padding: 0;
background-color: #f5f5f5;
font-family: Arial , sans-serif;
box-sizing: border-box;
`;

header.style.cssText = `
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
background-color: #fff;
`;

logo.style.cssText = `
font-weight: bold;
color: #23a96e;
font-size: 22px;
`;

menu.style.cssText = `
display: flex;
list-style: none;
margin: 0;
padding: 0;
gap: 15px;
`;

let liElements = menu.querySelectorAll("li");
liElements.forEach(li => {
    li.style.cssText = `
    color: #777;
    cursor: pointer;
    font-size: 16px;
    `;
});

content.style.cssText =`
display: grid;
grid-template-columns : repeat(3 , 1fr);
gap: 20px;
padding : 20px;
min-height: calc(100vh - 150px);
`;

let products = content.querySelectorAll(".product");
products.forEach((prod)=>{
    prod.style.cssText = `
    background-color: #fff;
    padding: 30px;
    border-radius: 4px;
    text-align:center;
    color: #888;
    font-size: 14px;
    display: flex;
    flex-direction : column;
    align-items: center;
    justify-content: center;
    `;

    let span = prod.querySelector("span");
    span.style.cssText = `
    font-size: 28px;
    font-weight: bold;
    color: #000;
    margin-buttom: 10px;
    display: block;
    `;
});

footer.style.cssText = `
background-color: #23a96e;
color: #fff;
text-align: center;
padding: 15px;
font-size: 16px;
`;