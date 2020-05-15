/* function setName() {
    console.log('RODOU NO LOAD', sessionStorage.getItem('summonerName'));
    console.log(document.getElementById('hello').value);
    document.getElementById('hello').innerHTML = sessionStorage.getItem('summonerName');
  } */

  document.getElementById('btn').addEventListener('click', print);
function print () {
  sessionStorage.setItem('summonerName', document.getElementById('start').value);
  var checkSummonerName = sessionStorage.getItem('summonerName');
    if (checkSummonerName == '') {
      alert('Verifique se inseriu seu nome invocador');
    } else {
      window.location.href='index2.html'
      
    }
};