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
  faEarthAsia,
  faQuestionCircle,
  faKeyboard,
  faChevronLeft,
  faPlus,
  faPaperPlane,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';

import img from '../../../../assets/imges/imges.js';
import Popper from '../Popper/index.js';
import AccountItem from '../AccountItem/index.js';
import Buttons from '~/components/Button/index.js';
const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      header: 'Language',
      data: [{ title: 'Tiếng Việt' }, { title: 'English' }, { title: 'China' }],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboar shortcuts',
  },
];

const cx = classNames.bind(styles);

function Header() {
  const [history, setHistory] = useState([{ data: MENU_ITEM }]);
  const curent = history[history.length - 1];
  const [result, setResult] = useState([]);
  const curentUser = false;

  const HeaderMenu = ({ icon, title }) => {
    return (
      <div className={cx('header-menu')}>
        <div
          className={cx('icon-headermenu')}
          onClick={() => {
            setHistory((prev) => prev.slice(0, prev.length - 1));
          }}
        >
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className={cx('title-headermenu')}>
          <div>{title}</div>
        </div>
      </div>
    );
  };
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

        {/* ///////////////////// */}
        {/* /////SEARCH AREA///// */}
        {/* ///////////////////// */}

        <Tippy
          content="Tìm kiếm"
          visible={result.length}
          interactive={true}
          render={(attrs) => (
            <div
              className={cx('search-result')}
              tabIndex="-1"
              {...attrs}
              placement={'bottom-center'}
            >
              <Popper>
                <p className={cx('Accounts')}>Accounts</p>
                <AccountItem nameAcc={result} />
                <AccountItem nameAcc={result} />
                <AccountItem nameAcc={result} />
                <AccountItem nameAcc={result} />
              </Popper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input
              placeholder="Search account and videos"
              onChange={(e) => {
                setResult(e.target.value);
              }}
            />

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

        {/* ///////////////////// */}
        {/* /////ACTION AREA///// */}
        {/* ///////////////////// */}

        {curentUser ? (
          <div className={cx('action')}>
            <Buttons text>Upload</Buttons>
            <Buttons
              primary
              lefticon={<FontAwesomeIcon icon={faSignIn} />}
            >
              Log In
            </Buttons>
            <Tippy
              placement="bottom-end"
              interactive={true}
              delay={[0, 500]}
              render={(attrs) => (
                <div
                  className={cx('menu')}
                  tabIndex="-1"
                  {...attrs}
                >
                  <Popper>
                    <div>
                      {history.length > 1 && (
                        <HeaderMenu
                          icon={faChevronLeft}
                          title={curent.header}
                        />
                      )}
                      {curent.data.map((item, index) => {
                        const isParent = !!item.children;
                        return (
                          <div key={index}>
                            <div className={cx('item-menu')}>
                              <Buttons
                                lefticon={item.icon}
                                to={item.to}
                                onClick={() => {
                                  if (isParent) setHistory((prev) => [...prev, item.children]);
                                }}
                              >
                                {item.title}
                              </Buttons>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Popper>
                </div>
              )}
            >
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </Tippy>
          </div>
        ) : (
          <div className={cx('action-logined')}>
            <div>
              <Buttons
                text
                lefticon={<FontAwesomeIcon icon={faPlus} />}
              >
                Tải lên
              </Buttons>
            </div>

            <Tippy
              render={(attrs) => (
                <div
                  className={cx('box')}
                  tabIndex="-1"
                  {...attrs}
                >
                  Tin nhắn
                </div>
              )}
            >
              <div className={cx('message')}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </Tippy>

            <Tippy
              render={(attrs) => (
                <div
                  className={cx('box')}
                  tabIndex="-1"
                  {...attrs}
                  placement={'bottom-center'}
                >
                  Hộp thư
                </div>
              )}
            >
              <div className={cx('letter')}>
                <FontAwesomeIcon icon={faMessage} />
              </div>
            </Tippy>
            <Tippy
              render={(attrs) => (
                <div
                  className={cx('box')}
                  tabIndex="-1"
                  {...attrs}
                  placement={'bottom-center'}
                >
                  User
                </div>
              )}
            >
              <div>
                <img
                  className={cx('user-avatar')}
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="user"
                />
              </div>
            </Tippy>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
