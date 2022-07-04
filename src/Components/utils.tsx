import { useEffect, useState } from "react";
import Member1 from "../Assets/Images/Member1.svg";
import Member2 from "../Assets/Images/Member2.svg";
import Member3 from "../Assets/Images/Member3.svg";
import Member4 from "../Assets/Images/Member4.svg";
import Member5 from "../Assets/Images/Member5.svg";
import Member6 from "../Assets/Images/Member6.svg";


export const membersPictures = [
    {
        image: Member1
    },
    {
        image: Member2
    },
    {
        image: Member3
    },
    {
        image: Member4
    },
    {
        image: Member5
    },
    {
        image: Member6
    }
]

export const membersMobilePictures = [
    {
        image: Member1,
        about: 'Tope is an amazing product manager and helps us improve our team efficiency by 50%' 
    },
    {
        image: Member2,
        about: 'Talk about bring professional to word professional. Highly recommend'
    },
    {
        image: Member3,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices.'
    }
]

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }
  
  export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }