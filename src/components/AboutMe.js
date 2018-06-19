import React, { Component } from "react"
import {
  Grid,
  Row,
  Col,
  Button,
  Thumbnail,
  Glyphicon,
  Jumbotron,
  Table,
  ButtonGroup
} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import "./AboutMe.css"

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
        <Row className="row-container">
          <Col xs={12} md={10} align="center">
            <h2>
              I'm <u>Jerry Jeff Muzsik</u>, a creator of software.
            </h2>
            <Thumbnail
              src="/fallingtoearth.jpg"
              alt="242x200 image of me falling to earth from space"
            >
              <h3>Gotta spend some time in space</h3>
              <p>It's incredibly important</p>
              <i className="icon-space-shuttle" />
            </Thumbnail>
          </Col>
        </Row>
        <Row className="row-container">
          <Col xs={12} md={10}>
            <Jumbotron>
              <p>
                But seriously, I am an avid develeloper. I spend countless hours
                every day either coding or learning more about the art of it. My
                dream is to one day have my own company that fills an altruistic
                void within the humanities technology sector. Every day I work
                towards this goal in a variety of ways such as:
              </p>
              <br />
              <p className="pad-that-list">
                • Improving my understanding of software engineering
                architecture by working with AWS and doing certification exams
              </p>

              <p className="pad-that-list">
                • Constantly creating new applications utilising the newest
                technologies and concepts to improve my ability to design a
                product with the look and feel that will keep people using it
              </p>

              <p className="pad-that-list">
                • Improve my fundamental ability to constantly move forward with
                whatever I am creating by aiming to fill in any gaps in my
                knowledge
              </p>
              <p className="pad-that-list">
                • if there is a gap, mastering the ability to quickly find a
                solution.
              </p>
              <br />
              <p>
                And that's me selling myself or something. But really, I'm just
                trying to live life and love every moment of it. We are little
                thing's in this vast everything, it's important to focus on
                connecting this little thing we are to the everything so that
                one day we can look at it all and think that we are as big as
                all of it.
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row className="row-container">
          <Col xs={12} md={8}>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="4" className="table-header">
                    What I <Glyphicon glyph="glyphicon glyphicon-heart" />{" "}
                    working with:
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4">Serverless Technologies (AWS's repetoire)</td>
                </tr>
                <tr>
                  <td>Javascript</td>
                  <td>Node</td>
                  <td>React</td>
                  <td>Redux</td>
                </tr>
                <tr>
                  <td colSpan="2">Any UI Framework with some CSS</td>
                  <td colSpan="2">Or custom CSS, but I won't understand</td>
                </tr>
                <tr>
                  <td>Angular</td>
                  <td colSpan="2">Places with dogs</td>
                  <td>Jest</td>
                </tr>
                <tr>
                  <td colSpan="4">
                    Basically, I can learn anything needed to get the job done.
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="row-container">
          <Col xs={12} md={8} className="button-group">
            <ButtonGroup justified>
              <Button
                href="https://github.com/jMuzsik"
                title="links to my github account"
              >
                <i className="icon-github" />
              </Button>
              <Button
                href="https://medium.com/@muzsik33"
                title="links to my medium account"
              >
                <i className="icon-medium" />
              </Button>
              <Button
                href="https://www.linkedin.com/in/jerry-muzsik/"
                title="links to my linkedin account"
              >
                <i className="icon-linkedin" />
              </Button>
            </ButtonGroup>
            <ButtonGroup justified>
              <LinkContainer to="/">
                <Button title="returns to home page">Go Back</Button>
              </LinkContainer>{" "}
            </ButtonGroup>
          </Col>
        </Row>
      </Grid>
    )
  }
}
