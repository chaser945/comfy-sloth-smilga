import styled from "styled-components"
const ServiceCard = ({ service }) => {
  const { title, icon, text } = service
  return (
    <Wrapper>
      <div className="service-card">
        <h2 className="service-card-title">{title}</h2>
        <p className="service-card-text">{text}</p>
        <span className="icon">{icon}</span>
      </div>
    </Wrapper>
  )
}
export default ServiceCard

const Wrapper = styled.article`
  .service-card {
    background-color: var(--clr-slight-dark-grunge);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5em;
    text-align: center;
    border-radius: 5px;
  }

  .service-card-title {
    text-transform: capitalize;
    margin-bottom: 0.2em;
  }

  .service-card-text {
    color: var(--clr-dark-gray);
    margin-bottom: 2em;
  }

  .icon {
    order: -1;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-light-grunge);
    border-radius: 50%;
    font-size: 1.3rem;
  }
`
