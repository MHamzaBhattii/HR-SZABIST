const order_items_URL = "https://bug-free-fiesta-jj9v67jqj7672qr76-6006.app.github.dev/order_items";

fetch(order_items_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch order_items Data");
        return response.json();
}).then(data=>{
    const tbody = document.querySelector("#order_itemstable tbody");

    data .forEach(order_items=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${order_items.order_item_id}</td>
        <td>${order_items.order_id}</td>
        <td>${order_items.item_id}</td>
        <td>${order_items.quantity}</td>
        <td>${order_items.price}</td>
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});

