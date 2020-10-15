import React from 'react'
import SidebarOption from './SidebarOption'
import NotesRoundedIcon from '@material-ui/icons/NotesRounded';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import '../Sidebar.css'
function Sidebar() {
    return (
        <div className="sidebar">
           <SidebarOption text="Notes" Icon={NotesRoundedIcon} active={true}/>
            <SidebarOption text="Trash" Icon={DeleteOutlinedIcon}/>
            
        </div>
    )
}

export default Sidebar
