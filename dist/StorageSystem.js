// 🔄 Multi-Type Storage System
// 📦 Create a system that can store and manage different types of data.
//
// 1. Implement a class `MyStorage<T, U>` that can store multiple types of data.
// 2. Implement a method `addItem` that stores a new item of a generic type.
// 3. Implement a method `removeItem` that removes an item by value.
// 4. Implement a method `getItems` that returns all stored items.
// 5. Implement a method `findItem` that searches for an item by a given property value.
// 6. Implement a method `updateItem` that updates an item by its property value.
class MyStorage {
    items = [];
    addItem(item) {
        this.items.push(item);
        if (typeof item === 'number') {
            return `${item} added to storage.`;
        }
        else if (typeof item === 'object' && 'name' in item) {
            return `User ${item.name} added.`;
        }
    }
    getItems() {
        return this.items;
    }
    removeItem(id) {
        if (this.items.length > 0 && typeof this.items[0] === 'number') {
            this.items = this.items.filter(item => item !== id);
            return `${id} removed from storage.`;
        }
        else if (this.items.length > 0 && typeof this.items[0] === 'object') {
            const user = this.items.find(item => item.id === id);
            if (user) {
                this.items = this.items.filter(item => item.id !== id);
                return `${user.name} removed form storage.`;
            }
        }
    }
    findItem(prop, val) {
        return this.items.find(item => item[prop] === val);
    }
    updateItem(prop, id, update) {
        const item = this.items.find(item => item[prop] === id);
        if (item) {
            Object.assign(item, update);
            return `${item.name} updated successfully.`;
        }
    }
}
// Test cases
const numberStrStorage = new MyStorage();
console.log(numberStrStorage.addItem(10)); // "10 added to storage."
console.log(numberStrStorage.addItem(20)); // "20 added to storage."
console.log(numberStrStorage.getItems()); // [10, 20]
console.log(numberStrStorage.removeItem(10)); // "10 removed from storage."
console.log(numberStrStorage.getItems()); // [20]
const userStorage = new MyStorage();
console.log(userStorage.addItem({ id: 1, name: "Alice" })); // "User Alice added."
console.log(userStorage.addItem({ id: 2, name: "Bob" })); // "User Bob added."
console.log(userStorage.getItems()); // [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
console.log(userStorage.findItem("name", "Alice")); // { id: 1, name: "Alice" }
// console.log(userStorage.removeItem(1)); // "Alice removed from storage."
console.log(userStorage.updateItem("id", 1, { id: 1, name: "Alice Updated" })); // "Alice updated successfully."
console.log(userStorage.getItems()); // [{ id: 1, name: "Alice Updated" }, { id: 2, name: "Bob" }]
