import React from 'react';
import { withRouter } from 'react-router-dom';
import Rtm from '../../containers/Virtualiz/rtm-container';
import Lems from '../../containers/Virtualiz/lems-container';


class Virtualization extends React.Component {

  render() {
    return (
      <div>
        Test Virtualization
        <Lems />
      </div>
    );
  }
}

export default withRouter(Virtualization)