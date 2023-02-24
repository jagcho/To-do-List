import React, { useState } from 'react'

function Todalist() {
    const [activity,setActivity]=useState('');
    const [listData,setlistData]=useState([])
  function addActivity(){
    //    setlistData([...listData,activity])
    //    console.log(listData)
    if (activity=== "") return alert(`You cannot be that Lazy`)
    setlistData((listData)=>{
    const updatedList =[...listData,activity]
    console.log(updatedList)
    setActivity('');
    return updatedList
  })}

  function removeActivity(i){
     const updatedListData=listData.filter((ele,id)=>{
        return i!=id
     })
     setlistData(updatedListData);
  }

  function removeAll(){
    setlistData([])
  }
  return (
    <>
    <div className='container'>
       <div className='header'>To-do List </div>
        <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button className='add' onClick={addActivity}>Add</button>
        <p className='list-heading'>Here is your List :{')'}</p>
        {listData!=[] && listData.map((data,i)=>{
            return (
                <>
                <p key={i} >
                    <div className='ListData'>{data}</div>
                    <div className='btn-pos'>
                    <button   onClick={()=>removeActivity(i)}>remove(-)</button>
                    </div>
                </p>
                </>
            )
        })}
        {listData.length>=1 &&<button onClick={removeAll}>Remove All</button>}
        
    </div>
    
    </>
  )
}

export default Todalist