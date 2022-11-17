import "./App.css";


export default function App() {
  return (
  
  <header id="header" className="header d-flex align-items-center fixed-top">
    {/* <!--======= Header ======= --> */}
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        {/* <!--Uncomment the line below if you also wish to use an image logo --> */}
        <img src="%PUBLIC_URL%/img/logo_blanco.png" alt="logo InstaYa Blanco"/>
        <h1>InstaYa</h1>
      </a>

      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="index.html" className="active">Inicio</a></li>
          <li><a href="about.html">Nosotros</a></li>
          <li><a href="services.html">Servicios</a></li>
          <li><a href="contact.html">Contacto</a></li>
          <li><a href="login.html">Inicia Sesión</a></li>
        </ul>
      </nav>{/* <!--.navbar --> */}

    </div>
  </header>
{/* <!--End Header --> */}

  {/* <!--======= Hero Section ======= --> */}
  <section id="hero" className="hero d-flex align-items-center">
    <div className="container">
      <div className="row gy-4 d-flex justify-content-between">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h2 data-aos="fade-up">Tu compañera de entrega rápida</h2>
          <p data-aos="fade-up" data-aos-delay="100">Para todas tus necesidades de envíos:  paquetes livianos o pesados, envíos con carácter de urgente o sin tanta prisa, envíos locales o nacionales, InstaYa te ofrece soluciones y un servicio en el cual puedes confiar.</p>

          {/* <!--<form action="#" className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
            <input type="text" className="form-control" placeholder="ZIP code or CitY"/> --> */}
            <button type="submit" className="btn btn-primary">Programa la recogida de tu paquete</button>
          {/* <!--</form> --> */}

          <div className="row gy-4" data-aos="fade-up" data-aos-delay="400">

            <div className="col-lg-3 col-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="5436" data-purecounter-duration="1" className="purecounter"></span>
                <p>Clientes</p>
              </div>
            </div>{/* <!--End Stats Item --> */}

            <div className="col-lg-3 col-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                <p>Alianzas</p>
              </div>
            </div>{/* <!--End Stats Item --> */}

            <div className="col-lg-3 col-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="1543" data-purecounter-duration="1" className="purecounter"></span>
                <p>Empleados</p>
              </div>
            </div>{/* <!--End Stats Item --> */}

            <div className="col-lg-3 col-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="15765" data-purecounter-duration="1" className="purecounter"></span>
                <p>Entregas</p>
              </div>
            </div>{/* <!--End Stats Item --> */}

          </div>
        </div>

        <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
          <img src="%PUBLIC_URL%/img/hero-img.svg" className="img-fluid mb-3 mb-lg-0" alt=""/>
        </div>

      </div>
    </div>
  </section>;{/* <!--End Hero Section --> */}

  <main id="main">

    {/* <!--======= Featured Services Section ======= --> */}
    <section id="featured-services" className="featured-services">
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
            <div className="icon flex-shrink-0"><i className="bi bi-envelope-paper-fill"></i></div>
            <div>
              <h4 className="title">Envio de Documentos</h4>
              <p className="description">El courier presta el servicio de entrega de documentos que satisface sus necesidades de envío.</p>
            </div>
          </div>
          {/* <!--End Service Item --> */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="icon flex-shrink-0"><i className="fa-solid fa-truck"></i></div>
            <div>
              <h4 className="title">Envío de Paquetes</h4>
              <p className="description">Recogemos, transportamos y entregamos tu mercancía o paquetes individuales. Con guía independiente para que hagas el seguimiento de su entrega.</p>
            </div>
          </div>{/* <!--End Service Item --> */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="icon flex-shrink-0"><i className="fa-solid fa-truck-ramp-box"></i></div>
            <div>
              <h4 className="title">Soluciones Empresariales</h4>
              <p className="description">Servicios de paquetes estándar nacionales e internacionales. Disponible para clientes comerciales y privados.</p>
            </div>
          </div>{/* <!--End Service Item --> */}

        </div>

      </div>
    </section>{/* <!--End Featured Services Section --> */}

    {/* <!--======= About Us Section ======= --> */}
    <section id="about" className="about pt-0">
      <div className="container" data-aos="fade-up">

        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
            <img src="%PUBLIC_URL%/img/about.jpg" className="img-fluid" alt=""/>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
          </div>
          <div className="col-lg-6 content order-last  order-lg-first">
            <h3>Sobre Nosotros</h3>
            <p>
              Somos un unidos por la pasión por la logística. Y trabajamos en un entorno único. InstaYa tiene la capacidad de innovación de una empresa emergente y las ventajas de una organización con años de experiencia.
            </p>
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <i className="fa-solid fa-truck-pickup"></i>
                <div>
                  <h5>Recogemos tus envíos</h5>
                  <p>Recogemos y Entregamos mercancías y paquetes en más de 1.200 destinos nacionales. </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <i className="fa-solid fa-boxes-packing"></i>
                <div>
                  <h5>Escoge cuando quieres enviar tus paquetes</h5>
                  <p>Solicite a través de este medio la recogida de sus envíos desde su negocio, oficina o casa.</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i className="fa-solid fa-clock"></i>
                <div>
                  <h5>En 24 Horas</h5>
                  <p>Garantizamos tus entregas nacionales en 24 horas o menos.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>{/* <!--End About Us Section --> */}

    {/* <!--======= Call To Action Section ======= --> */}
    <section id="call-to-action" className="call-to-action">
      <div className="container" data-aos="zoom-out">

        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3>Programa el envío de tu paquete</h3>
            <p> Nuestras excelentes relaciones comerciales con las aerolíneas que operan en el territorio nacional, nos permite garantizar los servicios más adecuados en la logística a nuestros clientes</p>
            <a className="cta-btn" href="#">Programar Envío</a>
          </div>
        </div>

      </div>
    </section>{/* <!--End Call To Action Section --> */}

    {/* <!--======= Services Section ======= --> */}
    <section id="service" className="services pt-0">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <span>Nuestros Servicios</span>
          <h2>Nuestros Servicios</h2>

        </div>

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="card">
              <div className="card-img">
                <img src="%PUBLIC_URL%/img/packaging-service.jpg" alt="" className="img-fluid"/>
              </div>
              <h3><a href="service-details.html" className="stretched-link">Embalaje Seguro</a></h3>
              <p>Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaqueofficiis odit</p>
            </div>
          </div>{/* <!--End Card Item --> */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <div className="card-img">
                <img src="%PUBLIC_URL%/img/features-1.jpg" alt="" className="img-fluid"/>
              </div>
              <h3><a href="service-details.html" className="stretched-link">Entrega Segura</a></h3>
              <p>Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae dolor ipsam ducimus occaecati nisi</p>
            </div>
          </div>{/* <!--End Card Item --> */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="card">
              <div className="card-img">
                <img src="%PUBLIC_URL%/img/features-2.jpg" alt="" className="img-fluid"/>
              </div>
              <h3><a href="service-details.html" className="stretched-link">Seguimiento 24/7</a></h3>
              <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
            </div>
          </div>{/* <!--End Card Item --> */}
        </div>

      </div>
    </section>
    {/* <!--End Services Section --> */}


    {/* <!--======= Testimonials Section ======= --> */}
    <section id="testimonials" className="testimonials">
      <div className="container">

        <div className="slides-1 swiper" data-aos="fade-up">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="%PUBLIC_URL%/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Fundador</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Todos mis envíos y logística de entregas se la dejo a InstaYa, me siento tranquilo de que ellos manejen mis entregas.
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>{/* <!--End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="%PUBLIC_URL%/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                <h3>Sara Perez</h3>
                <h4>Dueña de tienda</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Los productos que vendo por internet lo transporto con InstaYa, me han ofrecido calidad, servicio, puntualidad, estoy muy contento con InstaYa.
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>{/* <!--End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="%PUBLIC_URL%/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                <h3>Juana Guerra</h3>
                <h4>Emprendedora</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Con InstaYa encontré para mi negocio, motorizados idóneos para nuestro transporte y logística, me brindan seguridad y confianza.
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>{/* <!--End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="%PUBLIC_URL%/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                <h3>Mateo Rodrígez</h3>
                <h4>Emprendedor</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Con InstaYa puedo estar tranquilo desde que toda la logística de la empresa a nivel nacional está en manos de ellos, seguridad y profesionalismo.
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>{/* <!--End testimonial item --> */}
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
    {/* <!--End Testimonials Section --> */}

  </main>;{/* <!--End #main --> */}





  );
}
