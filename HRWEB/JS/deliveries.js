const deliveries_URL = "https://bug-free-fiesta-jj9v67jqj7672qr76-6006.app.github.dev/deliveries";

fetch(deliveries_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch deliveries Data");
        return response.json();
}).then(data=>{
    const tbody = document.querySelector("#deliveriestable tbody");

    data .forEach(deliveries=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${deliveries.delivery_id}</td>
        <td>${deliveries.order_id}</td>
        <td>${deliveries.agent_id}</td>
        <td>${deliveries.delivery_status}</td>
        <td>${deliveries.delivery_time}</td>

        
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});

