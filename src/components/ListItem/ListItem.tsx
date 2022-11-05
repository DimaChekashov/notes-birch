import React from 'react';
import { Note } from '../../types/types';
import { getDate } from '../../utils/helpers';
import "./ListItem.css";

interface Props {
  active?: boolean;
  note: Note;
}

const ListItem: React.FC<Props> = ({active = false, note}) => {
  return (
    <div className={`list-item${active ? " active" : ""}`}>
      <div className="list-item__heading">{note.title}</div>
      <div className="list-item__text"><span>{getDate(note.date)}</span> {note.additionalText}</div>
    </div>
  )
}

export default ListItem;
