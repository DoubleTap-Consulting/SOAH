import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

import redLogo from '../../images/redLogo.png?sizes[]=300,sizes[]=400,sizes[]=500'
import RhinoImage from 'images/SOAH_Still2.png?sizes[]=300,sizes[]=400,sizes[]=500'
import ManImage from 'images/SOAH_Still5.png?sizes[]=300,sizes[]=400,sizes[]=500'
import MenImage from 'images/SOAH_Still29.png?sizes[]=300,sizes[]=400,sizes[]=500'
import BabyImage from 'images/SOAH_Still33.png?sizes[]=300,sizes[]=400,sizes[]=500'
import BackgroundImage from 'images/SOAH_Still46.png?sizes[]=512,sizes[]=1024'

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
          srcSet={BackgroundImage.srcSet}
          src={BackgroundImage.src}
          className={`${sectionName}-background`}
          alt="take action background"
        />
        <div className={`${sectionName}-header`}>
          <h3 className={`${sectionName}-header-text`}>Take Action</h3>
          <ScrollAnimation
            animateIn="fadeIn"
            className={`${sectionName}-header-line`}
            duration={2}
            delay={1}
          />
          <div className={`${sectionName}-images`}>
            <div
              className={`${sectionName}-images-container`}
              onClick={() => this.navigateToPage('share')}
            >
              <img
                src={ManImage}
                className={`${sectionName}-images-image`}
                alt="Man starting"
                key={`takeAction-image-manStaring`}
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
            <div
              className={`${sectionName}-images-container`}
              onClick={() => this.navigateToPage('yourVoice')}
            >
              <img
                src={BabyImage}
                className={`${sectionName}-images-image`}
                alt="Mom holding baby"
                key={`takeAction-image-babyImage`}
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
            <div
              className={`${sectionName}-images-container`}
              onClick={() => this.navigateToPage('fundTheCause')}
            >
              <img
                src={RhinoImage}
                className={`${sectionName}-images-image`}
                alt="Rhino in field"
                key={`takeAction-image-rhinoImage`}
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
            <div
              className={`${sectionName}-images-container`}
              onClick={() => this.navigateToPage('learnMore')}
            >
              <img
                src={MenImage}
                className={`${sectionName}-images-image`}
                alt="Men sitting"
                key={`takeAction-image-menSitting`}
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
