import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminComponents/AdminHeader'
import Firebase from '../Firebase'
const UploadNews = () => {
  const[Obj,SetObj]=useState({})
  const[data,setdata]=useState({})
  useEffect(function()
{
  Firebase.child("News").on("value",function(snapshot)
{
  if(snapshot.val()==null)
  {

  }
  else
  {
    setdata(snapshot.val());
  }
})
},[])
  function set(event)
  {
    SetObj({...Obj,[event.target.name]:event.target.value})
  }
  function Save()
  {
    Firebase.child("News").push(Obj)
  }
  return (
    <div>
        <AdminHeader/>
      <div className="box">
        <label>Title:</label><br />
        <input type="text" onChange={set} name='Title' placeholder='Enter your Title' /><br />
        <label>Description</label> <br />
        <input type="text" onChange={set} name='Description' placeholder='Enter your Description' /><br />
        <br />
        <button onClick={Save}>Save</button>

        <table border={2}>
          <thead>
            <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Description</th>
            </tr>
          </thead>
          <tbody>
          {
            Object.keys(data).map(function(key,index)
            {
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{data[key].Title}</td>
                  <td>{data[key].Description}</td>
                </tr>
              )
              
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default UploadNews