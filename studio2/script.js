(function() {
  'use strict';

  const mood = document.querySelector('left');
  const song = document.querySelector('right');
  var imageSelect = document.getElementById("#picker");
  var image = document.getElementById("#images");


  async function getData(){
    const mySongs = await fetch('data/songs.json');
    const data = await mySongs.json();
    console.log(data);
    let globalData = data;
    document.querySelector('#picker').innerHTML = createSelectList(data);
    document.querySelector('#picker').addEventListener('change', function(){
      const newValue = this.value;
      updateInterface(newValue, globalData);
  });
  }

  function createSelectList(data){
    let html = '<option>---</option>';
    const dataPoints = Object.keys(data);
    dataPoints.forEach( function(eachPoint){
        html += `<option value="${eachPoint}">${data[eachPoint].setting}</option>`;
    } );
    return html;
  }

  function updateInterface(value, jsonData){
    let html = '<h1>Song: </h1>';
    html += '<p>'
    html += `${jsonData[value].song}`;
    html += '</p>';
    document.querySelector('.right').innerHTML = html;

    let html2 = '<h1>Mood: </h1>';
    html2 += '<p>'
    html2 += `${jsonData[value].mood}`;
    html2 += '</p>';
    document.querySelector('.left').innerHTML = html2;

    document.getElementById("songImg").src = `media/song${jsonData[value].num}.jpeg`;
    console.log(`image${jsonData[value].number}.jpeg`);

    const elementsR = document.getElementsByClassName("right");
    const elementsL = document.getElementsByClassName("left");
    
    switch(jsonData[value].num) {
      case 1:
        document.body.style.backgroundColor = "#117d98";
        for (let i = 0; i < elementsR.length; i++) {
          elementsR[i].style.color = "#FFFFFF";
          elementsL[i].style.color = "#FFFFFF";
          elementsR[i].style.borderColor = "#FFFFFF";
          elementsL[i].style.borderColor = "#FFFFFF";
        }
        break;
      case 2:
        document.body.style.backgroundColor = "#e4e4d9";
        for (let i = 0; i < elementsR.length; i++) {
          elementsR[i].style.color = "#281a09";
          elementsL[i].style.color = "#281a09";
          elementsR[i].style.borderColor = "#281a09";
          elementsL[i].style.borderColor = "#281a09";
        }
        break;
      case 3:
        document.body.style.backgroundColor = "#e1e1e3";
        for (let i = 0; i < elementsR.length; i++) {
          elementsR[i].style.color = "#40221a";
          elementsL[i].style.color = "#40221a";
          elementsR[i].style.borderColor = "#40221a";
          elementsL[i].style.borderColor = "#40221a";
        }
        break;
      case 4:
        document.body.style.backgroundColor = "#ececea";
        for (let i = 0; i < elementsR.length; i++) {
          elementsR[i].style.color = "#182224";
          elementsL[i].style.color = "#182224";
          elementsR[i].style.borderColor = "#182224";
          elementsL[i].style.borderColor = "#182224";
        }
        break;
      case 5:
        document.body.style.backgroundColor = "#fe7960";
        for (let i = 0; i < elementsR.length; i++) {
          elementsR[i].style.color = "#40210a";
          elementsL[i].style.color = "#40210a";
          elementsR[i].style.borderColor = "#40210a";
          elementsL[i].style.borderColor = "#40210a";
        }
        break;
      case 6:
        document.body.style.backgroundColor = "#c3b39d";
        for (let i = 0; i < elementsR.length; i++) {
          elementsR[i].style.color = "#37342c";
          elementsL[i].style.color = "#37342c";
          elementsR[i].style.borderColor = "#37342c";
          elementsL[i].style.borderColor = "#37342c";
        }
        break;
      case 7:
        document.body.style.backgroundColor = "#c50a3e";
        for (let i = 0; i < elementsR.length; i++) {
          elementsR[i].style.color = "#e9ba10";
          elementsL[i].style.color = "#e9ba10";
          elementsR[i].style.borderColor = "#e9ba10";
          elementsL[i].style.borderColor = "#e9ba10";
        }
        break;
      case 8:
        document.body.style.backgroundColor = "#ffffff";
        for (let i = 0; i < elementsR.length; i++) {
          elementsR[i].style.color = "#272516";
          elementsL[i].style.color = "#272516";
          elementsR[i].style.borderColor = "#272516";
          elementsL[i].style.borderColor = "#272516";
        }
        break;
    }
  }

  getData();

})()