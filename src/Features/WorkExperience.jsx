import { useEffect, useState,useRef } from "react"
import img from '../assets/4.png'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import { data } from "autoprefixer";
import { Filter } from "@mui/icons-material";

export default function WorkExperience({setexpirence,setexpirence2,expirence}) {
    const [arrow1,setarrow] = useState(false)
    const [months,setmonths] = useState([])
    const [years,setyears] = useState([])
    const [addpresent,setaddpresent] = useState(false)
    const [listdata1,setlistdata1] = useState([])
    const[addexpirence,setaddexpirence] = useState(false)
    const[showlistdata,setshowlistdata] = useState(false)
    const [modifatelist,setmodifatelist] = useState([])
    const [showmodifatelist,setshowmodifatelist] = useState(false)
    const expirenceRef = useRef(null);
    const workexpirenceRef = useRef(null);
    const cityRef = useRef(null);
    const descriptionRef = useRef(null);
    const [data1,setdata1] = useState({
        expirence:'',
        workexpirence:'',
        city:'',
        stardatemnt:'january',
        stardateyrs:'2024',
        findatemnt:'january',
        findateyrs:'2024',
        Description:'',
    })
const [data2,setdata2] = useState({})


    function chnageIcon1(){
        if(arrow1 == false){
            setarrow(true)
        }else{
            setarrow(false)
        }
    }

    // Generate an array of months from January to December
    useEffect(() => {
        const monthNames = Array.from({ length: 12 }, (_, index) => {
            const month = new Date(0, index).toLocaleString("en-US", { month: "long" });
            return { label: month, value: index + 1 };
        });
        setmonths(monthNames);
    }, []);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const yearList = Array.from({ length: currentYear - 1919 }, (_, index) => {
            const year = currentYear - index;
            return { label: year, value: year };
        });
        setyears(yearList);
    }, []);

    useEffect(()=>{
        setexpirence2(data1)
    },[data1])


    useEffect(() => {
        setexpirence(listdata1);
    }, [listdata1, setexpirence]);
    


    function AddPresentword() {
        setaddpresent((prevAddPresent) => !prevAddPresent); // Toggle addpresent state
        setdata1((prevData) => ({
          ...prevData,
          findateyrs: addpresent ? "2024" : "present", // Toggle findateyrs value based on checkbox state
          findatemnt:  addpresent ? "january" : "", // Set findatemnt to empty string when checkbox is checked
        }));
      }


function Submit() {
    setaddexpirence(true);
    setshowlistdata(true);
    setdata2(data1)
    // Use the callback function to ensure the latest state is used
    setlistdata1((prevListData) => [...prevListData, data1]);
    setdata1({
        expirence: '',
        workexpirence: '',
        city: '',
        stardatemnt: '',
        stardateyrs: '',
        findatemnt: '',
        findateyrs: '',
        Description: '',
    });
    setaddpresent(false)
}

useEffect(() => {
    console.log(listdata1);
}, [listdata1]);


    function Anuller() {
        setdata1({
            expirence: '',
            workexpirence: '',
            city: '',
            stardatemnt: '',
            stardateyrs: '',
            findatemnt: '',
            findateyrs: '',
            Description: '',
        });
        setarrow(false);
        expirenceRef.current.value = '';
        workexpirenceRef.current.value = '';
        cityRef.current.value = '';
        descriptionRef.current.value = '';
    }
    
function funaddexpirence(){
    setdata1({
        expirence: '',
        workexpirence: '',
        city: '',
        stardatemnt: '',
        stardateyrs: '',
        findatemnt: '',
        findateyrs: '',
        Description: '',
    });
    setaddexpirence(false)
}


const [editingIndex, setEditingIndex] = useState(null);

    // Function to populate the form fields when Edit button is clicked
    const handleEdit = (index) => {
        const selectedexpirence = listdata1[index];
        setdata1(selectedexpirence);
        const b = listdata1.filter((_, i) => i !== index);
        console.log(b);
        setmodifatelist(b)
        setexpirence(b);
        setshowmodifatelist(true)
        setEditingIndex(index);
        setaddexpirence(false)
        setshowlistdata(false)
    };

    // Function to update the existing item when the form is submitted in edit mode
    const handleUpdate = () => {
        const updatedListData = [...listdata1];
        updatedListData[editingIndex] = data1;
        setlistdata1(updatedListData);
        setEditingIndex(null);
        setdata1({
            expirence: '',
            workexpirence: '',
            city: '',
            stardatemnt: '',
            stardateyrs: '',
            findatemnt: '',
            findateyrs: '',
            Description: '',
        });
    setaddexpirence(true)
    setshowlistdata(true)
    setshowmodifatelist(false)
    };


function Deletanelemnt(){
setlistdata1(expirence)
setdata1({
    expirence: '',
    workexpirence: '',
    city: '',
    stardatemnt: '',
    stardateyrs: '',
    findatemnt: '',
    findateyrs: '',
    Description: '',
});
setarrow(false);
expirenceRef.current.value = '';
workexpirenceRef.current.value = '';
cityRef.current.value = '';
descriptionRef.current.value = '';
setaddexpirence(true)
setshowlistdata(true)
setshowmodifatelist(false)
}
  return (
    <div className="border-b-[1px] pb-3 border-[#d4d4d4]">
    <div className="flex  items-center justify-between">
             <h1 className="text-[25px]">Experience</h1>
             <img src={img} alt="" className={`w-[60px] cursor-pointer ${arrow1 ?"rotate-180" : "rotate-0" } `}onClick={chnageIcon1} />
    </div>
         <div className={`${arrow1 ? "block" : "hidden"}`}>
         {
    showlistdata && listdata1.map((element, index) => (
        <div key={index} className="w-full flex justify-between items-center border-[1px] px-4 py-3 rounded-md border-[#d4d4d4] my-3">
            <h1>{element.expirence ? `${element.expirence}` : "[expirence]"}</h1>
            <button className="border-[1px] border-[#d4d4d4] px-1 py-2 rounded-md" onClick={() => handleEdit(index)}>
                <EditIcon></EditIcon>
            </button>
        </div>
    ))
}


        {
           !addexpirence  && 
         <div className={`${arrow1 ? "block" : "hidden"}  border-[1px] border-[#d4d4d4] px-4 py-3 my-4 rounded-md`}>
        <div>
            
         <div  className="flex flex-col gap-3">
                                    <label htmlFor="prenom"> Work Experience</label>
                                    <input type="text" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm focus:outline-[#5d25e7] outline-1"
                                     onChange={(e)=>{
                                         setdata1((prevData) => ({
                                            ...prevData,
                                            expirence:e.target.value // Set photo URL in data1 state
                                        }));
                                    }}
                                    ref={expirenceRef}
                                    value={data1.expirence}
                                    />
        </div>

        <div className="flex w-full  gap-4 my-4">
         <div  className="flex flex-col gap-3 w-full">
                                    <label htmlFor="prenom">Employer</label>
                                    <input type="text" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm focus:outline-[#5d25e7] outline-1 w[45%]"
                                     onChange={(e)=>{
                                         setdata1((prevData) => ({
                                            ...prevData,
                                            workexpirence:e.target.value // Set photo URL in data1 state
                                        }));
                                    }}
                                    ref={workexpirenceRef}
                                    value={data1.workexpirence}
                                    />
        </div>
         <div  className="flex flex-col gap-3 w-full">
                                    <label htmlFor="prenom">City</label>
                                    <input type="text" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm focus:outline-[#5d25e7] outline-1 w[45%]"
                                     onChange={(e)=>{
                                         setdata1((prevData) => ({
                                            ...prevData,
                                            city:e.target.value // Set photo URL in data1 state
                                        }));
                                    }}
                                    ref={cityRef}
                                    value={data1.city}
                                    />
        </div>
        </div>


<div className="flex  justify-between">
        <div className="my-4 w-[45%]">
        <label>Start date</label>
        <div className="flex  w-full justify-between my-2">
            <select name="start_month" id="start_month" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm  w-[48%]"   onChange={(e)=>{
            setdata1((prevData) => ({
               ...prevData,
               stardatemnt:e.target.value // Set photo URL in data1 state
           }));
       }} 
       value={data1.stardatemnt}
       >
            {months.map((month) => (
            <option key={month.value} value={month.label}>
              {month.label}
            </option>
          ))}
            </select>
            <select name="start_year" id="start_year" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm  w-[48%]" 
              onChange={(e)=>{
                setdata1((prevData) => ({
                   ...prevData,
                   stardateyrs:e.target.value // Set photo URL in data1 state
               }));
           }}
       value={data1.stardateyrs}
            >
            {years.map((year) => (
            <option key={year.value} value={year.value}>
              {year.label}
            </option>
          ))}
            </select>
        </div>
        </div>

        <div className="my-4 w-[45%]">
        <div className="flex justify-between items-center">
        <label>Finish date</label>
        <div className="flex items-center gap-1">
            <input type="checkbox" onChange={AddPresentword} checked={addpresent == true} />
            <p>present</p>
        </div>
            </div>
        <div className="flex justify-between my-2">
            <select name="finish_month" id="finish_month" className=" bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm  w-[48%]"
                disabled={addpresent}
                value={data1.findatemnt}
                onChange={(e)=>{
                    setdata1((prevData) => ({
                       ...prevData,
                       findatemnt:e.target.value // Set photo URL in data1 state
                   }));
               }}
            >
            {months.map((month) => (
            <option key={month.value} value={month.label}>
              {month.label}
            </option>
          ))}
            </select>
            <select name="finish_year" id="finish_year" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm  w-[48%]"
                disabled={addpresent}
                value={data1.findateyrs}
                onChange={(e)=>{
                    setdata1((prevData) => ({
                       ...prevData,
                       findateyrs:e.target.value // Set photo URL in data1 state
                   }));
               }}
            >
            {years.map((year) => (
            <option key={year.value} value={year.value}>
              {year.label}
            </option>
          ))}
            </select>
        </div>
        </div>

</div>



        <div className="lex flex-col gap-4 w-full">
        <label htmlFor="id">Description</label>
        <textarea name="Description" id="id" cols="30" rows="10" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm focus:outline-[#5d25e7] outline-1 w-full my-3"
          onChange={(e)=>{
            setdata1((prevData) => ({
               ...prevData,
               Description:e.target.value
           }));
       }}
       ref={descriptionRef}
       value={data1.Description}
        ></textarea>
        </div>

            {
                editingIndex == null && 
                <div className="flex gap-4 items-center justify-end my-3">
                        <button className="border-[1px] border-[#d4d4d4] px-1 py-2 rounded-md" onClick={Anuller}>
                        <DeleteOutlineIcon></DeleteOutlineIcon>
                    </button>
                    <button className="bg-[#5d25e7] text-white py-2 px-7 rounded-md flex justify-end items-end" onClick={Submit}>
                        <DoneIcon></DoneIcon>
                        <p className="ml-1">DONE</p>
                        </button>
                </div>
            }

        {editingIndex !== null && (
            <div className="flex gap-4 items-center justify-end my-3">
            <button className="border-[1px] border-[#d4d4d4] px-1 py-2 rounded-md" onClick={Deletanelemnt}>
            <DeleteOutlineIcon></DeleteOutlineIcon>
        </button>
                    <button className="bg-[#5d25e7] text-white py-2 px-7 rounded-md flex justify-end items-end" onClick={handleUpdate} >
                        <DoneIcon></DoneIcon>
                        <p className="ml-1">UPDATE</p>
                    </button>
            </div>
            )}
        </div>
        </div>
        }

{
    showmodifatelist && modifatelist.map((element, index) => (
        <div key={index} className="w-full flex justify-between items-center border-[1px] px-4 py-3 rounded-md border-[#d4d4d4] my-3">
            <h1>{element.expirence ? `${element.expirence}` : "[expirence]"}</h1>
            <button className="border-[1px] border-[#d4d4d4] px-1 py-2 rounded-md" onClick={() => handleEdit(index)}>
                <EditIcon></EditIcon>
            </button>
        </div>
    ))
}

        {addexpirence && 
        <button className="border-[1px] border-[#d4d4d4] px-4 py-2 rounded-md" onClick={funaddexpirence}>+ Add expirence</button>
        }






         </div>
 </div>
  )
}
