import { useEffect, useState,useRef } from "react"
import PersonalInfo from "./PersonalInfo"
import CV from "../Component/CV"
import Header2 from "../Component/Header2"
import WorkExperience from "./WorkExperience"
import Education from "./Education"
import Skills from "./Skills"
import Languages from "./Languages"
import useLocalStorage from "../Hooks/LocalStorage"

export default function Generatcv({setshowcv}) {
    const [personalData, setPersonalData] = useLocalStorage('cv_personalData', {});
    const [education, seteducation] = useLocalStorage('cv_education', []);
    const [education2, seteducation2] = useLocalStorage('cv_education2', {});
    const [expirence, setexpirence] = useLocalStorage('cv_experience', []);
    const [expirence2, setexpirence2] = useLocalStorage('cv_experience2', {});
    const [skils, setskills] = useLocalStorage('cv_skills', []);
    const [skils1, setskills1] = useLocalStorage('cv_skills1', {});
    const [langue, setlangue] = useLocalStorage('cv_languages', []);
    const [langue1, setlangue1] = useLocalStorage('cv_languages1', {});
    const [color, setcolor] = useLocalStorage('cv_color', '#19768d');
  


    useEffect(() => {
      console.log(personalData);
    }, [personalData]);


    const cvComponentRef = useRef(null);
  return (
<div className="w-full h-screen">
<Header2 setshowcv={setshowcv} cvComponentRef={cvComponentRef} personalData={personalData}></Header2>
    <div className='flex gap-3 h-[88%]'>
        <div className='w-[50%] h-full flex flex-col gap-5 py-5 px-6 overflow-y-auto'>
        <PersonalInfo setPersonalData={setPersonalData} setcolor={setcolor}></PersonalInfo>
        <Education seteducation={seteducation} seteducation2={seteducation2} education={education}></Education>
        <WorkExperience setexpirence={setexpirence} setexpirence2={setexpirence2} expirence={expirence}></WorkExperience>
        <Skills setskills={setskills} setskills1={setskills1} skils={skils}></Skills>
        <Languages setlangue={setlangue} setlangue1={setlangue1} langue={langue}></Languages>
        </div>
        <div className='w-[50%] h-full bg-[#f4f4f5] py-5 px-5 overflow-y-auto max-h-full'>
            <CV   cvComponentRef={cvComponentRef} personalData={personalData} education={education} education2={education2} skils={skils} skils1={skils1} langue={langue} langue1={langue1} expirence={expirence} expirence2={expirence2} color={color}></CV>
        </div>
    </div>
</div>


)
}
