import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function FaceCards({ data, redirectTo }) {
  const [Data, setData] = useState({ description: "" });

  useEffect(() => {
    setData(data);
  }, []);

  return (
    <>
      {Data ? (
        <Link
          to={`/${redirectTo ? redirectTo : "explore"}/${Data.name}`}
          className='card shadow-lg max-w-450 m-2'>
          <div className='pseudo-card'>
            <img
              className='card-img-top w-50 m-auto justify-content-around'
              src={Data.img}
              alt={Data.description}
            />
            <div className='card-body'>
              <h5 className='card-title underline-text font-weight-bold'>
                {Data.title}
              </h5>
              <p className='card-text'>{Data.description}</p>
              <div className='d-flex align-items-end'>{Data.links}</div>
            </div>
          </div>
        </Link>
      ) : (
        "Loading ..."
      )}
    </>
  );
}

export default FaceCards;
