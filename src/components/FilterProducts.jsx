import styled from "styled-components"
import { useFilterContext } from "../context/filterContext"
import { uniqueValues } from "../utils/helpers"
import { FaCheck } from "react-icons/fa"

const FilterProducts = () => {
  const { allProducts, handleFilterChange, filters } = useFilterContext()
  console.log(allProducts)
  const categories = ["all", ...uniqueValues(allProducts, "category")]
  const companies = ["all", ...uniqueValues(allProducts, "company")]
  const uniqueColors = ["all", ...uniqueValues(allProducts, "colors")]
  const { query, category, company, color, price, freeShipping } = filters
  // console.log(query)
  return (
    <Wrapper>
      <div className="filter-wrapper">
        {/* {START OF QUERY} */}
        <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleFilterChange}
            name="query"
          />
          {/* START OF CATEGORY */}
          <div className="category">
            <h4 className="category-title">Category</h4>
            <div className="category-btn-wrapper">
              {categories.map((c, index) => {
                return (
                  <button
                    className={`category-btn ${c === category && "active"}`}
                    key={index}
                    onClick={handleFilterChange}
                    name="category"
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          {/* START OF COMPANY */}
          <div className="company">
            <label htmlFor="company" className="company-label">
              Company
            </label>
            <select
              className="company-select"
              name="company"
              id="company"
              onChange={handleFilterChange}
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </option>
                )
              })}
            </select>
          </div>
          {/* START OF COLORS */}
          <div className="colors">
            <h4 className="color-title">Colors</h4>
            <div className="colors-wrapper">
              {uniqueColors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      className={`btn-clr-all ${color === "all" && "active"}`}
                      key={index}
                      onClick={handleFilterChange}
                      data-color="all"
                      name="color"
                    >
                      {c}
                    </button>
                  )
                }
                return (
                  <button
                    className="btn-clr"
                    key={index}
                    style={{ backgroundColor: c }}
                    onClick={handleFilterChange}
                    data-color={c}
                    name="color"
                  >
                    {color === c && <FaCheck className="check-icon" />}
                  </button>
                )
              })}
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}
export default FilterProducts

const Wrapper = styled.div`
  .filter-wrapper {
    padding: 1em;
  }

  .search-input {
    padding: 0.5em;
    border: 0;
    background-color: var(--clr-body);
    letter-spacing: 1px;
    border-radius: 5px;
    max-width: 160px;
  }

  .category-title {
    margin-bottom: 0.5em;
  }

  .category-btn-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6em;
  }

  .category-btn {
    background: none;
    border: none;
    text-transform: capitalize;
    color: var(--clr-light-gray);
    font-size: 0.8rem;
    cursor: pointer;
    margin: 0;
    padding: 0;
    padding-bottom: 0.4em;
  }

  .category-btn.active {
    border-bottom: 1px solid var(--clr-light-gray);
  }

  .company {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5em;
  }

  .company-label {
    font-weight: 600;
    margin-top: 1em;
    letter-spacing: 1px;
  }

  .company-select {
    background: var(--clr-body);
    border: none;
    padding: 0.5em;
    font-family: inherit;
  }

  .colors-wrapper {
    display: flex;
    flex-direction: row;
    gap: 0.4em;
    align-items: center;
  }

  .color-title {
    margin-bottom: 0.5em;
  }

  .btn-clr-all {
    text-transform: capitalize;
    border: none;
    background: none;
    margin: 0;
    color: var(--clr-light-gray);
    // background-color: magenta;
    padding: 0;
  }

  .btn-clr-all.active {
    border-bottom: 1px solid var(--clr-dark-gray);
  }

  .btn-clr {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-clr,
  .btn-clr-all {
    cursor: pointer;
  }

  .check-icon {
    color: white;
    font-size: 0.7rem;
  }
`
