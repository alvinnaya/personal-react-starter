import React, { createContext, useState,useEffect,useRef } from 'react';
import { node } from 'webpack';
// Membuat context


interface Props {
    children: React.ReactNode | any;
    autoClose?: boolean;
    setClose?: (value: number|undefined|string) => void;
    setNum?: (value: number|undefined) => void;
    anotherRef?: React.RefObject<(HTMLDivElement | null)>[];
  }
interface context{
  state: number| undefined;
  setState: (value: number|undefined) => void;
  buttonRef?: React.RefObject<(HTMLDivElement | null)[]>;
  menuRef?: React.RefObject<HTMLDivElement>;
}


export const DropContext = createContext<context | null | undefined>(undefined)





const DropContainerContext: React.FC<Props> = ({children,autoClose=false,setClose,setNum,anotherRef})=> {

const [state,setState] = useState<number | undefined>(undefined);
const buttonRef = useRef<(HTMLDivElement | null)[]>([]);
const menuRef = useRef<HTMLDivElement>(null);


useEffect(() => {

  const newChild = React.Children.map(children, (child, index) => {
    const newProps = { ref: buttonRef.current[index]};
    return React.cloneElement(child, newProps);
  })

  console.log(newChild)
  console.log("selesai render")
  if(autoClose){


    const handleClickOutside = (event: MouseEvent) => {
     

      const target = event.composedPath()
      console.log("buttonref", buttonRef)
      console.log("anotherref", anotherRef)
      if(buttonRef.current?.some(child => child?.contains(target[0] as Node)) || anotherRef?.some(child => child?.current?.contains(target[0] as Node))){
          console.log("active")
      }else{
        setState(undefined); // Close dropdown
        if (setNum) {
          setNum(undefined); // Handle case when setNumber is defined
        }
      }
      
    
      // buttonRef.current?.map((ref, index)=>{
        
      //   console.log(ref?.contains(target[0] as Node))
      //   if (!ref?.contains(target[0] as Node)) {
      //     console.log("active")
          
      //   }else{
      //     console.log("not active")
      //     setState(undefined); // Close dropdown
      //     if (setNum) {
      //       setNum(undefined); // Handle case when setNumber is defined
      //     }
      //   }
      // })
    
      // const target = event.composedPath()
      // console.log("e.c",target[0])
      // console.log("e.target",buttonRef.current)
      // console.log(buttonRef.current?.contains(target[0] as Node))
      
    };
  
    // Add event listener to detect clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };


  }
  
}, []);








  return (
   <>
    <DropContext.Provider value={{state, setState, buttonRef,menuRef}} >
      
      {
        React.Children.map(children, (child, index) => {
          const newProps = {
            ref: (el: HTMLDivElement | null) => {
              buttonRef.current[index] = el;
            },
          };
          return React.cloneElement(child, newProps);
        })
        
      }
      
    </DropContext.Provider>
   </>
  )
}



export default DropContainerContext;