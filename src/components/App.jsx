import React, { Component } from 'react'
import { Slider, Rail, Handles, Tracks, Ticks} from 'react-compound-slider'
import Track from './Track'
import TimeField from 'react-simple-timefield'
import TimeFormat from 'hh-mm-ss'


const sliderStyle = {  // Give the slider some width
    position: 'relative',
    width: '100%',
    height: 80,
    border: '1px solid steelblue',
};

const railStyle = {
    position: 'absolute',
    width: '100%',
    height: 10,
    marginTop: 35,
    borderRadius: 5,
    backgroundColor: '#8B9CB6',
};


export function Handle({
                           handle: { id, value, percent },
                           getHandleProps
                       }) {
    return (
        <div
            style={{
                left: `${percent}%`,
                position: 'absolute',
                marginLeft: -15,
                marginTop: 25,
                zIndex: 2,
                width: 30,
                height: 30,
                border: 0,
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '50%',
                backgroundColor: '#2C4870',
                color: '#333',
            }}
            {...getHandleProps(id)}
        >
            <div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop: -35 }}>
                {value.toFixed(2)}
            </div>

        </div>


    )
}

function Pace(distance, formatTime, cut) {
    if(distance>0) {
        return (
            TimeFormat.fromS(formatTime/distance)
        )
    }

}



function Tick({ tick, count }) {  // your own tick component
    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    marginTop: 52,
                    marginLeft: -0.5,
                    width: 1,
                    height: 8,
                    backgroundColor: 'silver',
                    left: `${tick.percent}%`,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    marginTop: 60,
                    fontSize: 10,
                    textAlign: 'center',
                    marginLeft: `${-(100 / count) / 2}%`,
                    width: `${100 / count}%`,
                    left: `${tick.percent}%`,
                }}
            >
                {tick.value}
            </div>
        </div>
    )
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: 10,
            time: '00:40:00',
            pace: '00:00',
            cutsCount: 2,
            distanceCuts: [1],
            cutChanged: '',
            cuts: [],
            newTracks: [],
            newTimeSec: 0,
            newCutTimeSec:0,
            isChangedTime: 0,
            isChangedPaceProp: 0,

        };



        this.handleInputChange = this.handleInputChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.onCutsChange = this.onCutsChange.bind(this);

        this.onCutPaceChange = this.onCutPaceChange.bind(this);
        this.onCutMove = this.onCutMove.bind(this);
    }


    onCutPaceChange = (cutChanged, trackPace, cutTime, isChangedPaceProp) => {
        const updatedCutsArray = [...this.state.cuts];

        updatedCutsArray[cutChanged] = {
            pace: trackPace,
            cuttime: cutTime,
        };

        this.state.cuts= updatedCutsArray;

        for (let i=0; i<this.state.cuts.length; i++) {
            this.state.newTimeSec+=Number(this.state.cuts[i].cuttime);
        }

        this.state.time=TimeFormat.fromS(this.state.newTimeSec, 'hh:mm:ss');
        this.setState({newTimeSec:0});
        this.state.isChangedPaceProp=isChangedPaceProp;
    }

    onCutMove = () => {

        for (let i=0; i<this.state.cuts.length; i++) {
            this.state.newCutTimeSec+=Number(this.state.cuts[i].cuttime);
        }

        this.state.time=TimeFormat.fromS(this.state.newCutTimeSec, 'hh:mm:ss');
        this.setState({newCutTimeSec:0});
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: parseFloat(value)
        });
    }
    onTimeChange(time) {
        this.setState({time});
        Pace(this.state.distance, TimeFormat.toS(this.state.time));
        this.setState({isChangedTime: 1});
    }


    onCutsChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const arrayCuts = [];

        if(Number(value)>0) {

            for(let i=1; i<Number(value);i++) {
                arrayCuts.push(i);
            }
        }
        this.setState({
            [name]: Number(value),
            distanceCuts: arrayCuts
        });


    }

    updateChangeTime = (value) => {
        this.state.isChangedTime =value;
    }






    render() {

        //const {time} = this.state;
        const pace = Pace(this.state.distance, TimeFormat.toS(this.state.time));
        const cutsItem = [];
        this.state.cuts= cutsItem;
        this.state.pace= pace;



         return (
            <div style={{ height: 120, width: '80%', marginTop: '50px' }}>
                <Slider
                    rootStyle={sliderStyle}
                    domain={[0, this.state.distance]}
                    step={0.1}
                    mode={2}
                    values={this.state.distanceCuts}
                    onSlideEnd={this.onCutMove}
                >
                    <Rail>
                        {({ getRailProps }) => (
                            <div style={railStyle} {...getRailProps()} />
                        )}
                    </Rail>
                    <Handles>
                        {({ handles, getHandleProps }) => (
                            <div className="slider-handles">
                                {handles.map(handle => (
                                    <Handle
                                        key={handle.id}
                                        handle={handle}
                                        getHandleProps={getHandleProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Handles>
                    {/*<Tracks left={false} right={false}>*/}
                    <Tracks>
                        {({ tracks, getTrackProps }) => (
                            <div className="slider-tracks">
                                {tracks.map(({ id, source, target }, index) => (


                                    <Track
                                        key = {id}
                                        source={source}
                                        target={target}
                                        getTrackProps={getTrackProps}
                                        distance = {this.state.distance}
                                        formatTime = {TimeFormat.toS(this.state.time)}
                                        pace={pace}
                                        onCutPaceChange={this.onCutPaceChange}
                                        cutsItem = {cutsItem}
                                        cuts = {this.state.cuts}
                                        cutsCount={this.state.cutsCount}
                                        trackIndex={index}
                                        isChangedTime={this.state.isChangedTime}
                                        isChangedPaceProp={this.state.isChangedPaceProp}
                                        updateChangeTime = {this.updateChangeTime}
                                        onCutMove={this.onCutMove}
                                    />
                                )) }

                            </div>

                        )}
                    </Tracks>
                    <Ticks count={this.state.distance}>
                        {({ ticks }) => (
                            <div className="slider-ticks">
                                {ticks.map(tick => (
                                    <Tick key={tick.id} tick={tick} count={ticks.length} />
                                ))}
                            </div>
                        )}
                    </Ticks>
                </Slider>
                <div>
                    <form>
                        <label>
                            Дистанция:
                            <input name="distance" type="number" style={{width: 100}} value={this.state.distance} onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Целевое время:
                            <TimeField value={this.state.time} showSeconds={true} style={{width: 100}} onChange={this.onTimeChange}  />
                        </label>
                        <br />
                        <label>
                            Средний темп: {pace}

                        </label>
                        <br />
                        <label>
                            Количество отрезков:
                            <input name="cutsCount" type="number" style={{width: 100}} value={this.state.cutsCount} onChange={this.onCutsChange} min={1} />
                        </label>


                    </form>

                </div>

            </div>
        )

    }
}



export default App;
