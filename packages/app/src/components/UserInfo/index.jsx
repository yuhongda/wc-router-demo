import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import { ScfDropdown } from '@scf/ui';

@inject('store')
@observer
class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      store: { common }
    } = this.props;

    return (
      // <ScfDropdown style={{ width: '90px' }}>
      //   <span>{n`common.userInfo.pin`}</span>

      //   <scf-dropdown-item
      //     data-key="1"
      //     slot="dropdown"
      //     onClick={() => {
      //       alert('TODO');
      //     }}>
      //     用户中心
      //   </scf-dropdown-item>

      //   <scf-dropdown-item
      //     data-key="2"
      //     slot="dropdown"
      //     onClick={() => {
      //       alert('TODO');
      //     }}>
      //     用户设置
      //   </scf-dropdown-item>

      //   <scf-dropdown-item
      //     data-key="3"
      //     slot="dropdown"
      //     onClick={() => {
      //       common.logOut();
      //     }}>
      //     退出登录
      //   </scf-dropdown-item>
      // </ScfDropdown>
      ''
    );
  }
}

export default UserInfo;
