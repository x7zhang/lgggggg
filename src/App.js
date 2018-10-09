import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';

import SideMenu from './containers/SideMenu';
import AppHeader from './containers/Header';
import AppRoutes from './routes/AppRoutes';


import { Layout, Menu, Icon, Breadcrumb } from 'antd';
const { Content, Sider } = Layout;

//import LoginForm from './components/login/Login';
//import SiderDemo from './components/dashboard/Dashboard';



class App extends Component {
	constructor() {
		super();
		this.state = {
			collapsed: true
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			collapsed: !this.state.collapsed
		})

			console.log(this.state.collapsed);
			if (this.state.collapsed) {

        document.getElementById("icon").src="https://formulusblack.com/wp-content/themes/_formulus/assets/images/formulusblack_logo.png";
				document.getElementById("icon").style["max-width"] = "100%";
        document.getElementById("icon").style["max-height"] = "100%";
        document.getElementById("icon").style["margin-top"] = "6%";
        document.getElementById("icon").style["margin-left"] = "6%";
        document.getElementById("icon").style["margin-bottom"] = "3%";
        //console.log("111111111");
			}
			else {
        
        document.getElementById("icon").src="https://pbs.twimg.com/profile_images/975778338412335104/adGFFEyx_400x400.jpg";
        document.getElementById("icon").style["max-width"] = "60%";
        document.getElementById("icon").style["max-height"] = "60%";
        document.getElementById("icon").style["margin-top"] = "10%";
        document.getElementById("icon").style["margin-left"] = "20%";
        document.getElementById("icon").style["margin-bottom"] = "10%";

				//console.log("222222");
        

			}
		
	}
  render() {
    return (
      <div className="App">
          <Layout className={classNames("app", "ant-layout-has-sider")}>
                    <SideMenu collapsed={this.state.collapsed} />
                    <Layout>         		
                        <AppHeader toggleMenu={this.toggle} collapsed={this.state.collapsed}/>
                        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 1280 }}>
                            <AppRoutes />
                        </Content>
                    </Layout>
           </Layout>
        </div>
    );
  }
}

export default App;
