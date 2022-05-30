import React from 'react';
import { useNavigate } from 'react-router';
import useItems from '../../../hooks/useItems';
import CarMItem from '../CarMItems/CarMItem';
import "./CarMItem"


const CarMItems = () => {
    const [items,setItems]= useItems();
   
    return (
      <div>
          <h2 className="mt-5  text-xl font-bold text-center my-5 ">Our <span className="text-orange-800">Car Parts Manufacturer</span> Products:</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-10">
           {
               items.map(item=>
                <CarMItem key={item._id} item={item}></CarMItem>).slice(0,6)
               
           }
         
       </div>
      </div>
    );
};

export default CarMItems;











/* import React from 'react';
import useItems from '../../../hooks/useItems';

const CarMItems = () => {
   const [items,setItems]= useItems();
    return (
        <div>
            {
                items.map(item=>console.log(item))
            }
        </div>
    );
};

export default CarMItems; */