import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Menu } from "antd";
import {
  LineChartOutlined,
  UserOutlined,
  TeamOutlined,
  SettingOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: "profile"
  };

  handleClick = (e: any) => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="profile">
          <UserOutlined />
          <Link to="/">내 프로필</Link>
        </Menu.Item>
        <Menu.Item key="order">
          <LineChartOutlined />
          <Link to="/order">리워드 배송</Link>
        </Menu.Item>
        <Menu.Item key="community">
          <TeamOutlined />
          <Link to="/community">커뮤니티</Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <SettingOutlined />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default Navbar;
