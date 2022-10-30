import classNames from 'classnames/bind'; //giúp className có thể đặt tên với dấu '-'
import styles from './SelectorMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const listSelector = [
  {
    title: 'Dành cho bạn',
    icon: faHouse,
  },
  {
    title: 'Đang Follow',
    icon: faUserGroup,
  },
  {
    title: 'LIVE',
    icon: faVideo,
  },
];

function SelectorMenu() {
  return (
    <div className={cx('menu-selector')}>
      {listSelector.map((item, index) => {
        return (
          <div
            className={cx('item-menu')}
            key={index}
          >
            <div className={cx('icon-menu')}>
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <div className={cx('title-menu')}>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}
export default SelectorMenu;
