document.querySelector('#app').innerHTML = ``;

let myUrl =
  './asi-AMSR2-s6250-20220820-v5.4.tif';


fetch(myUrl, {
  headers: {
    Range:'bytes=40960-350880',
   },
}); 