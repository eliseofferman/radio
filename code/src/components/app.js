import React from "react"
import Station from "./station"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      radioChannels: []
    }
  }

  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        radioChannels: json.channels
      })
    })
  }

  render() {
    return (
      <div>
        <h1>The RADIO station</h1>

        <div className="contatiner">
          {this.state.radioChannels.map((item, index) => {
            if (index === 1 || index === 2 || index === 3) {
              return <Station
                name={item.name}
                tagline={item.tagline}
                image={item.image}
                audio={item.liveaudio.url}
                key={item.id} />
            }
          })}
        </div>

      </div>
    )
  }

}

export default App
