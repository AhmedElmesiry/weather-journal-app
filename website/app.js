

/* Global Variables */
const apiKey="&appid=c2d3881bb535eeb4f27d85e80e242419$units=metric";
const url="https://api.openweathermap.org/data/2.5/weather?zip="





// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

document.getElementById("generate").addEventListener('click', startApp);


function startApp(e){
    const zipCode = document.getElementById("zip").value;
    const feelingsText = document.getElementById("feelings").value;

    generateWeather(url,zipCode,apiKey).then(function(data){
        postData('/dataAdd', {date:newDate, temp:data.list[0].main.temp, content:feelingsText})
        update();
    })

};

const generateWeather = async (url,zip,key)=>{
    const res = await fetch(url+zip+key)
    try{
        const data = await res.json();
        return data
    }
    catch (error){
        console.log("error")
    }

}

const postData =async (url="" , data ={})=>{
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'content-type': 'application/json',

        },
        body: json.stringify(data)
    });

    try{
        const newData = await res.json();
        console.log(newData);
        return newData
    } catch(error){
        console.log("error",error);
    }
}

//Function to update user interface
const updateUI = async () => {

    const request = await fetch('/all');
    try {
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.content;
    
    } catch (error) {
    console.log("error", error);
    }
    }