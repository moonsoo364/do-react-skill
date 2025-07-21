import React from 'react';
import Proptypes from 'prop-types';
import { withRouter } from 'react-router-dom';
const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push('/')}>홈으로</button>
    </div>
  );
};

WithRouterSample.propTypes = {
  location: Proptypes.object,
  match: Proptypes.object,
  history: Proptypes.object
};
export default withRouter(WithRouterSample);
