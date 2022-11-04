import React from 'react';
import "./ListItem.css";

interface Props {
  active?: boolean;
}

const ListItem: React.FC<Props> = ({active = false}) => {
  return (
    <div className={`list-item${active ? " active" : ""}`}>
      <div className="list-item__heading">Heading</div>
      <div className="list-item__text"><span>01.11.21</span> Additional text</div>
    </div>
  )
}

export default ListItem;
