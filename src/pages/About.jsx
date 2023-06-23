import { PageHero } from "../components"
import styled from "styled-components"
import tableImg from "../assets/table-furniture.jpg"
const About = () => {
  return (
    <main>
      <PageHero title="About" />
      <Wrapper>
        <div className="section about-page">
          <img className="table-img" src={tableImg} alt="nice table" />
          <div className="about-content">
            <h1 className="about-title">Our Story</h1>
            <div className="underline"></div>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex harum
              qui similique. Dolore inventore vero et perferendis ex distinctio
              sunt ipsum quae non. Voluptatum ipsum dolorem optio harum
              perspiciatis. Tenetur voluptatibus magnam aperiam error,
              laudantium quos facere quaerat sequi beatae nihil molestiae omnis
              maiores quo neque incidunt fugiat eligendi ratione, ad, culpa
              tempore nostrum illo dignissimos autem iure. Quaerat, inventore.
            </p>
          </div>
        </div>
      </Wrapper>
    </main>
  )
}
export default About

const Wrapper = styled.section`
  min-height: calc(100vh - 20rem);

  .about-page {
    padding: 3em 1em;
    display: grid;
    gap: 2em;
  }

  @media (min-width: 700px) {
    .about-page {
      grid-template-columns: 1fr 1fr;
    }
  }

  .table-img {
    border-radius: 5px;
    max-height: 450px;
    object-fit: cover;
  }
  .about-title {
    margin-bottom: 0.5em;
  }
  .underline {
    height: 5px;
    background-color: var(--clr-slight-dark-grunge);
    max-width: 90px;
  }
`
