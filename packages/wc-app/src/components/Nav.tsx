import React, { useCallback, useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react';
import { useLocalStore } from 'mobx-react-lite';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  HomeOutlined,
  DesktopOutlined,
  BlockOutlined,
  GlobalOutlined,
  MonitorOutlined,
  DashboardOutlined,
  DotChartOutlined,
  ProfileOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
const { SubMenu } = Menu;
import { useStore } from '../stores';

const Container = styled.div`
  width: 200px;
  height: 100%;
  background: #fff;
  position: fixed;
  padding-top: 48px;
  top: 0;
  left: 0;
  z-index: 99;
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border: 0;
  }
`;

const Nav = observer(props => {
  const { common, router } = useStore();

  return (
    <Container>
      <Menu inlineCollapsed={false} mode="inline">
        <Menu.Item key="Page1">
          <Link to="/Page1">
            <HomeOutlined />
            <span>Page 1</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="Page2">
          <ProfileOutlined />
          <Link to="/Page2">Page 2</Link>
        </Menu.Item>
      </Menu>
    </Container>
  );
});

export default Nav;
