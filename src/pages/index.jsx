import React, { Component } from 'react'
import Link from 'gatsby-link'
import Particles from 'react-particles-js'

const contents = [
  {
    text: '01 Python介紹',
    href: './01_introduction.html',
  },
  {
    text: '02 開発環境',
    href: './02_開発環境構築.html',
  },
  {
    text: '03 基本类型',
    href: './03_prime_type.html',
  },
  {
    text: '04 基本知識',
    href: './04_variable.html',
  },
  {
    text: '05 序列',
    href: './05_sequences.html',
  },
  {
    text: '06 集合&字典 ',
    href: './06_sets_and_dictionaries.html',
  },
]

const Background = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 50,
        },
        color: {
          value: '#999',
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: true,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 10,
            size_min: 0.1,
            sync: true,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#999',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      retina_detect: true,
    }}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      // display: 'none',
      paddingTop: '3.25rem',
      height: '100vh',
      width: '100vw',
      // background: '#2e3250',
    }}
  />
)

class IndexPage extends Component {
  render() {
    const width = contents.length / 40 * 100
    return (
      <div>
        <Background />
        <header
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            height: 2,
            borderRadius: 0,
            backgroundColor: '#2cbe4e',
            // backgroundColor: 'tomato',
            width: `${width}vw`,
          }}
        />
        <section className="section">
          <div className="container">
            <div>
              <a href="https://discord.gg/qEuaRu3">
                <img
                  src="https://img.shields.io/discord/437604842299719680.svg?logo=discord&label=discord&colorB=7289DA&style=flat-square"
                  alt="Discord chat"
                  title=""
                />
              </a>
            </div>
            <h1 className="title">目次</h1>
            <ul id="table">
              <li>
                <a href="./plan.html">計画</a>
              </li>
              {contents.map((row, n) => {
                return (
                  <li key={n}>
                    <a href={row.href}>{row.text}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default IndexPage
