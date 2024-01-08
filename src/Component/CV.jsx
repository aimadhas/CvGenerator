import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import  { forwardRef, useState } from 'react';

export default function CV({personalData,education,education2,skils1,skils,langue,langue1,expirence,expirence2,color,cvComponentRef}) {

  return (
    <div ref={cvComponentRef} className='w-full min-h-screen max-h-auto bg-white'>
      {/* div form persoinfo */}
      <div className={`flex items-center text-white w-full min-h-[80px]`} style={{background:color}}>
          {
            personalData.photo &&
        <div className='w-[140px] h-[150px]'>
          <img src={personalData.photo} alt="photo de profil" className='w-full h-full object-cover' />
        </div>
          }
      <div className='py-2 px-2'>
        <div>
          <h1>{personalData.nom} {personalData.prenom}</h1>
          <p className='text-[#ececec]'>{personalData.headline}</p>
        </div>
        <div className='flex gap-6 flex-wrap text-[#ececec]'>
          {personalData.email && 
          <p className='text-[10px]'> <EmailIcon></EmailIcon>{personalData.email}</p>
          }
          {personalData.phone && 
          <p className='text-[10px]'> <PhoneIcon></PhoneIcon>{personalData.phone}</p>
          }
          {
            personalData.adress &&
            <p className='text-[10px]'> <AddLocationIcon></AddLocationIcon>{personalData.adress}</p>
          }
        </div>
      </div>
      </div>
      {/*fin div form persoinfo */}
<div className='w-full flex min-h-[500px]   py-4'>
  <div className='w-[65%] h-full px-4 py-2'>
      {/*div for education */}
      <div className='border-b-[1px] pb-3 border-[#d4d4d4]'>
        <h1 className='text-[20px] ' style={{color:color}}>Education</h1>
        <div>
        {education.map((education, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h1 className="font-bold">{education.education}</h1>
                  <div className="flex gap-1 text-[#6e6e6e]">
                    <p className="text-[10px]">
                      {education.stardatemnt} {education.stardateyrs}
                    </p>
                    <p className="text-[10px]">-</p>
                    <p className="text-[10px]">
                      {education.findatemnt} {education.findateyrs}
                    </p>
                  </div>
                </div>
                <p className="text-[#6e6e6e]">
                  {education.School} , {education.city}
                </p>
                <p>{education.Description}</p>
              </div>
            ))}
            {
              education2.education !== "" &&
              <div>
                <div className="flex justify-between">
                  <h1 className="font-bold">{education2.education}</h1>
                  <div className="flex gap-1 text-[#6e6e6e]">
                    <p className="text-[10px]">
                      {education2.stardatemnt} {education2.stardateyrs}
                    </p>
                    <p className="text-[10px]">-</p>
                    <p className="text-[10px]">
                      {education2.findatemnt} {education2.findateyrs}
                    </p>
                  </div>
                </div>
                <p className="text-[#6e6e6e]">
                  {education2.School}  {education2.city}
                </p>
                <p>{education2.Description}</p>
              </div>
            }
        </div>
      </div>
      {/*fin div for education */}
         {/*div for expirience */}
         <div className='my-2'>
        <h1 className='text-[20px]' style={{color:color}}>Work expirience</h1>
        <div>
        {expirence.map((education, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h1 className="font-bold">{education.expirence}</h1>
                  <div className="flex gap-1 text-[#6e6e6e]">
                    <p className="text-[10px]">
                      {education.stardatemnt} {education.stardateyrs}
                    </p>
                    <p className="text-[10px]">-</p>
                    <p className="text-[10px]">
                      {education.findatemnt} {education.findateyrs}
                    </p>
                  </div>
                </div>
                <p className="text-[#6e6e6e]">
                  {education.workexpirence} , {education.city}
                </p>
                <p>{education.Description}</p>
              </div>
            ))}
            {
              expirence2.expirence !== "" &&
              <div>
                <div className="flex justify-between">
                  <h1 className="font-bold">{expirence2.expirence}</h1>
                  <div className="flex gap-1 text-[#6e6e6e]">
                    <p className="text-[10px]">
                      {expirence2.stardatemnt} {expirence2.stardateyrs}
                    </p>
                    <p className="text-[10px]">-</p>
                    <p className="text-[10px]">
                      {expirence2.findatemnt} {expirence2.findateyrs}
                    </p>
                  </div>
                </div>
                <p className="text-[#6e6e6e]">
                  {expirence2.workexpirence}  {expirence2.city}
                </p>
                <p>{expirence2.Description}</p>
              </div>
            }
        </div>
      </div>
      {/*fin div for expirience */}
  </div>
  <div className='w-[35%] min-h-[500px]  border-l-[1px] border-[#d4d4d4] px-2 py-3'>
    {/* star skils */}
    <div className='border-b-[1px] pb-3 border-[#d4d4d4]'>
      <h1 className='mb-2 font-bold ' style={{color:color}}>Skills</h1>
    {skils1.Skill &&
      <div className='flex flex-col gap-2 my-3'>
          <p className='text-[#6e6e6e]'>{skils1.Skill}</p>
          <div className='w-full h-[6px] bg-[#ececec] my-1 relative'>
            <div className='absolute w-[0%] bg-orange-500 h-full top-0 left-0'></div>
          </div>
        </div>
    }
    {
    skils.map((element)=>(
      <div className='flex flex-col gap-2 my-3'>
          <p className='text-[#6e6e6e]'>{element.Skill}</p>
          <div className='w-full h-[6px] bg-[#ececec] my-1 relative'>
            {element.niveau == "Beginner" &&  <div className='absolute w-[20%]  h-full top-0 left-0' style={{background:color}}></div>}
            {element.niveau == "Intermediate" && <div className='absolute w-[50%]  h-full top-0 left-0' style={{background:color}}></div> }
            {element.niveau == "Advanced" && <div className='absolute w-[75%]  h-full top-0 left-0'  style={{background:color}}></div> }
            {element.niveau == "Expert" && <div className='absolute w-[100%]  h-full top-0 left-0'  style={{background:color}}></div> }
          </div>
        </div>
    ))
    }
    </div>  
    {/* fin skils */}
    {/* star language */}
    <div className='my-4'>
      <h1 className='mb-2 font-bold' style={{color:color}}>Languages</h1>
      {langue1.langue &&
      <div className='flex flex-col gap-2 my-3'>
          <p className='text-[#6e6e6e]'>{langue1.langue}</p>
          <div className='w-full h-[6px] bg-[#ececec] my-1 relative'>
            <div className='absolute w-[0%] bg-orange-500 h-full top-0 left-0'></div>
          </div>
        </div>
    }
    {
    langue.map((element)=>(
      <div className='flex flex-col gap-2 my-3'>
          <p className='text-[#6e6e6e]'>{element.langue}</p>
          <div className='w-full h-[6px] bg-[#ececec] my-1 relative'>
            {element.niveau == "Beginner" &&  <div className='absolute w-[20%]  h-full top-0 left-0'  style={{background:color}}></div>}
            {element.niveau == "Intermediate" && <div className='absolute w-[50%]  h-full top-0 left-0'  style={{background:color}}></div> }
            {element.niveau == "Advanced" && <div className='absolute w-[75%]  h-full top-0 left-0'  style={{background:color}}></div> }
            {element.niveau == "Expert" && <div className='absolute w-[100%]  h-full top-0 left-0'  style={{background:color}}></div> }
          </div>
        </div>
    ))
    }
    </div>
    {/* fin language */}

  </div>



</div>


    </div>
  )
}
