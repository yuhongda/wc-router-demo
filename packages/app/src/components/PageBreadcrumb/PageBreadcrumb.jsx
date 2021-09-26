import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { useDrag } from 'react-dnd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const PageBreadcrumb = props => {
  const { store: { slideEditor }, data } = props;

  return useObserver(() => (
    <Breadcrumb className={styles.pageBreadcrumb}>
      {
        data && data.map((item, i) => {
          if(item.link){
            return <Breadcrumb.Item key={i}><Link to={item.link}>{item.name}</Link></Breadcrumb.Item>
          }else{
            return <Breadcrumb.Item key={i}>{item.name}</Breadcrumb.Item>
          }
        })
      }
    </Breadcrumb>
  ));
};

export default inject('store')(observer(PageBreadcrumb));
