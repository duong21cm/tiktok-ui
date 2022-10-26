import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';

const cx = classNames.bind(style);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        alt="avatar"
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0c6ad8acef1b602a960607ee8a3fd1b9~c5_100x100.jpeg?x-expires=1666936800&x-signature=kUg%2BTQX3jd45gjMrA7KdtyI%2B%2F38%3D"
      ></img>
      <div className={cx('info')}>
        <p className={cx('name')}>
          Nguyễn Văn A
          <FontAwesomeIcon
            className={cx('iconCheck')}
            icon={faCheckCircle}
          />
        </p>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}
export default AccountItem;
