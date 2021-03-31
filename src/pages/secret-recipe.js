import React from "react"
export default function Ingredients() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">

          <div className="title is-1">Secret Recipe</div>
          <form>
            <div className="field">
              <label className="label">1 tablespoon</label>
              <div className="control">
                <input className="input" type="text" placeholder="" />
              </div>
            </div>
            <div className="field">
              <label className="label">2 cups</label>
              <div className="control">
                <input className="input" type="text" placeholder="" />
              </div>
            </div>
            <div className="field">
              <label className="label">diced</label>
              <div className="control">
                <input className="input" type="text" placeholder="" />
              </div>
            </div>
            <div className="field">
              <label className="label">pinch of</label>
              <div className="control">
                <input className="input" type="text" placeholder="" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-link is-light">STIR</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}