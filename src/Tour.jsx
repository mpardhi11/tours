import React, { useState } from "react";

export const Tour = ({ id, image, info, name, price, removeTour }, props) => {
  console.log("file: Tour.jsx:4 ~ Tour ~ props", props.removeTour);
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? `Read More` : "Read Less"}
        </button>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};
