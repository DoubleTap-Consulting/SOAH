import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import redLogo from '../../images/redLogo.png'
import backgroundImage from 'images/SOAH_Still18.png'
import RhinoImage from 'images/SOAH_Still2.png'
import ManImage from 'images/SOAH_Still5.png'
import MenImage from 'images/SOAH_Still29.png'
import BabyImage from 'images/SOAH_Still33.png'

import './takeAction.scss'

class TakeActionView extends Component {
  navigateToPage = page => {
    this.props.history.push(`/${page}`)
  }

  render() {
    const { sectionName } = this.props

    return (
      <div className={`${sectionName}`}>
        <img
          src={backgroundImage}
          className={`${sectionName}-background`}
          alt="background"
        />
        <div className={`${sectionName}-header`}>
          <h3 className={`${sectionName}-header-text`}>Take Action</h3>
          <div className={`${sectionName}-images`}>
            <div
              className={`${sectionName}-images-container`}
              onClick={() => this.navigateToPage('share')}
            >
              <img
                src={ManImage}
                className={`${sectionName}-images-image`}
                alt="Man starting"
              />
              <img
                src={redLogo}
                className={`${sectionName}-images-container-logo`}
                alt="logo"
              />
              <h3 className={`${sectionName}-images-container-text`}>
                Share the Message
              </h3>
            </div>
            <div className={`${sectionName}-images-container`}>
              <img
                src={BabyImage}
                className={`${sectionName}-images-image`}
                alt="Mom holding baby"
              />
              <img
                src={redLogo}
                className={`${sectionName}-images-container-logo`}
                alt="logo"
              />
              <h3 className={`${sectionName}-images-container-text`}>
                Use Your Voice
              </h3>
            </div>
            <div className={`${sectionName}-images-container`}>
              <img
                src={RhinoImage}
                className={`${sectionName}-images-image`}
                alt="Rhino in field"
              />
              <img
                src={redLogo}
                className={`${sectionName}-images-container-logo`}
                alt="logo"
              />
              <h3 className={`${sectionName}-images-container-text`}>
                Fund the Cause
              </h3>
            </div>
            <div className={`${sectionName}-images-container`}>
              <img
                src={MenImage}
                className={`${sectionName}-images-image`}
                alt="Men sitting"
              />
              <img
                src={redLogo}
                className={`${sectionName}-images-container-logo`}
                alt="logo"
              />
              <h3 className={`${sectionName}-images-container-text`}>
                Learn More
              </h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TakeActionView)
