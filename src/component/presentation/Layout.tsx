import React, { useRef, useState } from 'react'
import MenuEditor from './MenuEditor'
import CanvasEditor from './CanvasEditor'

export default function Layout() {

 
  const [page, setPage] = useState<number>(0);
  const scrollable = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0);
  const [lastTouchX, setLastTouchX] = useState(0);

  // Handle the start of the touch event
  const handleTouchStart = (e: React.TouchEvent) => {
    console.log("last Touch", e.touches[0].clientX)
    setLastTouchX(e.touches[0].clientX); // Store the initial touch position
  };

  // Handle the movement during the touch event
  const handleTouchMove = (e: React.TouchEvent) => {
    const currentTouchX = e.touches[0].clientX;
    console.log("currentTouch", currentTouchX)
    const deltaX = currentTouchX - lastTouchX; // Calculate how much the finger has moved
    setLastTouchX(currentTouchX); // Update the last touch position
    setTranslateX((prevTranslateX) => prevTranslateX + deltaX*2); // Move the element
  };


  const handlePage = (NewPage:number) =>{
    const scrollElement = scrollable.current;
    
    if(scrollElement?.scrollLeft !== undefined && scrollElement?.scrollWidth ){
    
      const contentLength = scrollElement?.scrollWidth / 4
      console.log("add", NewPage);
      console.log("scroll", contentLength * NewPage)
      scrollElement?.scrollTo({
        left: contentLength * NewPage, // Scroll 100px to the right
        behavior: 'smooth', // Optional smooth scrolling
      })
    setPage(NewPage)

    }
  }




  return (
<>
<div className='w-full h-full flex flex-col'>

    <div className='w-full h-[3rem] bg-gray-700'>
    </div>


    <div className='bg-gray-700 w-full h-full flex flex-col-reverse md:flex-row relative'>

    {/* main menu Editor */}
        <div className='pointer-events-none z-[1000] bg-transparent
         md:h-full md:w-[50%] w-full h-[50%] flex md:flex-row flex-col-reverse p-2 md:items-center md:justify-normal absolute'>
           <MenuEditor>

           </MenuEditor>
            
        </div>

    {/* main editor canvas */}
       <CanvasEditor>

       </CanvasEditor>

    </div>
</div>
  
  
        </>
   
  )
}
