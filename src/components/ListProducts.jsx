import styled from "styled-components"
import { formatPrice } from "../utils/helpers"
import { Link } from "react-router-dom"
import { useProductsContext } from "../context/productsContext"
import { useEffect } from "react"
import { Auth0Context } from "@auth0/auth0-react"

const ListProducts = ({ filteredProducts }) => {
  // console.log(filteredProducts)
  const { restorationRef, markerItem, setMarkerItem } = useProductsContext()

  useEffect(() => {
    if (markerItem) {
      restorationRef.current.scrollIntoView({
        behavior: "auto",
        block: "center",
      })
      setMarkerItem("")
    }
  }, [])
  return (
    <Wrapper>
      <div className="list-products">
        {filteredProducts.map((product) => {
          const { name, image, price, description, id } = product
          return (
            <article
              className="list-article"
              key={id}
              ref={markerItem === id ? restorationRef : null}
            >
              <div className="list-content">
                <h3 className="list-title">{name}</h3>
                <p className="list-price">{formatPrice(price)}</p>
                <p className="list-description">
                  {description.substring(0, 150)}...
                </p>
                <Link to={`/products/${id}`} onClick={() => setMarkerItem(id)}>
                  <button className="btn btn-list-details">details</button>
                </Link>
              </div>
              <img className="list-img" src={image} alt={name} />
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}
export default ListProducts

const Wrapper = styled.section`
  min-height: calc(100vh - 30rem);

  .list-products {
    display: grid;
    gap: 3.5em;
    padding: 2em 0;
  }

  .list-article {
    display: flex;
    flex-direction: column;
  }

  .list-img {
    order: -1;
    height: 200px;
    max-width: 300px;
    object-fit: cover;
  }

  .list-title {
    text-transform: capitalize;
    margin-bottom: 0;
    margin-top: 1.2em;
  }

  .list-price {
    color: var(--clr-dark-grunge);
    font-size: 1rem;
    letter-spacing: 1px;
    margin: 0.2em 0;
  }

  .list-description {
    margin-top: 0.3em;
    line-height: 1.6;
  }

  .btn-list-details {
    text-transform: uppercase;
    padding: 0.5em;
    font-size: 0.7rem;
  }

  @media (min-width: 900px) {
    .list-article {
      display: flex;
      flex-direction: row;
      gap: 2em;
      align-items: center;
    }

    .list-title {
      margin: 0;
    }
  }
`
