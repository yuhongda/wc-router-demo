import React, { useState, useEffect, useRef } from 'react';
import { CloseCircleFilled, PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import * as commonApi from '@/requests/common';
import { Button, Select, Popover, message } from 'antd';
import headerIcon from '@/assets/images/headerIcon.png';
import styled from 'styled-components';

const { Option } = Select;
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  .ant-btn {
    border-radius: 50% !important;
    padding: 0;
    min-height: 50px;
  }
  .addBtn {
    width: 32px;
    height: 32px;
    border: 1px dotted #2695f1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div {
    max-width: 100px;
    text-align: center;
    padding: 4px;
  }
  .close {
    position: absolute;
    top: -5px;
    right: 0;
    display: none;
  }
  .selectValue-wrap {
    margin-right: 12px;
    .img {
      display: inline-block;
      width: 32px;
      height: 32px;
      font-size: 14px;
      position: relative;
      margin-bottom: 2px;
      img {
        border-radius: 50%;
        width: 100%;
      }
    }
    .img:hover {
      cursor: pointer;
      img {
        opacity: 0.5;
      }
      .close {
        display: block;
      }
    }
  }
`;
const Container = styled.div`
  .ant-select-show-search {
    min-width: 300px;
  }
`;
const OptionWrap = styled.div`
  display: flex;
  align-items: center;
  .depart {
    width: 240px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
  }
`;
const ImgSpan = styled.span`
  display: inline-block;

  img {
    border-radius: 50%;
    width: 36px;
    height: 36px;
  }
`;
const useThrottle = (value: string, limit: number) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(function () {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};
interface IUserCom {
  selectValue: any[];
  setSelectValue: (value: any) => void;
  max: number;
}
const UserCom = ({ selectValue, setSelectValue, max }: IUserCom) => {
  const [data, setData] = useState({
    data: [
      // {
      //   text: '李春晓（lichunxiao15）',
      //   depart: '京东集团-京东零售-智能供应链Y业务部-供应链产品及研发部-供应链创新研发组',
      //   img: 'http://img12.360buyimg.com/ee/jfs/t1/167625/21/1208/27223/5ff55a78Eb45a7886/673bed6f374a6457.jpg',
      // },
    ],
    fetching: true,
  });

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const text = useThrottle(value, 500);
  useEffect(() => {
    if (text) {
      commonApi.userCheckForBrand({ userPin: value }).then((res) => {
        if (res?.data?.data?.name) {
          const obj = res?.data?.data;
          const data: any = [
            {
              img: headerIcon,
              ...obj,
            },
          ];
          setData({ data, fetching: false });
        }
      });
    }

    return () => {};
  }, [text]);
  const content = () => {
    const fetchUser = (value: any) => {
      if (!value) return;
      setValue(value);
    };
    const handleChange = (value: { value: any }, option: any) => {
      const isHave = selectValue?.some((item) => {
        return item?.value === value?.value;
      });
      if (isHave) {
        return message.error('已添加此人');
      }
      const text = [...selectValue, option];
      setSelectValue(text);

      setVisible(false);
    };

    return (
      <Container>
        <Select
          showSearch
          labelInValue
          value=""
          placeholder="Select users"
          filterOption={false}
          onSearch={fetchUser}
          onChange={handleChange}
          style={{ width: '200px' }}>
          {data?.data.map((d: any) => (
            <Option key={d.userPin} value={d.userPin} label={d.name} data-img={d.img}>
              <OptionWrap>
                <ImgSpan>
                  <img src={d.img} />
                </ImgSpan>

                <span>
                  {`${d.name}(${d.userPin})`}
                  <br />
                  <span className="depart">{d.depart}</span>
                </span>
              </OptionWrap>
            </Option>
          ))}
        </Select>
      </Container>
    );
  };
  const handleDel = (item: { value: any }) => {
    const value = [...selectValue];
    value.forEach((o, index) => {
      if (o.value === item.value) {
        value.splice(index, 1);
        setSelectValue([...value]);
      }
    });
  };

  return (
    <Wrap>
      {selectValue?.map((item, index) => {
        return (
          <div key={index} className="selectValue-wrap">
            <div className="img">
              <img src={headerIcon} />

              <span className="close" onClick={() => handleDel(item)}>
                <CloseCircleFilled style={{ color: 'red' }} />
              </span>
            </div>

            <div style={{ fontSize: '12px' }}>{item.label || item.name}</div>
          </div>
        );
      })}
      {selectValue?.length < max && (
        <Popover
          content={content}
          placement="bottom"
          title=""
          trigger="click"
          visible={visible}
          onVisibleChange={(value) => {
            setVisible(value);
          }}>
          <div style={{ color: '#005fa8', cursor: 'pointer' }}>
            <div className="addBtn">
              <PlusOutlined style={{ fontSize: '20px' }} />
            </div>

            <span style={{ fontSize: '12px' }}>添加</span>
          </div>
        </Popover>
      )}
    </Wrap>
  );
};
export default observer(UserCom);
