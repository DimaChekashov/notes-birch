import React from 'react';
import { Note } from '../../types/types';
import ListItem from '../ListItem/ListItem';
import "./NoteList.css";

interface Props {
  notes: Note[];
  setCurrentNote(e: Note): void;
}

const NoteList: React.FC<Props> = ({notes, setCurrentNote}) => {
  return (
    <div className="note-list">
      {notes.map((note: Note) => <ListItem 
        key={note.id}
        note={note}
        setCurrentNote={setCurrentNote}
      />)}
    </div>
  )
}

export default NoteList;
