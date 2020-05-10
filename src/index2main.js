function setName() {
    console.log('RODOU NO LOAD', sessionStorage.getItem('summonerName'));
    console.log(document.getElementById('hello').value);
    document.getElementById('hello').innerHTML = sessionStorage.getItem('summonerName');
  }