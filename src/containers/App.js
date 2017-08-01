import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { change } from '../actions/Checkboxes'
import App from '../components/App'

export default connect()(App)
