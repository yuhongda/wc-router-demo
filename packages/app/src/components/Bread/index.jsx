import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import styles from './style.module.less';
import { withRouter } from 'react-router-dom';

@inject('store')
@observer
class Bread extends Component {
  constructor(props) {
    super(props);
  }

  @observable breadMenus = [];
  @observable breadcrumbNameMap = {};

  generateParent = layoutMenus => {
    layoutMenus.forEach(item => {
      if (item.url) this.breadcrumbNameMap[item.url] = item.name;

      const subMenus = item.children;
      if (subMenus) {
        subMenus.forEach(childItem => {
          childItem.pkey = item.key;
          childItem.name = `${item.name} / ${childItem.name}`;
        });
        this.generateParent(subMenus);
      } else {
        item.name = item.name;
      }
    });
  };

  componentDidMount() {
    const { menus } = this.props;
    this.breadMenus = JSON.parse(JSON.stringify(menus));
    this.generateParent(this.breadMenus);
  }

  render() {
    const {
      store: {
        router: { history }
      }
    } = this.props;
    let pathSnippets = history.location.pathname.split('/').filter(i => i);
    if (!pathSnippets.length) {
      pathSnippets = ['Home'];
    }

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return <div key={url}>{this.breadcrumbNameMap[url]}</div>;
    });

    return (
      <div className={styles.HeaderBreadcrumb}>
        <div>{extraBreadcrumbItems}</div>
      </div>
    );
  }
}

export default withRouter(Bread);
