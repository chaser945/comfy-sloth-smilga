import styled from "styled-components"
import { formatPrice } from "../utils/helpers"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

const GridProducts = ({ filteredProducts }) => {
  console.log(filteredProducts)
  return (
    <Wrapper>
      <div className="grid-products">
        {filteredProducts.map((product) => {
          const { image, name, price, id } = product
          return (
            <Link to={`/products/${id}`} key={id}>
              <article className="grid-article">
                <div className="grid-content">
                  <p className="grid-title">{name}</p>
                  <p className="grid-price">{formatPrice(price)}</p>
                </div>
                <div className="img-wrapper">
                  <img className="grid-img" alt={name} src={image} />
                  <div className="img-overlay">
                    <FaSearch className="search-icon" />
                  </div>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </Wrapper>
  )
}
export default GridProducts

const Wrapper = styled.div`
  .grid-products {
    padding: 2em 1em;
    display: grid;
    gap: 1em;
  }

  .grid-article {
    display: flex;
    flex-direction: column;
    transition: var(--transition);
  }

  .grid-article:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .img-wrapper {
    order: -1;
    position: relative;
  }
  .grid-img {
    height: 200px;
    object-fit: cover;
  }

  .img-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    transition: var(--transition);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-overlay:hover {
    opacity: 1;
  }

  .search-icon {
    color: white;
    font-size: 1.5rem;
  }

  .grid-content {
    display: flex;
    justify-content: space-between;
  }

  .grid-title {
    text-transform: capitalize;
    color: var(--clr-dark-gray);
    letter-spacing: 1px;
  }

  .grid-price {
    color: var(--clr-dark-grunge);
    letter-spacing: 1px;
  }

  @media (min-width: 900px) {
    .grid-products {
      grid-template-columns: 1fr 1fr;
      gap: 2em;
    }
    .grid-title,
    .grid-price {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 1100px) {
    .grid-products {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
