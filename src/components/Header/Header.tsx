import React from 'react';
import { Button, Modal } from 'antd';
import { DeleteOutlined, EditOutlined, FileAddOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import SearchBox from '../SearchBox/SearchBox';
import "./Header.css";

const { confirm } = Modal;

interface Props {
    setEditMode(e: boolean): void;
    setCreateNoteModal(e: boolean): void;
    editMode: boolean;
}

const Header: React.FC<Props> = ({setEditMode, editMode, setCreateNoteModal}) => {

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this note?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <div className="header">
        <Button 
            type="primary" 
            size="large" 
            icon={<FileAddOutlined />}
            onClick={() => setCreateNoteModal(true)}
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
            onClick={showDeleteConfirm}
        >Delete</Button>
        <SearchBox />
    </div>
  )
}

export default Header;
