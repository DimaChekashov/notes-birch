import React from 'react';
import "./Sidebar.css";
import NoteList from '../NoteList/NoteList';
import { Note } from '../../types/types';

interface Props {
  notes: Note[];
}

const Sidebar: React.FC<Props> = ({notes}) => {
  return (
    <div className="sidebar">
      <NoteList notes={notes} />
    </div>
  )
}

export default Sidebar;
