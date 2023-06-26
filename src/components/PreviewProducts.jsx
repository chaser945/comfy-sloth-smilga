import { useFilterContext } from "../context/filterContext"
import { GridProducts, ListProducts } from "../components"

const PreviewProducts = () => {
  const { filteredProducts = [] } = useFilterContext()

  if (filteredProducts.length < 1) {
    return (
      <p className="apology">
        Sorry! No product is available for current filters.
      </p>
    )
  }
  return <GridProducts filteredProducts={filteredProducts} />
}
export default PreviewProducts
