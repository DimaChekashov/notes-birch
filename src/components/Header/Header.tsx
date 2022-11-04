import React from 'react';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined, FileAddOutlined } from "@ant-design/icons";
import SearchBox from '../SearchBox/SearchBox';
import "./Header.css";

interface Props {
}

const Header: React.FC<Props> = () => {
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
