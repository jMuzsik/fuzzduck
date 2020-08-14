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
  Panel
} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import "./Home.css"

const face = `
                  ,,////////////,,,,,,,,,,,
                ////////////////////////////,,
             ///////////////////////////////////,,
         ,"////////////////////////////////////////,,
       ,"/////////////////////"""""""\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\,
     "/////////,/////""                 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\,
     /////////,"                           """\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\,
     //////,"                                  '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     /////,"    ___--------------____           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     ////                                        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     ///     ____-------------------___           \\\\\\\\\\\\\\\\\\\\\\\\\\\\
     /                                             \\\\\\\\\\\\\\\\\\\\\\\\\\
    /    ,,,,////                ,,,,,,,           \\\\\\\\\\\\\\\\\\\\\\\\
   |  ///////"""              \\\\\\\\\\\\\\\\\\\\\\\\\\\\,       \\\\\\\\\\\\\\\\\\\\
   )//"                                 "\\\\\\\\\\,     \\\\\\\\\\\\\\\\\\  ....
  (               ͡\\                       \\\\\\\\     \\\\\\\\\\\\\\\\" /---  ",
   \\   ,''''-_      \\            ,''''-_      \\\\     \\\\\\\\\\\\" /   \\   "
    ) (  *   )  >    )        < (  *   )  >          \\\\\\\\\\" /     \\  "
   /   ',,,,'_-     /            ',,,,'-'            \\\\\\\\" / \\     / "
  /                /                                  \\\\\\  \\  \\   / "
 /                /                                   ///   )  ) / "
'                /                                   ///   /  / / "
"               /                                    ///  /___/ ,"
"              /             \\                       ////,   ,"
              (               )                     ////  """
               '. ͜ ."  ͡' . ͜ "                      ///
  "       ,,////////   \\\\\\\\\\\\\\\\\\\\\\\\,,               ///
   "  /////////////     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\,            ///
    "////""  __""""",,,,""""",,,, ""\\\\\\\\\\\\         ////
     "    ,"____---_____----_____"",              ///
       "   ",                  ,,""             ///
        "    """""=======""""""               ///
         "          ////                    ///
           "                             ////
            ",\\\\\\,,,,,,,,,,,,,,,,,/////////"
              ""///////////////////////""
                  """"""""""""""""""
`

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
  renderFace() {
    return (
      <Col className="panel" xs={12} sm={8}>
        <Panel bsStyle="primary" id="collapsible-panel-example-3">
          <Panel.Heading>
            <Panel.Title align="center" toggle>
              This here is me
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body className="face-panel-body">
              <pre className="face">{face}</pre>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </Col>
    )
  }
  renderForest() {
    return (
      <Col className="panel" xs={12} sm={8}>
        <Panel bsStyle="success" id="collapsible-panel-example-3">
          <Panel.Heading>
            <Panel.Title align="center" toggle>
              Thing's are green round here.
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body className="universe-panel-body">
              <div className="universe">
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
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </Col>
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
              <div className="small-text-is-too-damn-wide">
                <small>
                  The man that will duck that fuzz out your mind. <br />(And no,
                  no one calls me this or says this about me, maybe one day)
                </small>
              </div>
            </PageHeader>
            <ButtonGroup className="button-group">
              <LinkContainer to="/mr-muzsik">
                <Button title="goes to page about me">About Me</Button>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Button title="goes to projects page">Projects</Button>
              </LinkContainer>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="panel-container">{this.renderFace()}</Row>
        <br />
        <Row className="panel-container">{this.renderForest()}</Row>
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
