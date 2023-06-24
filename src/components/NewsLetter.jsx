import styled from "styled-components"
const NewsLetter = () => {
  return (
    <Wrapper>
      <div className="newsletter section">
        <h1 className="title">Join our newsletter and get 20% off</h1>
        <div className="content">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            assumenda debitis, veritatis harum, voluptates eum suscipit, qui
            placeat culpa modi facilis ipsa est? Vitae fugiat excepturi corporis
            expedita quasi dolore.
          </p>
          <form
            className="email-form"
            action="https://formspree.io/f/moqoaqzz"
            method="POST"
          >
            <input
              className="email-input"
              type="email"
              placeholder="Enter Email"
              name="user_email"
            />
            <button className="btn subscribe-btn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
export default NewsLetter

const Wrapper = styled.section`
  .newsletter {
    padding: 3em 1em;
  }

  .text {
    margin-bottom: 2em;
  }

  .email-form {
    width: 100%;
    // background-color: magenta;
    display: flex;
    max-width: 450px;
  }

  .email-input {
    border: 2px solid var(--clr-dark-gray);
    border-radius: 5px 0 0 5px;
    padding: 0.5em;
    flex-grow: 2;
    border-right: 2px solid transparent;
  }

  .subscribe-btn {
    border: 2px solid var(--clr-dark-gray);
    border-radius: 0 5px 5px 0;
  }

  @media (min-width: 730px) {
    .content {
      display: flex;
      align-items: center;
      gap: 3em;
    }

    .email-form {
      width: 50%;
      margin-top: -2em;
    }

    .text {
      width: 50%;
    }
  }

  @media (min-width: 900px) {
    .newsletter {
      margin-top: 5em;
    }
  }
`
