// async await

const getImagenPromesa = () =>
  new Promise( resolve => resolve('https://google.com'));

getImagenPromesa().then(console.log);

const getImagen = async () => {
  try {
    const apiKey = 'YlVXM9Z8CCdQQ7fJbkZ4rMJMxbL8Dpcg';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
}

getImagen();