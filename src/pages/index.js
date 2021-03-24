import React from "react"
import { Link } from "gatsby"
import "./mystyles.scss"

const Index = () => (
  <div className="container">
    <div className="columns">
      <div className="left-menu column">
        <div className="subtitle is-1">
          <Link to="/ingredients">Ingredients</Link>
        </div>
        <div className="subtitle is-1">
          <a href="https://onlydfr.creator-spring.com/" >Take Home Plate</a>
        </div>
        <div className="subtitle is-1">
          <Link to="/secret-recipe">Secret Recipe</Link>
        </div>
      </div>
      <div className="cast-photo column">
        <img src="https://via.placeholder.com/500x900" />
      </div>
      <div className="right-menu column">
        <div className="subtitle is-2">Social Media Links</div>
      </div>
    </div>
  </div>
)
export default Index