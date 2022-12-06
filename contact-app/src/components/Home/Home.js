

import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const Home = () => {
    return(
        <div className='container-fluid home'>
        <section className='container-fluid homeMain'>

    <Carousel variant="dark" className='carouselManagement container-fluid'>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block imgCarousel container-fluid"
          src="./imgs/carousel1.webp"
          alt="First slide"
        />
        <Carousel.Caption className='captions container-fluid'>
          <h3>APP DE CONTROLE DE REFORÇO ESCOLAR REFORÇA+</h3>
          <p>Aqui VOCÊ tem o controle!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block imgCarousel container-fluid "
          src="./imgs/carousel2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='captions container-fluid'>
          <h3>CUSTOMIZÁVEL!</h3>
          <p>Podemos entregar o App da maneira que melhor desejar! Cores, texto, formas, VOCÊ no controle!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block imgCarousel container-fluid"
          src="./imgs/banner.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className='captions container-fluid'>
          <h3>SIMPLES</h3>
          <p>
            Uma solução simples para seu recém aberto negócio de reforço escolar! Sem complicações!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    <section className='container-fluid homeMain2'>
        <h1>CLIQUE NO MENU ACIMA OU NOS LINKS PARA VISUALIZAR O SISTEMA</h1>
        <div className='container-fluid buttons'>
        <Link to="/aluno" className="buttonGo">
          <button className="buttonGo container-fluid ">Secção de Alunos</button>
        </Link><Link to="/professores" className="buttonGo">
          <button className="buttonGo container-fluid">Secção de Professores</button>
        </Link>
        </div>
    </section>
    </div>
    )
}


export default Home;