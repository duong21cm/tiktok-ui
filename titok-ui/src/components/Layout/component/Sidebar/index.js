import classNames from 'classnames/bind'; //giúp className có thể đặt tên với dấu '-'
import styles from './Sidebar.module.scss';
import SelectorMenu from './SelectorMenu';
import Account from './Accont';
const cx = classNames.bind(styles);
const accontRecoment = [
  {
    avatar:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0c6ad8acef1b602a960607ee8a3fd1b9~c5_100x100.jpeg?x-expires=1666936800&x-signature=kUg%2BTQX3jd45gjMrA7KdtyI%2B%2F38%3D',
    title: 'Võ Hồng Dương',
    userName: 'duong',
  },
  {
    avatar:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0c6ad8acef1b602a960607ee8a3fd1b9~c5_100x100.jpeg?x-expires=1666936800&x-signature=kUg%2BTQX3jd45gjMrA7KdtyI%2B%2F38%3D',
    title: 'Võ Hồng Dương',
    userName: 'duong',
  },
  {
    avatar:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0c6ad8acef1b602a960607ee8a3fd1b9~c5_100x100.jpeg?x-expires=1666936800&x-signature=kUg%2BTQX3jd45gjMrA7KdtyI%2B%2F38%3D',
    title: 'Võ Hồng Dương',
    userName: 'duong',
  },
  {
    avatar:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0c6ad8acef1b602a960607ee8a3fd1b9~c5_100x100.jpeg?x-expires=1666936800&x-signature=kUg%2BTQX3jd45gjMrA7KdtyI%2B%2F38%3D',
    title: 'Võ Hồng Dương',
    userName: 'duong',
  },
];

const accontFollowing = [
  {
    avatar:
      'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTScTAQ27lLteu7GMs0jEa4ZhnZiKUuEZvlRaptdgQWeX5TtaIrjOD2YesHZ1uRqtxa8AJsl1kO6rF2Sd8K0fk',
    title: 'Võ Hồng Dương',
    userName: 'duong',
  },
];

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('gruop-menu')}>
        <SelectorMenu></SelectorMenu>
      </div>
      <div className={cx('gruop-menu')}>
        <div className={cx('title-menu')}>Tài khoản được đề xuất</div>
        {accontRecoment.map((item, index) => {
          return (
            <div key={index}>
              <Account
                avatar={item.avatar}
                title={item.title}
                userName={item.userName}
              />
            </div>
          );
        })}
      </div>
      <div className={cx('gruop-menu')}>
        <div className={cx('title-menu')}>Tài khoản đang Follow</div>
        {accontFollowing.map((item, index) => {
          return (
            <div key={index}>
              <Account
                avatar={item.avatar}
                title={item.title}
                userName={item.userName}
              />
            </div>
          );
        })}
      </div>
    </aside>
  );
}
export default Sidebar;
