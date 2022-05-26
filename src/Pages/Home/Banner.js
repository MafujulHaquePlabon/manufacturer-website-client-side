/* import React from 'react';
import picture1 from "./images/pic1.webp"
import picture2 from "./images/pic2.png"
import picture3 from "./images/pic3.png"
import picture4 from "./images/pic4.png"
import picture5 from "./images/pic5.webp"

const Banner = () => {
    return (

        <div className="">
            
        <div  style={{height:"500px"}} className="carousel w-full">
<div  id="item1" className="carousel-item  w-full">

 
<div  className="grid  grid-cols-2">
 <div  >
 <div className="hero  bg-base-200">
  <div className="hero-content text-center">
    <div style={{height:"500px"}} className="max-w-md">
    <img className="mask mask-hexagon mx-auto" src={picture1} />
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
 </div>
 <div>
 <img style={{height:"532px"}} src={picture1} className="w-full " />
 </div>
</div>
</div> 
<div id="item2" className="carousel-item w-full">
<div  className="grid grid-cols-2">
 <div >
 <div className="hero  bg-base-200">
  <div className="hero-content text-center">
    <div style={{height:"500px"}} className="max-w-md">
    <img className="mask mask-hexagon mx-auto" src={picture2} />
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
 </div>
 <div>
 <img style={{height:"532px"}} src={picture2} className="w-full " />
 </div>
</div>
</div> 
<div id="item3" className="carousel-item w-full">
<div  className="grid grid-cols-2">
 <div >
 <div className="hero bg-base-200">
  <div className="hero-content text-center">
    <div style={{height:"500px"}} className="max-w-md">
    <img className="mask mask-hexagon mx-auto" src={picture3} />
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
 </div>
 <div>
 <img style={{height:"532px"}} src={picture3} className="w-full " />
 </div>
</div>
</div> 
<div id="item4" className="carousel-item w-full">
<div  className="grid grid-cols-2">
 <div >
 <div className="hero  bg-base-200">
  <div className="hero-content text-center">
    <div style={{height:"500px"}} className="max-w-md">
    <img className="mask mask-hexagon mx-auto" src={picture4} />
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
 </div>
 <div>
 <img style={{height:"532px"}} src={picture4} className="w-full " />
 </div>
</div>
</div> 
<div id="item5" className="carousel-item w-full">
<div  className="grid grid-cols-2">
 <div >
 <div className="hero bg-base-200">
  <div className="hero-content text-center">
    <div style={{height:"500px"}} className="max-w-md">
    <img className="mask mask-hexagon mx-auto" src={picture5} />
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
 </div>
 <div>
 <img style={{height:"532px"}} src={picture5} className="w-full " />
 </div>
</div>
</div>
</div> 
<div className="flex justify-center w-full py-5 gap-2">
<a href="#item1" className="btn btn-xs font-bold">1</a> 
<a href="#item2" className="btn btn-xs font-bold">2</a> 
<a href="#item3" className="btn btn-xs font-bold">3</a> 
<a href="#item4" className="btn btn-xs font-bold">4</a>
<a href="#item5" className="btn btn-xs font-bold">5</a>
</div>
    </div>
       
    );
};

export default Banner; 


 */

import React from "react";
import picture1 from "./images/pic1.webp";
import picture2 from "./images/pic2.png";
import picture3 from "./images/pic3.png";
import picture4 from "./images/pic4.png";
import picture5 from "./images/pic5.webp";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item  w-full">
          <img style={{ height: "500px" }} src={picture1} className="w-full " />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img style={{ height: "500px" }} src={picture2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img style={{ height: "500px" }} src={picture3} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img style={{ height: "500px" }} src={picture4} className="w-full" />
        </div>
        <div id="item5" className="carousel-item w-full">
          <img style={{ height: "500px" }} src={picture5} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn  btn-accent text-orange-800 font-bold btn-xs">
         <span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg></span>
        </a>
        <a href="#item2" className="btn  btn-accent text-orange-800 font-bold btn-xs">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg>
        </a>
        <a href="#item3" className="btn  btn-accent text-orange-800 font-bold btn-xs">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg>
        </a>
        <a href="#item4" className="btn btn-accent text-orange-800 font-bold btn-xs">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg>
        </a>
        <a href="#item5" className="btn  btn-accent text-orange-800 font-bold btn-xs">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg>
        </a>
      </div>
    </div>
  );
};

export default Banner;
