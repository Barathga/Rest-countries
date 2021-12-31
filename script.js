//title
let title = document.createElement("h1")
title.setAttribute("id", "title")
title.setAttribute("class", "text-center")
title.innerText = "WEATHER FOR REST OF THE COUNTRIES"
document.body.append(title)

// container
let contain = document.createElement("div")
contain.setAttribute("class", "container")
document.body.append(contain)

//container row
let row_1 = document.createElement("div")
row_1.setAttribute("class", "row")
contain.appendChild(row_1)

//container col
let col_1 = document.createElement("div")
col_1.setAttribute("class","col-sm-6 col-md-4 col-lg-4 col-xl-4 text-center mx-auto my-3")
col_1.setAttribute("id","col")
row_1.appendChild(col_1)


// container1 with column div_1
let div_1 = document.createElement("div")
div_1.setAttribute("class", "card h-100 text-center")
col_1.appendChild(div_1)


// class container2 with column (card) and country
let div1_ch = document.createElement("div")
div1_ch.setAttribute("class", "card-header h5 bg-info")
div1_ch.innerHTML = ("COUNTRY:")
div_1.appendChild(div1_ch)

//dropdown for countries
let select_1 = document.createElement("select")
select_1.setAttribute("id","countries")
select_1.setAttribute("class", "bg-info text-light")
select_1.classList.add('form-select')
div1_ch.appendChild(select_1)


//image flag
let img_1 = document.createElement("img")
img_1.setAttribute("class", "card-img-top")
img_1.setAttribute("id", "imgd")
img_1.setAttribute("src", "")
div_1.appendChild(img_1)


//region
let card = document.createElement("div")
card.setAttribute("class", "card-body")
card.innerText = "Region: "
div_1.appendChild(card)


//region id
let spanr1 = document.createElement("span")
spanr1.setAttribute("id", "region")
card.appendChild(spanr1)


//native
let divdc = document.createElement("div")
divdc.setAttribute("class", "card-text")
divdc.innerText = "Native Name: "
card.appendChild(divdc)


//native id
let spann1 = document.createElement("span")
spann1.setAttribute("id", "native")
divdc.appendChild(spann1)


//population
let divdc1 = document.createElement("div")
divdc1.setAttribute("class", "card-text")
divdc1.innerText = "Population: "
card.appendChild(divdc1)


//population id
let spanp1 = document.createElement("span")
spanp1.setAttribute("id", "population")
divdc1.appendChild(spanp1)


//button_1
let button = document.createElement("button")
button.setAttribute("id", "fun")
button.innerText = ("Weather")
card.appendChild(button)


//button id 
let buttondiv = document.createElement("div")
buttondiv.setAttribute("id", "bton")
card.appendChild(buttondiv)



let countries;
fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => initialize(data))
    .catch(err => console.log("ERROR", err));


function initialize(countriesdata)
 {
    countries = countriesdata
    let options = ""
    for (i = 0; i < countries.length; i++)
    {
        options += "<option value=" + countries[i].cca3 + ">" + countries[i].name.common + "</option>"
    }
    document.getElementById("countries").innerHTML = options;
    
}
function displaycountryinfo(cca3) 
{
    let countrydata = countries.find(country => country.cca3 == cca3)
    document.getElementById("imgd").src = countrydata.flags.png
    document.getElementById("region").innerHTML = countrydata.region
    document.getElementById("native").innerHTML = countrydata.name.official
    document.getElementById("population").innerHTML = countrydata.population
    
    function show()
    {
    let a=countrydata.capital

       fetch("https://api.openweathermap.org/data/2.5/weather?q=" + a + "&appid=8c3ab55551253c311cdea4be5af22d62")
           .then((b) => b.json())
           .then((bdata) => {
               document.getElementById("bton").innerHTML = bdata.weather[0].description
   
   
           })
        } 
        document.getElementById("fun").addEventListener("click",show)


}

document.getElementById("countries").addEventListener("change", function (event) 
{
    displaycountryinfo(event.target.value)
});

