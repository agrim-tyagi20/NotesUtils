import React from 'react'

const Middle = ({toggle,input,setInput,setButton}) => {
  return (
    <>
    <div className="section">
                    <h1 style={{ paddingLeft: ".8rem" }}>Welcome To NotesUtils</h1>

                    <div className="inner_notes">
                        <div className="title">
                            <h3 >Add a note</h3>
                        </div>
                        <div className="input_field_class">
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
                        </div>

                        <div className="btn_class">

                            {toggle ? <button className="btn" onClick={setButton}> Add Note</button> :
                                <button className="btn" onClick={setButton}> Edit Note</button>}

                        </div>

                    </div>
                    <div className="heading">
                        <h1>Your Notes</h1>
                    </div>
                </div>
    </>
  )
}

export default Middle
