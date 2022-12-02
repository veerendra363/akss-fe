import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="" alt="logo" />
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Akanda Seva <br /> Samstan
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mx-2">
                  <a class="nav-link active" aria-current="page" href="#">
                    <i class="bi bi-people-fill"></i>
                   <span> OUR STORY </span>
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link active" aria-current="page" href="#">
                    <i class="bi bi-bullseye"></i>
                   <span> OUR MISSION </span>
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link active" aria-current="page" href="#">
                    <span>OUR TEAM</span>
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link active" aria-current="page" href="#">
                    <span>DONATIONS</span>
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link active" aria-current="page" href="#">
                    <i class="bi bi-telephone-fill"></i>
                    <span>CONTACT</span>
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;