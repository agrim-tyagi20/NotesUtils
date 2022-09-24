import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import "../component/CSS/style.css"
import Middle from "./Middle"
import Notes from "./Notes"



const getLocalNotes = () =>{
    var list = localStorage.getItem('Notes');

    if(list){
        return JSON.parse(localStorage.getItem('Notes'));
    }
    else{
        return [];
    }
}

const Layout = () => {
    const [input, setInput] = useState('')
    const [query, setQuery] = useState('');
    const [addnote, setNote] = useState(getLocalNotes())
    const [toggle, setToggle] = useState(true)
    const [editId, setEditId] = useState();


    const setButton = () => {

        if (!input) {

        }

        else if (input && !toggle) {
            setNote(prev =>
                prev.map((elem) => {
                    if (elem.id === editId) {
                        return { ...elem, note: input }
                    }
                    return elem;
                })
            )
            setToggle(true);
            setInput('');
            setEditId(null);
        }

        else {
            const allinput = { id: new Date().getTime().toString(), note: input }

            setNote([...addnote, allinput])
            setInput('')
        }
    }

    const handleDelete = (ind) => {

        const update = addnote.filter((curr) => {
            return curr.id !== ind
        });
        setNote(update);
    }

    const handleEdit = (id) => {
        const item = addnote.find((elem) => {
            return elem.id === id

        })
        setToggle(false)
        setInput(item.note)
        setEditId(id)
    }

    useEffect(()=>{

      localStorage.setItem('Notes' , JSON.stringify(addnote))

    },[addnote])
    return (
        <div>
            <Navbar setQuery={setQuery} query={query} />
            <div className="container">

                <Middle toggle={toggle} setButton={setButton} input={input} setInput={setInput}/>

                <Notes addnote={addnote} query={query} handleEdit={handleEdit} handleDelete={handleDelete}/>

            </div>
        </div>
    )
}

export default Layout
