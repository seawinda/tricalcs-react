import React, { Component } from 'react'
import { Slider, Rail, Handles, Tracks, Ticks} from 'react-compound-slider'
import Track from './Track'
import TimeField from 'react-simple-timefield'
import TimeFormat from 'hh-mm-ss'




export function Handle({
                           handle: { id, value, percent },
                           getHandleProps
                       }) {
    return (
        <div className={'slider-handles__item'}
            style={{
                left: `${percent}%`,

            }}
            {...getHandleProps(id)}
        >
            <div className={'slider-handles__length'}>
                {value.toFixed(2)}&nbsp;км
            </div>

        </div>


    )
}

function Pace(distance, formatTime, cut) {
    if(distance>0) {
        return (
            TimeFormat.fromS(formatTime/parseFloat(distance))
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


class Run extends Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: 10,
            distanceInput: 10,
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



        this.onDistanceChange = this.onDistanceChange.bind(this);
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

    onDistanceChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        if(value>0&&value<=300) {
            this.setState({
                distance: parseFloat(value)
            });
        }
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
            <div>
                <Slider
                    domain={[0, this.state.distance]}
                    step={0.01}
                    mode={2}
                    values={this.state.distanceCuts}
                    onSlideEnd={this.onCutMove}
                    className={'scale'}
                >
                    <Rail>
                        {({ getRailProps }) => (
                            <div className={'scale__rail'} {...getRailProps()} />
                        )}
                    </Rail>
                    <Handles>
                        {({ handles, getHandleProps }) => (
                            <div className="slider-handles scale__handles">
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
                <div className={'scale-data'}>
                    <form className={'scale-data__form'}>
                        <label className={'scale-data__label'}>
                            Дистанция (км):
                            <input className={'scale-data__data'} name="distanceInput" type="number" value={this.state.distanceInput} onChange={this.onDistanceChange} />
                        </label>
                        <label className={'scale-data__label'}>
                            Целевое время (чч:мм:сс):
                            <TimeField className={'scale-data__data'} value={this.state.time} showSeconds={true} onChange={this.onTimeChange}  />
                        </label>
                        <label className={'scale-data__label'}>
                            Средний темп (мин.км): <span className={'scale-data__data'}>{pace}</span>

                        </label>
                        <label className={'scale-data__label'}>
                            Количество отрезков:
                            <input className={'scale-data__data'} name="cutsCount" type="number" value={this.state.cutsCount} onChange={this.onCutsChange} min={1} />
                        </label>


                    </form>

                </div>

            </div>
        )

    }
}



export default Run;
