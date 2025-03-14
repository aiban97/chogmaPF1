let photosHTML = '';

photos.forEach((photo) => {
  photosHTML +=`
    <div class="gallery-img-con">
      <div>
        <img src="${photo.image}" alt="" />
      </div>
      <div class="image-title">${photo.title}</div>
    </div>`;
});

document.querySelector('.gallery-container').innerHTML = photosHTML;