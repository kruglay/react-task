import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { change } from '../actions/Checkboxes'
import App from '../components/App'

// const mapStateToProps = (state) => {
//   return {
//     checkboxes: state.checkboxReducer
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     change: (index, value) => {
//       dispatch(change(index, value))
//     }
//   }
// }

export default connect()(App)
