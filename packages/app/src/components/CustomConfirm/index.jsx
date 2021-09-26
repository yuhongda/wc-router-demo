import React, { Component } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import styles from './style.module.less';

const defaultConfig = {
  centered: true,
  icon: <QuestionCircleOutlined />,
  autoFocusButton: 'cancel',
  okType: 'default',
  cancelButtonProps: {
    type: 'primary',
  },
};

export default config => {
  const { className, ...rectConfig } = config;
  const modal = Modal.confirm();
  modal.update({
    className: `${styles.confirmWrap} ${className || ''}`,
    ...defaultConfig,
    ...rectConfig,
  });
  return modal;
};
