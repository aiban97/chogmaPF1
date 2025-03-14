let deptHTML = '';

depts.forEach((dept) => {
  deptHTML +=`<div class="dept-img-con">
        <a href="${dept.link}"><img src="${dept.image}" alt="" /></a>
      </div>`;
});

document.querySelector('.dept-container').innerHTML = deptHTML;