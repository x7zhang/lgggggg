import React from 'react';

import { Layout, Menu, Icon } from 'antd';
import './Sidemenu.css';



const { Sider } = Layout

class SideMenu extends React.Component {
	constructor(props) {
		super(props);
		//console.log(this.props.collapsed);
	}

	render() {
		return (
				<Sider
          trigger={null}
          collapsible
          collapsed={this.props.collapsed}
        >
		          <div className="logo">
		          		<img id = "icon" src="https://pbs.twimg.com/profile_images/975778338412335104/adGFFEyx_400x400.jpg" />
		          </div>
		          	<Menu theme="dark" mode="inline" defaultSelectedKeys={["/dashboard"]}>
		            <Menu.Item key="/dashboard">
		              <Icon type="dashboard" />
		              <span>DashBoard</span>
		            </Menu.Item>
		            <Menu.Item key="/management">
		              <Icon type="flag" />
		              <span>Management</span>
		            </Menu.Item>
		            <Menu.Item key="/virtualization">
		              <Icon type="gold" />
		              <span>Virtualization</span>
		            </Menu.Item>
		            <Menu.Item key="diagnostics">
		              <Icon type="medicine-box" />
		              <span>Diagnostics</span>
		            </Menu.Item>
		            <Menu.Item key="reporting">
		              <Icon type="solution" />
		              <span>Reporting</span>
		            </Menu.Item>
		            <Menu.Item key="eventlog">
		              <Icon type="fork" />
		              <span>Event Log</span>
		            </Menu.Item>
		            <Menu.Item key="setting">
		              <Icon type="setting" />
		              <span>Setting</span>
		            </Menu.Item>
		          </Menu>
       		 </Sider>
			)
	}
}

export default SideMenu
