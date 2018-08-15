import React, { Component } from "react"
import { Grid, Row, Col, Button, ButtonGroup } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import "./Projects.css"

export default class AboutMe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col className="col-custom" xs={12} md={6} align="center">
            <h3>Find an Issue</h3>
            <img
              className="rounded img-thumbnail"
              src="./findanissue.png"
              alt="find an issue application"
            />
            <p>A simpler way to find an issue on github.</p>
            <ButtonGroup className="flex-btns">
              <Button
                bsStyle="default"
                title="Links to applications github"
                href="https://github.com/jMuzsik/find-an-issue"
              >
                <i className="icon-github" />
              </Button>
              <Button
                title="Links to applications website"
                href="https://findanissue.com"
                bsStyle="default"
              >
                Site
              </Button>
            </ButtonGroup>
          </Col>
          <Col className="col-custom" xs={12} md={6} align="center">
            <h3>API Central</h3>
            <img
              className="rounded img-thumbnail"
              src="./apicentral.png"
              alt="api central application"
            />
            <p>
              A codebase showcasing how to use AWS Lambda and displaying the
              data in a unique way.
            </p>
            <ButtonGroup className="flex-btns">
              <Button
                bsStyle="default"
                title="Links to applications github"
                href="https://github.com/jMuzsik/api-central"
              >
                <i className="icon-github" />
              </Button>
              <Button
                title="Links to applications website"
                href="https://alltheapis.com/"
                bsStyle="default"
              >
                Site
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col className="col-custom" xs={12} md={6} align="center">
            <h3>Synopses</h3>
            <img
              className="rounded img-thumbnail"
              src="./synopses.png"
              alt="synopses application"
            />
            <p>A way to fetch book data and display it cleanly.</p>
            <ButtonGroup className="flex-btns">
              <Button
                bsStyle="default"
                title="Links to applications github"
                href="https://github.com/jMuzsik/synopses"
              >
                <i className="icon-github" />
              </Button>
              <Button
                title="Links to applications website"
                href="http://bookspassed.com"
                bsStyle="default"
              >
                Site
              </Button>
            </ButtonGroup>
          </Col>
          <Col className="col-custom" xs={12} md={6} align="center">
            <h3>Katan</h3>
            <img
              className="rounded img-thumbnail"
              src="./catan.png"
              alt="catan application"
            />
            <p>A Settler's of Catan clone.</p>
            <ButtonGroup className="flex-btns">
              <Button
                bsStyle="default"
                title="Links to applications github"
                href="https://github.com/bcnj/Katan"
              >
                <i className="icon-github" />
              </Button>
              <Button
                title="Links to applications website"
                href="https://catan-45cf4.firebaseapp.com"
                bsStyle="default"
              >
                Site
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="center-row show-grid">
          <Col className="col-custom" xs={12} md={8} align="center">
            {" "}
            <LinkContainer to="/">
              <Button bsStyle="link" title="returns to home page">
                Go Back
              </Button>
            </LinkContainer>{" "}
          </Col>
        </Row>
      </Grid>
    )
  }
}
