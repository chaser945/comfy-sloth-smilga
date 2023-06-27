import styled from "styled-components"
import { BiGridAlt } from "react-icons/bi"
import { BsList } from "react-icons/bs"
import { useFilterContext } from "../context/filterContext"

const SortProducts = () => {
  const { filteredProducts, showGrid, setGridView, setListView, handleChange } =
    useFilterContext()
  return (
    <Wrapper>
      <div className="sort-products">
        <div className="btn-wrapper">
          <button
            className={`btn-view ${showGrid && "active"}`}
            onClick={setGridView}
          >
            <BiGridAlt className="view-icon" />
          </button>
          <button
            className={`btn-view ${!showGrid && "active"}`}
            onClick={setListView}
          >
            <BsList className="view-icon" />
          </button>
        </div>
        <p className="found-products">
          {filteredProducts.length} Products Found
        </p>
        <div className="line"></div>
        <div className="sort-wrapper">
          <label htmlFor="sort" className="select-label">
            Sort By
          </label>
          <select
            name="sort"
            id="sort"
            className="sort-select"
            onChange={handleChange}
          >
            <option value="price_low_high">Price (Low-High)</option>
            <option value="price_high_low">Price (High-Low)</option>
            <option value="name_a_z">Name (A-Z)</option>
            <option value="name_z_a">Name (Z-A)</option>
          </select>
        </div>
      </div>
    </Wrapper>
  )
}
export default SortProducts

const Wrapper = styled.div`
  .sort-products {
    padding: 1em;
  }

  .btn-wrapper {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    // background-color: magenta;
  }
  .btn-view {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 5px;
    background: none;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .btn-view.active {
    background-color: black;
    color: white;
  }

  .view-icon {
    font-size: 1rem;
  }

  .sort-wrapper {
    margin-top: 1em;
  }

  .select-label,
  .found-products {
    color: var(--clr-light-gray);
    font-size: 0.8rem;
  }

  .sort-select {
    border: none;
    padding: 0.5em;
    font-family: inherit;
    margin-left: 1em;
  }

  @media (min-width: 900px) {
    .line {
      width: 40%;
    }

    .sort-products {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .sort-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
    }

    .select-label {
      display: block;
    }
  }

  @media (min-width: 1100px) {
    .line {
      width: 50%;
    }
  }
`
