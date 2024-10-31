import React, { useRef, useState } from 'react'
import DropButton from '../functional/Dropdown/DropButton'
import DropContainerContext from '../functional/Dropdown/DropContainerContext'
import DropContent from '../functional/Dropdown/DropContent'


export default function MenuEditor() {

    const [number ,setNumber] = useState<number | undefined>(undefined)
    const rightButtonRef = useRef<HTMLDivElement>(null);
    const leftButtonRef = useRef<HTMLDivElement>(null);
    





  return (
    <>
      <DropContainerContext autoClose={true} setNum={setNumber} anotherRef={[ rightButtonRef, leftButtonRef]}>
            
            <div 
              className='pointer-events-auto md:h-[95%] md:w-[3rem] w-[100%] bg-gray-600 h-[4rem] rounded-lg 
              flex md:flex-col md:items-center md:justify-normal  justify-center p-2 place-items-center'>

                    <DropButton number={1} setNumber={setNumber}>
                    <div 
                      className={`md:w-[2rem] md:h-[2rem] h-[3rem] w-[3rem] rounded-lg  m-2 ${number==1? "bg-gray-700": "bg-gray-800"}`}>

                      </div>
                    </DropButton>

                    <DropButton number={2} setNumber={setNumber}>
                    <div 
                      className={`md:w-[2rem] md:h-[2rem] h-[3rem] w-[3rem] rounded-lg  m-2 ${number==2? "bg-gray-700": "bg-gray-800"}`}>

                      </div>
                    </DropButton>

                    <DropButton number={3} setNumber={setNumber}>
                    <div 
                      className={`md:w-[2rem] md:h-[2rem] h-[3rem] w-[3rem] rounded-lg  m-2 ${number==3? "bg-gray-700": "bg-gray-800"}`}>

                      </div>
                    </DropButton>

                    <DropButton number={4} setNumber={setNumber}>
                    <div 
                      className={`md:w-[2rem] md:h-[2rem] h-[3rem] w-[3rem] rounded-lg  m-2 ${number==4? "bg-gray-700": "bg-gray-800"}`}>

                      </div>
                    </DropButton>
                      
                   
            </div>
            
            <div 
                className=' md:w-[16rem] md:h-[95%] w-[100%] h-[16rem] relative md:ml-1 mb-1'>
                  <DropContent number={1}>
                    <div  className='bg-gray-100 rounded-md w-full h-full absolute'>

                    </div>
                  </DropContent>
                  <DropContent number={2}>
                    <div className='bg-gray-200 rounded-md w-full h-full absolute'>

                    </div>
                  </DropContent>
                  <DropContent number={3}>
                    <div className='bg-gray-600 rounded-md w-full h-full absolute'>

                    </div>
                  </DropContent>
                  <DropContent number={4}>
                    <div className='bg-gray-600 rounded-md w-full h-full absolute'>

                    </div>
                  </DropContent>
            </div>
            
            
            </DropContainerContext>
    
    
    </>
  )
}
