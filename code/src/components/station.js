import React from "react"

class Station extends React.Component {

  render() {
    return (
      <div className="contatiner-box">
        <h2>{this.props.name}!</h2>
        <p>{this.props.tagline}!</p>
        <img src={this.props.image} alt="Channel logo" />
        <audio controls>
          <source src={this.props.audio} type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

export default Station
