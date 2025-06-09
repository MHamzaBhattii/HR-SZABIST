const restaurant_categories_URL = "https://bug-free-fiesta-jj9v67jqj7672qr76-6006.app.github.dev/restaurant_categories";

fetch(restaurant_categories_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch restaurant_categories Data");
        return response.json();
}).then(data=>{
    const tbody = document.querySelector("#restaurant_categoriestable tbody");

    data .forEach(restaurant_categories=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${restaurant_categories.restaurant_id}</td>
        <td>${restaurant_categories.category_id}</td>
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});

