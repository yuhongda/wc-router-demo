import React, { useCallback, useState, useEffect } from 'react';
import { Row, Col, Empty, Button, Upload, message } from 'antd';

import { uploadUrl } from './service';
import {
  QuestionCircleOutlined,
  ExclamationCircleFilled,
  PlusOutlined,
  LoadingOutlined,
  DeleteOutlined,
  Loading3QuartersOutlined,
} from '@ant-design/icons';
import Styles from './index.less';

export interface IHeaderParams {
  empId: string; // 操作人的工号
  empName: string; // 操作人的姓名
  projectId?: number | string; // 项目id
}

// 处理上传header
const handleUploadHeaders = (headers: any, params: IHeaderParams) => {
  return {
    'sf-bizcode': 'workbench',
    'sf-belongname': 'project',
    'sf-creatorid': params?.empId,
    'sf-creatorname': params?.empName ? encodeURIComponent(`${params.empName}/${params.empId}`) : '',
    'sf-belongid': params?.projectId || null,
    ...headers,
  };
};

// 将文件b转化为mb
const convertBytesToMb = (size: number): number => {
  if (size) {
    let MB = size / 1024 / 1024;
    const value: any = Math.floor(MB).toFixed(2);
    return Math.floor(value);
  }
  return 0;
};

interface IFileObj {
  name: string; // 文件名称
  lastModified: number; // 上次修改的时间
  webkitRelativePath: string;
  size: number; // 尺寸
  type: string; // 文件类型
  uid: string; // 随机的uid
}

export interface IUploadProps {
  name?: string; // 用于fusion表单校验
  maxFileSize?: number; // 最大的文件尺寸,默认单位M ，默认大小100
  headers: IHeaderParams; // 上传文件所需要的请求头参数
  beforeUpload?: (file: IFileObj, options: object) => boolean | object;
  onStartUpload?: (file: any, options: any) => void; // 开始上传操作
  validateErrorCallback?: () => void; // 校验失败后回调函数
  [key: string]: any; // 接受组件中未处理的其他参数
}

export default function AttachmentUpload(props: React.PropsWithChildren<IUploadProps>) {
  let {
    children,
    name = 'attachment',
    action = uploadUrl,
    accept = '.pdf,.doc,.docx,.zip,.ppt,.pptx,.xls,.xlsx,.jpg,.jpeg,.png,.rar,.csv',
    maxFileSize = 30,
    headers,
    headerParams,
    beforeUpload,
    onStartUpload,
    validateErrorCallback,
    disabled,
    withCredentials = false,
    ...reset
  } = props;
  const [assignHeaders, setHeaders] = useState<any>(handleUploadHeaders(headers, headerParams)); // 处理上传的请求头,
  useEffect(() => {
    // 请求头参数变化后重新生成当前header参数
    setHeaders(handleUploadHeaders(headers, headerParams));
  }, [headerParams]);

  const callbackBeforeUpload: (file: any, options: object) => boolean | object = useCallback(
    (file: IFileObj, options: object): boolean | object => {
      // 该方法用来拦截上传操作，如果使用者传递了拦截操作则使用传递的，否则使用默认
      if (beforeUpload) {
        return beforeUpload(file, options);
      }
      const { size, name } = file;
      if (convertBytesToMb(size) > maxFileSize) {
        message.error('只支持小于30M的文件');
        if (validateErrorCallback) {
          validateErrorCallback();
        }

        return false;
      }
      const acceptType = accept.toLowerCase().split(',');
      const fileType = name.toLowerCase().substring(name.lastIndexOf('.'));
      const index = acceptType.findIndex((item: string) => item === fileType);
      if (index === -1) {
        message.error('只支持小于30M的文件');
        if (validateErrorCallback) {
          validateErrorCallback();
        }
        return false;
      }
      if (onStartUpload) {
        onStartUpload(file, options);
      }

      return true;
    },
    [beforeUpload, onStartUpload, validateErrorCallback, accept]
  );

  return (
    <Upload
      name={name}
      action={action}
      accept={accept}
      headers={assignHeaders}
      withCredentials={withCredentials}
      beforeUpload={callbackBeforeUpload}
      disabled={disabled}
      {...reset}>
      {children ? (
        children
      ) : (
        <Button type="link" className={Styles.uploadBtnStyle} disabled={!disabled}>
          上传附件
        </Button>
      )}
    </Upload>
  );
}
