import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-1.jpg";
import heroBcg2 from "../assets/heroBcg2.jpg";

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Welcome to <br /> Dune Village & Spa
        </h1>
        <p>
          The Dune is not just a hotel, but a way of life. We have created and
          built this Eco Village in a way that really emphases on wellbeing,
          organic living, nature, purity of the mind, body and soul.
          Furthermore, Dune Eco Village and Spa is an oasis of peace, a Lost
          Paradise where time slows down in this incredibly fast-paced world.
        </p>
        <Link to='/villa' className='btn hero-btn'>
          Book Now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='nice desk' className='main-img' />
        <img src={heroBcg2} alt='desk' className='accent-img' />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
