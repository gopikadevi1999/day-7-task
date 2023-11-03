// Question 1

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var countriesInAsia = result.filter((country) => country.region === "Asia");
  console.log(countriesInAsia);
};


//Question 2

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data)
    var res1 = result.filter((x)=>x.population<200000)
    res1.map((ele)=>console.log(ele.population))
}

//Question 3

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data)
    result.forEach((country)=>console.log(`${country.name.common} ${country.capital} ${country.flag}`))
}

//Question 4

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function() {
    var data = request.response;
    var result = JSON.parse(data)
    var res3 = result.reduce((acc,country)=>acc+country.population,0)
    console.log(res3)
}

//question 5

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);

  var countriesUsingUSD = result.filter((country) => {
    return country.currencies && country.currencies.USD;
  });

  countriesUsingUSD.forEach((country) => {
    console.log("Country using US Dollars: " + country.name.common);
  });
};
