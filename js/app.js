// dont show APi key on your js file
const API_Key = `1142a8d27349cafb46a1440e53c3cb36`



const loadtemperature = city => {
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displaytemperature(data));
}
const displaytemperature = data =>{
    const temperature = document.getElementById('tempature')
    console.log(data.main.temp);
    temperature.innerText = data.main.temp
    setInnerTextById('tempature',data.main.temp)
    setInnerTextById('condition',data.weather[0].main);

    console.log(data.weather[0].main);

}

const setInnerTextById = (id,text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;

}

document.getElementById('btn-search').addEventListener('click',function(){
    const searchField = document.getElementById('search-field')
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText =city;
    loadtemperature(city)

})
loadtemperature('dhaka');