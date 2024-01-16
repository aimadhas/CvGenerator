import { useEffect, useState } from "react"
import img from '../assets/4.png'
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import useDocumentTitle from "../useDocumentTitle";

export default function PersonalInfo({setPersonalData,setcolor}) {
    const [arrow1,setarrow] = useState('')
    const [photo,setphoto] = useState(false)
    const [data1,setdata1] = useState({
        photo:'',
        nom:'',
        prenom:'',
        email:'',
        headline:'',
        phone:'',
        adress:''
    })
    function chnageIcon1(){
        if(arrow1 == false){
            setarrow(true)
            // setarrow(data1.adress = 'hello man')
            // console.log(data1)

        }else{
            setarrow(false)
        }
    }
useEffect(()=>{
    setPersonalData(data1);
},[data1,setPersonalData])
// useEffect(()=>{
// },[arrow1])
// if(arrow1 == true){
    
    //     useDocumentTitle('Person information');
    // }
        useDocumentTitle('Person information');

    function handleFileChange(e) {
        const selectedFile = e.target.files[0];
        
        if (selectedFile) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setphoto(true); // Set photo state to true
                setdata1(prevData => ({
                    ...prevData,
                    photo: reader.result, // Set photo URL in data1 state
                }));
            };

            reader.readAsDataURL(selectedFile);
        }
    }



  return (
    <div className="border-b-[1px] pb-3 border-[#d4d4d4]">
       <div className="flex  items-center justify-between">
                <h1 className="text-[25px]">Personal details</h1>
                <img src={img} alt="" className={`w-[60px] cursor-pointer ${arrow1 ?"rotate-180" : "rotate-0" } `}onClick={chnageIcon1} />
            </div>
            <div className={`${arrow1 ? "block" : "hidden"}`}>
                <div className="flex gap-3 my-2 mb-4">
                        <div className="flex flex-col gap-3 w-[25%]">
                            <label htmlFor="image">Photo</label>
                            <label  htmlFor='inputTag' className="cursor-pointer bg-[#f4f4f5] text-black text-center  rounded-sm h-[120px] flex justify-center items-center w-full" >
                                {!photo && <CenterFocusWeakIcon></CenterFocusWeakIcon>}
                                {photo && <img src={data1.photo} className="object-cover w-full h-full"></img>}
                            <input id="inputTag" type="file" accept="image/*"  className='hidden' onChange={handleFileChange} />
                            </label>
                        </div>
                        <div className="w-[75%]">
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="nom">Given name</label>
                                    <input type="text" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm focus:outline-[#5d25e7] outline-1" onChange={(e)=>{
                                         setdata1((prevData) => ({
                                            ...prevData,
                                            nom:e.target.value // Set photo URL in data1 state
                                        }));
                                    }} />
                                </div>
                                <div  className="flex flex-col gap-3">
                                    <label htmlFor="prenom">Family name</label>
                                    <input type="text" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm focus:outline-[#5d25e7] outline-1" onChange={(e)=>{
                                         setdata1((prevData) => ({
                                            ...prevData,
                                            prenom:e.target.value // Set photo URL in data1 state
                                        }));
                                    }} />
                                </div>
                            </div>
                                <div  className="flex flex-col gap-3 my-2">
                                    <label htmlFor="Email">Email address</label>
                                    <input type="email" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm focus:outline-[#5d25e7] outline-1" onChange={(e)=>{
                                         setdata1((prevData) => ({
                                            ...prevData,
                                            email:e.target.value // Set photo URL in data1 state
                                        }));
                                    }} />
                                </div>
                        </div>

                </div>
                                <div  className="flex flex-col gap-3 my-2">
                                    <label htmlFor="Email">Headline</label>
                                    <input type="text" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm focus:outline-[#5d25e7] outline-1"  
                                    onChange={(e)=>{
                                        setdata1((prevData) => ({
                                           ...prevData,
                                           headline:e.target.value // Set photo URL in data1 state
                                       }));
                                   }}
                                    />
                                </div>
                                <div  className="flex flex-col gap-3 my-2">
                                    <label htmlFor="Email">Phone number</label>
                                    <input type="tel" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm focus:outline-[#5d25e7] outline-1"
                                    
                                    onChange={(e)=>{
                                        setdata1((prevData) => ({
                                           ...prevData,
                                           phone:e.target.value // Set photo URL in data1 state
                                       }));
                                   }}
                                    />
                                </div>
                                    <div  className="flex flex-col gap-3 my-2">
                                        <label htmlFor="Email">Address</label>
                                        <input type="text" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm focus:outline-[#5d25e7] outline-1"
                                         onChange={(e)=>{
                                            setdata1((prevData) => ({
                                               ...prevData,
                                               adress:e.target.value // Set photo URL in data1 state
                                           }));
                                       }}
                                        
                                        />
                                    </div>
                                    <div  className="flex flex-col gap-3 my-2">
                                        <label htmlFor="Email">Background color</label>
                                        <input type="color" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm focus:outline-[#5d25e7] outline-1 w-full"
                                         onChange={(e)=>{
                                            setcolor(e.target.value)
                                       }}
                                        
                                        />
                                    </div>
            </div>
    </div>
  )
}
