// 🛍️ E-Commerce Cart System
// 🛒 Create a shopping cart system that manages products and their quantities.
//
// 1. Implement a class `ShoppingCart<T>` to handle products in a cart.
// 2. Implement a method `addToCart` that adds a product to the cart and updates the quantity if it already exists.
// 3. Implement a method `removeFromCart` that removes a product from the cart completely.
// 4. Implement a method `updateQuantity` that updates the quantity of a product in the cart.
// 5. Implement a method `getProductsOfCategory` that accepts a string and returns an array of items from the cart that match that category.
// 6. Implement a method `getTotalPrice` that returns the total cost of all items in the cart.
var Category;
(function (Category) {
    Category["Fruit"] = "Fruit";
    Category["Vegetable"] = "Vegetable";
    Category["Electronics"] = "Electronics";
    Category["Pastry"] = "Pastry";
    Category["Cereal"] = "Cereal";
})(Category || (Category = {}));
class ShoppingCart {
    cart = [];
    addToCart(product) {
        const item = this.cart.find(item => item.id === product.id);
        if (item) {
            item.quantity += product.quantity;
            return `${product.name} added to cart.`;
        }
        else {
            this.cart.push(product);
            return `${product.name} added to cart.`;
        }
    }
    updateQuantity(id, qty) {
        const item = this.cart.find(item => item.id === id);
        if (item) {
            item.quantity = qty;
            return `Updated quantity of ${item.name} to ${qty}.`;
        }
    }
    getTotalPrice() {
        return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
    getProductsOfCategory(category) {
        return this.cart.filter(item => item.category === category);
    }
    removeFromCart(id) {
        const item = this.cart.find(item => item.id === id);
        if (item) {
            this.cart = this.cart.filter(item => item.id !== id);
            return `${item.name} removed from cart.`;
        }
    }
}
// Test cases
const cart = new ShoppingCart();
console.log(cart.addToCart({ id: 1, name: "Headphones", price: 50, quantity: 1, category: Category.Electronics })); // "Headphones added to cart."
console.log(cart.addToCart({ id: 2, name: "Keyboard", price: 100, quantity: 1, category: Category.Electronics })); // "Keyboard added to cart."
console.log(cart.addToCart({ id: 3, name: "Rice", price: 50, quantity: 1, category: Category.Cereal })); // "Headphones added to cart."
console.log(cart.addToCart({ id: 4, name: "Corn", price: 100, quantity: 1, category: Category.Cereal })); // "Keyboard added to cart."
console.log(cart.updateQuantity(1, 3)); // "Updated quantity of Headphones to 3."
console.log(cart);
console.log(cart.getProductsOfCategory("Electronics")); // Should return all electronics
console.log(cart);
console.log(cart.getTotalPrice()); // Should return the total cost of items
console.log(cart.removeFromCart(2)); // "Keyboard removed from cart."
console.log(cart);
