import React, { useEffect, useState } from 'react'
import "../Style.css"
const DisplayContact = () => {
  const[data,setdata]=useState("")
  const[obj,setobj]=useState({})
  const[objectid,setobjectid]=useState("")
  const set=(event)=>{
   const {name,value}= event.target
    setobj({...obj,[name]:value})
  }
  console.log(process.env.REACT_APP_FETCH_API);
  const Show=async()=>{
   const response= await fetch(process.env.REACT_APP_FETCH_API)
    if(response.status===201)
    {
     const result= await response.json()
     setdata(result.result)
     alert(result.Message);
    }
  }
  useEffect(()=>{
    Show()
  },[])
  const Save=async(e)=>{
    e.preventDefault()
   const response= await fetch(process.env.REACT_APP_CREATE_API,{
    method:"post",
    body:JSON.stringify(obj),
    headers:{
      "Content-Type":"application/json"
    }    
    })
    const result= await response.json()
    if(response.status===201)
    {
      console.log(result.result);
      alert(result.Message)
      Show()
      setobj({})
    }
    else
    {
      alert(result.Message)
    }
  }
  const Delete=async(id)=>{
    const response= await fetch(process.env.REACT_APP_DELETE_API,{
      method:"delete",
      body:JSON.stringify({"id":id}),
      headers:{
        "Content-Type":"application/json"
      }    
      })
      const result= await response.json()
      if(response.status===201)
      {
        console.log(result.result);
        alert(result.Message)
        Show()
      }
      else
      {
        alert(result.Message)
      }
  }
  const Edit=async(id)=>{
    const myobject= data.filter(object=>object._id===id)
    if(myobject.length!==0)
    {
     const{Name,Phone}=myobject[0]
     setobjectid(id)
     setobj({Name,Phone});
    }
  }
  const Update=async()=>{
    if(objectid && obj.Name && obj.Phone)
    {
      const response= await fetch(process.env.REACT_APP_UPDATE_API,{
        method:"put",
        body:JSON.stringify({"id":objectid,"data":obj}),
        headers:{
          "Content-Type":"application/json"
        }    
        })
        const result= await response.json()
        if(response.status===201)
        {
          console.log(result.result);
          alert(result.Message)
          Show()
          setobjectid("")
          setobj({})
        }
        else
        {
          alert(result.Message)
        }
    }
    else
    {
      alert("Field is Empty")
    }
  }
  return (
    <div>
        <div className="blocks">
          <div className='boxes'>
          <form>
            <label>Name:</label><br />
            <input type="text" value={obj.Name?obj.Name:""} placeholder='Enter your Name' name='Name' onChange={set}/><br />
            <label>Phone:</label><br />
            <input type="text" value={obj.Phone?obj.Phone:""} placeholder='Enter your Phone' name='Phone' onChange={set}/><br /><br />
            <button onClick={Save}>Save</button>
          </form>
          </div>
        </div>
        <div className='blocks'>
        <table border={2}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?data.map((object,index)=>{
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{object?.Name}</td>
                  <td>{object?.Phone}</td>
                  <td><button onClick={()=>Delete(object._id)}>Delete</button>{objectid===object._id?<button onClick={Update}>Update</button>:<button onClick={()=>Edit(object._id)}>Edit</button>}</td>
                </tr>
              )
            }):<tr style={{textAlign:"center"}}><td colSpan={4}>No Record Found</td></tr>}
          </tbody>
        </table>
        </div>
    </div>
  )
}

export default DisplayContact
