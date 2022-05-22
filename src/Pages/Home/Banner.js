import React from 'react';
import picture1 from "./images/pic1.webp"
import picture2 from "./images/pic2.webp"
import picture3 from "./images/pic3.webp"
import picture4 from "./images/pic4.webp"
import picture5 from "./images/pic5.webp"

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
  <div id="item1" class="carousel-item w-full">
    <img src={picture1} class="w-full" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src={picture2} class="w-full" />
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img src={picture3} class="w-full" />
  </div> 
  <div id="item4" class="carousel-item w-full">
    <img src={picture4} class="w-full" />
  </div>
  <div id="item5" class="carousel-item w-full">
    <img src={picture5} class="w-full" />
  </div>
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
  <a href="#item4" class="btn btn-xs">4</a>
  <a href="#item5" class="btn btn-xs">5</a>
</div>
        </div>
      /*   <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full"/> / 
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a> 
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full"/> / 
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full"/> / 
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full"/> / 
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a> 
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div> */
    );
};

export default Banner;