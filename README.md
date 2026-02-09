# 📦 Momin Laptop Store Web Application in React

A simple and clean laptop store web application built using **HTML, CSS,
and JavaScript**, featuring a functional **shopping cart** system. Users
can browse laptops, add items to their cart, and view the total price in
real time.

## 🚀 Features

-   🖥️ Laptop product listing
-   🛒 Add to cart functionality
-   💰 Auto-updated total price
-   🎨 Responsive UI with modern styling
-   ⚡ Lightweight, no frameworks required
-   📁 Clean project structure

## 📂 Project Structure

``` plaintext
momin-laptop-store/
├── index.html
├── style.css
└── app.js
```

## 🧩 How It Works

### 1️⃣ Display Products

Products are loaded dynamically from a JavaScript array and added to the
HTML structure.

### 2️⃣ Add to Cart

Clicking **Add to Cart** pushes the selected laptop into the cart array.

### 3️⃣ Update Cart

The cart list and total price update automatically on every addition.

## 💻 Code Snippets

### HTML

``` html
<h1>Momin Laptop Store</h1>
<div id="products" class="product-list"></div>

<h2>Your Cart</h2>
<ul id="cart"></ul>

<h3>Total: Rs <span id="total">0</span></h3>
```

### JavaScript

``` javascript
const products = [
  { id: 1, name: "Dell XPS 13", price: 135000 },
  { id: 2, name: "HP Pavilion 15", price: 85000 },
  { id: 3, name: "Lenovo ThinkPad X1", price: 155000 }
];

let cart = [];
```

### CSS

``` css
body {
  font-family: Arial;
  background: #f8f9fa;
  padding: 20px;
}
```

## 🛠️ Installation & Usage

1.  **Download or clone** the repository:

``` bash
git clone https://github.com/yourusername/momin-laptop-store.git
```

2.  Open `index.html` in any browser.

3.  The store loads instantly --- no setup required.

## 📌 Future Enhancements

-   Search bar
-   Product filters (brand, RAM, price range)
-   Remove item from cart
-   LocalStorage cart persistence
-   More product variations
-   Advanced filtering options

## 🤝 Contributing

Pull requests are welcome!\
Feel free to submit improvements, bug fixes, or new features.

## 📄 License

This project is open-source and free to use.

