import React, { Component } from 'react'
import TimeField from 'react-simple-timefield'
import TimeFormat from "hh-mm-ss";



class Track extends Component {

    constructor(props) {
        super();


        this.state = {
            trackPace: "00:00",
            constPace: "00:00",
            cutPart: 0,
            cutTime: 0,
            trackId: '',
        };
        this.onPaceChange = this.onPaceChange.bind(this);
    }

    onPaceChange(trackPace) {

        if(TimeFormat.toS(trackPace)>0){
            let cutChanged = this.state.trackId;
            let cutTime = TimeFormat.toS(trackPace)*(this.state.cutPart)*this.props.distance;
            this.setState({trackPace});
            let constPace = trackPace;
            this.setState({constPace});
            this.props.ourInputFunction(cutChanged, cutTime);

        }
    }



  render() {

      const {

          props: {
              id,
              getTrackProps,
              source,
              target,
              pace,
          },
      } = this;
      //const {trackPace} = this.state;
      this.state.trackPace = pace;
      //const constPace = this.state.trackPace;
      this.state.trackId = source.value;
      this.state.cutPart = (target.percent - source.percent)/100;
      this.state.cutTime = TimeFormat.toS(this.state.constPace)*(this.state.cutPart)*this.props.distance;

      return (
          <div key={id} data-pace={this.state.constPace} data-cuttime={this.state.cutTime} data-id={this.state.trackId}>
              <div
                  style={{
                      position: 'absolute',
                      height: 10,
                      zIndex: 1,
                      marginTop: 35,
                      backgroundColor: '#546C91',
                      borderRadius: 5,
                      cursor: 'pointer',
                      left: `${source.percent}%`,
                      width: `${target.percent - source.percent}%`,
                  }}
                  {...getTrackProps()} // this will set up events if you want it to be clickeable (optional)
              >


              </div>
              <div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop:0, left: `${source.percent+1}%`, position: 'absolute' }} >

                  <TimeField value={pace} style={{width: 50}} onChange={this.onPaceChange}  />

              </div>
          </div>

      )
  }
}



export default Track
