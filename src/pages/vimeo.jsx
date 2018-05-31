import React from 'react'
import Link from 'gatsby-link'

const Vimeo = () => (
  <div>
    <section className="section">
      <div className="columns">
        <div className="column">
          <h1 className="title">4/26</h1>
          <iframe
            src="https://player.vimeo.com/video/266986347"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="column">
          <h1 className="title">travis</h1>
          <iframe
            src="https://player.vimeo.com/video/268998577"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="column">
          <h1 className="title">Pull Request</h1>
          <iframe
            src="https://player.vimeo.com/video/270117041"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="column">
          <h1 className="title">5/24</h1>
          <iframe
            src="https://player.vimeo.com/video/271676192"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  </div>
)

export default Vimeo
