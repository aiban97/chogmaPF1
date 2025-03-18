let pastorsHTML = '';

pastors.forEach((pastor) => {
  pastorsHTML +=`
      <div class="pastor-card">
        <img src="${pastor.image}" alt="" />
        <div class="pastor-desc">
          <p class="name">${pastor.name}</p>
          <p class="desc">${pastor.desc1}</p>
          <p class="desc">${pastor.desc2}</p>
          <p class="desc">${pastor.desc3}</p>
        </div>
      </div>`;
});

document.querySelector('.pastors-container').innerHTML = pastorsHTML;