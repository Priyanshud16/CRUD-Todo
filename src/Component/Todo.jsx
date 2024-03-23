import React, { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import axios from 'axios';
import "./Todo.css"
function Todo() {
  const [todo, setTodo] = useState([]);
  const [page,setPage]=useState(4)
const [last,setLast]=useState(1)
  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    try {
      let { data } = await axios({
        method: "GET",
        baseURL: "http://localhost:3000",
        url: `/todo?_page=${page}&_per_page=5`
      });
     
      setTodo(data.data);
      setLast(data.last)
    } catch (error) {
      console.log(error);
    }
  };

  const HandleAdd = (formData) => { // Receive formData directly
    axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      url: '/todo',
      data: formData,
      baseURL: 'http://localhost:3000'
    })
      .then(() => getData())
      .catch((error) => console.log(error));
  };
  const HandleDelete=(id)=>{
    axios({
      method:"DELETE",
      url:`/todo/${id}`,
      baseURL:"http://localhost:3000",

    }).then(()=>getData())
    .catch((error)=>console.log(error))
  }

const HandleUpdate=(id,status)=>{
axios({
  method:"PATCH",
  url:`/todo/${id}`,
  baseURL:"http://localhost:3000",
  data:{status:!status}

})
.then(()=>getData())
.catch((error)=>console.log(error))
}

  return (
    <div>
      <div>
        <TodoInput HandleAdd={HandleAdd} />
      </div>
      <div>
        {todo.map((ele) => {
          return <TodoItem {...ele} HandleDelete={HandleDelete} HandleUpdate={HandleUpdate}/>;
        })}
      </div>
      <button className='todobtn' onClick={()=>setPage(page-1)} disabled={page==1}>Prev</button><button className='todobtn'>{page}</button><button onClick={()=>setPage(page+1)} className='todobtn'>Next</button>
    </div>
  );
}

export default Todo;
