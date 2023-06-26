import { useFilterContext } from "../context/filterContext"
import { GridProducts, ListProducts } from "../components"
import styled from "styled-components"
import LoadingSpin from "./LoadingSpin"

const PreviewProducts = () => {
  const { filteredProducts, showGrid, filterLoading } = useFilterContext()

  if (filterLoading) {
    return <LoadingSpin />
  }

  if (filteredProducts.length < 1) {
    return (
      <Wrapper>
        <p className="apology">
          Sorry! No product is available for current filters.
        </p>
      </Wrapper>
    )
  }

  if (!showGrid) {
    return <ListProducts filteredProducts={filteredProducts} />
  }
  return <GridProducts filteredProducts={filteredProducts} />
}
export default PreviewProducts

const Wrapper = styled.div`
  .apology {
    color: var(--clr-dark-gray);
  }
`
