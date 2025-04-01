let deptHTML = '';

depts.forEach((dept) => {
  deptHTML +=`<div class="dept-img-con hidden">
        <a href="${dept.link}" target='_blank'><img src="${dept.image}" alt="" /></a>
      </div>`;
});

document.querySelector('.dept-container').innerHTML = deptHTML;

