// Import the databases
import { customers_db, items_db, orders_db } from '../db/db.js';

// Function to update dashboard counts
function updateDashboardCounts() {
    const customerCount = customers_db.length;
    const orderCount = orders_db.length;
    const itemCount = items_db.length;

    // Update the cards on the homepage
    document.getElementById('total-customers').textContent = customerCount;
    document.getElementById('total-orders').textContent = orderCount;
    document.getElementById('total-items').textContent = itemCount;
}

// Create a custom event to trigger dashboard updates
const dashboardUpdateEvent = new Event('dashboardUpdate');

// Listen for the custom event
document.addEventListener('dashboardUpdate', updateDashboardCounts);

// Initial update when the page loads
document.addEventListener('DOMContentLoaded', updateDashboardCounts);

// Export the event so other modules can trigger updates
export { dashboardUpdateEvent };