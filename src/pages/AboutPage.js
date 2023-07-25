import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about-4.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail, AiFillSkype } from "react-icons/ai";

const AboutPage = () => {
  return (
    <main>
      <PageHero title='About' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>Our Story</h2>
            <div className='underline'></div>
          </div>
          <p>
            The Dune Eco Village aims at delivering superlative amenities and
            services, while our guests are immersed in pure and authentic,
            true-to-the-land experiences that are inspired by the past. From
            native architecture to locally inspired activities, to interaction
            with the enthic communities, to regional cuisine, the entire Evolve
            Back Experience is inspired by the local, delivered in luxury and
            designed to enrich your life.The company is driven by ethics and
            values as much as its innovative vision.
          </p>
          <p className='icon'>
            <BsFillTelephoneFill />
            <b> Contact :</b>
            <span> +94 779214491</span>
          </p>
          <p className='icon'>
            <AiFillMail />
            <b>Email : </b>
            <span> booking@dunevillagegroup.com</span>
          </p>
          <p className='icon'>
            <AiFillSkype />
            <b>Skype : </b>
            <span> dunevillagegroup</span>
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  .icon {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 20px;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);

    svg {
      margin-right: 5px;
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
