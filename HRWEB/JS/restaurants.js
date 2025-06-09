const restaurants_URL = "https://bug-free-fiesta-jj9v67jqj7672qr76-6006.app.github.dev/restaurants";

fetch(restaurants_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch restaurants Data");
        return response.json();
}).then(data=>{
    const tbody = document.querySelector("#restaurantstable tbody");

    data .forEach(restaurants=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${restaurants.restaurant_id}</td>
        <td>${restaurants.name}</td>
        <td>${restaurants.email}</td>
        <td>${restaurants.phone}</td>
        <td>${restaurants.address}</td>
        
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});

