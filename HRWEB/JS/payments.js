const payments_URL = "https://bug-free-fiesta-jj9v67jqj7672qr76-6006.app.github.dev/payments";

fetch(payments_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch payments Data");
        return response.json();
}).then(data=>{
    const tbody = document.querySelector("#paymentstable tbody");

    data .forEach(payments=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${payments.payment_id}</td>
        <td>${payments.order_id}</td>
        <td>${payments.payment_date}</td>
        <td>${payments.amount}</td>
        <td>${payments.payment_method}</td>
        <td>${payments.payment_status}</td>
        
        
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});

