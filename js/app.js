const container = document.querySelector(".contenedor");
const laptops = [
    {
        name:"Laptop Gamer HP Pavilion 15",
        image:"images/laptop1.jpg"
    },
    {
        name:"Acer Nitro",
        image:"images/laptop2.jpg"
    },
    {
        name:"Laptop HP Omen",
        image:"images/laptop3.jpg"
    },
    {
        name:"Laptop Gamer HP",
        image:"images/laptop4.jpg"
    },
    {
        name:"Laptop Acer Aspire 3",
        image:"images/laptop5.jpg"
    },
    {
        name:"Laptop HP Pavilion",
        image:"images/laptop6.jpg"
    },
    {
        name:"Microsoft Surface Laptop Go",
        image:"images/laptop7.jpg"
    },
    {
        name:"Laptop Acer Aspire 5",
        image:"images/laptop8.jpg"
    },
    {
        name:"Laptop Lenovo V14 ADA",
        image:"images/laptop9.jpg"
    }
];

const showLaptops = () => {
    let output = "";
    laptops.forEach(
        ({ name, image }) =>
        (output += `
            <div class="tarjeta">
                <img class="tarjeta--avatar" src="${image}">
                <h3 class="tarjeta--titulo">${name}</h3>
                <a class="tarjeta--boton" href="#">Agregar</a>
            </div>
        `)
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showLaptops);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function(){
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registrado"))
            .catch(err => console.log("service worker no registrado", err));
    });
}