(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),o=t.n(r),s=t(1),l="696f181c684503377938c61397189cd5",u="https://api.openweathermap.org/data/2.5/";var m=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),m=Object(s.a)(o,2),i=m[0],p=m[1];return c.a.createElement("div",{className:"undefined"!=typeof i.main&&i.main.temp>298.15?"app warm":"app"},c.a.createElement("main",{className:"search-box"},c.a.createElement("input",{type:"text",onChange:function(e){console.log("1"),r(e.target.value)},value:t,className:"search-bar",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(t,"&appid=").concat(l)).then((function(e){return e.json()})).then((function(e){console.log(e),r(""),p(e)}))}}),"undefined"!=typeof i.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},i.name,",",i.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(i.main.temp-273.15),"\xb0c"),c.a.createElement("div",{className:"weather"},i.weather[0].main))):""))};t(9);o.a.render(c.a.createElement(m,null),document.querySelector("#root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.d80e95b2.chunk.js.map