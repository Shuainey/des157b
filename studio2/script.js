(function() {
  'use strict';

  const mood = document.querySelector('left');
  const song = document.querySelector('right');
  const img = document.querySelector('#images');

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
  }

  getData();

})()