import React from 'react'
import { connect } from 'react-redux'
import { getInvites } from '../../data/invite/actions'

class Invites extends React.Component {
  render () {
    return (
      <p>Invites</p>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Invites)
