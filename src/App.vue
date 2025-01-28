<template>
  <nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
        <a href="index.html" class="navbar-brand ml-lg-3">
            <h1 class="m-0 display-5" style="font-size:20px"><span class="text-primary">Wilian Ponce </span>Portafolio</h1>
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse px-lg-3" id="navbarCollapse">
            <div class="navbar-nav m-auto py-0">
                <a href="#home" class="nav-item nav-link active">Inicio</a>
                <a href="#about" class="nav-item nav-link">Acerca</a>
                <a href="#qualification" class="nav-item nav-link">Calidad</a>
                <a href="#skill" class="nav-item nav-link">Habilidades</a>
                <a href="#service" class="nav-item nav-link">Servicios</a>
                <a href="#portfolio" class="nav-item nav-link">Portafolio</a>
                <a href="#contact" class="nav-item nav-link">Contacto</a>
            </div>
        </div>
  </nav>
  <div class="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style="min-height: 100vh;">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                  <img class="img-fluid w-100 rounded-circle shadow-sm" src="img/logo.jpg" alt="">
              </div>
              <div class="col-lg-7 text-center text-lg-left">
                  <h1 class="display-3 text-uppercase text-primary mb-2" style="-webkit-text-stroke: 2px #ffffff;">Wilian Ponce</h1>
                  <h1 class="typed-text-output d-inline font-weight-lighter text-white"></h1>
                  <div class="typed-text d-none">Desarrollador Full Stack con experiencia en diseño y optimización de aplicaciones web</div>
                  <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                      <a href="#" @click="downloadPdf" class="btn btn-outline-light mr-5">Descarga mi CV</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="container-fluid py-5" id="about">
      <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center">
              <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Sobre</h1>
              <h1 class="position-absolute text-uppercase text-primary">Sobre mi</h1>
          </div>
          <div class="row align-items-center">
              <div class="col-lg-5 pb-4 pb-lg-0">
                  <img class="img-fluid rounded w-100" src="img/logo.jpg" alt="">
              </div>
              <div class="col-lg-7">
                  <h3 class="mb-4">Desarrollador Full Stack y diseñador de aplicaciones</h3>
                  <p>
                      Desarrollador con más de 8 años de experiencia en PHP, Laravel, Vue.js
                      y Node.js. Experto en la creación de aplicaciones escalables. Apasionado
                      por la optimización de código y el desarrollo de soluciones innovadoras.
                      Busco contribuir al crecimiento de una empresa líder mediante el uso de
                      tecnologías modernas y metodologías ágiles.
                      Me adapto rápidamente a diferentes entornos de trabajo y metodologías,
                      lo que me permite abordar proyectos diversos con flexibilidad. Tengo la
                      capacidad de aprender nuevos lenguajes de programación y tecnologías
                      en corto tiempo, integrándolos eficientemente en mis tareas. Estoy
                      comprometido con el aprendizaje continuo y la mejora constante para
                      aportar soluciones innovadoras a los proyectos en los que participo
                  </p>
                  <div class="row mb-3">
                      <div class="col-sm-6 py-2"><h6>Nombre: <span class="text-secondary">Wilian Daniel Ponce Salinas</span></h6></div>
                      <div class="col-sm-6 py-2"><h6>Nacimiento: <span class="text-secondary">28 de septiembre de 1995</span></h6></div>
                      <div class="col-sm-6 py-2"><h6>Experiencia: <span class="text-secondary">9 Años</span></h6></div>
                      <div class="col-sm-6 py-2"><h6>Celular: <span class="text-secondary">+593 992 681 086</span></h6></div>
                      <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary"><a href="mailto:wilianponce2809@gmail.com" target="_blank">wilianponce2809@gmail.com</a></span></h6></div>
                      <div class="col-sm-6 py-2"><h6>Ubicación: <span class="text-secondary">Quito | Ecuador</span></h6></div>
                      <div class="col-sm-6 py-2"><h6>Freelance: <span class="text-secondary" style="color: green !important; font-weight: bold;">Disponible</span></h6></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="container-fluid py-5" id="qualification">
      <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center">
              <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Calidad</h1>
              <h1 class="position-absolute text-uppercase text-primary">Educación y experiencia</h1>
          </div>
          <div class="row align-items-center">
              <div class="col-lg-6">
                  <h3 class="mb-4">Mi educación</h3>
                  <div class="border-left border-primary pt-2 pl-4 ml-2">
                      <div class="position-relative mb-4">
                          <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                          <h5 class="font-weight-bold mb-1">Bachiller técnico en aplicaciones informáticas</h5>
                          <p class="mb-2"><strong>Benito Juárez</strong> | <small>2008 - 2014</small></p>
                          <p>Bachiller técnico en aplicaciones informáticas</p>
                      </div>
                      <div class="position-relative mb-4">
                          <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                          <h5 class="font-weight-bold mb-1">Cursos online Laravel y vue</h5>
                          <p class="mb-2"><strong>Cursos de programacion en linea de laravel y vue</strong> | <small>2016 - 2017</small></p>
                          <p>Curso de novato, medio y avanzado del manejo de los frameworks de vue y laravel</p>
                      </div>
                      <div class="position-relative mb-4">
                          <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                          <h5 class="font-weight-bold mb-1">Análista de sistemas</h5>
                          <p class="mb-2"><strong>Instituto tecnológico Quito</strong> | <small>2015 - 2018</small></p>
                          <p>Estudios en programación, manejo de servidores y estructuras optimas aplicadas a la informatica web</p>
                      </div>
                      <div class="position-relative mb-4">
                          <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                          <h5 class="font-weight-bold mb-1">Cursos online</h5>
                          <p class="mb-2"><strong>Cursos de programacion en linea</strong> | <small>2017 - 2022</small></p>
                          <p>Manjeo de librerias de js, desarrollo en MERN Stack y cursos variados de desarrollo web</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6">
                  <h3 class="mb-4">Mi experiencia</h3>
                  <div class="border-left border-primary pt-2 pl-4 ml-2">
                      <div class="position-relative mb-4">
                          <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                          <h5 class="font-weight-bold mb-1">Programador full stack | docente</h5>
                          <p class="mb-2"><strong>INSTITUTO TECNOLÓGICO QUITO</strong> | <small>2017 - 2021</small></p>
                          <p>Programador full stack principal en el área de desarrollo del instituto encargado de generar y manejar los proyectos | docente de desarrollo web</p>
                      </div>
                      <div class="position-relative mb-4">
                          <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                          <h5 class="font-weight-bold mb-1">Programador Freelance</h5>
                          <p class="mb-2"><strong>Prisma New</strong> | <small>2020 - 2024</small></p>
                          <p>Programador freelance en diversas áreas con diversos lenguajes y frameworks principalmente con PHP, JAVASCRIPT, siendo laravel el más concurrido con 6 años de experiencia y JavaScript con vue, express y React</p>
                      </div>
                      <div class="position-relative mb-4">
                          <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                          <h5 class="font-weight-bold mb-1">Desarrollador full stack</h5>
                          <p class="mb-2"><strong>Secretaría Técnica Ecuador Crece Sin Desnutrición Infantil</strong> | <small>2023 - 2025</small></p>
                          <p>Programador fullstack en diversas áreas, creando y actualizando sistemas en laravel y vue, manejo de tailwind, javascript y postgreSQL además del manejo, actualización e implementación de los servidores</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="container-fluid py-5" id="skill">
      <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center">
              <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Habilidades</h1>
              <h1 class="position-absolute text-uppercase text-primary">Mis habilidades</h1>
          </div>
          <div class="row align-items-center">
              <div class="col-md-6">
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">HTML</h6>
                          <h6 class="font-weight-bold">95%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">CSS</h6>
                          <h6 class="font-weight-bold">85%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">PHP</h6>
                          <h6 class="font-weight-bold">95%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">Mongo</h6>
                          <h6 class="font-weight-bold">90%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">PostgreSQL</h6>
                          <h6 class="font-weight-bold">85%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">MySql</h6>
                          <h6 class="font-weight-bold">95%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">Python</h6>
                          <h6 class="font-weight-bold">75%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">Javascript</h6>
                          <h6 class="font-weight-bold">90%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">Vue JS</h6>
                          <h6 class="font-weight-bold">95%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">Node JS</h6>
                          <h6 class="font-weight-bold">90%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">Laravel</h6>
                          <h6 class="font-weight-bold">98%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">Angular</h6>
                          <h6 class="font-weight-bold">70%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">React</h6>
                          <h6 class="font-weight-bold">80%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
                  <div class="skill mb-4">
                      <div class="d-flex justify-content-between">
                          <h6 class="font-weight-bold">Web Api</h6>
                          <h6 class="font-weight-bold">95%</h6>
                      </div>
                      <div class="progress">
                          <div class="progress-bar bg-info" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="container-fluid pt-5" id="service">
      <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center">
              <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Servicios</h1>
              <h1 class="position-absolute text-uppercase text-primary">Mis servicios</h1>
          </div>
          <div class="row pb-3">
              <div class="col-lg-4 col-md-6 text-center mb-5">
                  <div class="d-flex align-items-center justify-content-center mb-4">
                      <i class="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3"></i>
                      <h4 class="font-weight-bold m-0">Desarrollo Web Full Stack</h4>
                  </div>
                  <p>Diseño e implementación de aplicaciones web responsivas.</p>
              </div>
              <div class="col-lg-4 col-md-6 text-center mb-5">
                  <div class="d-flex align-items-center justify-content-center mb-4">
                      <i class="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                      <h4 class="font-weight-bold m-0">Aplicaciones Personalizadas</h4>
                  </div>
                  <p>Creación de soluciones a medida según las necesidades del cliente. Especialización en sistemas de inventario, ERPs y firmas electrónicas</p>
              </div>
              <div class="col-lg-4 col-md-6 text-center mb-5">
                  <div class="d-flex align-items-center justify-content-center mb-4">
                      <i class="fab fa-2x fa-android service-icon bg-primary text-white mr-3"></i>
                      <h4 class="font-weight-bold m-0">Diseño y Optimización</h4>
                  </div>
                  <p>Optimización de código y bases de datos para un rendimiento superior. Implementación de sistemas escalables y seguros.</p>
              </div>
              <div class="col-lg-4 col-md-6 text-center mb-5">
                  <div class="d-flex align-items-center justify-content-center mb-4">
                      <i class="fab fa-2x fa-apple service-icon bg-primary text-white mr-3"></i>
                      <h4 class="font-weight-bold m-0">Integración y Consumo de APIs</h4>
                  </div>
                  <p>Creación e integración de APIs RESTful. Uso de Axios, JWT y otras tecnologías para autenticar y consumir servicios externos</p>
              </div>
              <div class="col-lg-4 col-md-6 text-center mb-5">
                  <div class="d-flex align-items-center justify-content-center mb-4">
                      <i class="fa fa-2x fa-search service-icon bg-primary text-white mr-3"></i>
                      <h4 class="font-weight-bold m-0">Automatización de Procesos</h4>
                  </div>
                  <p>Creación de herramientas para automatizar tareas repetitivas. Generación de reportes, gestión de inventarios y control de datos</p>
              </div>
              <div class="col-lg-4 col-md-6 text-center mb-5">
                  <div class="d-flex align-items-center justify-content-center mb-4">
                      <i class="fa fa-2x fa-edit service-icon bg-primary text-white mr-3"></i>
                      <h4 class="font-weight-bold m-0">Soporte y Mantenimiento</h4>
                  </div>
                  <p>Actualización y mejora de aplicaciones existentes. Resolución de errores y optimización de sistemas heredados</p>
              </div>
          </div>
      </div>
  </div>
  <div class="container-fluid pt-5" id="portfolio">
      <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center">
              <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Galería</h1>
              <h1 class="position-absolute text-uppercase text-primary">Mi protafolio</h1>
          </div>
          <div class="row">
              <div class="col-12 text-center mb-2">
                  <ul class="list-inline mb-4" id="portfolio-flters">
                      <li class="btn btn-sm btn-outline-primary m-1 active"  data-filter="*">Todo</li>
                      <li class="btn btn-sm btn-outline-primary m-1" data-filter=".a">Full stack</li>
                      <li class="btn btn-sm btn-outline-primary m-1" data-filter=".b">Arreglos</li>
                      <li class="btn btn-sm btn-outline-primary m-1" data-filter=".c">Actualizacion</li>
                  </ul>
              </div>
          </div>
          <div class="row portfolio-container">
              <div class="col-lg-4 col-md-6 mb-4 portfolio-item" :class ="p.tag" v-for="(p, i) in portafolio" :key="i">
                  <div class="position-relative overflow-hidden mb-2">
                      <img class="img-fluid rounded w-100" :src="'/wilianportafolio/img/folder/' + p.img" alt="p.url">
                        <a :href="p.link" @click.prevent="link(p.link)" class="portfolio-btn bg-primary d-flex align-items-center justify-content-center" style="color: #fff;text-decoration: none;">
                            {{ p.text }}
                        </a>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div class="container-fluid py-5" id="contact">
      <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center">
              <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Contacto</h1>
              <h1 class="position-absolute text-uppercase text-primary">Contactame</h1>
          </div>
          <div class="row justify-content-center">
              <div class="col-lg-8">
                <form name="sentMessage" id="contactForm" @submit="save($event)" novalidate>
                    <div class="form-row">
                        <div class="control-group col-sm-6 mb-3">
                            <input type="text" class="form-control p-4" id="name" placeholder="Nombre" v-model="form.name" required  @input="clearError('name')" />
                            <p v-if="errors.name" class="help-block text-danger" style="font-size: 14px; margin-left: 15px;">{{ errors.name }}</p>
                        </div>
                        <div class="control-group col-sm-6 mb-3">
                            <input type="email" class="form-control p-4" id="email" placeholder="Correo electrónico" v-model="form.email" required @input="clearError('email')" />
                            <p v-if="errors.email" class="help-block text-danger" style="font-size: 14px; margin-left: 15px;">{{ errors.email }}</p>
                        </div>
                    </div>
                    <div class="control-group mb-3">
                        <textarea class="form-control py-3 px-4" rows="5" id="message" placeholder="Mensaje" v-model="form.message" required @input="clearError('message')"></textarea>
                        <p v-if="errors.message" class="help-block text-danger" style="font-size: 14px; margin-left: 15px;">{{ errors.message }}</p>
                    </div>
                    <div>
                        <button class="btn btn-outline-primary" type="submit" id="sendMessageButton">Enviar mensaje</button>
                    </div>
                    <div class="text-center mt-2" style="font-size: 14px;">
                        Para una pronta comunicación escribeme al correo <a href="mailto:wilianponce2809@gmail.com" target="_blank">wilianponce2809@gmail.com</a>
                    </div>
                </form>
              </div>
          </div>
      </div>
  </div>
  <div class="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
      <div class="container text-center py-5">
          <div class="d-flex justify-content-center mb-4">
              <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <p class="m-0">&copy; <a class="text-white font-weight-bold" href="#">Wilian Ponce</a>. Todos los derechos reservaods.</p>
      </div>
  </div>
  <i class="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>
  <a href="#" class="btn btn-outline-dark px-0 back-to-top"><i class="fa fa-angle-double-up"></i></a>
</template>

<script setup>
    import { ref } from 'vue';
    import { useToast } from "vue-toastification";

    const toast = useToast();

    const portafolio = ref ([
        {
            img: 'oresa.png',
            link: 'http://179.49.60.102:8080/oresa2019',
            text: 'Oresa Imagination',
            tag: ['a', 'b']
        },
        {
            img: 'oresa2024.png',
            link: 'http://179.49.60.102',
            text: 'Oresa Imagination nuevo',
            tag: ['a', 'c']
        },
        {
            img: 'deducibilidad.png',
            link: 'https://deducibilidad.infancia.gob.ec',
            text: 'Sistema de deducibilidad',
            tag: ['a', 'c']
        },
        {
            img: 'suusn.png',
            link: 'https://informacion.infancia.gob.ec',
            text: 'Sistema de deducibilidad',
            tag: ['b', 'c']
        },
        {
            img: 'ciro.png',
            link: 'https://ciro.ec',
            text: 'CIRO ERP | sistema contable',
            tag: ['b']
        },
        {
            img: 'zoddak.png',
            link: 'https://zoddak.com',
            text: 'Sistema web, actualización y cambios',
            tag: ['c']
        }
    ]);

    const link = (url) => {
        window.open(url, "_blank");
    }


    const form = ref({
        name: '',
        email: '',
        message: '',
    });

    const errors = ref({
        name: '',
        email: '',
        message: '',
    });

    const clearError = (field) => {
        errors.value[field] = '';
    };

    const validateForm = () => {
        let isValid = true;
        errors.value = {
            name: '',
            email: '',
            message: ''
        };
        if (!form.value.name) {
            errors.value.name = 'Agrega tu nombre';
            isValid = false;
        }
        if (!form.value.email) {
            errors.value.email = 'Debes agregar tu email';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
            errors.value.email = 'Email no válido';
            isValid = false;
        }
        if (!form.value.message) {
            errors.value.message = 'Ingresa un mensaje';
            isValid = false;
        }

        return isValid;
    };

    const save = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // const jsonData = JSON.stringify(form.value);

            // const blob = new Blob([jsonData], { type: "application/json" });

            // const url = URL.createObjectURL(blob);

            // const a = document.createElement("a");
            // a.href = url;
            // a.download = "data.json";
            // document.body.appendChild(a);
            // a.click();
            // document.body.removeChild(a);
            // URL.revokeObjectURL(url);
            toast.success("Mensaje enviado", {timeout: 3000});
            form.value = { name: '', email: '', message: '' };
        }
    };

    const downloadPdf = () =>{
      const pdfUrl = 'https://wilianponce.github.io/wilianportafolio/cv.pdf';
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'archivo.pdf';
      link.click();

      toast.success("Hoja de vida descargada", {timeout: 3000});
    }
</script>