import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotificationListPage from './NotificationListPage';
import NotificationReadPage from './NotificationReadPage';
import NotificationWritePage from './NotificationWritePage';
function NotificationPage({ match}) {

  return (
    <Router>
      <Switch>
        <Route exact path={match.path} component={NotificationListPage} />
        <Route path={`${match.path}/write`} component={NotificationWritePage} />
        <Route path={`${match.path}/:no`} component={NotificationReadPage} />
      </Switch>
    </Router>
    

    
  );
}

export default NotificationPage;
