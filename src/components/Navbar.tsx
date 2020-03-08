import React from "react";
import { Link } from "react-router-dom";

import { Menu } from "antd";
import { UserOutlined, TeamOutlined, ProjectOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export default class Navbar extends React.Component {
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
        <Menu.Item key="community">
          <TeamOutlined />
          <Link to="/community">커뮤니티</Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <ProjectOutlined />
              프로젝트
            </span>
          }
        >
          <Menu.Item key="projects">
            <Link to="/projects/list">프로젝트 목록</Link>
          </Menu.Item>
          <Menu.Item key="order">
            <Link to="/projects/order">주문 확인하기</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
