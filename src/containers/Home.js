import React, { Component } from "react"
import { API } from "aws-amplify"
import {
  PageHeader,
  ListGroup,
  ListGroupItem,
  Grid,
  Row,
  Col,
  ButtonGroup,
  Button,
  Glyphicon,
  Panel,
  Alert
} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import "./Home.css"

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      notes: [],
      open: true
    }
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return
    }

    try {
      const notes = await this.notes()
      this.setState({ notes })
    } catch (e) {
      alert(e)
    }

    this.setState({ isLoading: false })
  }

  notes() {
    return API.get("notes", "/notes")
  }

  handleNoteClick = event => {
    event.preventDefault()
    this.props.history.push(event.currentTarget.getAttribute("href"))
  }

  handleRedirectToAboutMe(e) {
    this.props.history.push("/mr-muzsik")
  }
  renderPanel() {
    return (
      <Col className="panel" xs={12} sm={6}>
        <Panel bsStyle="info" id="collapsible-panel-example-2" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>Why is there a login, etc.</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              This site is partially a testing ground of serverless
              technologies. Specifically AWS platforms. Cognito is hooked up for
              authentication. Stripe is used for billing (though I am not
              selling anything and it's not finished). DynamoDB is set up with
              the notes section. Rest of data, separate from the table is stored
              on S3. Page is hosted on Netlify but some sections are utilising
              Cloudfront. The DNS lives in Route 53.
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </Col>
    )
  }
  renderForest() {
    return (
      <div className="universe">
        <Row className="header-container">
          {" "}
          <Col xs={12} sm={6} className="header">
            <Alert bsStyle="success">
              <strong>
                Thing's are green round here, no fire getting into this home!
              </strong>
            </Alert>
          </Col>
        </Row>
        <Row className="star-container">
          <Col xs={12} sm={6} className="star">
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-globe" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-globe" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-globe" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
            <Glyphicon glyph="glyphicon glyphicon-globe" />
            <Glyphicon glyph="glyphicon glyphicon-star" />
          </Col>
        </Row>
        <Row className="cloud-container">
          <Col xs={12} sm={6} className="cloud">
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
            <Glyphicon glyph="glyphicon glyphicon-cloud" />
          </Col>
        </Row>
        <Row className="forest-container">
          <Col xs={12} sm={6} className="forest">
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-home" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tent" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-home" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tent" />
            <Glyphicon glyph="glyphicon glyphicon-tent" />
            <Glyphicon glyph="glyphicon glyphicon-tent" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-home" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-home" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tent" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-home" />
            <Glyphicon glyph="glyphicon glyphicon-home" />
            <Glyphicon glyph="glyphicon glyphicon-home" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />{" "}
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-home" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tent" />
            <Glyphicon glyph="glyphicon glyphicon-tent" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-home" />
            <Glyphicon glyph="glyphicon glyphicon-tree-deciduous" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tent" />
            <Glyphicon glyph="glyphicon glyphicon-tent" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
            <Glyphicon glyph="glyphicon glyphicon-tree-conifer" />
          </Col>
        </Row>
        <Row className="water-container">
          <Col xs={12} sm={6} className="water" />
        </Row>
        <Row className="fire-container">
          <Col xs={12} sm={6} className="fire">
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
            <Glyphicon glyph="glyphicon glyphicon-fire" />
          </Col>
        </Row>
      </div>
    )
  }

  renderNotesList(notes) {
    return [{}].concat(notes).map(
      (note, i) =>
        i !== 0 ? (
          <ListGroupItem
            key={note.noteId}
            href={`/notes/${note.noteId}`}
            onClick={this.handleNoteClick}
            header={note.content.trim().split("\n")[0]}
          >
            {"Created: " + new Date(note.createdAt).toLocaleString()}
          </ListGroupItem>
        ) : (
          <ListGroupItem
            key="new"
            href="/notes/new"
            onClick={this.handleNoteClick}
          >
            <h4>
              <b>{"\uFF0B"}</b> Create a new note
            </h4>
          </ListGroupItem>
        )
    )
  }

  renderLander() {
    return (
      <Grid className="lander-container">
        <Row className="show-grid">
          <Col xs={12} className="main-col">
            <PageHeader align="center">
              Fuzzy Duck, Mr. Muzsik <br />
              <small>The process of ducking that fuzz out your mind.</small>
            </PageHeader>
            <ButtonGroup className="button-group">
              <LinkContainer to="/mr-muzsik">
                <Button title="goes to page about me">About Me</Button>
              </LinkContainer>
            </ButtonGroup>
          </Col>
        </Row>
        {this.renderForest()}
        <Row className="panel-container">{this.renderPanel()}</Row>
        <ButtonGroup className="button-group">
          <Button
            href="https://oldsite.fuzzduck.org"
            title="Goes to previous version of site"
          >
            Previous Version of this site
          </Button>
        </ButtonGroup>
      </Grid>
    )
  }

  renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Your Very Important Notes</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderNotesList(this.state.notes)}
        </ListGroup>
        <p>Log out to not be stuck in note land.</p>
      </div>
    )
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
      </div>
    )
  }
}
