'use client';
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'; 

const Magnetic = ({children}) => {
    
    const ref = useRef(null);

    useEffect(()=>{

        const xTo = gsap.quickTo(ref.current, "x", {duration: 0.5, ease: "elastic.out(0.5, 0.3)"})
        const yTo = gsap.quickTo(ref.current, "y", {duration: 0.5, ease: "elastic.out(0.5, 0.3)"})
    
        const mousemove = (e) => {
          const {clientX , clientY} = e;
          const {width, height, left, top} = ref.current.getBoundingClientRect();
          const x = clientX - (left + width/2);
          const y = clientY - (top + height/2);
          xTo(x)
          yTo(y)
        }
    
        const mouseleave = (e) => {
          // gsap.to(ref.current,{x: 0, duration:0.5})
          // gsap.to(ref.current,{y: 0, duration:0.5})
          xTo(0)
          yTo(0)
        }
    
        ref.current.addEventListener("mousemove",mousemove)
        ref.current.addEventListener("mouseleave",mouseleave)
    
        return () => {
          ref.current.removeEventListener("mousemove", mousemove)
          ref.current.removeEventListener("mouseleave", mouseleave)
        }
      },[]) 
  return (
    React.cloneElement(children,{ref})
  )
}

export default Magnetic
