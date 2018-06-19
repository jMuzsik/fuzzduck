import React, { Component, Fragment } from "react"
import { Auth } from "aws-amplify"
import { withRouter } from "react-router-dom"
import { Nav, Navbar, NavItem, Glyphicon } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import Routes from "./Routes"
import "./App.css"
import { quotes } from "./quotes"

const NUMBER_OF_QUOTES = 793

class App extends Component {
  constructor(props) {
    super(props)
    const quote = this.getTheRandomWords()
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      quote
    }
  }

  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true)
      }
    } catch (e) {
      if (e !== "No current user") {
        alert(e)
      }
    }

    this.setState({ isAuthenticating: false })
  }
  getTheRandomWords() {
    const randomIndex = this.getRandomArbitrary(0, NUMBER_OF_QUOTES)
    const randomQuote = quotes[randomIndex]
    return this.convertQuoteToProperString(randomQuote)
  }
  setRandomWordState() {
    const quote = this.getTheRandomWords()
    this.setState({ quote })
  }
  getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min, 10)
  }

  convertQuoteToProperString(quote) {
    const wordOne = `F${quote.FIELD1.slice(1)}`
    const wordTwo = `D${quote.FIELD2.slice(1)},`
    const wordThree = `Mr. M${quote.FIELD3.slice(1)}`
    return `${wordOne} ${wordTwo} ${wordThree}`
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated })
  }

  handleLogout = async event => {
    await Auth.signOut()

    this.userHasAuthenticated(false)

    this.props.history.push("/")
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    }

    return (
      !this.state.isAuthenticating && (
        <div className="App container">
          <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a
                  className="random-word"
                  onClick={this.setRandomWordState.bind(this)}
                >
                  <Glyphicon glyph="glyphicon glyphicon-heart" />{" "}
                  {this.state.quote}
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                {this.state.isAuthenticated ? (
                  <Fragment>
                    <LinkContainer to="/settings">
                      <NavItem>Settings</NavItem>
                    </LinkContainer>
                    <NavItem onClick={this.handleLogout}>Logout</NavItem>
                  </Fragment>
                ) : (
                  <Fragment>
                    <LinkContainer to="/signup">
                      <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </Fragment>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes childProps={childProps} />
        </div>
      )
    )
  }
}

export default withRouter(App)
