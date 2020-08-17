import React, { Component } from "react";
import "./App.scss";
import { Route, NavLink, Switch, Redirect } from "react-router-dom"; //for register different rout in React App
import About from "./About/About";
import Cars from "./Cars/Cars";
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {
    state = {
        isLoggedIn: false,
    };

    render() {
        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink
                                exact //use precise address
                                activeClassName={"wfm-active "}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeStyle={{ color: " " }}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={{
                                    // parameters for address line(static routing)
                                    pathname: "/cars",
                                }}
                            >
                                Cars
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <hr />
                <div style={{ textAlign: "center" }}>
                    <h3>
                        Is logged in {this.state.isLoggedIn ? "TRUE" : "FALSE"}
                    </h3>
                    <button onClick={() => this.setState({ isLoggedIn: true })}>
                        Login
                    </button>
                </div>

                <hr />
                {/*localhost:3000*/}
                {/* exact => use for precise address (localhost:3000) */}
                {/* switch => return first component form route address(exact) */}
                <Switch>
                    {/* <Route path="/" exact render={() => <h1>Home page</h1>} /> */}
                    <Route path="/" exact render={() => <h1> Home page</h1>} />

                    {this.state.isLoggedIn ? (
                        <Route path="/about" component={About} />
                    ) : null}
                    <Route path="/cars/:name" component={CarDetail} />
                    <Route path="/cars" component={Cars} />
                    <Redirect to={"/"} />
                    {/* <Route
                        render={() => (
                            <h1 style={{ color: "red", textAlign: "center" }}>
                                404 page not found
                            </h1>
                        )}
                    /> */}
                </Switch>
            </div>
        );
    }
}

export default App;
