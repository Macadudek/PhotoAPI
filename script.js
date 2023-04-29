
const apiKey = 'fqDMxA646C8rFF53nwfBgeSoMqzC0kwpxWiXGAjZEd66LoqnUoX0G5VO';
const container = document.querySelector('.container')
const photoFeed = document.querySelector('.photo-feed')


const searchValue = document.getElementById('search')
const btn = document.getElementById('btn1')



btn.addEventListener('click', function(e) {
    
    const request = new XMLHttpRequest();   
    

    request.open("GET", `https://api.pexels.com/v1/search?query=${searchValue.value}`, true);
    request.setRequestHeader('Authorization', apiKey)
    request.send();

    
    request.addEventListener('load', function() {
        const data = JSON.parse(this.responseText);
    
        data.photos.forEach(function(photo) {
            const photoDiv = document.createElement('div')
            photoDiv.classList.add('photo-div')
            photoDiv.innerHTML = `
            <img class="photo" src=${photo.src.medium}>
            <div class='photo-description'>
                <h4>Photographer: ${photo.photographer}</h4>
                <a href='${photo.url}'>Photo provided by Pexels</a>
            </div>
            `
            photoFeed.appendChild(photoDiv)
        })
    
    })

})
