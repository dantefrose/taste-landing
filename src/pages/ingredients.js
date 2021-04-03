import React from "react"
import castphoto from "../images/castphoto.png"

export default function Ingredients() {
  return (
    <div className="container">
      <div className="container">
        <img className="image" src={castphoto} />
      </div>
      <div className="container is-fluid">
        <h4 className="title is-4">Role - Name - Handle</h4>
        <h4 className="title is-4">Role - Name - Handle</h4>
        <h4 className="title is-4">Role - Name - Handle</h4>
        <h4 className="title is-4">Role - Name - Handle</h4>
        <h4 className="title is-4">Role - Name - Handle</h4>
      </div>
    </div>
  )
}