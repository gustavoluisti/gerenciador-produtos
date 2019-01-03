import React, { Component } from 'react'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

function ComponentTeste(WrappedComponent) {
  class Wrapper extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  Wrapper.displayName = `ComponentTeste(${getDisplayName(WrappedComponent)})`
  return Wrapper
}

export default ComponentTeste
