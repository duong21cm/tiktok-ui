import classNames from 'classnames/bind'; //giúp className có thể đặt tên với dấu '-'
import styles from './DefaultLayout.module.scss';

import Header from '../component/Header';
import Sidebar from '../component/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}
export default DefaultLayout;
