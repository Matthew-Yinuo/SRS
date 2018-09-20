import React, { Component } from "react";
import { Container, Grid, Header, Image, Responsive } from "semantic-ui-react";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="landing-hero py-5 px-2">
          <Container
            textAlign="left"
            className="d-flex flex-column flex-md-row"
          >
            <div className="hero-text my-auto col-md-5 mr-5 py-5">
              <Header inverted className="mb-5">
                <Header.Content style={{ fontSize: "32px", lineHeight: "1em" }}>
                  Picture Flashcards
                </Header.Content>
                <Header.Subheader
                  className="my-3"
                  as="h2"
                  style={{ fontSize: "22px" }}
                >
                  A gamified study approach
                </Header.Subheader>
              </Header>
            </div>
            <Responsive
              minWidth={768}
              className="col-md-7"
              style={{ minWidth: "1000px" }}
            />
            <Responsive className="text-center" maxWidth={767} />
          </Container>
        </div>
      </div>
    );
  }
}

export default Landing;
