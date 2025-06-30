async function teste(){
    const response = await window.api.ping();

    console.log(response);

    
}

teste();

window.addEventListener("DOMContentLoaded", ()=>{
    const button = document.getElementById("button");
    const txt = document.getElementById("text");

    button.addEventListener("click", async ()=>{
        const username = await window.api.getName("Alexandre Pinheiro");
        txt.textContent = username;
    })
})