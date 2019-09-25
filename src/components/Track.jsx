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
            cutsItemUpdate: [],
            isChangedPace: 0,
        };
        this.onPaceChange = this.onPaceChange.bind(this);
    }

    onPaceChange(trackPace) {

        if(TimeFormat.toS(trackPace)>0){
            let cutChanged = this.state.trackId;
            let cutTime = TimeFormat.toS(trackPace)*(this.state.cutPart)*this.props.distance;
            this.setState({trackPace});
            this.setState({cutTime});
            this.setState({isChangedPace: 1});
            let isChangedPaceProp = 1;

            this.state.cutsItemUpdate[cutChanged] = ({
                pace: trackPace,
                cuttime: cutTime,
            });
            this.props.onCutPaceChange(cutChanged, trackPace, cutTime, isChangedPaceProp);

        }
    }



  render() {

      const {

          props: {
              id,
              getTrackProps,
              source,
              pace,
              target,
              cutsItem = [],
              trackIndex,
          },
      } = this;

      const paceConst = this.state.constPace;
      this.state.trackId = trackIndex;
      this.state.cutPart = (target.percent - source.percent)/100;
      this.state.cutsItemUpdate=this.props.cuts;

      if(this.props.isChangedTime===1||this.props.isChangedPaceProp===0) {
          this.state.constPace = pace;
          this.state.cutTime = TimeFormat.toS(this.state.constPace) * (this.state.cutPart) * this.props.distance;
          this.state.cutsItemUpdate[trackIndex] = ({
              pace: this.state.constPace,
              cuttime: this.state.cutTime,
          });

      } else if(this.props.isChangedPaceProp===1&&this.state.isChangedPace===0&&this.props.isChangedTime===0) {
          this.state.cutTime = TimeFormat.toS(this.state.constPace) * (this.state.cutPart) * this.props.distance;
          this.state.cutsItemUpdate[trackIndex] = ({
              pace: paceConst,
              cuttime: this.state.cutTime,
          });
          this.props.updateChangeTime(0);
      } else if(this.props.isChangedPaceProp===1&&this.state.isChangedPace===1&&this.props.isChangedTime===0) {
          this.state.cutTime = TimeFormat.toS(this.state.trackPace)*(this.state.cutPart)*this.props.distance;
          this.state.cutsItemUpdate[trackIndex] = ({
              pace: this.state.trackPace,
              cuttime: this.state.cutTime,
          });
      }
      cutsItem[trackIndex] = this.state.cutsItemUpdate[trackIndex];
      this.props.updateChangeTime(0);

      return (
          <div key={id} data-pace={this.state.cutsItemUpdate[trackIndex].pace} data-cuttime={this.state.cutsItemUpdate[trackIndex].cuttime} data-id={trackIndex}>
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

                  <TimeField value={this.state.cutsItemUpdate[trackIndex].pace} style={{width: 50}} onChange={this.onPaceChange}  />

              </div>
          </div>

      )
  }
}



export default Track
