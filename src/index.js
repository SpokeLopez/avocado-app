/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = 'https://platzi-avo.vercel.app/api/avo';
const baseUrl = 'https://platzi-avo.vercel.app';
const app = document.querySelector('#app');

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
    return newPrice;
}

// web api
// Conectarnos al server

window
    .fetch(url)
    // Procesamos la respuesta y la convertimos en JSON
    .then((respuesta) => respuesta.json())
    // JSON -> Data -> Renderizar la info en el browser
    .then(data => {
        // Almacenamos todos los items
        const items = [];
        data.data.forEach(element => {
            app.className = 'mt-10 grid grid-cols-2 gap2';
            //console.log(element.name);
            const image = document.createElement('img');
            image.src = `${baseUrl}${element.image}`;

            const title = document.createElement('h3');
            title.textContent = element.name;
            title.className = 'text-gray-900 font-bold text-2x';
            
            const price = document.createElement('div');
            price.textContent = formatPrice(element.price);
            price.className = 'text-gray-700 font-bold text-xl';
            
            const container = document.createElement('div');
            container.className = 'w-2/3 p-4 avocado-container'
            // Con append podemos almacenar varios valores
            container.append(image, title, price);
            items.push(container);
        });
        app.append(...items);
    })