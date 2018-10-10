import React from 'react';
import { withRouter } from 'react-router-dom';
import Rtm from '../../containers/Virtualiz/rtm-container';


class Virtualization extends React.Component {

  render() {
    return (
      <div>
        Test Virtualization
        <Rtm />
      </div>
    );
  }
}

export default withRouter(Virtualization)