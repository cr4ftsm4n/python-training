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
              <li>
                <a
                  href="https://colab.research.google.com/notebooks/welcome.ipynb"
                  target="_blank"
                >
                  Google Colaboratory
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
              <li>
                <a
                  href="https://services.github.com/on-demand/downloads/zh_CN/github-git-cheat-sheet/"
                  target="_blank"
                >
                  Git Cheat Sheet(中国語)
                </a>
              </li>
              <li>
                <a
                  href="https://help.github.com/articles/creating-a-pull-request-from-a-fork/"
                  target="_blank"
                >
                  creating-a-pull-request-from-a-fork(英語)
                </a>
              </li>
              <li>
                <a href="https://regex101.com/" target="_blank">
                  regex101(英語)
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
          <h1 className="title">培训相关</h1>
          <h2 className="subtitle">
            <ul>
              <li>
                <a href="https://www.twitch.tv/cr4ftsm4n" target="_blank">
                  一个人的表演(twitch)
                </a>
              </li>
              <li>
                <a
                  href="https://notebooks.azure.com/cr4ftsm4n/libraries/python-training"
                  target="_blank"
                >
                  互动教程(笔记本)
                </a>
              </li>
              <li>
                <a href="https://github.com/cr4ftsm4n" target="_blank">
                  仓库大门(Github)
                </a>
              </li>
              <li>
                <a
                  href="https://notebooks.azure.com/cr4ftsm4n/libraries/homeworks"
                  target="_blank"
                >
                  课后作业(笔记本)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/cr4ftsm4n/python-homework/issues"
                  target="_blank"
                >
                  课后作业(管理)
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
