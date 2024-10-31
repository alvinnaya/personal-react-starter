import React, { useContext,useRef } from 'react'
import { DropContext } from './DropContainerContext';



interface Props {
    children?: React.ReactNode;
    number: number;
  }


  const DropContent: React.FC<Props> = ({children, number})=> {
    const context= useContext(DropContext)
    if (!context) {
        throw new Error('DropButton must be used within a DropProvider');
      }
      const { state, setState, } = context;
      const menuRef =  useRef<(HTMLDivElement | null)[]>([]);


  return (
    <div 
      className={`${state == number? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none "} 
      transition-all duration-300`}>
        {children}
    </div>
  )
}

export default DropContent;
