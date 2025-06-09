const menu_items_URL = "https://bug-free-fiesta-jj9v67jqj7672qr76-6006.app.github.dev/menu_items";

fetch(menu_items_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch menu_items Data");
        return response.json();
}).then(data=>{
    const tbody = document.querySelector("#menu_itemstable tbody");

    data .forEach(menu_items=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${menu_items.item_id}</td>
        <td>${menu_items.restaurant_id}</td>
        <td>${menu_items.category_id}</td>
        <td>${menu_items.item_name}</td>
         <td>${menu_items.description}</td>
          <td>${menu_items.price}</td>
           <td>${menu_items.availability}</td>
       
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});

