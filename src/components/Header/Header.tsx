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
    deleteNote(): void;
    searchQuery: {
      query: string;
      setQuery: React.Dispatch<React.SetStateAction<string>>;
    }
}

const Header: React.FC<Props> = ({setEditMode, editMode, setCreateNoteModal, deleteNote, searchQuery}) => {

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this note?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteNote();
      }
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
        <SearchBox
          searchQuery={{
            query: searchQuery.query,
            setQuery: searchQuery.setQuery
          }}
        />
    </div>
  )
}

export default Header;
