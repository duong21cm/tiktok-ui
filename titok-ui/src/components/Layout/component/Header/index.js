//
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind'; //giúp className có thể đặt tên với dấu '-'
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSignIn,
  faSpinner,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import img from '../../../../assets/imges/imges.js';
import Popper from '../Popper/index.js';
import AccountItem from '../AccountItem/index.js';
import Buttons from '~/components/Button/index.js';

const cx = classNames.bind(styles);
function Header() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    setResult([]);
  }, []);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img
            src={img.logo}
            alt="Tiktok"
          />
        </div>
        <Tippy
          content="Tìm kiếm"
          visible={result.length}
          interactive={true}
          render={(attrs) => (
            <div
              className={cx('search-result')}
              tabIndex="-1"
              {...attrs}
            >
              <Popper>
                <p className={cx('Accounts')}>Accounts</p>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </Popper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search account and videos" />

            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon
              className={cx('loading')}
              icon={faSpinner}
            />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}>
          <Buttons text>Upload</Buttons>
          <Buttons
            primary
            lefticon={<FontAwesomeIcon icon={faSignIn} />}
          >
            Log In
          </Buttons>
          <Tippy
            content="Tìm kiếm"
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
              <div
                className={cx('menu-items')}
                tabIndex="-1"
                {...attrs}
              >
                <Popper>
                  <p className={cx('Accounts')}>Accounts</p>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </Popper>
              </div>
            )}
          >
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Tippy>
        </div>
      </div>
    </header>
  );
}
export default Header;
