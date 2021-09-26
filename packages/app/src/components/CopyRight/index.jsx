import React, { Component } from 'react';
// import styled from 'styled-components';
import intl from 'react-intl-universal';

export default class CopyRight extends Component {
  render() {
    return <span slot="footer">Copyright © 2004-2019 JD.COM {intl.get('copyRight')}</span>;
  }
}
