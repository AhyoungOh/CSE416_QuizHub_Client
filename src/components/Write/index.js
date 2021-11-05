import axios from 'axios';
import React, { useState } from 'react';
import Input from './Input';
import './style.scss';
import { useHistory } from 'react-router-dom';

function Write({ platformData, setVisible, fetchData }) {
  const [title, setTitle] = useState(platformData?.platformName || '');
  const [imageLink, setImageLink] = useState(platformData?.platformImage || '');
  const [time, setTime] = useState(platformData?.createdDate || '');
  const [contents, setContents] = useState(
    platformData?.platformDescription || ''
  );
  const history = useHistory();

  const createplatformData = async () => {
    await axios.post(`${process.env.REACT_APP_API_SERVER}/api/creatorHome`, {
      title,
      imageLink,
      time: Date.now(),
      contents,
    });
    setVisible(false);
    fetchData();
  };

  const updateplatformData = async () => {
    await axios.put(
      `${process.env.REACT_APP_API_SERVER}/api/creatorHome/${platformData._id}`,
      {
        _id: platformData._id,
        title,
        imageLink,
        contents,
        time,
      }
    );
    setVisible(false);
    fetchData();
    history.push('/');
  };

  const deleteplatformData = async () => {
    await axios.delete(
      `${process.env.REACT_APP_API_SERVER}/api/creatorHome/${platformData._id}`
    );
    setVisible(false);
    fetchData();
    history.push('/');
  };
  if (platformData === undefined) {
    return (
      <div
        className='write'
        // onClick={() => {
        //   setVisible(false);
        // }}
      >
        <div className='inputs-wrapper'>
          <Input title={'Platform Title'} value={title} setValue={setTitle} />
          <Input
            title={'Image Link'}
            value={imageLink}
            setValue={setImageLink}
          />
          <Input title={'content'} value={contents} setValue={setContents} />
          <div className='button-wrapper'>
            <button className='green' onClick={createplatformData}>
              Create
            </button>
            <button
              className='red'
              onClick={() => {
                setVisible(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    // edit part
    return (
      <div
        className='write'
        onClick={(e) => {
          if ([...e.target?.classList].includes('write')) setVisible(false);
        }}
      >
        <div className='inputs-wrapper'>
          <Input title={'Platform Title'} value={title} setValue={setTitle} />
          <Input
            title={'Image Link'}
            value={imageLink}
            setValue={setImageLink}
          />
          <Input title={'content'} value={contents} setValue={setContents} />
          {/* {Input('Platform Title', title, setTitle)} */}
          {/* {Input('Image Link', imageLink, setImageLink)} */}
          {/* {Input('Content', contents, setContents)} */}
          <div className='button-wrapper'>
            <button className='green' onClick={updateplatformData}>
              Update
            </button>
            <button className='red' onClick={deleteplatformData}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Write;
