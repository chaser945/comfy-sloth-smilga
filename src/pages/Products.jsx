import styled from "styled-components"
import {
  PageHero,
  SortProducts,
  FilterProducts,
  PreviewProducts,
} from "../components"
const Products = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="section">
        <FilterProducts />
        <div>
          <SortProducts />
          <PreviewProducts />
        </div>
      </Wrapper>
    </main>
  )
}
export default Products

const Wrapper = styled.section`
  padding: 2em 1em;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
`
