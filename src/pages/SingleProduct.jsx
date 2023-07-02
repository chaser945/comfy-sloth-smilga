import { useParams, useNavigate, Link } from "react-router-dom"
import LoadingSpin from "../components/LoadingSpin"
import { useProductsContext } from "../context/productsContext"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { single_product_url as baseUrl } from "../utils/constants"
import {
  PageHero,
  RatingStars,
  SingleProductImgWrapper,
  AddToCart,
} from "../components"
import { formatPrice } from "../utils/helpers"

const SingleProduct = () => {
  const {
    singleProductLoading,
    singleProductError,
    singleProduct,
    fetchSingleProduct,
  } = useProductsContext()

  const [navigationCounter, setNavigationCounter] = useState(5)

  const { id } = useParams()
  const navigate = useNavigate()
  const url = `${baseUrl}${id}`

  useEffect(() => {
    fetchSingleProduct(url)
  }, [])

  useEffect(() => {
    if (singleProductError) {
      const timeOutId = setTimeout(() => {
        navigate("/")
      }, 5000)
      return () => clearTimeout(timeOutId)
    }
  }, [singleProductError])

  useEffect(() => {
    if (singleProductError) {
      const intervalId = setInterval(() => {
        setNavigationCounter((oldValue) => {
          return oldValue - 1
        })
      }, 1000)
      return () => clearInterval(intervalId)
    }
  }, [singleProductError])

  if (singleProductLoading) {
    return (
      <Wrapper>
        <div className="loading section">
          <LoadingSpin />
        </div>
      </Wrapper>
    )
  }

  if (singleProductError) {
    return (
      <Wrapper>
        <div className="section error">
          <h1 className="alert-heading">
            An Error was encountered while fetching resources!
          </h1>
          <p className="alert-p">Please! Try again later.</p>
          <p className="alert-p">
            Redirecting back to homepage in {navigationCounter} seconds.
          </p>
        </div>
      </Wrapper>
    )
  }

  const {
    id: productId,
    category,
    name,
    company,
    colors,
    description,
    price,
    stock,
    images,
    stars,
    reviews,
  } = singleProduct

  return (
    <Wrapper>
      <PageHero title={name} product="product" />
      <div className="section single-product">
        <Link to="/products">
          <button className="btn btn-product">back to products</button>
        </Link>
        <div className="product-wrapper">
          <SingleProductImgWrapper images={images} />
          <div className="content">
            <h1 className="title">{name}</h1>
            <RatingStars stars={stars} reviews={reviews} />
            <p className="price">{formatPrice(price)}</p>
            <p className="description">{description}</p>
            <p className="info">
              Available : <span>{stock > 0 ? "In stock" : "Out of Stock"}</span>
            </p>
            <p className="info">
              SKU : <span>{productId}</span>
            </p>
            <p className="info">
              Brand : <span>{company}</span>
            </p>
            <div className="line"></div>

            {stock > 0 ? (
              <AddToCart singleProduct={singleProduct} />
            ) : (
              <h3>Out of Stock</h3>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SingleProduct

const Wrapper = styled.section`
  min-height: calc(100vh - 10rem);

  .loading {
    padding: 3em 1em;
    height: calc(100vh - 10rem);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // ======
  // ERROR
  // ======

  .error {
    padding: 2em 1em;
    text-align: center;
    height: calc(100vh - 10rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .alert-heading,
  .alert-p {
    color: var(--clr-dark-grunge);
  }

  .alert-heading {
    margin-bottom: 0.4em;
  }

  .alert-p {
    margin: 0.2em;
  }

  // =============
  // SINGLE-PRODUCT
  // =============

  .single-product {
    padding: 3em 1em 3em 1em;
  }

  .btn-product {
    text-transform: uppercase;
    font-size: 0.7rem;
  }

  .title {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .price {
    font-weight: 600;
    letter-spacing: 2px;
    color: var(--clr-dark-grunge);
    font-size: 1rem;
    margin: 0.3em;
  }

  .info {
    font-weight: 600;
    color: var(--clr-dark-gray);
    display: grid;
    grid-template-columns: 70px 1fr;
    gap: 4em;
  }

  .info:last-of-type {
    text-transform: capitalize;
  }

  .info {
    span {
      color: var(--clr-light-gray);
    }
  }

  .product-wrapper {
    display: grid;
    gap: 2em;
    margin-top: 3em;
  }

  @media (min-width: 1000px) {
    .product-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3em;
      // align-items: center;
    }

    .title {
      margin-top: 0;
    }

    .info {
      grid-template-columns: 80px 1fr;
    }
  }
`
