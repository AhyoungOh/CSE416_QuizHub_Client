import './style.scss';

function Quiz(
  title,
  timeLimit,
  trials,
  description,
  reward,
  leaderboard,
  imageLink,
  setQuizData
) {
  return (
    <div className='quiz' onClick={setQuizData}>
      <div className='picture'>
        <img alt={title} src={imageLink} />
      </div>
      <div className='contents'>
        <div className='quizName'>{title}</div>
        <div className='time'>
          <div className='timelimit'>{timeLimit}</div>
          <div className='trials'>{trials}</div>
          <dic className='description'>{description}</dic>
        </div>
        <div className='rewards'>
          <div className='reward'>{reward}</div>
          <div className='leaderboard'>{leaderboard}</div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
