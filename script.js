var myBox = document.getElementById('me');
var workBox = document.getElementById('work');
var socialBox = document.getElementById('social');
var artBox = document.getElementById('other');

myBox.onclick = function() {
    myBox.style.backgroundImage = "url('./res/sound.gif')";
    myBox.style.backgroundSize = "500px";
    myBox.style.backgroundBlendMode = "normal";
    myBox.innerHTML = '';
    setTimeout(() => {  
        location.href = "https://www.pinterest.it/pin/753297475157238074/"; 
        myBox.style.backgroundImage = "url('./res/pfp.webp')";
        myBox.style.backgroundSize = "auto 400px";
        myBox.style.backgroundBlendMode = "darken";
        myBox.innerHTML = '<p class="description">Vive ut ViVAs ViVi</br>- Who Am i -</p>';
    }, 2000);
}

workBox.onclick = function() {
    workBox.innerHTML = '';
    workBox.style.backgroundImage = "url('./res/github.png')";
    workBox.style.backgroundSize = "500px";
    workBox.style.backgroundBlendMode = "normal";
    setTimeout(() => {  
        location.href = "http://github.com/Stedamb"; 
        workBox.style.backgroundImage = "url('./res/coding.gif')";
        workBox.style.backgroundSize = "auto 400px";
        workBox.style.backgroundBlendMode = "darken";
        workBox.innerHTML = '<p class="description">eX Nihilo Nihil fit</br>- Work -</p>';
    }, 1000);
}

socialBox.onclick = function() {
    socialBox.innerHTML = '';
    socialBox.style.backgroundImage = "url('./res/insta.png')";
    socialBox.style.backgroundSize = "500px";
    socialBox.style.backgroundBlendMode = "normal";
    setTimeout(() => {  
        location.href = "https://www.instagram.com/ste_dambrosio/";
        socialBox.style.backgroundImage = "url('./res/giphy.gif')";
        socialBox.style.backgroundSize = "auto 400px";
        socialBox.style.backgroundBlendMode = "darken";
        socialBox.innerHTML = '<p class="description text-center">VulgAre Amici nomen sed rara est fides</br>- sociAl -</p>';
    }, 1000);

}

artBox.onclick = function() {
    artBox.innerHTML = '';
    artBox.style.backgroundImage = "url('./res/pinterest.jpg')";
    artBox.style.backgroundSize = "500px";
    artBox.style.backgroundBlendMode = "normal";
    setTimeout(() => {  
        location.href = "https://www.pinterest.it/stefanodambrosio/";
        artBox.style.backgroundImage = "url('./res/pinterest.jpg')";
        artBox.style.backgroundSize = "auto 400px";
        artBox.style.backgroundBlendMode = "normal";
        artBox.innerHTML = '<p class="description">Artes serViunt VitAe sApentiA imperAt</br>- Art -</p>';
    }, 1000);
}
