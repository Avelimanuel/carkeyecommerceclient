
import React from 'react';

export const Carousel = ({ children, className }) => (
  <div className={`carousel ${className}`}>{children}</div>
);

export const CarouselContent = ({ children }) => (
  <div className="carousel-content">{children}</div>
);

export const CarouselItem = ({ children }) => (
  <div className="carousel-item">{children}</div>
);

export const CarouselPrevious = ({ children, className, ...props }) => (
  <button className={`carousel-previous ${className}`} {...props}>
    {children}
  </button>
);

export const CarouselNext = ({ children, className, ...props }) => (
  <button className={`carousel-next ${className}`} {...props}>
    {children}
  </button>
);
