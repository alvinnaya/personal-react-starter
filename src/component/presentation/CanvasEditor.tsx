import React,{useState, useRef, useEffect} from 'react'
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../ReduxStore/CardObjectStore';
import { addCardPage, removeCardPage, swapItems } from '../../ReduxStore/State/CardObjectState';


export default function CanvasEditor() {

    const [page, setPage] = useState<number>(0);
    const scrollable = useRef<HTMLDivElement>(null)
    const scrollableDivRef = useRef<HTMLDivElement>(null);
    const rightButtonRef = useRef<HTMLDivElement>(null);
    const leftButtonRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);
    const [lastTouchX, setLastTouchX] = useState(0);

    const data = useSelector((state: RootState) => state.card);
    const dispatch = useDispatch();
  
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
  
    const handleSwap = (indexA: number, indexB: number) => {
      if(indexB < 1 || indexB > data.length - 1){
        console.log("tidak bisa")
        
      }else{
        dispatch(swapItems({ indexA, indexB }));
      }
     
    };

    const ChangePage = (currentPage:number) =>{
      if(currentPage < 0 || currentPage > data.length ){

      }else{
      setPage(currentPage);
    }
      
    }

    const removePage = (currentPage: number) => {
      if(currentPage < data.length){
        dispatch(removeCardPage(currentPage))
      }else{
        console.log("tidak bisa dihapus")
      }

    }
useEffect(()=>{
  console.log("data",data.length)
},[])






  return (
    <>
    <div 
        className='h-full bg-gray-900 w-full flex justify-center items-center gap-1 m-0'>
          <div ref = {leftButtonRef}
          onClick={()=>{ChangePage(page - 1)}}
          className='w-[2rem] h-[2rem] bg-slate-700 pointer-events-auto'>

          </div>

          <div className='flex relative'>
            
            <div className='w-full md:h-[1.8rem] h-[2.3rem] absolute bottom-[100%] 
            flex flex-row z-[999] items-center justify-between' >
              <div className='flex flex-row items-center justify-center mx-1 gap-1'> 
              <div onClick={()=>{handleSwap(page, page-1)}} className='md:w-[1.2rem] md:h-[1.2rem] w-[1.8rem] h-[1.8rem] bg-slate-300 rounded-full '></div>
              <div onClick={()=>{handleSwap(page, page+1)}} className='md:w-[1.2rem] md:h-[1.2rem] w-[1.8rem] h-[1.8rem] bg-slate-300 rounded-full '></div>


              </div>

              <div onClick={()=>{removePage(page)}}
              className='md:w-[1.2rem] md:h-[1.2rem] w-[1.8rem] h-[1.8rem] bg-slate-300 rounded-full mx-2'></div>
            </div>

            <div  ref={scrollableDivRef} className='flex bg-900  overflow-hidden w-[24rem] bg-transparent'>

               
            <div style={{transform: `translate(-${100*page}%)`, width:`calc(24rem + 0.25rem)`}}
            className={`flex flex-row 
             transition-all duration-300 gap-x-1 `}>

             {
             data.map((item, index)=>(
                    <Card>
                      <div className='w-full h-full flex justify-center items-center'>
                            <div className='w-[5rem] h-[5rem] bg-orange-400 z-auto flex justify-center items-center'>
                              <h1 className='text-xl font-bold'>{`${item.id}`}</h1>
                            </div>
                      </div>
                    </Card> 
             )
                
             )
             }

                      <div className='w-[24rem] h-[30rem] bg-slate-400 flex-none '>
                        <div className='w-full h-full flex justify-center items-center'>
                              <div onClick={()=>{dispatch(addCardPage({id:"new",element:[]}))}} className='w-[5rem] h-[5rem] bg-orange-400 z-auto flex justify-center items-center'>
                                <h1 className='text-xl font-bold'>{`add`}</h1>
                              </div>
                        </div>
                    </div>
              

            </div>
            
          </div>
          </div>
         

          <div ref = {rightButtonRef}
          onClick={()=>{ChangePage(page + 1)}}
          className='w-[2rem] h-[2rem] bg-slate-600 pointer-events-auto'>

          </div>
            
        </div>
    </>
  )
}
