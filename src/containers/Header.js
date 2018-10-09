import React from 'react';
import { connect } from 'react-redux';

import { Layout, Menu, Icon, Badge } from 'antd';
import './Header.css';

const { Header, Sider, Content } = Layout
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup


class AdminMenu extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
	
				<Menu
			        mode="horizontal"
			        //defaultSelectedKeys={['2']}
			        className="header-item"
			        //onClick={this.props.handleClick}
			      
			      >
			        <Menu.Item key="mail">
			          <Badge count={5}>
			            <Icon type="mail" />
			          </Badge>
			        </Menu.Item>
			        <SubMenu title={<span><Icon type="user" />{"guest"}</span>}>
			          <Menu.Item key="logout">
			            {"Logout"}
			          </Menu.Item>
			        </SubMenu>
			      </Menu>
			 
			)
	}
}

class AppHeader extends React.Component {
	render() {
		return (
				<Header style={{ background: '#fff', padding: 0 }}>
			        <Icon
			          className="trigger header-item"
			          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
			          onClick={this.props.toggleMenu}
			        />
			        <span className="header-title"></span>
			        <AdminMenu handleClick={this.handleClick} />
			    </Header>
			)
	}
}

export default AppHeader;