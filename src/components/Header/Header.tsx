import React from 'react';
import { Button, Modal } from 'antd';
import { 
  DeleteOutlined, 
  EditOutlined, 
  FileAddOutlined, 
  ExclamationCircleOutlined,
  ArrowLeftOutlined 
} from "@ant-design/icons";
import SearchBox from '../SearchBox/SearchBox';
import { Note } from '../../types/types';
import "./Header.css";

const { confirm } = Modal;

interface Props {
  setCreateNoteModal(e: boolean): void;
  deleteNote(): void;
  currentNote: {
    note: Note | undefined;
    setNote(e: Note | undefined): void;
  };
  editMode: {
    status: boolean;
    setStatus(e: boolean): void;
  };
  searchQuery: {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  };
}

const Header: React.FC<Props> = ({
  setCreateNoteModal, 
  editMode, 
  deleteNote, 
  searchQuery, 
  currentNote
}) => {
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
      {window.innerWidth >= 699 ? (
        <SearchBox
          searchQuery={{
            query: searchQuery.query,
            setQuery: searchQuery.setQuery
          }}
        />
      ) : undefined}
      <Button 
        className="header__btn"
        type="primary" 
        size="large" 
        icon={<FileAddOutlined />}
        onClick={() => setCreateNoteModal(true)}
      >Create a note</Button>
      {currentNote.note && (
        <>
          <Button 
            className="header__btn"
            type="primary" 
            size="large" 
            icon={<EditOutlined />} 
            onClick={() => editMode.setStatus(!editMode.status)}
          >Edit</Button>
          <Button 
            className="header__btn"
            type="primary" 
            size="large" 
            danger 
            icon={<DeleteOutlined />}
            onClick={showDeleteConfirm}
          >Delete</Button>
        </>
      )}
      {window.innerWidth < 699 && currentNote.note ? (
        <>
          <Button 
            className="back-btn"
            shape="circle" 
            icon={<ArrowLeftOutlined />} 
            onClick={() => {
              currentNote.setNote(undefined);
              editMode.setStatus(false);
            }}
          />
        </>
      ): undefined}
    </div>
  )
}

export default Header;
