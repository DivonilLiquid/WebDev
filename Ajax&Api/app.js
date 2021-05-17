/*
When we request api from other sites, 
sometimes we have to give header and other details to
This is managed by postman but if we want to do it in code.
See this: https://icanhazdadjoke.com/api
Then we will do it as follows:
*/
const button = document.getElementById('Button');
const addNewJoke = async() =>{
    const getJoke = await getAPI();
    const newItem = document.createElement('LI');
    newItem.innerText = getJoke;
    const list = document.getElementById('List');
    list.append(newItem);
}
button.addEventListener('click',addNewJoke);
const getAPI = async () =>{
    try{
        const config = {headers:{Accept:'application/json'}};
        const p = await axios.get('https://icanhazdadjoke.com/',config);
        return p.data.joke;
    }catch{
        return "NO JOKES AVAILABLE RIGHT NOW !!"
    }
}



