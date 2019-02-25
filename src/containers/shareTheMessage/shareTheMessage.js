import React, { Component, Fragment } from 'react'

import Navigation from 'components/navigation/navigation'

import { shareTheMessageSections } from '../../data'
import './section.scss'

class ShareTheMessage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Fragment>
        <div className="shareTheMessageContainer" id="shareTheMessage">
          <Navigation />
          {shareTheMessageSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default ShareTheMessage
