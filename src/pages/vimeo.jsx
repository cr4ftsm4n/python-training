import React from 'react'
import Link from 'gatsby-link'

const Vimeo = () => (
  <div>
    <section className="section">
      <div className="container">
        <h1 className="title">4/26</h1>
        <iframe
          src="https://player.vimeo.com/video/266986347"
          width="640"
          height="400"
          frameborder="0"
          allowFullScreen
        />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title">travis</h1>
        <iframe
          src="https://player.vimeo.com/video/268998577"
          width="640"
          height="400"
          frameborder="0"
          allowFullScreen
        />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title">Pull Request</h1>
        <iframe
          src="https://player.vimeo.com/video/270117041"
          width="640"
          height="400"
          frameborder="0"
          allowFullScreen
        />
      </div>
    </section>
  </div>
)

export default Vimeo
