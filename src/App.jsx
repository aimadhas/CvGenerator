import { useState } from 'react'
import Header from './Component/Header'
import Section1 from './Component/Section1'
import Generatcv from './Features/Generatcv'

function App() {
const [showcv, setshowcv] = useState(false)
  return (
    <>
    {
!showcv &&
    <div className='py-[10px] px-[20px]'>
    <Header></Header>
    <Section1 setshowcv={setshowcv}></Section1>
    </div>
    }
    {showcv && 
      <Generatcv setshowcv={setshowcv}></Generatcv>
    }
    </>
  )
}

export default App
