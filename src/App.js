import React from "react"

import Footer from "./components/Footer"
import Main from "./components/Main"
import Nav from "./components/Navbar"

import "./index.css"

function App() {
    return (
        <div className="todolist">
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

export default App
