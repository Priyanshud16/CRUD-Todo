import React from 'react'

function TodoItem({title,status,Assigned,Completion,HandleDelete,id,HandleUpdate}) {
  return (
    
    <div style={{ border: '1px solid black', padding: '10px',width:"20%",marginTop:"30px" }}>
        <p>Title:{title}</p>
        <p onClick={()=>HandleUpdate(id,status)}>Status:{status? "Completed" : "Pending"}</p>
        <p>Assigned:{Assigned}</p>
        <p>Completion{Completion}</p>
        <button onClick={()=>HandleDelete(id)}>Delete</button>
    </div>
  
  )
}

export default TodoItem