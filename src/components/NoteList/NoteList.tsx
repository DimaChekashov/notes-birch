import React from 'react';
import ListItem from '../ListItem/ListItem';
import "./NoteList.css";

const NoteList: React.FC = () => {
  return (
    <div className="note-list">
      <ListItem active />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  )
}

export default NoteList;
