const customers_URL = "https://bug-free-fiesta-jj9v67jqj7672qr76-6006.app.github.dev/customers";

fetch(customers_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch customers Data");
        return response.json();
}).then(data=>{
    const tbody = document.querySelector("#customerstable tbody");

    data .forEach(customers=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${customers.customer_id}</td>
        <td>${customers.name}</td>
        <td>${customers.email}</td>
        <td>${customers.phone}</td>
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});

