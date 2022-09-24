import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';

const Notes = ({addnote,query,handleDelete,handleEdit}) => {
  return (
    <>
    
    <div className="middle">
    <Scrollbars>
        <div className="scroll">
    
                    {
                        addnote.filter((item) => item.note.toLowerCase().includes(query)).map((elem) => {
                            const { id, note } = elem

                            return <div key={id}>
                                <div className="cards">

                                    <div className="name">
                                        <h4>{note}</h4>

                                    </div>
                                    <div className="buttons" >

                                        <div className="btn_edit"> <button className="edit-btn" onClick={() => handleEdit(id)}>Edit Note</button> </div>
                                        <div className="btn_delete"> <button className="del-btn" onClick={() => handleDelete(id)}>Delete Note</button> </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }


                </div>
                </Scrollbars>
            </div>
    
    </>
  )
}

export default Notes
