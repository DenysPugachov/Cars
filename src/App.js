import React, { Component } from "react";
import "./App.scss";
import { Route, NavLink } from "react-router-dom"; //for register different rout in React App
import About from "./About/About";
import Cars from "./Cars/Cars";

class App extends Component {
    render() {
        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cars">Cars</NavLink>
                        </li>
                    </ul>
                </nav>

                <hr />

                {/*localhost:3000*/}
                {/* exect => use for precise address (localhost:3000) */}
                <Route path="/" exact render={() => <h1>Home page</h1>} />
                <Route path="/about" component={About} />
                <Route path="/cars" component={Cars} />
            </div>
        );
    }
}

export default App;
