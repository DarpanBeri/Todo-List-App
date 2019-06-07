import React from "react"

const date = new Date()
const hours = date.getHours()

const footerStyles = {
  backgroundColor: "#D9DBE4",
  height: "34px",
  marginBottom: "10px",
  textAlign: "center",
  fontSize: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

function Footer() {
  return (
    <footer className="footer">
      <h3 style={footerStyles}>It is about {hours % 12} o'clock!</h3>
    </footer>
  )
}

export default Footer
