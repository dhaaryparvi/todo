// import { CheckBox } from "@mui/icons-material";
import {  Paper, Typography,Checkbox,Button,Stack,
    TextField
 } from "@mui/material";
 import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";

// import {useState} from "react";

type Propstype={
    todo:Todoitemtype;
    deleteHandler:(id:Todoitemtype["id"])=>void
    completeHandler:(id:Todoitemtype["id"])=>void
    editHandler:(id:Todoitemtype["id"],newtitle:Todoitemtype["title"])=>void
};

const Todoitem=({todo, completeHandler,deleteHandler,editHandler}:Propstype)=>{
    const [editActive,setEditActive]=useState<boolean>(false);
    const [textVal,setTextVal]=useState<string>(todo.title)
    return (<Paper  sx={
        {
            padding:"1rem",
        }}
    >
        <Stack direction={"row"} alignItems={"center"}>
            {
                editActive?(<TextField 
                    value={textVal} 
                    onChange={(e)=>setTextVal(e.target.value)}
                    onKeyDown={(e)=>{
                    if(e.key==="Enter" && textVal!=="") {
                            editHandler(todo.id,textVal); 
                            setEditActive(false);
                        }
                }}
                />
                ):(
                <Typography marginRight={"auto"}>
                {todo.title}
            </Typography>)
            }
        
        <Checkbox checked={todo.isCompleted} 
        onChange={()=>completeHandler(todo.id)}
        />
        <Button onClick={()=>deleteHandler(todo.id)}><Delete/></Button>
        <Button sx={{
            fontWeight:"600",
        }}
        onClick={()=>setEditActive(prev=>!prev)}
        >{ editActive?"Done":"Edit"
        }</Button>
        </Stack>

        </Paper>
    );
};
export default Todoitem;
