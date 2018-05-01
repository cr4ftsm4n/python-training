import React from 'react'
import Link from 'gatsby-link'

const Vimeo = () => (
  <div className="container">
    <div
      style={{
        position: 'relative',
        padding: '56.25% 0 0 0',
      }}
    >
      <iframe
        src="https://player.vimeo.com/video/266986347"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        allowFullScreen
      />
    </div>
    <script src="https://player.vimeo.com/api/player.js" />{' '}
    <p>
      <a href="https://vimeo.com/266986347">2018-04-26_21-44-50</a> from{' '}
      <a href="https://vimeo.com/cr4ftsm4n">cr4ftsm4n</a> on{' '}
      <a href="https://vimeo.com">Vimeo</a>.
    </p>
  </div>
)

export default Vimeo
