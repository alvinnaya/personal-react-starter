import React from 'react'



interface props{
    children?:  React.ReactNode;
}




const Card: React.FC<props> = ({children})=> {
  return (
    <>
    
     
    <div 
    className='w-[24rem] h-[30rem] bg-slate-400 flex-none '>
             {children}
     </div>
    
    </>
  )
}
export default Card