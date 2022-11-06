import React from 'react';
import NoteList from '../NoteList/NoteList';
import { Note } from '../../types/types';
import "./Sidebar.css";

interface Props {
  notes: Note[];
  searchQuery: string;
  setEditMode(e: boolean): void;
  currentNote: {
    note: Note | undefined;
    setNote(e: Note): void;
  };
}

const Sidebar: React.FC<Props> = ({notes, currentNote, searchQuery, setEditMode}) => {
  return (
    <div className="sidebar">
      <NoteList 
        notes={notes} 
        searchQuery={searchQuery} 
        setEditMode={setEditMode}
        currentNote={{
          note: currentNote.note,
          setNote: currentNote.setNote
        }}
      />
    </div>
  )
}

export default Sidebar;
