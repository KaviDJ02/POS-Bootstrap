
export let customers_db = [
    { id: 'C101', name: 'John Doe', email: 'johndoe@example.com', phone: '0721234567', address: 'Colombo' },
    { id: 'C102', name: 'Jane Smith', email: 'janesmith@example.com', phone: '0759876543', address: 'Kandy' },
    { id: 'C103', name: 'Michael Brown', email: 'michaelb@example.com', phone: '0774567890', address: 'Negombo' },
];

export let items_db = [
    { code: 'I101', name: 'Smartphone', description: 'Latest model smartphone', price: 899.99, quantity: 50 },
    { code: 'I102', name: 'Tablet', description: '10-inch tablet with stylus', price: 499.99, quantity: 25 },
    { code: 'I103', name: 'Headphones', description: 'Noise-cancelling headphones', price: 199.99, quantity: 100 },
    { code: 'I104', name: 'Smartwatch', description: 'Fitness tracking smartwatch', price: 149.99, quantity: 75 },
];

export let orders_db = [];

window.customers_db = customers_db;
window.items_db = items_db;
window.orders_db = orders_db;