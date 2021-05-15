const data = `{"ticker":{"base":"BTC","target":"USD","price":"49266.20996261","volume":"41490.13037974","change":"345.46893250"},"timestamp":1621082342,"success":true,"error":""}`;
const parsedData = JSON.parse(data);
/* {ticker: {…}, timestamp: 1621082342, success: true, error: ""} */
/*
JSON.parse("....value") -> converts api format into javascript compatible file
JSON.stringfy("....value") -> converts javascript format into api compatible file
JSON.stringfy("....value") is used when we have to send info to api, we can't send 
js object as an api, we have to convert it first
*/
const dog ={breed: 'lab',color: 'black',isAlive: true,owner: undefined}
const stringfyData = JSON.stringify(dog);
/*"{"breed":"lab","color":"black","isAlive":true}"*/



/*  XML request */
const newData = new XMLHttpRequest();
newData.onload = function(){
    console.log("Found!")
    console.log(this.response);
}
newData.onerror = function(){
    console.log("Error")
    console.log(this);
}
newData.open('GET',"https://api.cryptonator.com/api/ticker/btc-usd");
newData.send();
/* {ticker: {…}, timestamp: 1621082342, success: true, error: ""} */


/*Fetch keyword */
fetch("https://api.cryptonator.com/api/ticker/btc-usd")
.then( v =>{
    console.log("Success",v);
    /*No data found here :{ */
    /*Solution is v.json() */
    console.log("Respones, waiting to get all data ......")
    return v.json();
})
.then(data=>{
    console.log("Got all Data which is ",data);
})
.catch(e=>{
    console.log("Error",e);
})

const newData = async () =>{
    try{
        const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
        console.log("Waiting.....");
        const data = await res.json();
        console.log(data);
    }
    catch{
        console.log("Ohhhh nooo!");
    }
    
}
newData();
/* Not that good, so we will use axios now :-} */

axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
.then(e =>{
    console.log(e.data.ticker);
})
.catch(f => {
    console.log("Shit!!");
})