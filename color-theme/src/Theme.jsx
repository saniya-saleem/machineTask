import { useState } from "react"

function Theme() {
     const[theme,settheme]=useState("white")
     let handlebutton=()=>{
      settheme(theme==="white"?"black":"white")
     document.body.style.backgroundColor=theme

      
       
     }
       
     
  return (
    <div>
        <button className="button"onClick={handlebutton}>theme</button>

    </div>
  )

}

export default Theme