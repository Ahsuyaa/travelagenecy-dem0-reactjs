import React from 'react'
import TopDestination from '../../components/topdestination/TopDestination'
import image from "../../images/tal.jpg";
const destinations = [
    { id: 1,pname:"pokhara", image: image, alt: 'Destination 1' },
    { id: 2,pname:"pokhara", image: image, alt: 'Destination 2' },
    { id: 3,pname:"pokhara", image: image, alt: 'Destination 3' },
  
  ];
const Topdestinations = () => {
  return (
   <>
   <TopDestination destinations={destinations}/>
   </>
  )
}

export default Topdestinations