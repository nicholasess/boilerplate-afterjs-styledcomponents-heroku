import React, { Component } from "react";
import logo from "./react.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 1040px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Lato", sans-serif;
`;

const Pharagrafic = styled.p`
  font-size: 16px;
  code {
    color: #7a7a7a;
  }
`;

const Button = styled.div`
  a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
  }
  a:after {
    content: " ➡";
  }
`;

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: "stuff" };
  }

  render() {
    return (
      <Container>
        <div>
          <img src={logo} alt="logo" />
          <h2>Welcome to Boilerplate</h2>
        </div>
        <Pharagrafic>
          To get started, edit <code>src/Home.js</code> or{" "}
          <code>src/About.js</code> and save to reload.
        </Pharagrafic>
        <Button>
          <Link to="/about">About</Link>
        </Button>
        <Button>
          <Link to="/hahaha">NotFound</Link>
        </Button>
      </Container>
    );
  }
}

export default Home;
