import { AppBar, Container , Toolbar, Typography, TextField,Button, Stack} from "@mui/material"
import Todoitem from "./components/Todoitem";
import { useState } from "react";
// import { Height } from "@mui/icons-material";

const App=()=>{
  const [todos,setTodos]=useState<Todoitemtype[]>([]);

const [title,setTitle]=useState<Todoitemtype["title"]>("")
const completeHandler=(id:Todoitemtype["id"]):void=>{
const newTodos:Todoitemtype[]=todos.map(i=>{
  if(i.id===id) i.isCompleted=!i.isCompleted;
  return i;
});
setTodos(newTodos);
};
const editHandler=(id:Todoitemtype["id"],
newtitle:Todoitemtype["title"]
):void=>{
  const newTodos:Todoitemtype[]=todos.map((i)=>{
    if(i.id===id) i.title=newtitle;
    return i;
  });
  setTodos(newTodos);
}
const deleteHandler=(id:Todoitemtype["id"]):void=>{
  const newTodos:Todoitemtype[]=todos.filter((i)=>i.id!==id);
  setTodos(newTodos);
};
const submitHandler=():void=>{
  const newTodo:Todoitemtype={
    title,
    isCompleted:false,
    id:String(Math.random()*1000),
  };
  setTodos(prev=>[...prev,newTodo]);
  setTitle("");
};
  return (
  <Container maxWidth="sm" sx={{height:"100vh"}}>
    <AppBar position="static">
      <Toolbar >
        <Typography>
          To-Do App
        </Typography>
      </Toolbar>
    </AppBar>
    <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
    { todos.map((i)=>(
    <Todoitem 
    deleteHandler={deleteHandler}
     completeHandler={completeHandler}
    key={i.id}
    todo={i}
    editHandler={editHandler}
    />
  ))};
    </Stack>
    <TextField value={title} onChange={(e)=>setTitle(e.target.value)} fullWidth label={"New Task"}
    onKeyDown={(e)=>{
      if(e.key==="Enter" && title!=="") submitHandler();
    }}
    />
    <Button sx={{
      margin:"1rem 0"
    }} fullWidth 
    onClick={submitHandler}
    disabled={title===""}
    variant="contained">ADD</Button>

  </Container>
  );
};
export default App;