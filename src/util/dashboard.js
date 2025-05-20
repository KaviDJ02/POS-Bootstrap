// Import the databases
import { customers_db, items_db, orders_db } from '../db/db.js';

document.addEventListener('DOMContentLoaded', () => {
    // Count the number of rows
    const customerCount = customers_db.length;
    const orderCount = orders_db.length;
    const itemCount = items_db.length;

    // Update the cards on the homepage
    document.getElementById('total-customers').textContent = customerCount;
    document.getElementById('total-orders').textContent = orderCount;
    document.getElementById('total-items').textContent = itemCount;
});
