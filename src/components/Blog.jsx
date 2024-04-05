import React from 'react'
import images from "../assets/images"

const Blog = () => {
  return (
    <section className="blog">
            <span className="inner-subtitle blog-subtitle">MY ARTICLES</span>
            <h2 className="inner-title blog-title">Personal Blog</h2>
            <div className="container blog-wrapper">
                <div className="news">
                    <figure><img src={images.thumbnail_1} alt="" /></figure>
                    <p className="news-title">How to prototype in figma
                    </p>
                    <span className="news-data">July 15, 2021</span>
                    <p className="news-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec
                        ante scelerisque laoreet. Fusce finibus ...
                    </p>
                    <a href="" className="news-link">Continue Reading </a>
                </div>
                <div className="news">
                    <figure><img src={images.thumbnail_2} alt="" /></figure>
                    <p className="news-title">Being more productive with Notion.
                    </p>
                    <span className="news-data">Aug 8, 2020
                    </span>
                    <p className="news-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec
                        ante scelerisque laoreet. Fusce finibus ...
                    </p>
                    <a href="" className="news-link">Continue Reading </a>
                </div>
                <div className="news">
                    <figure><img src={images.thumbnail_3} alt=""/></figure>
                    <p className="news-title">Beginners guide to adobe illustrator
                    </p>
                    <span className="news-data">Feb 19, 2021
                    </span>
                    <p className="news-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec
                        ante scelerisque laoreet. Fusce finibus ...
                    </p>
                    <a href="" className="news-link">Continue Reading </a>
                </div>
            </div>
        </section>
  )
}

export default Blog