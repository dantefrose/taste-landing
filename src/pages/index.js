import React from "react"
import { Link } from "gatsby"
import "./mystyles.scss"
import poster2 from "../images/poster2.png"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab);

const Index = () => (
  <div className="container">
    <div className="columns">
      <div className="left-menu column is-one-third">
        <div className="subtitle is-2">
          <Link to="/ingredients">Ingredients</Link>
        </div>
        <div className="subtitle is-2">
          <a href="https://onlydfr.creator-spring.com/" >Take Home Plate</a>
        </div>
        <div className="subtitle is-2">
          <Link to="/secret-recipe">Secret Recipe</Link>
        </div>
      </div>
      <div className="cast-photo column is-one-third">
        <img className="image is-fullwidth" src={poster2} />
      </div>
      <div className="right-menu column is-one-third">
          <div className="right-icon">
            <FontAwesomeIcon size="3x" icon={["fab", "facebook"]}/>
          </div>
          <div className="right-icon">
            <FontAwesomeIcon size="3x" icon={["fab", "instagram"]}/>
          </div>
          <div className="right-icon">
            <FontAwesomeIcon size="3x" icon={["fab", "tiktok"]}/>
          </div>
      </div>
    </div>
  </div>
)
export default Index