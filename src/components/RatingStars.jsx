import styled from "styled-components"
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im"

const RatingStars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    if (stars >= index + 1) {
      return <ImStarFull key={index} />
    } else if (stars >= number) {
      return <ImStarHalf key={index} />
    } else {
      return <ImStarEmpty key={index} />
    }
  })
  return (
    <Wrapper>
      <div className="rating-wrapper">
        <div className="stars">{tempStars}</div>
        <p className="reviews">({reviews} customer reviews)</p>
      </div>
    </Wrapper>
  )
}
export default RatingStars

const Wrapper = styled.div`
  .rating-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-top: 0;
    // background-color: magenta;
  }
  .stars {
    color: var(--clr-star);
    display: flex;
    gap: 0.2em;
    margin-top: 0;
    // background-color: red;
  }

  .reviews {
    margin: 0.2em;
    // background-color: yellow;
  }
`
