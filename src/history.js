import createHistory from './history/createBrowserHistory';
import config from './config';
export default createHistory({
  basename: config.APP_PREFIX
});
