import React, { Component } from 'react'
import awfLogo from '../../images/awf.svg'
import Header from '../header'
import SoahLogo from '../../images/SOAH_logo.png'
import ScrollAnimation from 'react-animate-on-scroll'

import Background from 'images/landingPageBackground2.png'

import './landingPageView.scss'

class LandingPageView extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}-view`}>
        <img
          src={Background}
          className="background"
          alt="Man hunting in safari"
        />
        <div className="header-container">
          <Header />
        </div>
        <div className="association-container">
          <p className="association-text">in association with</p>
          <img alt="Africa Wildlife Foundation logo" src={awfLogo} />
        </div>
        <div className="credits-container">
          <h1 className="credits-text">
            from executive producer sir richard branson
          </h1>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            delay={5}
            className="credits-text-border"
          >
            <h2 className="credits-text--bottom">a film by toby wosskow</h2>
          </ScrollAnimation>
        </div>
        <div className="movieTitle-container">
          <img className="movieTitle-image" src={SoahLogo} alt="Movie Logo" />
        </div>
      </div>
    )
  }
}

export default LandingPageView
