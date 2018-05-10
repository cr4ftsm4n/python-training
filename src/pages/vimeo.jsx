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
    <div
      style={{
        position: 'relative',
        padding: '56.25% 0 0 0',
      }}
    >
      <iframe
        src="https://player.vimeo.com/video/268998577"
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
  </div>
)

export default Vimeo
