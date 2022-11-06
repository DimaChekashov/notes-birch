import React, { useEffect, useMemo, useState } from 'react';
import { Note } from '../../types/types';
import ListItem from '../ListItem/ListItem';
import "./NoteList.css";

interface Props {
  notes: Note[];
  searchQuery: string;
  setEditMode(e: boolean): void;
  currentNote: {
    note: Note | undefined;
    setNote(e: Note): void;
  };
}

const NoteList: React.FC<Props> = ({notes, currentNote, searchQuery, setEditMode}) => {
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
          active={currentNote.note?.id === note.id}
          key={note.id}
          note={note}
          onClick={() => {
            setEditMode(false);
            currentNote.setNote(note);
          }}
        />)
      ) : (
        <div className="empty-list-title">Empty Note list</div>
      )}
    </div>
  )
}

export default NoteList;
