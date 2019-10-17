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
            isChangedPaceProp,
            isChangedTime,
            cuts,
            distance
          },

      } = this;


      const paceConst = this.state.constPace;
      this.state.trackId = trackIndex;
      this.state.cutPart = (target.percent - source.percent)/100;
      this.state.cutsItemUpdate=cuts;

      if(isChangedTime===1||isChangedPaceProp===0) {
          this.state.constPace = pace;
          this.state.cutTime = TimeFormat.toS(this.state.constPace) * (this.state.cutPart) * distance;
          this.state.cutsItemUpdate[trackIndex] = ({
              pace: this.state.constPace,
              cuttime: this.state.cutTime,
          });

      } else if(isChangedPaceProp===1&&this.state.isChangedPace===0&&isChangedTime===0) {
          this.state.cutTime = TimeFormat.toS(this.state.constPace) * (this.state.cutPart) * distance;
          this.state.cutsItemUpdate[trackIndex] = ({
              pace: paceConst,
              cuttime: this.state.cutTime,
          });
          this.props.updateChangeTime(0);
      } else if(isChangedPaceProp===1&&this.state.isChangedPace===1&&isChangedTime===0) {
          this.state.cutTime = TimeFormat.toS(this.state.trackPace)*(this.state.cutPart)*distance;
          this.state.cutsItemUpdate[trackIndex] = ({
              pace: this.state.trackPace,
              cuttime: this.state.cutTime,
          });
      }
      cutsItem[trackIndex] = this.state.cutsItemUpdate[trackIndex];
      this.props.updateChangeTime(0);

      return (
          <div key={id} data-pace={this.state.cutsItemUpdate[trackIndex].pace} data-cuttime={this.state.cutsItemUpdate[trackIndex].cuttime} data-id={trackIndex}>
              <div className={'slide-handle__track'}
                  style={{

                      left: `${source.percent}%`,
                      width: `${target.percent - source.percent}%`,
                  }}
                  {...getTrackProps()} // this will set up events if you want it to be clickeable (optional)
              >


              </div>
              <div className={'slide-handle__pace'} style={{ left: `${source.percent+1}%` }} >

                  <TimeField  className={'slide-handle__input'} value={this.state.cutsItemUpdate[trackIndex].pace} onChange={this.onPaceChange}  />

              </div>
          </div>

      )
  }
}



export default Track
