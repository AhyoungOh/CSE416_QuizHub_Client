import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Platform from '../../components/Platform';

function CreatorFunction() {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${url}/platform`}>
        <Platform />
      </Route>
    </Switch>
  );
}

export default CreatorFunction;
