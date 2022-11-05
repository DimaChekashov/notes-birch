import React from 'react';
import "./Sidebar.css";
import NoteList from '../NoteList/NoteList';
import { Note } from '../../types/types';

interface Props {
  notes: Note[];
  setCurrentNote(e: Note): void;
}

const Sidebar: React.FC<Props> = ({notes, setCurrentNote}) => {
  return (
    <div className="sidebar">
      <NoteList notes={notes} setCurrentNote={setCurrentNote} />
    </div>
  )
}

export default Sidebar;
