<Slider
    rootStyle={sliderStyle}
    domain={[0, 100]}
    step={1}
    mode={2}
    values={[10, 20, 30]}
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
    <Tracks left={false} right={false}>
        {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                    <Track
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={getTrackProps}
                    />
                ))}
            </div>
        )}
    </Tracks>
    <Ticks count={15}> // generate approximately 15 ticks within the domain
        {({ ticks }) => (
            <div className="slider-ticks">
                {ticks.map(tick => (
                    <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
            </div>
        )}
    </Ticks>
</Slider>
