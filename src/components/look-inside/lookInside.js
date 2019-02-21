import React, { Component } from 'react'

import ImageCarousel from 'components/image-carousel/imageCarousel'

import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import LinkedIn from 'components/social/linkedin'
import Email from 'components/social/email'
import Tumblr from 'components/social/tumblr'

import BransonQuote from 'images/bransonQuote.png'
import Image1 from 'images/look-inside/_mg_0047.jpg'
import Image2 from 'images/look-inside/_mg_0048.jpg'
import Image3 from 'images/look-inside/_mg_0049.jpg'
import Image4 from 'images/look-inside/_mg_0123.jpg'
import Image5 from 'images/look-inside/_mg_0294.jpg'
import Image6 from 'images/look-inside/_mg_0308.jpg'
import Image7 from 'images/look-inside/_mg_0635.jpg'
import Image8 from 'images/look-inside/_mg_0676.jpg'
import Image9 from 'images/look-inside/_mg_0727.jpg'
import Image10 from 'images/look-inside/_mg_0776.jpg'
import Image11 from 'images/look-inside/_mg_0915.jpg'
import Image12 from 'images/look-inside/img_0010.jpg'
import Image13 from 'images/look-inside/img_0169.jpg'
import Image14 from 'images/look-inside/img_0203.jpg'
import Image15 from 'images/look-inside/img_0306.jpg'
import Image16 from 'images/look-inside/img_0409.jpg'
import Image17 from 'images/look-inside/img_0492.jpg'
import Image18 from 'images/look-inside/img_0502.jpg'
import Image19 from 'images/look-inside/img_0570.jpg'
import Image20 from 'images/look-inside/img_0575.jpg'
import Image21 from 'images/look-inside/img_0594.jpg'
import Image22 from 'images/look-inside/img_9994.jpg'

import './lookInside.scss'

class LookInside extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.images = [
      {
        src: Image1,
        alt: 'Look Inside 1',
      },
      {
        src: Image2,
        alt: 'Look Inside 2',
      },
      {
        src: Image3,
        alt: 'Look Inside 3',
      },
      {
        src: Image4,
        alt: 'Look Inside 4',
      },
      {
        src: Image5,
        alt: 'Look Inside 5',
      },
      {
        src: Image6,
        alt: 'Look Inside 6',
      },
      {
        src: Image7,
        alt: 'Look Inside 7',
      },
      {
        src: Image8,
        alt: 'Look Inside 8',
      },
      {
        src: Image9,
        alt: 'Look Inside 9',
      },
      {
        src: Image10,
        alt: 'Look Inside 10',
      },
      {
        src: Image11,
        alt: 'Look Inside 11',
      },
      {
        src: Image12,
        alt: 'Look Inside 12',
      },
      {
        src: Image13,
        alt: 'Look Inside 13',
      },
      {
        src: Image14,
        alt: 'Look Inside 14',
      },
      {
        src: Image15,
        alt: 'Look Inside 15',
      },
      {
        src: Image16,
        alt: 'Look Inside 16',
      },
      {
        src: Image17,
        alt: 'Look Inside 17',
      },
      {
        src: Image18,
        alt: 'Look Inside 18',
      },
      {
        src: Image19,
        alt: 'Look Inside 19',
      },
      {
        src: Image20,
        alt: 'Look Inside 20',
      },
      {
        src: Image21,
        alt: 'Look Inside 21',
      },
      {
        src: Image22,
        alt: 'Look Inside 22',
      },
    ]
  }

  render() {
    return (
      <div className="lookInside">
        <div className="lookInside-topSection">
          <div className="lookInside-topSection-left" />
          <div className="lookInside-topSection-right">
            <span className="lookInside-topSection-line" />
            <h3 className="lookInside-topSection-header">Behind the Scenes</h3>
            <h4 className="lookInside-topSection-subheader">
              Spread the word. Share the BTS Film:
            </h4>
            <div className="lookInside-topSection-row">
              <Instagram
                href="https://www.instagram.com/sidesofahorn"
                width="15px"
                height="15px"
                fill="#fff"
              />
              <Facebook
                href="https://www.facebook.com/sidesofahorn/"
                width="15px"
                height="15px"
                fill="#fff"
              />
              <Twitter
                href="https://twitter.com/sidesofahorn"
                width="15px"
                height="15px"
                fill="#fff"
              />
              <LinkedIn
                href="https://linkedin.com/in/sidesofahorn"
                width="15px"
                height="15px"
                fill="#fff"
              />
              <Email
                href="https://linkedin.com/in/sidesofahorn"
                width="15px"
                height="15px"
                fill="#fff"
              />
              <Tumblr
                href="https://tumbler.com/in/sidesofahorn"
                width="15px"
                height="15px"
                fill="#fff"
              />
            </div>
          </div>
        </div>
        <img src={BransonQuote} alt="background" className="lookInside-quote" />

        <ImageCarousel images={this.images} />
      </div>
    )
  }
}

export default LookInside