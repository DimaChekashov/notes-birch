import React from 'react';
import { Note } from '../../types/types';
import ListItem from '../ListItem/ListItem';
import "./NoteList.css";

interface Props {
  notes: Note[];
}

const NoteList: React.FC<Props> = ({notes}) => {
  return (
    <div className="note-list">
      {notes.map((note) => <ListItem
        note={note}
      />)}
    </div>
  )
}

export default NoteList;
