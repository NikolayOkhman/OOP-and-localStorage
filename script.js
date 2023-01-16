// מטלה 1

let users = {
   user: [
      {
         name: "Eli",
         lastName: "Cohen",
         color: "lightgray",
      },
      {
         name: "Sapir",
         lastName: "Klein",
         color: "lightblue",
      },
      {
         name: "David",
         lastName: "Levi",
         color: "lightyellow",
      },
   ],
};

localStorage.setItem("usersStorage", JSON.stringify(users.user));

class Render {
   usersArray;
   constructor() {
      let a = localStorage.getItem("usersStorage");
      let b = JSON.parse(a);
      this.usersArray = b;
   }
   printHtml() {
      this.usersArray.forEach((user) => {
         let newDiv = document.createElement("div");
         let newText = document.createTextNode(user.name + " " + user.lastName);
         newDiv.appendChild(newText);
         document.body.appendChild(newDiv);
         newDiv.setAttribute("id", user.name);
         document.getElementById(user.name).style.backgroundColor = user.color;
         document.getElementById(user.name).style.fontSize = "45px";
         document.getElementById(user.name).style.fontFamily = "arial";
         document.getElementById(user.name).style.fontWeight = "700";
         document.getElementById(user.name).style.padding = "10px";
         document.getElementById(user.name).style.textAlign = "center";
      });
   }
}
let newUser = new Render();
newUser.printHtml();

// מטלה 2

class Product {
   nameOfProduct;
   price;
   expirationDate;
   constructor(nameOfProductInput, priceInput, expirationDateInput) {
      this.price = priceInput;
      this.nameOfProduct = nameOfProductInput;
      this.expirationDate = expirationDateInput;
   }
}

class Shop {
   products;
   constructor() {
      this.products = [];
      this.regenerationToObject();
   }
   addProduct(product) {
      this.products.push(product);
      this.addToLocalStorage();
   }
   addToLocalStorage() {
      localStorage.setItem(
         "newStorageForProducts",
         JSON.stringify(this.products)
      );
   }
   regenerationToObject() {
      if (!localStorage.getItem("newStorageForProducts")) {
         this.addToLocalStorage();
      }
   }
}
let tommato = new Product("tommato", 4.5, "18.01.2023");
let potato = new Product("potato", 3.5, "20.01.2023");
let onion = new Product("onion", 5, "28.01.2023");
let apple = new Product("apple", 8.5, "28.02.2023");
let newShop = new Shop();
newShop.addProduct(tommato);
newShop.addProduct(potato);
newShop.addProduct(onion);
newShop.addProduct(apple);
