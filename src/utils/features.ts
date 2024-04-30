export const saveTodos=(todos:Todoitemtype[]):void=>{
    localStorage.setItem("mytodos",JSON.stringify(todos));
};
export const getTodos=():Todoitemtype[]=>{
    const todos=localStorage.getItem("mytodos");
    return todos?JSON.parse(todos):[];
};