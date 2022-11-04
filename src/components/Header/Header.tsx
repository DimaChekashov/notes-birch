import React from 'react';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined, FileAddOutlined } from "@ant-design/icons";
import SearchBox from '../SearchBox/SearchBox';
import "./Header.css";

interface Props {
    setEditMode(e: boolean): void;
    editMode: boolean;
}

const Header: React.FC<Props> = ({setEditMode, editMode}) => {
  return (
    <div className="header">
        <Button 
            type="primary" 
            size="large" 
            icon={<FileAddOutlined />}
        >Create a note</Button>
        <Button 
            type="primary" 
            size="large" 
            icon={<EditOutlined />} 
            onClick={() => setEditMode(!editMode)}
        >Edit</Button>
        <Button 
            type="primary" 
            size="large" 
            danger 
            icon={<DeleteOutlined />}
        >Delete</Button>
        <SearchBox />
    </div>
  )
}

export default Header;
