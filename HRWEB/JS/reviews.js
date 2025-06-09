const reviews_URL = "https://bug-free-fiesta-jj9v67jqj7672qr76-6006.app.github.dev/reviews";

fetch(reviews_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch reviews Data");
        return response.json();
}).then(data=>{
    const tbody = document.querySelector("#reviewstable tbody");

    data .forEach(reviews=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${reviews.review_id}</td>
        <td>${reviews.customer_id}</td>
        <td>${reviews.restaurant_id}</td>
        <td>${reviews.rating}</td>
        <td>${reviews.comment}</td>
        <td>${reviews.review_date}</td>
        
        
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});

