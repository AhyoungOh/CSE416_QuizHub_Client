import Platform from '../../components/Platform';
import Write from '../../components/Write';
import Detail from '../../components/Detail';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import { useState } from 'react';
import useApiCall from '../../hooks/useApiCall';

function CreatorFunction() {
  const history = useHistory();
  const location = useLocation();
  const [loading, testData, error, fetchData] = useApiCall(
    `${process.env.REACT_APP_API_SERVER}/api/creatorHome`
  );

  const [visible, setVisible] = useState(false);

  if (!testData) {
    return <></>;
  }

  if (loading) {
    return <>loading...</>;
  }

  if (error) {
    return <>error : {error}</>;
  }

  const PlatformComponents = testData.map((platformData) => {
    return (
      <Platform
        key={platformData._id}
        title={platformData.platformName}
        time={platformData.createdDate}
        imageLink={platformData.platformImage}
        setplatformData={() => {
          history.push(`/creatorHome/${platformData._id}`);
        }}
      />
    );
  });
  const id = location.pathname.split('/')[2];
  const selectedplatformData = testData.find((el) => {
    return el._id === id;
  });

  return (
    <div>
      <Switch>
        <Route exact path='/creatorHome'>
          <div className='board-components-wrapper'>{PlatformComponents}</div>
        </Route>
        <Route path={`/creatorHome/:id`}>
          <Detail
            platformData={selectedplatformData}
            setTestData={() => {}}
            setVisible={setVisible}
          />
        </Route>
        <button
          className='open-button'
          onClick={() => setVisible((state) => !state)}
        ></button>
        {visible ? (
          <Write
            platformData={selectedplatformData}
            setData={() => {}}
            setVisible={setVisible}
            fetchData={fetchData}
          />
        ) : null}
      </Switch>
    </div>
  );
}

export default CreatorFunction;
