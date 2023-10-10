import React from 'react';

const PrevArrow = ({ onClick }:any) => {
  return (
    <button
    aria-label="Previous"

     className="slick-arrow slick-prev" onClick={onClick}>
      Previous
    </button>
  );
};

const NextArrow = ({ onClick }:any) => {
  return (
    <button
    aria-label="Next"

     className="slick-arrow slick-next 
    " onClick={onClick}>
      Next
    </button>
  );
};

export { PrevArrow, NextArrow };