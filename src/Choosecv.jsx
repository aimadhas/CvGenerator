import img1 from './assets/1.jpeg'
import img2 from './assets/2.jpeg'
import img3 from './assets/3.jpeg'
import { useState } from 'react'
export default function Choosecv({ setcount, count, hidcvs }){
  const [state,setState] = useState(false)
  const [state1,setState1] = useState(false)
  const [state2,setState2] = useState(false)
  function changeState(){
    if(state == false){
      setState(true)
      setState1(false)
      setState2(false)
      setcount(1)
      console.log(count)
    }else{
      setState(false)
      setcount(0)

    }
  }
  function changeState1(){
    if(state1 == false){
      setState1(true)
      setState(false)
      setState2(false)
      setcount(2)
      console.log(count)

    }else{
      setState1(false)
      setcount(0)

    }
  }
  function changeState2(){
    if(state2 == false){
      setState2(true)
      setState1(false)
      setState(false)
      console.log(count)

      setcount(3)
    }else{
      setState2(false)
      setcount(0)
    }
  }
  return (
    <div id="cv" className="w-full  rounded-2xl my-5"> 
    <h1 className='text-center text-[50px] my-7'>Choose your CV style</h1>
    <div className="w-full flex items-center justify-center gap-9 rounded-2xl my-3">
      <div className='border-[1px] border-black px-4  z-50 relative cursor-pointer' onClick={changeState}>
        <img src={img1} alt="cv" className='w-[350px] z-0 cursor-pointer ' onClick={changeState}/>
        <div className={`w-full h-full  ${state && "bg-[#89e58249]"} z-40 absolute top-0 left-0`}></div>
      </div>
      <div className='border-[1px] border-black px-4 py-3 cursor-pointer relative' onClick={changeState1}>
        <img src={img2} alt="cv" className='w-[350px] cursor-pointer' onClick={changeState1} />
        <div className={`w-full h-full  ${state1 && "bg-[#89e58249]"} z-40 absolute top-0 left-0`}></div>
      </div>
      <div className='border-[1px] border-black px-4 cursor-pointer relative' onClick={changeState2}>
        <img src={img3} alt="cv" className='w-[350px] cursor-pointer' onClick={changeState2} />
        <div className={`w-full h-full  ${state2 && "bg-[#89e58249]"} z-40 absolute top-0 left-0`}></div>
      </div>
    </div>
    {count !== 0 && <button onClick={()=>{hidcvs(true)}} className='w-[300px] text-center py-3 rounded-xl  my-7 bg-green-600 text-white mx-auto cursor-pointer flex justify-center items-center'>Next</button>}
    </div>
  )
}
