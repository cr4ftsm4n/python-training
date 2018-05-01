import React from 'react'
import Link from 'gatsby-link'

const Resource = () => (
  <div className="container">
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">开发工具</h1>
          <h2 className="subtitle">
            <ul>
              <li>
                <a href="https://www.jetbrains.com/pycharm/" target="_blank">
                  Pycharm下载
                </a>
              </li>
              <li>
                <a href="https://notebooks.azure.com/" target="_blank">
                  Microsoft Azure Notebooks
                </a>
              </li>
            </ul>
          </h2>
        </div>
      </div>
    </section>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">实用工具</h1>
          <h2 className="subtitle">
            <ul>
              <li>
                <a href="https://docs.pipenv.org/" target="_blank">
                  pipenv
                </a>
              </li>
              <li>
                <a
                  href="https://www.jianshu.com/p/20e82ddb37cb"
                  target="_blank"
                >
                  Markdown 简易入门教程
                </a>
              </li>
            </ul>
          </h2>
        </div>
      </div>
    </section>
  </div>
)

export default Resource
