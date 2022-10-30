import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faMusic, faShare, faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import InfiniteScroll from 'react-infinite-scroll-component';
import classNames from 'classnames/bind'; //giúp className có thể đặt tên với dấu '-'
import styles from './Home.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);
const initVideo = [
  {
    avatar: 'https://avatars.dicebear.com/api/bottts/:seed.svg',
    userName: 'duong21cm',
    name: 'Võ Hồng Dương',
    description: 'Unbox nốt iPad "giá rẻ" Gen 10 siêu đẹp:))',
    hattag: '#learnontiktok #schannel #thanhcongnghe #ipad',
    nameBackGroundMusic: 'nhạc nền  -  Ngô Đức Duy',
    music: 'Music',
    video: 'https://www.youtube.com/embed/0I4bDR9vu5Q',
  },
  {
    avatar:
      'https://kenh14cdn.com/thumb_w/660/2018/5/29/300877401657213742487508320758516134445056n-15276055938491792988399.jpg',
    userName: 'kieutrang21_',
    name: 'Kiều Trang',
    description: 'có những chuyện đã sai ngay từ đầu rồi',
    hattag: '#taothao #luubi #khongminh #giaccatluong #tamquoc #tamquocdiennghia #learnontiktok',
    nameBackGroundMusic: 'nhạc nền - Kiều Trang',
    music: 'Music',
    video: 'https://www.youtube.com/embed/0I4bDR9vu5Q',
  },
];

function Home() {
  const [listVideos, setListVideos] = useState(initVideo);

  // useEffect(() => {
  //   const handleRoll = () => {
  //     // if (window.scrollY > (listVideos.length - 2) * 300 && window.scrollY < (listVideos.length + 1) * 300) {
  //     //   setListVideos((prev) => [...prev, ...initVideo]);
  //     // }
  //     console.log(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleRoll);

  //   return () => window.removeEventListener('scroll', handleRoll);
  // }, []);
  const loadData = () => {
    setListVideos((prev) => [...prev, ...initVideo]);
  };
  return (
    <div>
      <InfiniteScroll
        dataLength={listVideos.length}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        next={loadData}
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
      >
        {listVideos.map((item, index) => {
          return (
            <div
              className={cx('item')}
              key={index}
            >
              {/* Avatar */}
              <div className={cx('avatar')}>
                <img
                  src={item.avatar}
                  alt="Avater"
                  className={cx('avatar')}
                />
              </div>
              <div className={cx('contentContainer')}>
                <button className={cx('btn-follow')}>Follow</button>
                <div className={cx('info-video')}>
                  <div className={cx('channel')}>
                    <h3 className={cx('userName')}>{item.userName}</h3>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className={cx('iconCheck')}
                    />
                    <h4 className={cx('name')}>{item.name}</h4>
                  </div>
                  <div>
                    <div className={cx('description')}>{item.description}</div>
                    <div className={cx('hattag')}>
                      <h4>{item.hattag} &nbsp;</h4>
                    </div>
                  </div>
                  <div className={cx('music')}>
                    <FontAwesomeIcon
                      icon={faMusic}
                      className={cx('icon-music')}
                    />
                    <div>{item.nameBackGroundMusic}</div>
                  </div>
                </div>
                <div className={cx('container-video')}>
                  <div>
                    <iframe
                      title={index}
                      className={cx('video')}
                      src={item.video}
                      controls
                    ></iframe>
                  </div>
                  <div className={cx('action')}>
                    {/* SHARE ACTION */}
                    <div className={cx('share')}>
                      <div className={cx('icon')}>
                        <FontAwesomeIcon
                          icon={faShare}
                          className={cx('icon-share')}
                        />
                      </div>
                      <div className={cx('info-action')}>680</div>
                    </div>

                    {/* COMMENT ACTION */}
                    <div className={cx('comment')}>
                      <div className={cx('icon')}>
                        <FontAwesomeIcon
                          icon={faCommentDots}
                          className={cx('icon-comment')}
                        />
                      </div>
                      <div className={cx('info-action')}>3000</div>
                    </div>

                    {/* LIKE ACTION */}
                    <div className={cx('like')}>
                      <div className={cx('icon')}>
                        <FontAwesomeIcon
                          icon={faHeart}
                          className={cx('icon-like')}
                        />
                      </div>
                      <div className={cx('info-action')}>100.0k</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}
export default Home;
