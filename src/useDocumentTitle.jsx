import { useState } from "react";
export default function useDocumentTitle(initialValue){
    const[state,setstate] = useState(initialValue)
    
    document.title= state
 }