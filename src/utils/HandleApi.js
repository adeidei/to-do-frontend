import axios from 'axios';

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data ---> ',data);
        setToDo(data)
    })
}

const addToDo = (text,setText,setToDo) => {
    axios
    .post(`${baseUrl}/save`,{text})
    .then((data)=> {
        console.log(data);
        setText("")
        getAllToDo(setToDo);
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoId,text,setToDo,setText,setIsUpdating) => {
    axios
    .patch(`${baseUrl}/update`,{_id: toDoId, text})
    .then((data)=> {
        setText("");
        setIsUpdating(false)
        getAllToDo(setToDo);
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (toDoId,setToDo) => {
    axios
    .post(`${baseUrl}/delete`,{_id: toDoId})
    .then((data)=> {
        getAllToDo(setToDo);
    })
    .catch((err) => console.log(err))
}

export {getAllToDo,addToDo,updateToDo,deleteToDo}