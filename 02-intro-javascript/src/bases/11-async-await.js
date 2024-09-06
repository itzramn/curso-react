const getImagen = async () => {
  try {
    const apiKey = "wqob7sxwOgN7HTTP9mNT414bqNOo4E1P";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const {data} = await resp.json();
    const {url} = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getImagen();
