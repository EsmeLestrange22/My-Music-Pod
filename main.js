function preload() {
    song1 = loadSound("Olivia Rodrigo - brutal.mp3")
    song2 = loadSound("D.mp3")
    song3 = loadSound("I.mp3")
    song4 = loadSound("L.mp3")
    song5 = loadSound("M.mp3")
    song6 = loadSound("P.mp3")
    song7 = loadSound("S.mp3")
    song8 = loadSound("T.mp3")
}

function setup() {}

function draw() {}



function f1() {
    song8.stop();
    song7.stop();
    song6.stop();
    song5.stop();
    song4.stop();
    song3.stop();
    song2.stop();
    song1.play();
    song1.setVolume(1) //in volume property, 0 is the min and 1 is max
    song1.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min 
    document.getElementById("status").innerHTML= "Brutal by Olivia Rodrigo is playing now"
}

function f2() {
    song8.stop();
    song7.stop();
    song6.stop();
    song5.stop();
    song4.stop();
    song3.stop();
    song1.stop()
    song2.play();
    song2.setVolume(1) //in volume property, 0 is the min and 1 is max
    song2.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min 
    document.getElementById("status").innerHTML= "Don't Blame Me by Taylor Swift is playing now"
}
function f3() {
    song8.stop();
    song7.stop();
    song6.stop();
    song5.stop();
    song4.stop();
    song2.stop();
    song1.stop()
    song3.play();
    song3.setVolume(1) //in volume property, 0 is the min and 1 is max
    song3.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min 
    document.getElementById("status").innerHTML= "Into you by Ariana Grande is playing now"
}
function f4() {
    song8.stop();
    song7.stop();
    song6.stop();
    song5.stop();
    song2.stop();
    song3.stop();
    song1.stop()
    song4.play();
    song4.setVolume(1) //in volume property, 0 is the min and 1 is max
    song4.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min
    document.getElementById("status").innerHTML= "Love Back by Why Don't We playing now" 
}
function f5() {
    song8.stop();
    song7.stop();
    song6.stop();
    song2.stop();
    song4.stop();
    song3.stop();
    song1.stop()
    song5.play();
    song5.setVolume(1) //in volume property, 0 is the min and 1 is max
    song5.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min
    document.getElementById("status").innerHTML= "Monsters by Ruelle is playing now" 
}
function f6() {
    song8.stop();
    song7.stop();
    song2.stop();
    song5.stop();
    song4.stop();
    song3.stop();
    song1.stop()
    song6.play();
    song6.setVolume(1) //in volume property, 0 is the min and 1 is max
    song6.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min 
    document.getElementById("status").innerHTML= "Paper Rings by Taylor Swift is playing now"
}
function f7() {
    song8.stop();
    song2.stop();
    song6.stop();
    song5.stop();
    song4.stop();
    song3.stop();
    song1.stop()
    song7.play();
    song7.setVolume(1) //in volume property, 0 is the min and 1 is max
    song7.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min 
    document.getElementById("status").innerHTML= "See You by Johnny Orlando is playing now"
}
function f8() {
    song2.stop();
    song7.stop();
    song6.stop();
    song5.stop();
    song4.stop();
    song3.stop();
    song1.stop()
    song8.play();
    song8.setVolume(1) //in volume property, 0 is the min and 1 is max
    song8.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min 
    document.getElementById("status").innerHTML= "Talk by Why Don't We is playing now"
}