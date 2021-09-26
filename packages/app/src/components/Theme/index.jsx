import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Switch } from 'antd';
// import darkTheme from '@/styles/theme/dark.theme.less';
// import defaultTheme from '@/styles/theme/default.theme.less';

// defaultTheme.use();

@inject('store')
@observer
class Theme extends Component {
  // toggleTheme = use => {
  //   if (use) {
  //     defaultTheme.use();
  //     darkTheme.unuse();
  //   } else {
  //     darkTheme.use();
  //     defaultTheme.unuse();
  //   }
  // };

  render() {
    const {
      store: { common }
    } = this.props;
    return (
      <div>
        {/* <Switch checkedChildren="关灯" unCheckedChildren="开灯" defaultChecked onChange={this.toggleTheme} /> */}
      </div>
    );
  }
}

export default Theme;
