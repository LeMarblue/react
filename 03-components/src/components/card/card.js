import React from 'react'


function Card (
  { category,
    title,
    description,
    author,
    publicationDate,
    readTime,
    image
  }
) {
  return (
    <div>
      <div>
        <p>{category}</p>
        <p><strong>{title}</strong></p>
        <p>{description}</p>
        <p>{author}</p>
        <p>{publicationDate}, {readTime}</p>
      </div>
      <div>
        <figure>
          <img alt='card-p' src={image} />
        </figure>
      </div>
    </div>
  )
}
export default Card;
