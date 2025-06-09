const food_categories_URL = "https://bug-free-fiesta-jj9v67jqj7672qr76-6006.app.github.dev/food_categories";

fetch(food_categories_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch food_categories Data");
        return response.json();
}).then(data=>{
    const tbody = document.querySelector("#food_categoriestable tbody");

    data .forEach(food_categories=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${food_categories.category_id}</td>
        <td>${food_categories.category_name}</td>
        
       
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});

