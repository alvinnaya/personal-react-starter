import React, { Children, useContext } from 'react'
import { DropContext } from './DropContainerContext'


interface Props {
    children?: React.ReactNode;
    number: number;
    setNumber?: (value: number | undefined) => void;
  }

const DropButton: React.FC<Props> = ({children, number, setNumber}) => {

    const context= useContext(DropContext)
    if (!context) {
        throw new Error('DropButton must be used within a DropProvider');
      }
    const { state, setState } = context;

    const ToggleActive = ()=>{
        if(state == number){
            setState(undefined)
            if (setNumber) {
              setNumber(undefined); // Handle case when setNumber is defined
            }
        }else{
            setState(number)
            if (setNumber) {
              setNumber(number); // Handle case when setNumber is defined
            }
        }
        
    }


    
    

  return (
    <>
    <div onClick={()=>{ToggleActive(); console.log("state", state)}}  >
        {children}
    </div>
    
    </>
  )
}

export default DropButton
