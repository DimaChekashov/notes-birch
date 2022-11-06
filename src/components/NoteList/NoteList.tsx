import React, { useEffect, useMemo, useState } from 'react';
import { Note } from '../../types/types';
import ListItem from '../ListItem/ListItem';
import "./NoteList.css";

interface Props {
  notes: Note[];
  setCurrentNote(e: Note): void;
  searchQuery: string;
}

const NoteList: React.FC<Props> = ({notes, setCurrentNote, searchQuery}) => {
  const [noteList, setNoteList] = useState<Note[]>(notes);

  useEffect(() => {
    setNoteList(notes);
  }, [notes]);

  useMemo(() => {
    setNoteList(notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase())));
  }, [searchQuery, notes]);

  return (
    <div className="note-list">
      {noteList.length !== 0 ? (
        noteList.map((note: Note) => <ListItem 
          key={note.id}
          note={note}
          setCurrentNote={setCurrentNote}
        />)
      ) : (
        <div className="empty-list-title">Empty Note list</div>
      )}
    </div>
  )
}

export default NoteList;
