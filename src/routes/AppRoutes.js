import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router'
import { Breadcrumb, Alert } from 'antd';

import Dashboard from '../components/dashboard/Dashboard';
import Diagnostics from '../components/diagnostics/Diagnostics';
import EventLog from '../components/eventLog/EventLog';
import Management from '../components/management/Management';
import Reporting from '../components/reporting/Reporting';
import Setting from '../components/setting/Setting';
import Virtualization from '../components/virtualization/Virtualization';


const NoMatch = () => <p>Page Not Found</p>;
const AppRoutes = (props) => (
  <Switch>

    <Redirect exact from="/" to="/virtualization" />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/diagnostics" component={Diagnostics} />
    <Route exact path="/eventLog" component={EventLog} />
    <Route exact path="/management" component={Management} />
    <Route exact path="/reporting" component={Reporting} />
    <Route exact path="/setting" component={Setting} />
    <Route exact path="/virtualization" component={Virtualization} />
    <Route component={NoMatch} />

  </Switch>
)


export default AppRoutes;