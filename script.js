// Question 1

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data)
    var res = result.filter((country)=>country.region === "Asia")
    var final = res.filter((ele)=>console.log(ele.name.common))
}

//Question 2

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result1 = JSON.parse(data)
    var res1 = result1.filter((x)=>x.population<200000)
    var final1 = res1.map((ele)=>console.log(ele.population))
}

//Question 3

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result2 = JSON.parse(data)
    var res2 = result2.forEach((country)=>console.log(`${country.name.common} ${country.capital} ${country.flag}`))
}

//Question 4

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result3 = JSON.parse(data)
    var res3 = result3.reduce((acc,country)=>acc+country.population,0)
    console.log(res3)
}

//question 5

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result4 = JSON.parse(data)
  var res4 = result4.filter((country)=>console.log(country.currencies))
}