import { useState,useEffect,useRef } from "react"
import img from '../assets/4.png'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import useDocumentTitle from "../useDocumentTitle";

export default function Languages({setlangue,setlangue1,langue}) {
    const [arrow1,setarrow] = useState('')
    const [showdata,setshowdata] = useState('')
    const [showdata1,setshowdata1] = useState(false)
    const [showmodifatelist,setshowmodifatelist] = useState(false)
    const [listdata1,setlistdata1]=useState([])
    const [modifatelist,setmodifatelist]=useState([])
    const [getindex,setgetindex] = useState(null)
    const languageref = useRef(null);
    const niveauRef = useRef(null);
    const [data1,setdata1]= useState({
        langue:'',
        niveau:'Beginner'
    })

   const title =  useDocumentTitle('Language');

    useEffect(()=>{
        setlangue1(data1)
    },[data1])

    useEffect(() => {
        setlangue(listdata1);
    }, [listdata1]);

function submit(){
    setlistdata1((preve)=>([...preve,data1]))
    setshowdata(true)
    setshowdata1(true)
    setdata1({
        Skill:'',
        niveau:'Beginner'
    })
}
function funaddeducation(){
    setshowdata1(false)
    setdata1({
        Skill:'',
        niveau:'Beginner'
    })
}

useEffect(() => {
    console.log(listdata1);
}, [listdata1]);

const update = (index) => {
    const selectedEducation = listdata1[index];
    setdata1(selectedEducation);
    const b = listdata1.filter((_, i) => i !== index);
    setlangue(b)
    setmodifatelist(b)
    setgetindex(index);
    setshowmodifatelist(true)
    setshowdata1(false)
    setshowdata(false)
};

// Function to update the existing item when the form is submitted in edit mode
const handleUpdate = () => {
    const updatedListData = [...listdata1];
    updatedListData[getindex] = data1;
    setlistdata1(updatedListData);
    // setmodifatelist()
    setgetindex(null);
    setdata1({
        Skill:'',
        niveau:''
    });
    setshowdata1(true)
    setshowmodifatelist(false)
    setshowdata(true)
}
function Anuler(){
    setarrow(false)
    setdata1({
        Skill:'',
        niveau:''
    });
    languageref.current.value = ''
    niveauRef.current.value = 'Beginner'
    setshowdata(true)
    setshowdata1(true)

}
function deleted(){
    setarrow(false)
    setdata1({
        Skill:'',
        niveau:''
    });
    setlistdata1(langue)
    languageref.current.value = ''
    niveauRef.current.value = 'Beginner'
    setshowdata(true)
    setshowdata1(true)
    setshowmodifatelist(false)
}


if(arrow1 == true){
    
    document.title = title
 }else{
     document.title = "Creat Cv"
 }




    function chnageIcon1(){
        if(arrow1 == false){
            setarrow(true)
        }else{
            setarrow(false)
            title
        }
    }
  return (
    <div className="border-b-[1px] pb-3 border-[#d4d4d4]">
    <div className="flex  items-center justify-between">
             <h1 className="text-[25px]">Languages</h1>
             <img src={img} alt="" className={`w-[60px] cursor-pointer ${arrow1 ?"rotate-180" : "rotate-0" } `}onClick={chnageIcon1} />
         </div>
         <div className={`${arrow1 ? "block" : "hidden"}`}>


{showdata && 
listdata1.map((element,index)=>(
<div key={index} className=" border-[1px] px-4 py-3 rounded-md border-[#d4d4d4] my-3 flex justify-between items-center">
    <h1>{element.langue}</h1>
    <button className="border-[1px] border-[#d4d4d4] px-1 py-2 rounded-md" onClick={()=>{update(index)}}>
                <EditIcon></EditIcon>
</button>
</div>

))

}

{!showdata1 && 
        <div className=" border-[1px] px-4 py-3 rounded-md border-[#d4d4d4] my-3">
            <div className="flex flex-col gap-2">
                <label htmlFor="">Language</label>
           <input type="text" value={data1.langue}  className="bg-[#f4f4f5] my-4 py-2 px-3 outline-none rounded-sm " onChange={(e)=>{
            setdata1((prevent)=>({
                ...prevent,
                langue:e.target.value
            }))
            }
           }
           ref={languageref}
           />
           <select name="niveux" id="nive" className="bg-[#f4f4f5] py-2 px-3 my-4 outline-none rounded-sm text-black "
           onChange={(e)=>{
            setdata1((prevent)=>({
                ...prevent,
                niveau:e.target.value
            }))
           }}
           ref={niveauRef}
           >
                <option  value="Beginner">
                    Beginner
                </option>
                <option  value="Intermediate">
                    Intermediate
                </option>
                <option  value="Advanced">
                    Advanced
                </option>
                <option value="Expert">
                    Expert
                </option>
           </select>
            </div>
            {getindex  == null &&   
           <div className="flex gap-4 items-center justify-end my-3">
            <button className="border-[1px] border-[#d4d4d4] px-1 py-2 rounded-md" onClick={Anuler}>
            <DeleteOutlineIcon></DeleteOutlineIcon>
        </button>
        
                    <button className="bg-[#5d25e7] text-white py-2 px-7 rounded-md flex justify-end items-end" onClick={submit}>
                        <DoneIcon></DoneIcon>
                        <p className="ml-1">Done</p>
                    </button>
            </div>
            }
            {getindex  !== null &&   
           <div className="flex gap-4 items-center justify-end my-3">
            <button className="border-[1px] border-[#d4d4d4] px-1 py-2 rounded-md" onClick={deleted}>
            <DeleteOutlineIcon></DeleteOutlineIcon>
        </button>
        
                    <button className="bg-[#5d25e7] text-white py-2 px-7 rounded-md flex justify-end items-end" onClick={handleUpdate}>
                        <DoneIcon></DoneIcon>
                        <p className="ml-1">Update</p>
                    </button>
            </div>
            }
         </div>
}

{showmodifatelist && 
modifatelist.map((element,index)=>(
<div key={index} className=" border-[1px] px-4 py-3 rounded-md border-[#d4d4d4] my-3 flex justify-between items-center">
    <h1>{element.langue}</h1>
    <button className="border-[1px] border-[#d4d4d4] px-1 py-2 rounded-md" onClick={()=>{update(index)}}>
                <EditIcon></EditIcon>
</button>
</div>

))

}


{showdata && 
        <button className="border-[1px] border-[#d4d4d4] px-4 py-2 rounded-md" onClick={funaddeducation}>+ Add education</button>
        }

            </div>
 </div>
  )
}
