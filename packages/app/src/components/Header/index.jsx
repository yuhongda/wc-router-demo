/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useRef, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { useLocalStore } from 'mobx-react-lite';
import { Link, withRouter } from 'react-router-dom';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const SNOWPACK_PUBLIC___LogoutHost = import.meta && import.meta.env && import.meta.env.SNOWPACK_PUBLIC___LogoutHost;
const SNOWPACK_PUBLIC___LogoutHostPassport =
  import.meta && import.meta.env && import.meta.env.SNOWPACK_PUBLIC___LogoutHostPassport;

const Header = (props) => {
  const {
    store: {
      common,
      router: { history },
    },
  } = props;

  const view = useLocalStore(
    (source) => ({
      userInfo: source.store.common.userInfo,
    }),
    props
  );

  // 编辑器不展示header
  const isShow = history.location.pathname.indexOf('/Editor/') == -1;

  return (
    <If condition={isShow}>
      <div className={styles.siteHeaderWrap}>
        <header className={styles.siteHeader}>
          <div className={styles.loginWrap}>
            <If condition={view.userInfo.name}>
              <div className={styles.userInfo}>
                <a className={styles.avatar}>
                  <img
                    src={
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAD3ElEQVRYR+2YecilYxjGf5clY59IlmhijGaKQWYkxiAliabUoCZ7liTbP5J9lC00kuQvM6Y0SqEUkmHsspYtu+y7xCjCpYvnTMc773vOe875jPPHd9fXqe88z3Nfz3Xf93XfzxFjbhpzfEwCHDVCkwz+rwza3gdYABwA7FD+/gA+Bz4FHgful/TWsEAHDrHt7DkWuArYtaXjV4CLJD3ccv2aZQMBtL0bcBcQ5mLvA/cBDwIfAl8A6xcmA/7IwnDYjT0CnCDpy7ZAWwO0fRhwNzAV+AC4BFghyb2c2d4AOB24DNi2hH6BpJfbgGwF0PbhwAOFneXAaZJ+beOgs8Z2LpYL5qKrgXmSXu13Rl+AtmcCzwFbAldIurLuUNubAHsDmwIvSfquus52wn87cCrwMTBX0te9QPYEaHs9IAk+G1gq6eQapwF0PXBGYbizJAURpj/p3lNC/hBwaKIi6ahRAJ4E3AG8DexZDavtKcALwO7AD0VWEr4DgWnAj8AcSe9VQG4FvANsDRwiKXJUa40MlnCkMncCjpZ0bw17NwIXAE8ACzvhsr0RsAQ4E3gKmF8tJtvnAzcBz0iKjg4McD6wCnhd0h414BL+MJTPGZIizmushDKVmr2zJb1W+T6XyJ6wOU1ScnIt68Vgh53Fki6vATgLeDPsSTqooXCuBS4ETpGUVPmX2V4WXQTOkXTLoACTW3OA/SQ9X3N4vsuaVZIObgB4dToIcLakW2vOSEdaAdwjaeGgAEP/9sA2kr6tOXwLIBLxOzBd0leVEEZSXgT2Kjn4ZI9LPitp/9YAS4FEiNP4pzR1C9sJWyr9UeAYSd/HScm/G4BzgTeSh3Vn2E4L/Az4SNLO/wXAJHjCvAvwTem1vwDJyRnAz4W9aOlaNjTAwkLPEHe82Y4GBmQ0sWqLJGW4qDXbnTxulJpeVdyzSMolFgG3AZsXBD8BvxUBzr+SItdIurSBwZGKpJ/MnFi6zJ/l87qMX8k129sBZxURTyu8WdJ5NUVyJ3D8sDLTKNS2k9AR3o3joCmMtucCK4HNgCMkZW7820q3GUmoIxO1rc522lgqdImktKxGsx2mlwJPS5rXBXC0VlduWTss2M4bY3pG/qYW1QVkwzLg7hgmJa22nep/t7S54YaFArB73FomKYATngyw0ceM+32tVOssScsndNwqYFoNrH1R/nOx6sC6b7UDVc/pO1F3MTaeI39XLlUfTRfnjTEWj6YukG2fnRky0urW3bOzC2TS4jhg8dg93Gs6Qa+fPjKlPLbOf/poU60TuaZVFU+kw0HPmgQ4KGNDCfWoTkbZP/Yh/gssj744Cc2/iQAAAABJRU5ErkJggg=='
                    }
                  />
                  <span>{view.userInfo.name}</span>
                </a>
                <a
                  className={styles.link}
                  href={
                    window.location.host.includes('erp')
                      ? `${
                          typeof SNOWPACK_PUBLIC___LogoutHost == 'undefined'
                            ? __LogoutHost
                            : SNOWPACK_PUBLIC___LogoutHost
                        }${encodeURIComponent(window.location.href)}`
                      : `${
                          typeof SNOWPACK_PUBLIC___LogoutHostPassport == 'undefined'
                            ? __LogoutHostPassport
                            : SNOWPACK_PUBLIC___LogoutHostPassport
                        }${encodeURIComponent(window.location.href)}`
                  }>
                  <img
                    src={
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACKElEQVRYR+2YTYiOURTHf3+GfG+sZiMf2YuFhbBQGmMxpbCxlY2PjR0LG6OUsiAyaWosGEpIvjaIjbCWHbKRpZGvODp1p6Q854z3mWeexfPUuzrnnvvrf88599xXtPxTy/noAHs9oU7BTkEzWwMcAFYDs3pVBPgA3JB0KROrMgfNbD3wFOjLBJuiz7CkI9GaCHAc2AVcB04CP6KACftG4DTwFVgiqTJmBPgCWAcMSrqb2DzlYmafgQXAcklvqxZlAQck3U/tnnAyswlgIbBC0ps2Aj4DVgLLJH1pI+BsYI4kz8PKb0aOOIL6094IoJn1A8PAZUkP2gi4GXgE/AT2SbqYhWxEQYcxs73AOcDz76ik4xnIxgAL5BBwBZgHnAEOSfrVWBWb2dKyedWefpOMFr9rwB5J3/+1IFLwJbAWCBt1OcILmWP7y+espP1NAPqVeAyYn4DcUBT8BuyQdOd/ASfv4lDBBJQXio9rPij4+PYJGJL0sLEcrNrIzOYCY8Bu4COwTZKn0MzfJGbmk8stYAvwDtgq6XUE5/aoSGo5YjPbDtwGXhW49xm4JgG9OW8CnkuaMDMXpi8aVjOA6TaTVaQ07CfAKv+1ddzyCl5U58DqFXdvKioFFV3bRH0V2An44+lEjY+m84A36cVRHkZV7B3/cZlA6hJwMs4pSYejoOF/M+VtfLDmh/tNYESS9QwYBZhue6jgdANE8TvASKHI3ikYKRTZW6/gb7nE9ykxRObFAAAAAElFTkSuQmCC'
                    }
                  />
                  <span>退出</span>
                </a>
              </div>
            </If>
          </div>
          <h1></h1>
        </header>
      </div>
      <Else></Else>
    </If>
  );
};

export default inject('store')(observer(withRouter(Header)));
