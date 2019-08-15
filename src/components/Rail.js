import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { callAll } from '../utils'

class Rail extends Component {
  getRailProps = (props = {}) => {
    const { emitMouse, emitTouch } = this.props

    return {
      ...props,
      onMouseDown: callAll(props.onMouseDown, emitMouse),
      onTouchStart: callAll(props.onTouchStart, emitTouch),
    }
  }

  render() {
    const {
      getRailProps,
      props: { getEventData, activeHandleID, children },
    } = this

    const renderedChildren = children({
      getEventData,
      activeHandleID,
      getRailProps,
    })
    return renderedChildren && React.Children.only(renderedChildren)
  }
}

Rail.propTypes = {
  /** @ignore */
  getEventData: PropTypes.func,
  /** @ignore */
  activeHandleID: PropTypes.string,
  /** @ignore */
  emitMouse: PropTypes.func,
  /** @ignore */
  emitTouch: PropTypes.func,
  /**
   * A function to render the rail. Note: `getEventData` can be called with an event and get the value and percent at that location (used for tooltips etc). `activeHandleID` will be a string or null.  Function signature: `({ getEventData, activeHandleID, getRailProps }): element`
   */
  children: PropTypes.func.isRequired,
}

export default Rail
