const addresses_URL = "https://bug-free-fiesta-jj9v67jqj7672qr76-6006.app.github.dev/addresses";

fetch(addresses_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch addresses Data");
        return response.json();
}).then(data=>{
    const tbody = document.querySelector("#addressestable tbody");

    data .forEach(addresses=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${addresses.address_id}</td>
        <td>${addresses.customer_id}</td>
        <td>${addresses.street}</td>
        <td>${addresses.city}</td>
        <td>${addresses.zip_code}</td>
        <td>${addresses.label}</td>
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});

