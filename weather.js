let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
//console.log(data.coord.lon);
//console.log(data.coord.lat);
//console.log(weather[0].description);
//console.log(main.temp_min);
//console.log(main.temp_max);
//console.log(main.humidity);
//console.log(wind.speed);
//console.log(wind.deg);
//console.log(data.name);
let s = document.querySelector('div#result');
let ul = document.createElement('ul');
let ul2 = document.createElement('ul');
let li = document.createElement('li');
let a = document.createElement('li');
let b = document.createElement('li');
let c = document.createElement('li');
let d = document.createElement('li');
let e = document.createElement('li');
let f = document.createElement('li');
let g = document.createElement('li');
let h = document.createElement('li');
let i = document.createElement('li');
li.textContent = "世界の天気(検索結果1件)";
a.textContent = "緯度:"+data.coord.lon;
b.textContent = "経度:"+data.coord.lat;
c.textContent = "天気:"+data.weather[0].description;
d.textContent = "最低気温:"+data.main.temp_min;
e.textContent = "最高気温:"+data.main.temp_max;
f.textContent = "湿度:"+data.main.humidity;
g.textContent = "風速:"+data.wind.speed;
h.textContent = "風向き:"+data.wind.deg;
i.textContent = "都市名:"+data.name;
s.insertAdjacentElement('beforeend',ul2);
ul2.insertAdjacentElement('beforeend',li);
ul2.insertAdjacentElement('beforeend',ul);
ul.insertAdjacentElement('beforeend',a);
ul.insertAdjacentElement('beforeend',b);
ul.insertAdjacentElement('beforeend',c);
ul.insertAdjacentElement('beforeend',d);
ul.insertAdjacentElement('beforeend',e);
ul.insertAdjacentElement('beforeend',f);
ul.insertAdjacentElement('beforeend',g);
ul.insertAdjacentElement('beforeend',h);
ul.insertAdjacentElement('beforeend',i);
let ken = document.querySelector('#kensaku');
ken.addEventListener('click',con);
function con(){
  let nyu = document.querySelector('input[name="ken"]');
  let se = nyu.value;
  console.log(se);
}