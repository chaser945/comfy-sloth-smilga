import { useState } from "react"
import styled from "styled-components"

const SingleProductImgWrapper = ({ images = [{}] }) => {
  // if (!images) {
  //   return
  // }
  const [index, setIndex] = useState(0)
  const mainImg = images[index]
  return (
    <Wrapper>
      <div className="img-wrapper">
        <img className="main-img" src={mainImg.url} alt={mainImg.filename} />
        <div className="img-gallery">
          {images.map((img, index) => {
            const { id, url, filename } = img
            return (
              <img
                className={`small-img ${url === mainImg.url && "active"}`}
                key={index}
                src={url}
                alt={filename}
                onClick={() => setIndex(index)}
              />
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default SingleProductImgWrapper

const Wrapper = styled.div`
  .main-img {
    height: 300px;
    object-fit: cover;
  }

  @media (min-width: 900px) {
    .main-img {
      height: 550px;
    }
  }

  .img-gallery {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    margin-top: 1em;
  }

  .small-img {
    transition: all linear 0.1s;
    cursor: pointer;
    max-height: 50px;
    object-fit: cover;
  }

  .small-img.active {
    transform: scale(0.92);
    border: 1px solid var(--clr-dark-grunge);
  }
`
