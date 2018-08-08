import React, { Component } from "react"
import {
  Grid,
  Row,
  Col,
  Button,
  ButtonGroup
} from "react-bootstrap"
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
            <div className="player">
              <video
                controls
                alt="Video showcasing the find an issue project"
                className="project-video"
                src="./findanissuevideo.mp4"
              />
            </div>
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
                href="https://youthful-meninsky-3d9edf.netlify.com"
                bsStyle="default"
              >
                Site
              </Button>
            </ButtonGroup>
          </Col>
          <Col className="col-custom" xs={12} md={6} align="center">
            <h3>API Central</h3>
            <div className="player">
              <video
                controls
                alt="Video showcasing the API Central Application"
                className="project-video"
                src="./alltheapis.mp4"
              />
            </div>
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
            <div className="player">
              <video
                controls
                alt="Video showcasing the application"
                className="project-video"
                src="./synopsesvideo.mp4"
              />
            </div>
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
                href="https://bookspassed.com"
                bsStyle="default"
              >
                Site
              </Button>
            </ButtonGroup>
          </Col>
          <Col className="col-custom" xs={12} md={6} align="center">
            <h3>Katan</h3>
            <div className="player">
              <video
                controls
                alt="Video showcasing the application"
                className="project-video"
                src="./katan.mp4"
              />
            </div>
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
