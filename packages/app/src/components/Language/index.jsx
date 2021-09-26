import React, { Component } from 'react';

import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

// import { ScfDropdown } from '@scf/ui';
import { lang } from '@/i18n';
import * as localForage from 'localforage';

//默认中文
const navigatorLang = 'zh-cn';

@inject('store')
@observer
class Language extends Component {
  constructor(props) {
    super(props);
  }

  @observable currentLang = { name: '', value: '' };

  //初始化语言图标
  langImages = {
    'zh-cn': require(`../../assets/images/zh-cn.png`),
    'en-us': require(`../../assets/images/en-us.png`),
    id: require(`../../assets/images/id.png`),
    th: require(`../../assets/images/th.png`)
  };

  componentDidMount() {
    localForage.getItem('langKey').then(value => {
      //设置当前语言
      this.currentLang = lang.supportLocales.filter(item => item.value === value)[0];
    });
  }

  changeLanguage = e => {
    const selectLang = e.target.dataset.key;
    this.currentLang = lang.supportLocales.filter(item => item.value === selectLang)[0];
    localForage.setItem('langKey', selectLang).then(value => {
      window.location.reload();
    });
  };

  render() {
    const { defaultLang } = this.props;

    return (
      // <ScfDropdown style={{ width: '120px' }}>
      //   <div>
      //     <img src={this.langImages[this.currentLang.value]} alt={this.currentLang.name} />
      //     <span style={{ paddingLeft: 8 }}>{this.currentLang.name}</span>
      //   </div>

      //   {lang.supportLocales.map(lang => (
      //     <scf-dropdown-item key={lang.value} onClick={this.changeLanguage} data-key={lang.value} slot="dropdown">
      //       <img src={this.langImages[lang.value]} /> {lang.name}
      //     </scf-dropdown-item>
      //   ))}
      // </ScfDropdown>
      ''
    );
  }
}

export default Language;
