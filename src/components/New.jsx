import React from 'react'

const New = ({image, title, date, text, link}) => {
  return (
    <>
    <div className="news">
        <figure><img src={image} alt="" /></figure>
        <p className="news-title">{title}
        </p>
        <span className="news-data">{date}</span>
        <p className="news-text">{text}
        </p>
        <a href="#" className="news-link">{link}</a>
    </div>
    </>
  )
}

export default New