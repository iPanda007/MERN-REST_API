
import React, { useState,useRef } from 'react'
import axios from 'axios';
import './App.css'
 function App() {
 const [count , setCount] = useState([{}]);
 const refValue = useRef(null)
 const [record,setRecord] = useState([])
  return (
    <div className="App">
        {
          count.map((e,index)=>(
            <form key={index}>
                <input type="text" ref={refValue} disabled={count.length-1 === index ? false : true}/>
                <button
                 type='submit'
                onClick={(e)=>{
                  e.preventDefault()
                  setCount((pre)=>{
                     setRecord(pre)
                     
                    return[...pre,{}]
                  })
                   const dataValue = {
                     title: refValue.current.value
                   }    
                   const formData =  new FormData()
                   formData.append("data",JSON.stringify(dataValue))

                   axios({
                    url:"http://127.0.0.1:8000/data",
                    method:"post",
                    data:formData
                   }).then(function(res){
                       console.log(res)
                   })
                  console.log(refValue.current.value)
                }}
                disabled={count.length-1 === index ? false : true}
                >
                   click
                </button>
            </form>
          ))
        }
    </div>
  );
}

export default App
