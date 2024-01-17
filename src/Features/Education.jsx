import { useEffect, useState,useRef,useMemo } from "react"
import img from '../assets/4.png'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DoneIcon from '@mui/icons-material/Done';
import useDocumentTitle from "../useDocumentTitle";
import EditIcon from '@mui/icons-material/Edit';


export default function Education({seteducation,seteducation2,education}) {
    const [arrow1,setarrow] = useState(false)
    const [months,setmonths] = useState([])
    const [years,setyears] = useState([])
    const [addpresent,setaddpresent] = useState(false)
    const [listdata1,setlistdata1] = useState([])
    const[addeducation,setaddeducation] = useState(false)
    const[showlistdata,setshowlistdata] = useState(false)
    const [modifatelist,setmodifatelist] = useState([])
    const [showmodifatelist,setshowmodifatelist] = useState(false)
    const educationRef = useRef(null);
    const schoolRef = useRef(null);
    const cityRef = useRef(null);
    const descriptionRef = useRef(null);
    const [data1,setdata1] = useState({
        education:'',
        School:'',
        city:'',
        stardatemnt:'january',
        stardateyrs:'2024',
        findatemnt:'january',
        findateyrs:'2024',
        Description:'',
    })
const [data2,setdata2] = useState({})


const title =  useDocumentTitle('Education');


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
        seteducation2(data1)
    },[data1])

    const orderedListData = useMemo(() => {
        const sortedListData = [...listdata1].sort((a, b) => {
          const startDateA = new Date(`${a.stardatemnt} ${a.stardateyrs}`);
          const startDateB = new Date(`${b.stardatemnt} ${b.stardateyrs}`);
          return startDateB - startDateA;
        });
        return sortedListData;
      }, [listdata1]);
    //   setlistdata1(orderedListData)
    useEffect(() => {
        seteducation(orderedListData);
    }, [listdata1, seteducation]);
    


    function AddPresentword() {
        setaddpresent((prevAddPresent) => !prevAddPresent); // Toggle addpresent state
        setdata1((prevData) => ({
          ...prevData,
          findateyrs: addpresent ? "2024" : "present", // Toggle findateyrs value based on checkbox state
          findatemnt:  addpresent ? "january" : "", // Set findatemnt to empty string when checkbox is checked
        }));
      }


function Submit() {
    setaddeducation(true);
    setshowlistdata(true);
    setdata2(data1)
    // Use the callback function to ensure the latest state is used
    setlistdata1((prevListData) => [...prevListData, data1]);
    setdata1({
        education: '',
        School: '',
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
            education: '',
            School: '',
            city: '',
            stardatemnt: '',
            stardateyrs: '',
            findatemnt: '',
            findateyrs: '',
            Description: '',
        });
        setarrow(false);
        educationRef.current.value = '';
        schoolRef.current.value = '';
        cityRef.current.value = '';
        descriptionRef.current.value = '';
    }
    
function funaddeducation(){
    setdata1({
        education: '',
        School: '',
        city: '',
        stardatemnt: '',
        stardateyrs: '',
        findatemnt: '',
        findateyrs: '',
        Description: '',
    });
    setaddeducation(false)
}


const [editingIndex, setEditingIndex] = useState(null);

    // Function to populate the form fields when Edit button is clicked
    const handleEdit = (index) => {
        const selectedEducation = listdata1[index];
        setdata1(selectedEducation);
        const b = listdata1.filter((_, i) => i !== index);
        console.log(b);
        setmodifatelist(b)
        seteducation(b);
        setshowmodifatelist(true)
        setEditingIndex(index);
        setaddeducation(false)
        setshowlistdata(false)
    };

    // Function to update the existing item when the form is submitted in edit mode
    const handleUpdate = () => {
        const updatedListData = [...listdata1];
        updatedListData[editingIndex] = data1;
        setlistdata1(updatedListData);
        setEditingIndex(null);
        setdata1({
            education: '',
            School: '',
            city: '',
            stardatemnt: '',
            stardateyrs: '',
            findatemnt: '',
            findateyrs: '',
            Description: '',
        });
    setaddeducation(true)
    setshowlistdata(true)
    setshowmodifatelist(false)
    };


function Deletanelemnt(){
setlistdata1(education)
setdata1({
    education: '',
    School: '',
    city: '',
    stardatemnt: '',
    stardateyrs: '',
    findatemnt: '',
    findateyrs: '',
    Description: '',
});
setarrow(false);
educationRef.current.value = '';
schoolRef.current.value = '';
cityRef.current.value = '';
descriptionRef.current.value = '';
setaddeducation(true)
setshowlistdata(true)
setshowmodifatelist(false)
}
  return (
    <div className="border-b-[1px] pb-3 border-[#d4d4d4]">
    <div className="flex  items-center justify-between">
             <h1 className="text-[25px]">Education</h1>
             <img src={img} alt="" className={`w-[60px] cursor-pointer ${arrow1 ?"rotate-180" : "rotate-0" } `}onClick={chnageIcon1} />
    </div>
         <div className={`${arrow1 ? "block" : "hidden"}`}>
         {
    showlistdata && listdata1.map((element, index) => (
        <div key={index} className="w-full flex justify-between items-center border-[1px] px-4 py-3 rounded-md border-[#d4d4d4] my-3">
            <h1>{element.education ? `${element.education}` : "[Education]"}</h1>
            <button className="border-[1px] border-[#d4d4d4] px-1 py-2 rounded-md" onClick={() => handleEdit(index)}>
                <EditIcon></EditIcon>
            </button>
        </div>
    ))
}


        {
           !addeducation  && 
         <div className={`${arrow1 ? "block" : "hidden"}  border-[1px] border-[#d4d4d4] px-4 py-3 my-4 rounded-md`}>
        <div>
            
         <div  className="flex flex-col gap-3">
                                    <label htmlFor="prenom">Education</label>
                                    <input type="text" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm focus:outline-[#5d25e7] outline-1"
                                     onChange={(e)=>{
                                         setdata1((prevData) => ({
                                            ...prevData,
                                            education:e.target.value // Set photo URL in data1 state
                                        }));
                                    }}
                                    ref={educationRef}
                                    value={data1.education}
                                    />
        </div>

        <div className="flex w-full  gap-4 my-4">
         <div  className="flex flex-col gap-3 w-full">
                                    <label htmlFor="prenom">School</label>
                                    <input type="text" className="bg-[#f4f4f5] py-2 px-3 outline-none rounded-sm focus:outline-[#5d25e7] outline-1 w[45%]"
                                     onChange={(e)=>{
                                         setdata1((prevData) => ({
                                            ...prevData,
                                            School:e.target.value // Set photo URL in data1 state
                                        }));
                                    }}
                                    ref={schoolRef}
                                    value={data1.School}
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
            <h1>{element.education ? `${element.education}` : "[Education]"}</h1>
            <button className="border-[1px] border-[#d4d4d4] px-1 py-2 rounded-md" onClick={() => handleEdit(index)}>
                <EditIcon></EditIcon>
            </button>
        </div>
    ))
}

        {addeducation && 
        <button className="border-[1px] border-[#d4d4d4] px-4 py-2 rounded-md" onClick={funaddeducation}>+ Add education</button>
        }






         </div>
 </div>
  )
}
