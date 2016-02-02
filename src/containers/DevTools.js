import React, { Component, PropTypes } from 'react'
import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'

export default createDevTools(
    <DockMonitor toggleVisibilityKey="H"
                 changePositionKey="W">
        <LogMonitor theme="tomorrow"/>
    </DockMonitor>
)