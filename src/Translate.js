import React,{useState} from 'react'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
const Translate = () => {
  let languageData=[
    {

    }
  ]
    const [defaultLang,setDefaultLang]=useState("");
    const [uiData, setUidata]=useState("");
    const translte=()=>{
        uiData=defaultLang;
    }


    
  return (
    <div>
      <label>Default Language</label>
      <textarea value={defaultLang}
      onchange={(e)=>setDefaultLang(e.target.value)}
      >
      </textarea>
      <button
      onClick={translte}
      >Translate</button>
      <p></p>
    </div>
  )
}

export default Translate
