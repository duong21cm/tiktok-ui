//
import classNames from 'classnames/bind'; //giúp className có thể đặt tên với dấu '-'
import styles from './Header.module.scss';
import img from '../../../../assets/imges/imges.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img
            src={img.logo}
            alt="Tiktok"
          />
        </div>
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
        <div className={cx('action')}></div>
      </div>
    </header>
  );
}
export default Header;
