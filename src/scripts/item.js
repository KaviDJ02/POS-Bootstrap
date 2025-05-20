let items = [];
function addItem(code, name, price, qty) {
    items.push({ code, name, price, qty });
    console.log("Item added:", { code, name, price, qty });
}

function updateItem(code, updatedData) {
    let item = items.find(i => i.code === code);
    if (item) {
        Object.assign(item, updatedData);
        console.log("Item updated:", item);
    } else {
        console.error("Item not found");
    }
}

function deleteItem(code) {
    items = items.filter(i => i.code !== code);
    console.log("Item deleted:", code);
}

function viewItems() {
    console.table(items);
}