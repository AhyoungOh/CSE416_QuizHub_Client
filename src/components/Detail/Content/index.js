import './style.scss';

function Content({ content, setVisible }) {
  const updatePlatformData = () => {
    setVisible(true);
  };
  return (
    <div className='detail-content'>
      <div className='content-title'>Platform Description</div>
      <div className='content-text'>{content}</div>
      <div className='buttons'>
        <button onClick={updatePlatformData}>Edit</button>
      </div>
    </div>
  );
}

export default Content;
