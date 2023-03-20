import _ from 'lodash';
import axios from 'axios';
import history from './history';
class RequestCancelation {
  tokens = {};

  addRequest = (route, request) => {
    if (_.isUndefined(this.tokens[route])) {
      this.tokens[route] = [];
    }

    this.tokens[route].push(request);
  };

  deleteRequests = route => {
    if (_.isUndefined(this.tokens[route])) {
      return;
    } else {
      this.tokens[route] = [];
    }
  };

  getLocationKey() {
    return _.get(history, 'location.pathname');
  }

  getCancelToken = () => {
    const source = axios.CancelToken.source();
    const key = this.getLocationKey();
    if (!key) return;
    this.addRequest(key, source);
    return source.token;
  };

  cancelRequests(route) {
    const requests = this.tokens[route];
    if (_.isUndefined(requests)) return undefined;
    for (var i = 0; i < requests.length; i++) {
      requests[i].cancel({ message: 'change page' });
    }
    this.deleteRequests(route);
    return;
  }
}

const cancelation = new RequestCancelation();

export default cancelation;
