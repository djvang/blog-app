import React from "react"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <main className="uk-main">
      <Navbar />
      <div className="uk-section">
        <div className="uk-container">{children}</div>
      </div>
    </main>
  )
}

export default Layout
