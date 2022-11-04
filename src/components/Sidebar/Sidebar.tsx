import React from 'react';
import "./Sidebar.css";
import NoteList from '../NoteList/NoteList';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <NoteList />
    </div>
  )
}

export default Sidebar;
