const delivery_agents_URL = "https://bug-free-fiesta-jj9v67jqj7672qr76-6006.app.github.dev/delivery_agents";

fetch(delivery_agents_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch delivery_agents Data");
        return response.json();
}).then(data=>{
    const tbody = document.querySelector("#delivery_agentstable tbody");

    data .forEach(delivery_agents=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${delivery_agents.agent_id}</td>
        <td>${delivery_agents.name}</td>
        <td>${delivery_agents.phone}</td>
        <td>${delivery_agents.vehicle_number}</td>
       
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});

