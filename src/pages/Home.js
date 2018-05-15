import React from 'react'
import { Helmet } from 'react-helmet'
import TodoShowNum from '../components/TodoShowNum'
const HomePage = () => {
  const content = {
    title: 'Welcome to Racheli & Meirav project',
    article: 'the numbers task is:'
  }

  return [
    <Helmet>
      <meta name="description" content={content.article} />
    </Helmet>,
    <main className="p-home">
      <h3 className="p-home__title">{content.title}</h3>
      <article className="p-home__article">{content.article}</article>
      <TodoShowNum />
    </main>
  ]
}

export default HomePage
