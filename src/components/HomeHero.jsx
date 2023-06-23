import styled from "styled-components"
import greenSofa from "../assets/green-sofa.jpg"
import coffeeTable from "../assets/coffee-table.jpg"
import { Link } from "react-router-dom"
const HomeHero = () => {
  return (
    <Wrapper>
      <div className="home-hero section">
        <div className="content">
          <h1 className="title">
            Design Your <br />
            Comfort Zone
          </h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            possimus nesciunt autem asperiores consequuntur libero rerum maiores
            saepe vel fugit consequatur, odit laboriosam totam alias,
            accusantium soluta iste aut debitis. Quaerat dolorem ratione sunt
            provident, repellat accusamus hic facere ea?
          </p>
          <Link to="/products">
            <button className="btn shop-btn">Shop Now</button>
          </Link>
        </div>
        <div className="img-wrapper">
          <img className="green-sofa" src={greenSofa} alt="nice table" />
          <img className="coffee-table" src={coffeeTable} alt="nice table" />
        </div>
      </div>
    </Wrapper>
  )
}
export default HomeHero

const Wrapper = styled.section`
  .home-hero {
    padding: 0 1em;
  }

  .title {
    font-size: 2.5rem;
    margin-bottom: 0.2em;
  }

  .text {
    margin-bottom: 2em;
  }

  .shop-btn {
    text-transform: uppercase;
    margin-bottom: 2em;
  }

  .img-wrapper {
    display: none;
    position: relative;
  }

  .green-sofa {
    max-width: 450px;
    max-height: 500px;
    object-fit: cover;
  }

  .coffee-table {
    position: absolute;
    max-width: 200px;
    max-height: 150px;
    object-fit: cover;
    bottom: 0;
    left: -70px;
  }

  .coffee-table,
  .green-sofa {
    border-radius: 5px;
  }

  @media (min-width: 800px) {
    .home-hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2em;
      margin-top: 3em;
      margin-bottom: 3em;
    }
    .img-wrapper {
      display: block;
    }

    .text {
      line-height: 1.8;
      font-size: 1rem;
    }

    .shop-btn {
      padding: 1em 2em;
      letter-spacing: 2px;
    }
  }
`
