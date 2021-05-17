const form = document.getElementById('form');
const block = document.getElementById('Data');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const queryName = form.elements.query.value;
    /*If you don't insert input name = query, then it won't work */
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${queryName}`);
    RemoveBlockElement();
    if(res.data.length === 0){
        const h = document.createElement('h1')
        h.innerText = "No result found";
        block.append(h); 
    }
    else
    addAllImages(res.data);
});
const RemoveBlockElement = () => {
    while(block.firstChild){
        block.removeChild(block.firstChild);
    }
}
/*This funtion print all the shows images in html  */
const addAllImages = (movies)=>{
    /*Fetches the array of result given by above function*/
    for(let movie of movies){
            if(movie.show.image!==null && movie.show.image.medium){
                const image = document.createElement('img');
                image.src = movie.show.image.medium;
                block.append(image);
            }
    }
}