import React from 'react';
import "./Sidebar.css";
import NoteList from '../NoteList/NoteList';
import { Note } from '../../types/types';

interface Props {
  notes: Note[];
  setCurrentNote(e: Note): void;
  searchQuery: string;
}

const Sidebar: React.FC<Props> = ({notes, setCurrentNote, searchQuery}) => {
  return (
    <div className="sidebar">
      <NoteList notes={notes} setCurrentNote={setCurrentNote} searchQuery={searchQuery} />
    </div>
  )
}

export default Sidebar;
