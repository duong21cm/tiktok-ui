import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from './Account.module.scss';

const cx = classNames.bind(style);

function Account({ avatar, title, userName }) {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        alt="avatar"
        src={avatar}
      ></img>
      <div className={cx('info')}>
        <p className={cx('name')}>
          {title}
          <FontAwesomeIcon
            className={cx('iconCheck')}
            icon={faCheckCircle}
          />
        </p>
        <span className={cx('username')}>{userName}</span>
      </div>
    </div>
  );
}
export default Account;
