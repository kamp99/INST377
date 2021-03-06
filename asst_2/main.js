const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i = 1; i <= 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic', + i + '.jpeg');
    thumbBar.appendChild(newImage);

    newImage.onclick = function(e){
    displayedImage.src = e.target.src;  
    }
}
/* Wiring up the Darken/Lighten button */

btn.onclick = function(){
    const btnClass = btn.getAttribute('.thumb-bar');
    if(btnClass === 'dark'){

        btn.setAttribute('.thumb-bar', 'light');
        btn.textcontent = 'Lighten';
        overlay.getElementsByClassName.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else{
        btn.setAttribute('.thumb-bar', 'dark');
        btn.textContent = 'Darken';
        overlay.getElementsByClassName.backgroundColor = 'rgba(0,0,0,0)';
    }
}