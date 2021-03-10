import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="rank">
        <a href="/">Rank</a>
      </Menu.Item>
      <Menu.Item key="Name">
        <a href="/name">Name</a>
      </Menu.Item>
      <Menu.Item key="Release">
        <a href="/release">Release</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
