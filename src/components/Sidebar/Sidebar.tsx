import React from 'react';
import NoteList from '../NoteList/NoteList';
import { Note } from '../../types/types';
import "./Sidebar.css";
import SearchBox from '../SearchBox/SearchBox';

interface Props {
  notes: Note[];
  setEditMode(e: boolean): void;
  currentNote: {
    note: Note | undefined;
    setNote(e: Note): void;
  };
  searchQuery: {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  };
}

const Sidebar: React.FC<Props> = ({notes, currentNote, searchQuery, setEditMode}) => {
  return (
    <div className={`sidebar${currentNote.note ? " show" : ""}`}>
      {window.innerWidth < 699 ? (
        <div className="sidebar__header">
          <SearchBox
            searchQuery={{
              query: searchQuery.query,
              setQuery: searchQuery.setQuery
            }}
          />
        </div>
      ) : undefined}
      <NoteList 
        notes={notes} 
        searchQuery={searchQuery.query} 
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
