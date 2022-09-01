//By lu2000luk

var fav = "play-fill.svg"

function show(video) {
    //Player V2
    document.write('<head><link rel="icon" href="player.png" type="image/png"/><title>Video Player V2</title></head><body style="background-color: black;"><button style="border: 1px solid green; border-radius: 20px; background-color: gray; padding: 10px;margin: 10px; font-size:large; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;" onclick="location.reload()">Go Back</button>')
    document.write('<br><video src="',video,'" controls loop="true"></video></body>')
}
function playerFav(favicon) {
    var fav = favicon
}
function showV3(video) {
//Player V3
changeFavicon(fav)
document.write('<!DOCTYPE html>')
document.write('<html><head charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>LK Player V3</title><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"><style>body{align-items: center;text-align: center;justify-content: center;background-color:#ffe672;animation-name: color-change-5x;animation-duration: 14.2s;animation-timing-function: linear;animation-delay: 0s;animation-iteration-count: infinite;animation-direction: alternate;animation-fill-mode: none;}@keyframes color-change-5x { 0%{background: #19dcea;} 25%{background: #b22cff;} 50%{background: #ea2222;} 75%{background: #f5be10;} 100%{  background: #3bd80d; }}button{border: 1px solid blue;background-color: gray;margin: 20px;font-size:large;padding: 10px;font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;transition:background-color 0.5s ease 0s,border 0.5s ease 0s;}.buttons{display: inline;}button:hover{background-color:blue;border:1px solid gray;transition:background-color 0.5s ease 0s,border 0.5s ease 0s;}video{height: 500px;width: auto; border: 2px solid black;}</style></head><body><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script><script></script><div class="buttons"><button onclick="location.reload()">Go Back</button></div><br><video id="video" preload="true" src="',video,'" autoplay="true" controls="true" loop="true">Error: Video is not supported on this browser!</video></body></html>')
}

document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}

//Functions:
//showV3("{Video}") For The Player V3
//show("{Video}") For the Player V2
//changeFavicon("{Favicon}") For change the favicon of the page.
//playerFav("{Favicon}") change the icon for the player.

//Tips:
//change the varible fav for not type playerFav
//do not use the Player V2
//if you want edit the code! (For the HTML edit the document.write('{HTML}') function)
//if you want delete the comments (only Tips And Functions) For Make The Site LOading Time Even Faster!

//Plese don't publish this JavaScript Code Wihout Give Me Credits.