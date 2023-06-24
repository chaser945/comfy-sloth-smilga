import styled from "styled-components"
import { services } from "../utils/constants"
import ServiceCard from "./ServiceCard"
const Services = () => {
  return (
    <Wrapper>
      <div className="services section">
        <div className="content">
          <h1 className="title">
            Custom Furniture <br />
            Built Only For You
          </h1>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
            officiis fugiat? Nostrum quo nobis exercitationem suscipit eum
            tempora vero impedit doloremque!
          </p>
        </div>
        <div className="services-card-wrapper">
          {services.map((service) => {
            return <ServiceCard key={service.id} service={service} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default Services

const Wrapper = styled.section`
  background-color: var(--clr-light-grunge);

  .services {
    padding: 2em 1em 5em 1em;
  }

  .text {
    color: var(--clr-dark-gray);
    margin-bottom: 4em;
  }

  .services-card-wrapper {
    display: grid;
    row-gap: 2em;
  }

  @media (min-width: 600px) {
    .services-card-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1em;
    }
  }

  @media (min-width: 800px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1em;
    }
  }

  @media (min-width: 900px) {
    .services-card-wrapper {
      grid-template-columns: 1fr 1fr 1fr;
      margin-bottom: -9em;
      gap: 2em;
    }
  }
`
