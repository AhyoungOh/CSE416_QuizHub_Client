import axios from 'axios';
import React, { useState } from 'react';
import Input from './Input';
import './style.scss';
import { useHistory } from 'react-router-dom';

function Write({ quizData, setVisible, fetchData }) {
  const [title, setTitle] = useState(quizData?.title || '');
  const [imageLink, setImageLink] = useState(quizData?.imageLink || '');
  const [category, setCategory] = useState(quizData?.category || '');
  const [price, setPrice] = useState(quizData?.price || '');
  const [contents, setContents] = useState(quizData?.contents || '');
  const history = useHistory();

  const createquizData = async () => {
    await axios.post(`${process.env.REACT_APP_API_SERVER}/api/board`, {
      title,
      imageLink,
      category,
      price,
      contents,
    });
    setVisible(false);
    fetchData();
  };

  const updatequizData = async () => {
    await axios.put(`${process.env.REACT_APP_API_SERVER}/api/board`, {
      _id: quizData._id, // 어떤 걸 수정해야 될 지 알려주어야 함
      title,
      imageLink,
      category,
      price,
      contents,
    });
    setVisible(false);
    fetchData();
    history.push('/');
  };

  const deletequizData = async () => {
    await axios.delete(
      `${process.env.REACT_APP_API_SERVER}/api/board/${quizData._id}`
    );
    // 2. Write 안보이게 하기
    setVisible(false);
    // 3. fetchData 호출
    fetchData();
    // 4. quizData 를 null로 바꾼다. => main으로 간다.
    history.push('/');
  };

  if (quizData === null) {
    return (
      <div
        className='write'
        onClick={() => {
          setVisible(false);
        }}
      >
        <div className='inputs-wrapper'>
          <Input title={'글 제목'} value={title} setValue={setTitle} />
          <Input
            title={'사진 링크'}
            value={imageLink}
            setValue={setImageLink}
          />
          <Input title={'카테고리'} value={category} setValue={setCategory} />
          <Input
            title={'가격'}
            value={price}
            setValue={setPrice}
            inputType={'number'}
          />
          <Input title={'글 내용'} value={contents} setValue={setContents} />
          <div className='button-wrapper'>
            <button className='green' onClick={createquizData}>
              작성하기
            </button>
            <button
              className='red'
              onClick={() => {
                setVisible(false);
              }}
            >
              취소하기
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    // 여기는 수정하기
    return (
      <div
        className='write'
        onClick={(e) => {
          if ([...e.target?.classList].includes('write')) setVisible(false);
        }}
      >
        <div className='inputs-wrapper'>
          <Input title={'글 제목'} value={title} setValue={setTitle} />
          <Input
            title={'사진 링크'}
            value={imageLink}
            setValue={setImageLink}
          />
          <Input title={'카테고리'} value={category} setValue={setCategory} />
          <Input
            title={'가격'}
            value={price}
            setValue={setPrice}
            inputType={'number'}
          />
          <Input title={'글 내용'} value={contents} setValue={setContents} />
          <div className='button-wrapper'>
            <button className='green' onClick={updatequizData}>
              수정하기
            </button>
            <button className='red' onClick={deletequizData}>
              삭제하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Write;
