const orders_URL = "https://bug-free-fiesta-jj9v67jqj7672qr76-6006.app.github.dev/orders";

fetch(orders_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch orders Data");
        return response.json();
}).then(data=>{
    const tbody = document.querySelector("#orderstable tbody");

    data .forEach(orders=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${orders.order_id}</td>
        <td>${orders.customer_id}</td>
        <td>${orders.order_date}</td>
        <td>${orders.status}</td>
        <td>${orders.total_amount}</td>
        
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});

