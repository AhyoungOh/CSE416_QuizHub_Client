import './style.scss';

function Content({ content, setVisible }) {
  const updateBoardData = () => {
    setVisible(true);
  };

  return (
    <div className='detail-content'>
      <div className='content-title'>Platform</div>
      <div className='content-text'>{content}</div>
      <div className='buttons'>
        <button onClick={updateBoardData}>Edit</button>
      </div>
    </div>
  );
}

export default Content;
