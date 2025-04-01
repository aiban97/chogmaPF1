
document.querySelector('.header-container').innerHTML = `
      <div class="sidebar">
        <div class="sidebar-x" onclick="hideSidebar()">
          <a href="#"><i class="bx bx-x x-button"></i></a>
        </div>
        <ul class="nav-links">
          <li>
            <a class="menu-a" href="index.html">
              <i class="bx bxs-home"></i>
              <span class="link-name"> HOME</span>
            </a>
          </li>
          <li>
            <div class="iocn-link">
              <a class="menu-a" href="">
                <i class="bx bxs-info-square"></i>
                <span class="link-name"> ABOUT</span>
              </a>
              <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li class="sub-li"><a href="about.html">About Us</a></li>
              <li class="sub-li"><a href="pastors.html">Our Pastors</a></li>
              <li class="sub-li"><a href="#">Our Evangelists</a></li>
              <li class="sub-li"><a href="#">Statistics</a></li>
            </ul>
          </li>
          <li>
            <div class="iocn-link">
              <a href="#">
                <i class="bx bxs-category"></i>
                <span class="link-name"> DEPARTMENTS</span>
              </a>
              <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li class="sub-li"><a href="pf.html">Pastors' Fellowship</a></li>
              <li class="sub-li"><a href="ba.html">Business Association</a></li>
              <li class="sub-li"><a href="#">Mission Board</a></li>
              <li class="sub-li"><a href="#">Women Department</a></li>
              <li class="sub-li"><a href="#">Youth Department</a></li>
              <li class="sub-li"><a href="#">Evangelism Department</a></li>
              <li class="sub-li">
                <a href="#">Sunday School & Children Department</a>
              </li>
              <li class="sub-li">
                <a href="#">Child Sponsorship Programme</a>
              </li>
              <li class="sub-li"><a href="#">Jingaiei Centre</a></li>
              <li class="sub-li">
                <a href="https://nicholsroybiblecollege.org/" target="_blank"
                  >Nichols-Roy Bible College</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="gallery.html">
              <i class="bx bxs-photo-album"></i>
              <span class="link-name"> GALLERY</span>
            </a>
          </li>
          <li>
            <a href="events.html">
              <i class="bx bxs-calendar"></i>
              <span class="link-name"> EVENTS</span>
            </a>
          </li>
        </ul>
      </div>
      <!--BIG SCREEN-->
      <div class="menu-list">
        <div class="menu-item logo-item">
          <a href="index.html"><img src="img/LOGO2.png" alt="" /></a>
        </div>
        <div class="menu-item hideOnMobile"><a href="index.html">HOME</a></div>
        <div class="dropdown">
          <div class="menu-item hideOnMobile dropbtn">
            <a href="#">ABOUT</a>
          </div>
          <div class="dropdown-content1">
            <a href="about.html">About Us</a>
            <a href="pastors.html">Pastors</a>
            <a href="#">Evangelists</a>
            <a href="#">Statistics</a>
          </div>
        </div>

        <div class="dropdown">
          <div class="menu-item hideOnMobile dropbtn">
            <a href="#">DEPARTMENTS</a>
          </div>
          <div class="dropdown-content2">
            <a href="pf.html">Pastors' Fellowship</a>
            <a href="ba.html">Business Association</a>
            <a href="#">Mission Board</a>
            <a href="#">Women Department</a>
            <a href="#">Youth Department</a>
            <a href="#">Evangelism Department</a>
            <a href="#">Sunday School & Children Department</a>
            <a href="#">Child Sponsorship Programme</a>
            <a href="#">Jingaiei Centre</a>
            <a href="https://nicholsroybiblecollege.org/" target="_blank"
              >Nichols-Roy Bible College</a
            >
          </div>
        </div>

        <div class="menu-item hideOnMobile">
          <a href="gallery.html">GALLERY</a>
        </div>
        <div class="menu-item hideOnMobile">
          <a href="events.html">EVENTS</a>
        </div>
        <div class="menu-item button1" onclick="showSidebar()">
          <a href="#"><i class="bx bx-menu menu-button"></i></a>
        </div>
      </div>`;