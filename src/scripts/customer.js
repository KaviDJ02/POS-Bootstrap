$(document).ready(function () {
    let customers = [];
    let selectedCustomerIndex = -1;

    // Save customer data
    $('#save').on('click', function () {
        console.log("Save button clicked")
        const customerId = $('#customerId').val();
        const fullName = $('#fullname').val();
        const address = $('#address').val();
        const contact = $('#contact').val();

        if (customerId && fullName && address && contact) {
            const customer = { id: customerId, name: fullName, address: address, contact: contact };

            if (selectedCustomerIndex === -1) {
                customers.push(customer); // Add new customer
            } else {
                customers[selectedCustomerIndex] = customer; // Update existing customer
                selectedCustomerIndex = -1; // Reset selection
            }

            updateCustomerTable();
            clearForm();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Update customer data
    $('#update').on('click', function () {
        const customerId = $('#customerId').val();
        const customer = customers.find((c) => c.id === customerId);

        if (customer) {
            $('#fullname').val(customer.name);
            $('#address').val(customer.address);
            $('#contact').val(customer.contact);
            selectedCustomerIndex = customers.indexOf(customer);
        } else {
            alert('Customer not found.');
        }
    });

    // Delete customer data
    $('#delete').on('click', function () {
        const customerId = $('#customerId').val();
        customers = customers.filter((c) => c.id !== customerId);
        updateCustomerTable();
        clearForm();
    });

    // Clear form
    $('#customer_btn .btn-warning').on('click', function () {
        clearForm();
    });

    // Function to update the customer table
    function updateCustomerTable() {
        const tbody = $('table tbody');
        tbody.empty();

        customers.forEach((customer, index) => {
            const row = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${customer.name}</td>
                    <td>${customer.address}</td>
                    <td>${customer.contact}</td>
                </tr>
            `;
            tbody.append(row);
        });
    }

    // Function to clear the form
    function clearForm() {
        $('#customerId').val('');
        $('#fullname').val('');
        $('#address').val('');
        $('#contact').val('');
        selectedCustomerIndex = -1;
    }
});