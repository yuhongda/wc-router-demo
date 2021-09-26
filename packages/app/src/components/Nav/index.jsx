import React, { useCallback, useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import { useLocalStore } from 'mobx-react-lite';
import { Link, withRouter } from 'react-router-dom';
import {
  isDev,
  CATEGORY_SHOW_MANAGEMENT,
  DATAEXTRACTION_REQUIREMENT,
  DATAEXTRACTION_DIMENSION,
  DATAEXTRACTION_HISTORY,
  GOODS_MONITOR_LIST_MANAGEMENT,
  MARKET_TREND_MANAGEMENT,
  WORK_MENU_MANAGEMENT,
  MY_REPORT_MENU_MANAGEMENT,
  MATERIAL_MENU_MANAGEMENT,
  TMPL_MENU_MANAGEMENT,
  BASE_DATA_MENU_VISIBLE,
  DEBUG_PAGE_MENU_MANAGEMENT,
  NEW_PRODUCT_TRACKING,
  ATTR_NORMALIZATION,
  DATA_DOWNGRADE,
  HEAT_MAP,
  formatParams,
} from '@/utils';
import { NavKeyMap } from './config';
import styled from 'styled-components';
import {
  HomeOutlined,
  DesktopOutlined,
  BlockOutlined,
  GlobalOutlined,
  MonitorOutlined,
  DashboardOutlined,
  DotChartOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
const { SubMenu } = Menu;

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

const invisibleData = ['ReportEditor', 'Editor', 'TmplEditor', 'TmplDetails'];
const Wrapper = (props) => {
  const { children } = props;
  const { router } = props.store;

  const visible = () => {
    const pathname = router.history.location.pathname || '';
    const foundIndex = (invisibleData || []).findIndex((value) => pathname.includes(value));
    const invisible = foundIndex >= 0;
    return !invisible;
  };

  return (
    <If condition={visible()}>
      {children}
      <Else></Else>
    </If>
  );
};
const VisibleWrapper = inject('store')(observer(Wrapper));

const Nav = (props) => {
  const {
    store: { common, router },
  } = props;
  const view = useLocalStore(
    (source) => ({
      userInfo: source.store.common.userInfo,
    }),
    props
  );
  const [menuSelectedKeys, setMenuSelectedKeys] = useState([]);
  const [menuOpenKeys, setMenuOpenKeys] = useState([]);

  useEffect(() => {
    // console.log('useEffect Nav');
    const pathname = router.history.location.pathname;
    const pathnameArray = pathname.split('/');
    if (!pathnameArray || pathnameArray.length < 2) {
      return;
    }
    const pathKey = pathnameArray[1];
    // console.log('useEffect Nav pathKey = ', pathKey);
    const foundKey = Object.keys(NavKeyMap).find((key) => key == pathKey);
    if (foundKey) {
      foundKey !== menuSelectedKeys[0] && setMenuSelectedKeys([foundKey]);
      setMenuOpenKeys(NavKeyMap[foundKey]);
    }
  }, [router.history.location.pathname]);

  const handleClick = (param) => {
    const { key, keyPath, item, domEvent } = param;

    if (key == menuSelectedKeys[0]) {
      return;
    }
    const foundKey = Object.keys(NavKeyMap).findIndex((navKey) => navKey == key);
    if (foundKey) {
      setMenuSelectedKeys([foundKey]);
    }
    log(
      ...formatParams({
        funcPath: '48',
        selectedItem: key,
      })
    );
  };

  const handleOpenChange = useCallback((openKeys) => {
    // console.log('handleOpenChange openKeys = ', openKeys);
    setMenuOpenKeys(openKeys);
  }, []);

  const hasPermissionForDataExtraction = [
    view.userInfo.authFunction && view.userInfo.authFunction.includes(DATAEXTRACTION_REQUIREMENT),
    view.userInfo.authFunction && view.userInfo.authFunction.includes(DATAEXTRACTION_DIMENSION),
    view.userInfo.authFunction && view.userInfo.authFunction.includes(DATAEXTRACTION_HISTORY),
  ];

  return (
    <VisibleWrapper>
      <Container>
        <Menu
          onClick={handleClick}
          selectedKeys={menuSelectedKeys}
          onOpenChange={handleOpenChange}
          openKeys={menuOpenKeys}
          inlineCollapsed={false}
          mode="inline">
          <Menu.Item key="Home">
            <Link to="/Home">
              <HomeOutlined />
              <span>首页</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="Sales">
            <ProfileOutlined />
            <Link to="/Sales">wc-app</Link>
          </Menu.Item>

          <Menu.Item key="Help">
            <Link to="/Help">
              <GlobalOutlined />
              <span>帮助中心</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Container>
    </VisibleWrapper>
  );
};

export default inject('store')(observer(withRouter(Nav)));
export { NavKeyMap };
