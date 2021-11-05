import './style.scss';

function Platform(title, time, imageLink, setplatformData) {
  return (
    <div className='platform' onClick={setplatformData}>
      <div className='picture'>
        <img alt={title} src={imageLink} />
      </div>
      <div className='contents'>
        <div className='platformname'>{title}</div>
        <div className='time'>{time}</div>
      </div>
    </div>
  );
}

export default Platform;
