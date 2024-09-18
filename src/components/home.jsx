import React from 'react'

function home() {
  return (
    <>
    {/*Start Main header part here*/}
    <div className="container-fluid">
      <nav>
        <div className="row" id="navbar">
          <div className="col-md-3">
            <div className="name">HOTELIER</div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12" id="contact">
                <div style={{ padding: 5 }}>
                  <span style={{ color: "#66656F" }}>
                    <i
                      className="fa-solid fa-envelope"
                      style={{ color: "#fea116" }}
                    />
                    ankit0839483@gmail.com
                  </span>
                  <span style={{ color: "#66656F" }}>
                    <i
                      className="fa-solid fa-phone"
                      style={{ color: "#fea116" }}
                    />
                    +91 8394834953
                  </span>
                </div>
                <div className="social-icons">
                  <a target="_blank" href="https://github.com/ankit8394">
                    <i className="fa-brands fa-github" />
                  </a>
                  <span>Get In Touch</span> 
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ankit-5ab596292/"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9" style={{ padding: 0, margin: 0 }}>
                <div className="bbb">
                  <ul className="home">
                    <li>
                      <a href="#main-home">HOME</a>
                      <ul className="sub-home">
                        <li>
                          <a href="">home1</a>
                          <ul className="sub-home-dropdown">
                            <li>
                              <a href="">home1-1</a>
                            </li>
                            <li>
                              <a href="">home1-2</a>
                            </li>
                            <li>
                              <a href="">home1-3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="">home2</a>
                        </li>
                        <li>
                          <a href="">home3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#main-about">ABOUT</a>
                      <ul className="sub-home">
                        <li>
                          <a href="">about1</a>
                        </li>
                        <li>
                          <a href="">about2</a>
                        </li>
                        <li>
                          <a href="">about3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#main-service">SERVICES</a>
                      <ul className="sub-home">
                        <li>
                          <a href="">service1</a>
                        </li>
                        <li>
                          <a href="">service2</a>
                        </li>
                        <li>
                          <a href="">service3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#main-room">ROOMS</a>
                      <ul className="sub-home">
                        <li>
                          <a href="">Economic</a>
                        </li>
                        <li>
                          <a href="">Deluxe</a>
                        </li>
                        <li>
                          <a href="">Super Deluxe</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="">PAGES</a>
                      <ul className="sub-home">
                        <li>
                          <a href="">page1</a>
                        </li>
                        <li>
                          <a href="">page2</a>
                        </li>
                        <li>
                          <a href="">page3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#main-contact">CONTACT</a>
                      <ul className="sub-home">
                        <li>
                          <a href="">ankit0839483@gmail.com</a>
                        </li>
                        <li>
                          <a href="">+91 8394834953</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <button className="btn-nav">
                  PREMIUM VERSION <span className="icon-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
        <div className="row" id="mob-navbar">
          <div className="col-sm-12" id="flex">
            <div className="name-mob">HOTELIER</div>
            <div>
              <button id="menu">
                <i className="fa-solid fa-bars" id="mob-icon-bars" />
              </button>
            </div>
          </div>
        </div>
        </div>
        <div className="row" id="r-mob-dropdown">
          <div className="col-sm-12">
            <div>
              <ul className="ul-mob-menu">
                <li>
                  <a href="" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#main-about">About</a>
                </li>
                <li>
                  <a href="#main-servive">Services</a>
                </li>
                <li>
                  <a href="#main-room">ROOMS</a>
                </li>
                <li>
                  <a href="">PAGES</a>
                </li>
                <li>
                  <a href="#main-contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    {/*End Main header part here*/}
    {/*Start header area(1st-part)*/}
    <div className="container-fluid" id='main-home'>
      <div className="row">
        <div className="col-md-12" style={{ margin: 0, padding: 0 }}>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container" id="slide-one">
                  <div className="layer-blk" />
                </div>
                <div
                  className="carousel-caption d-none d-md-block"
                  id="slide-title"
                >
                  <h5>LUXURY LIVING</h5>
                  <p style={{ fontSize: "50pt" }}>
                    Discover A Brand <br /> Luxurious Hotel
                  </p>
                  <div className="row" id='btn-div'>
                    <div className="col-md-6" id='btn1'>
                      <button className="btn1">OUR ROOMS</button>
                    </div>
                    <div className="col-md-6" id='btn2'>
                      <button className="btn2">BOOK A ROOMS</button>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="carousel-item">
                <div className="container-fluid" id="slide-two">
                  <div className="layer-blk" />
                </div>
                <div
                  className="carousel-caption d-none d-md-block"
                  id="slide-title"
                >
                  <h5>LUXURY LIVING</h5>
                  <p style={{ fontSize: "50pt",}}>
                    Discover A Brand <br /> Luxurious Hotel
                  </p>
                  <div className="row" id='btn-div'>
                    <div className="col-md-6" id='btn1'>
                      <button className="btn1">OUR ROOMS</button>
                    </div>
                    <div className="col-md-6" id='btn2'>
                      <button className="btn2">BOOK A ROOMS</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*End header area(1st-part)*/}
    {/*Start data area(lower header)*/}
    <div className="container-fluid" id="datearea">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-2">
          <div className="input">
            <input type="date" className="select" placeholder="Arrival Date" />
          </div>
        </div>
        <div className="col-md-2">
          <div className="input">
            <input type="date" className="select" placeholder="Arrival Date" />
          </div>
        </div>
        <div className="col-md-2">
          <div className="input">
            <select name="" className="select">
              <option value="">Adult</option>
              <option value="">Adult1</option>
              <option value="">Adult2</option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="input">
            <select name="" className="select">
              <option value="">Adult</option>
              <option value="">Adult1</option>
              <option value="">Adult2</option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="input">
            <button
              className="btn btn-success"
              style={{ width: "100%", borderRadius: 3, height: 38 }}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="col-md-1" />
      </div>
    </div>
    {/*End data area*/}
    {/*Start about area(2nd part)*/}
    <div className="container-fluid" id='main-about' style={{ marginTop: "7%" }}>
      <div className="row px-5 py-4">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12" style={{ marginTop: "15%" }}>
              <h4>ABOUT US</h4>
              <p style={{ fontSize: "25pt" }}>
                <b>Welcome to HOTELIER</b>
              </p>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="conatainer">
                <div className="row">
                  <div className="col-md-4">
                    <div className="space">
                      <i
                        className="fa-solid fa-house"
                        style={{
                          color: "#FEA116",
                          fontSize: "20pt",
                          marginTop: 8
                        }}
                      />
                      <h5>1234</h5>
                      <p>Rooms</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="space">
                      <i
                        className="fa-solid fa-house"
                        style={{
                          color: "#FEA116",
                          fontSize: "20pt",
                          marginTop: 8
                        }}
                      />
                      <h5>1234</h5>
                      <p>Rooms</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="space">
                      <i
                        className="fa-solid fa-house"
                        style={{
                          color: "#FEA116",
                          fontSize: "20pt",
                          marginTop: 8
                        }}
                      />
                      <h5>1234</h5>
                      <p>Rooms</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <button id="exp">Explore More</button>
                  </div>
                  <div className="col-md-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-5">
              <img
                src="assets/about-1 travel.jpg"
                className="img-fluid"
                alt="img here"
                id="img1"
              />
            </div>
            <div className="col-md-7">
              <img
                src="assets/about-2 travel.jpg"
                className="img-fluid"
                alt="img here"
                id="img2"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img
                src="assets/about-3 travel.jpg"
                className="img-fluid"
                alt="img here"
                id="img3"
              />
            </div>
            <div className="col-md-8">
              <img
                src="assets/about-4 travel.jpg"
                className="img-fluid"
                alt="img here"
                id="img4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End about area(2nd part)*/}
    {/* Start explopre room area(3rd part)*/}
    <div className="container-fluid" id='main-room'>
      <div className="row" style={{ marginTop: "10%" }}>
        <div className="col-md-12" style={{ textAlign: "center" }}>
          <p style={{ color: "#FEA116" }}>
            <b>OUR ROOMS</b>
          </p>
          <h1 style={{ fontWeight: 700 }}>
            Explore Our <span style={{ color: "#FEA116" }}>ROOMS</span>
          </h1>
        </div>
      </div>
      <div className="row px-5 py-4" style={{ marginTop: "3%" }}>
        <div className="col-md-4">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="assets/room-1 travel.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <p className="p-card-1">$100/Night</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <h5>
                    <b>Junior Suite</b>
                  </h5>
                </div>
                <div className="col-md-4">
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-3"
                  style={{
                    borderRight: "1px solid #c7cbcfe8",
                    textAlign: "center"
                  }}
                >
                  <i className="fa-solid fa-bed" style={{ color: "#FEA116" }} />{" "}
                  <span>3 Bed</span>
                </div>
                <div
                  className="col-md-3"
                  style={{
                    borderRight: "1px solid #c7cbcfe8",
                    textAlign: "center"
                  }}
                >
                  {" "}
                  <i
                    className="fa-solid fa-bath"
                    style={{ color: "#FEA116" }}
                  />{" "}
                  <span>2 Bath</span>
                </div>
                <div className="col-md-3" style={{ textAlign: "center" }}>
                  {" "}
                  <i
                    className="fa-solid fa-wifi"
                    style={{ color: "#FEA116" }}
                  />{" "}
                  Wifi
                </div>
                <div className="col-md-3" />
              </div>
              <p className="card-text">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
              <div className="row">
                <div className="col-md-5">
                  <button className="btn3">VIEW DETAIL</button>
                </div>
                <div className="col-md-2" />
                <div className="col-md-5">
                  <button className="btn4">BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="assets/room-2 travel.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <p className="p-card-1">$100/Night</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <h5>
                    <b>Executive Suite</b>
                  </h5>
                </div>
                <div className="col-md-4">
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-3"
                  style={{
                    borderRight: "1px solid #c7cbcfe8",
                    textAlign: "center"
                  }}
                >
                  <i className="fa-solid fa-bed" style={{ color: "#FEA116" }} />{" "}
                  <span>3 Bed</span>
                </div>
                <div
                  className="col-md-3"
                  style={{
                    borderRight: "1px solid #c7cbcfe8",
                    textAlign: "center"
                  }}
                >
                  {" "}
                  <i
                    className="fa-solid fa-bath"
                    style={{ color: "#FEA116" }}
                  />{" "}
                  <span>2 Bath</span>
                </div>
                <div className="col-md-3" style={{ textAlign: "center" }}>
                  {" "}
                  <i
                    className="fa-solid fa-wifi"
                    style={{ color: "#FEA116" }}
                  />{" "}
                  Wifi
                </div>
                <div className="col-md-3" />
              </div>
              <p className="card-text">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
              <div className="row">
                <div className="col-md-5">
                  <button className="btn3">VIEW DETAIL</button>
                </div>
                <div className="col-md-2" />
                <div className="col-md-5">
                  <button className="btn4">BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="assets/room-3 travel.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <p className="p-card-1">$100/Night</p>
                </div>
              </div>
              <div className="row" style={{ position: "relative" }}>
                <div className="col-md-8">
                  <h5>
                    <b>Super Deluxe</b>
                  </h5>
                </div>
                <div className="col-md-4">
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                  <i className="fa-solid fa-star" style={{ color: "#FEA116" }} />
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-3"
                  style={{
                    borderRight: "1px solid #c7cbcfe8",
                    textAlign: "center"
                  }}
                >
                  <i className="fa-solid fa-bed" style={{ color: "#FEA116" }} />{" "}
                  <span>3 Bed</span>
                </div>
                <div
                  className="col-md-3"
                  style={{
                    borderRight: "1px solid #c7cbcfe8",
                    textAlign: "center"
                  }}
                >
                  {" "}
                  <i
                    className="fa-solid fa-bath"
                    style={{ color: "#FEA116" }}
                  />{" "}
                  <span>2 Bath</span>
                </div>
                <div className="col-md-3" style={{ textAlign: "center" }}>
                  {" "}
                  <i
                    className="fa-solid fa-wifi"
                    style={{ color: "#FEA116" }}
                  />{" "}
                  Wifi
                </div>
                <div className="col-md-3" />
              </div>
              <p className="card-text">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
              <div className="row">
                <div className="col-md-5">
                  <button className="btn3">VIEW DETAIL</button>
                </div>
                <div className="col-md-2" />
                <div className="col-md-5">
                  <button className="btn4">BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End explopre area(3rd part)*/}
    {/*start advert area(4th part)*/}
    <div className="container-fluid" style={{ marginTop: "3%", marginBottom: "5%" }}>
      <div className="row px-5 py-4">
        <div className="col-md-6">
          <div className="container" style={{ backgroundColor: "#0F172B" }}>
            <div className="row" style={{ marginTop: "9%", marginLeft: "5%" }}>
              <div
                className="col-md-12"
                style={{ marginTop: "7%", color: "#fff" }}
              >
                <h6 style={{ marginTop: "8%" }}> LUXURY LIVING</h6>
                <p style={{ fontSize: "38pt", fontWeight: 600, }}>
                  Discover A Brand <br /> Luxurious Hotel
                </p>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
              </div>
            </div>

            <div className="row"  style={{ paddingBottom: 80 }} id='btn-div'>
                    <div className="col-md-6" id='btn1'>
                      <button className="btn1">OUR ROOMS</button>
                    </div>
                    <div className="col-md-6" id='btn2'>
                      <button className="btn2">BOOK A ROOMS</button>
                    </div>
                  </div>
          </div>
        </div>
        <div
          className="col-md-6"
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}
        >
          <span style={{ fontSize: "80pt" }}>video here</span>
        </div>
      </div>
    </div>
    {/*End advert area(4th part)*/}
    {/*start service area(5th part)*/}
    <div className="container-fluid" id='main-service' style={{ backgroundColor: "#F4F4F4", paddingTop:"40px" }}>
      <div className="row">
        <div
          className="col-md-12"
          style={{ textAlign: "center", marginBottom: 15 }}
        >
          <p style={{ color: "#FEA116" }}>
            <b>OUR SERVICES</b>
          </p>
          <h1 style={{ fontWeight: 700 }}>
            Explore Our <span style={{ color: "#FEA116" }}>SERVICES</span>
          </h1>
        </div>
      </div>
      <div className="row px-5 py-4" style={{ padding: 10 }}>
        <div className="col-md-4">
          <div className="card-grp-6" id="ab">
            {/*when i hover icon it is not working*/}
            <i
              style={{ marginBottom: 25 }}
              id="icon-grp-6"
              className="fa-solid fa-hotel"
            />
            <h6 style={{ marginBottom: 20, fontSize: "16pt" }}>
              Rooms $ Appartment
            </h6>
            <p style={{ fontSize: "14pt", }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              quae magni,
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-grp-6" id="ab">
            <i
              style={{ marginBottom: 25 }}
              id="icon-grp-6"
              className="fa-solid fa-hotel"
            />
            <h6 style={{ marginBottom: 20, fontSize: "16pt" }}>
              Rooms $ Appartment
            </h6>
            <p style={{ fontSize: "14pt",}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              quae magni,
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-grp-6" id="ab">
            <i
              style={{ marginBottom: 25 }}
              id="icon-grp-6"
              className="fa-solid fa-hotel"
            />
            <h6 style={{ marginBottom: 20, fontSize: "16pt" }}>
              Rooms $ Appartment
            </h6>
            <p style={{ fontSize: "14pt",}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              quae magni,
            </p>
          </div>
        </div>
      </div>
      <div className="row px-5 py-4" style={{ padding: 12 }}>
        <div className="col-md-4">
          <div className="card-grp-6" id="ab">
            <i
              style={{ marginBottom: 25 }}
              id="icon-grp-6"
              className="fa-solid fa-hotel"
            />
            <h6 style={{ marginBottom: 20, fontSize: "16pt" }}>
              Rooms $ Appartment
            </h6>
            <p style={{ fontSize: "14pt",}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              quae magni,
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-grp-6" id="ab">
            <i
              style={{ marginBottom: 25 }}
              id="icon-grp-6"
              className="fa-solid fa-hotel"
            />
            <h6 style={{ marginBottom: 20, fontSize: "16pt" }}>
              Rooms $ Appartment
            </h6>
            <p style={{ fontSize: "14pt",}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              quae magni,
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-grp-6" id="ab">
            <i
              style={{ marginBottom: 25 }}
              id="icon-grp-6"
              className="fa-solid fa-hotel"
            />
            <h6 style={{ marginBottom: 20, fontSize: "16pt" }}>
              Rooms $ Appartment
            </h6>
            <p style={{ fontSize: "14pt",}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              quae magni,
            </p>
          </div>
        </div>
      </div>
    </div>
    {/*End service area(5th part)*/}
    {/*Start 2nd carousel area(6th part)*/}
    <div className="container-fluid" id="carousel-2">
      <div className="row px-5 py-4">
        <div className="col-md-1" />
        <div className="col-md-5" id="client-extra" style={{ marginTop: "12%" }}>
          <div className="row">
            <div className="col-md-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                porro iusto dolores illum? Consequatur, cum earum quis itaque
                magnam debitis omnis? Deleniti architecto labore vero consequuntur
                fugit est, incidunt sunt!
              </p>
            </div>
          </div>
          <div className="row px-5 py-4">
            <div className="col-md-2">
              <img className="img-fluid" src="assets/testimonial-2.jpg" alt="" />
            </div>
            <div className="col-md-10">
              <h6>
                <b>Client Name</b>
              </h6>
              <span>Profession</span>
            </div>
          </div>
        </div>
        <div
          className="col-md-5"
          id="client-extra"
          style={{ marginLeft: 10, marginTop: "12%" }}
        >
          <div className="row">
            <div className="col-md-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                porro iusto dolores illum? Consequatur, cum earum quis itaque
                magnam debitis omnis? Deleniti architecto labore vero consequuntur
                fugit est, incidunt sunt!
              </p>
            </div>
          </div>
          <div className="row px-5 py-4">
            <div className="col-md-2">
              <img className="img-fluid" src="assets/testimonial-2.jpg" alt="" />
            </div>
            <div className="col-md-10">
              <h6>
                <b>Client Name</b>
              </h6>
              <span>Profession</span>
            </div>
          </div>
        </div>
        <div className="col-md-1">
          <i
            className="fa-solid fa-arrow-right"
            style={{
              color: "#fff",
              backgroundColor: "#FEA116",
              fontSize: "25pt",
              padding: 10
            }}
          />
        </div>
      </div>
    </div>
    {/*End 2nd carousel area(6th part)*/}
    {/*Start team area here*/}
    <div className="container-fluid">
      <div className="row" style={{ marginTop: "10%" }}>
        <div className="col-md-12" style={{ textAlign: "center" }}>
          <p style={{ color: "#FEA116" }}>
            <b>OUR TEAMS</b>
          </p>
          <h1 style={{ fontWeight: 700 }}>
            Explore Our <span style={{ color: "#FEA116" }}>STAFFS</span>
          </h1>
        </div>
      </div>
      <div className="row px-5 py-5" style={{ marginTop: "5%", marginBottom: "7%" }}>
        <div className="col-md-3">
          <div className="card">
            <img
              src="assets/team-1-travel.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-8" id="icon-div">
                <i className="fa-brands fa-facebook-f" id="f-b" />
                <i className="fa-brands fa-twitter" id="f-b" />
                <i className="fa-brands fa-instagram" id="f-b" />
              </div>
              <div className="col-md-2" />
            </div>
            <div className="card-body">
              <h5 style={{ textAlign: "center" }} className="card-title">
                Card title
              </h5>
              <p style={{ textAlign: "center" }} className="card-text">
                Designaiton
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="assets/team-2-travel.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-8" id="icon-div">
                <i className="fa-brands fa-facebook-f" id="f-b" />
                <i className="fa-brands fa-twitter" id="f-b" />
                <i className="fa-brands fa-instagram" id="f-b" />
              </div>
              <div className="col-md-2" />
            </div>
            <div className="card-body">
              <h5 style={{ textAlign: "center" }} className="card-title">
                Card title
              </h5>
              <p style={{ textAlign: "center" }} className="card-text">
                Designaiton
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="assets/team-3-travel.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-8" id="icon-div">
                <i className="fa-brands fa-facebook-f" id="f-b" />
                <i className="fa-brands fa-twitter" id="f-b" />
                <i className="fa-brands fa-instagram" id="f-b" />
              </div>
              <div className="col-md-2" />
            </div>
            <div className="card-body">
              <h5 style={{ textAlign: "center" }} className="card-title">
                Card title
              </h5>
              <p style={{ textAlign: "center" }} className="card-text">
                Designaiton
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="assets/team-4-travel.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-8" id="icon-div">
                <i className="fa-brands fa-facebook-f" id="f-b" />
                <i className="fa-brands fa-twitter" id="f-b" />
                <i className="fa-brands fa-instagram" id="f-b" />
              </div>
              <div className="col-md-2" />
            </div>
            <div className="card-body">
              <h5 style={{ textAlign: "center" }} className="card-title">
                Card title
              </h5>
              <p style={{ textAlign: "center" }} className="card-text">
                Designaiton
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End team area here*/}
    {/*Start footer area here*/}
    <div
      className="container-fluid"
      id='main-contact'
      style={{
        backgroundColor: "#0F172B",
        marginTop: "10%",
        marginBottom: "7%",
        paddingTop: "10%",
        paddingBottom: 5
      }}
    >
      <div className="row mx-5" id="input-box-sub">
        <div className="col-md-12" id="sub-box">
              <div className="aaa">
                <p>
                  Subscribe Our 
                  <span style={{ color: "#FEA116" }}> NEWSLETTER</span>
                </p>
                <div className="input-group mb-3" id="sss">
                  <input
                    id="input-sub"
                    type="text"
                    placeholder="Enter your email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <button id="btn-8">SUBMIT</button>
                </div>
              </div>
        </div>
      </div>
      <div className="row px-5 py-4">
        <div className="col-md-5">
          <div
            style={{
              backgroundColor: "#FEA116",
              color: "#fff",
              padding: "15px",
              borderRadius: "3px",
              height: "200px",
            }}
          >
            <h2>HOTELIER</h2>
            <p>
              Download{" "}
              <span style={{ color: "#000" }}>Hotelier - Premium Version</span> ,
              build a professional website for your hotel business and grab the
              attention of new visitors upon your site’s launch.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="con-tact">
            <h2 style={{ color: "#D7851F", fontSize: "14pt" }}>CONTACT</h2>
            <p style={{ color: "#fff" }}>
              <i
                className="fa-solid fa-location-dot"
                style={{
                  color: "#fff",
                  fontSize: "16pt",
                  marginRight: 15,
                  backgroundColor: "#0F172B",
                  paddingTop: 15
                }}
              />{" "}
              Rishikesh Uttarakhand (In)
            </p>
            <p style={{ color: "#fff" }}>
              <i
                className="fa-solid fa-phone"
                style={{
                  color: "#fff",
                  fontSize: "16pt",
                  marginRight: 15,
                  backgroundColor: "#0F172B"
                }}
              />
              +91 8394834953
            </p>
            <p style={{ color: "#fff" }}>
              <i
                className="fa-solid fa-envelope"
                style={{
                  color: "#fff",
                  fontSize: "16pt",
                  marginRight: 15,
                  backgroundColor: "#0F172B"
                }}
              />
              ankit0839483@gmail.com
            </p>
            <a
              className="link"
              target="_blank"
              href="https://github.com/ankit8394"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              className="link"
              target="_blank"
              href="https://www.linkedin.com/in/ankit-5ab596292/"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-md-2">
          <div>
            <h2 style={{ color: "#D7851F", fontSize: "14pt" }}>COMPANY</h2>
            <ul className="abc" style={{ paddingTop: 10 }}>
              <li style={{ marginLeft: "-20px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "14pt"
                  }}
                >
                  About Us
                </a>
              </li>
              <li style={{ marginLeft: "-20px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "14pt"
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li style={{ marginLeft: "-20px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "14pt"
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li style={{ marginLeft: "-20px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "14pt"
                  }}
                >
                  Term &amp; condition
                </a>
              </li>
              <li style={{ marginLeft: "-20px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "14pt"
                  }}
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div>
            <h2 style={{ color: "#D7851F", fontSize: "14pt" }}>SERVICES</h2>
            <ul className="abc" style={{ paddingTop: 10 }}>
              <li style={{ marginLeft: "-20px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "14pt"
                  }}
                >
                  Food &amp; Restaurent
                </a>
              </li>
              <li style={{ marginLeft: "-20px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "14pt"
                  }}
                >
                  Spa &amp; Fitness
                </a>
              </li>
              <li style={{ marginLeft: "-20px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "14pt"
                  }}
                >
                  Sports &amp; Gaming
                </a>
              </li>
              <li style={{ marginLeft: "-20px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "14pt"
                  }}
                >
                  Event &amp; Play
                </a>
              </li>
              <li style={{ marginLeft: "-20px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "14pt"
                  }}
                >
                  GYM &amp; Yoga
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr style={{ color: "#5f697f", borderWidth: 2, marginTop: "10%",opacity:"1" }} />
      <div className="row">
        <div className="col-md-6">
          <div>
            <p style={{ color: "#fff" }}>
              ©<u>Your Site Name,</u> All Rights Reserved. Designed By{" "}
              <u>Ankit</u>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className='last'>
          <span>Home</span>
           <span>Help</span>
           <span style={{border:"none"}}>FAQs</span>
          </div>
        </div>
      </div>
    </div>
    {/*End footer area here*/}
  </>
  

  )
}

export default home;
