import React from 'react'


const Navbar = ({setQuery}) => {
   

    const handleInput = (e) =>{
          setQuery(e.target.value)
    }
    return (
        <>
            <nav className="main-nav">
             
                <div className="logo">
                    <h2>
                     NotesUtils
                        
                    </h2>
                </div>

                <div  className="input_search" >
                    <input type="text" placeholder="Search Notes"  onChange={handleInput} ></input>
                </div>
            </nav>
                      
        </>

    )
}

export default Navbar

