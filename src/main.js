const API_KEY = import.meta.env.VITE_NASA_API_KEY;
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
.then(response => response.json())
.then(data => {
  console.log(data);;
  let media;
  if(data.media_type === "image")
  {
    media = `<img src="${data.url}">`
  }
  else if(data.url.includes("youtube"))
  {
    media = `<iframe src="${data.url}">`
  }
  else
  {
    media = `<video src="${data.url}">`
  }

  document.querySelector('#app').innerHTML = `
    <div>
    <h1>${data.title}</h1>
    ${media}
    <p>${data.explanation}</p>
    </div>
  `})
  .catch(err => 
    console.log(err)
);