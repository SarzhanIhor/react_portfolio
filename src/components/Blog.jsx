import React from 'react'
import {news} from "../constants/data"
import New from './New'

const Blog = () => {
    // console.log(news);
  return (
    <section className="blog">
            <span className="inner-subtitle blog-subtitle">MY ARTICLES</span>
            <h2 className="inner-title blog-title">Personal Blog</h2>
            <div className="container blog-wrapper">
                {
                    news.map(item => {
                        return (
                            <New key={item.id} {...item}/>
                        )
                    })
                }
            </div>
        </section>
  )
}

export default Blog