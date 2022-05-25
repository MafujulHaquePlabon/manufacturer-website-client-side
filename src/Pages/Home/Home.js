import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import CarMItems from './CarMItems/CarMItems';


const Home = () => {
    return (
  <div>
       <Banner></Banner>
       <CarMItems></CarMItems>
   <Footer></Footer>
  </div>
    );
};

export default Home;