import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  small = false,
  large = false,
  primary = false,
  outline = false,
  text = false,
  disable = false,
  rounded = false,
  lefticon,
  righticon,
  onClick,
  ...passProp
}) {
  let Comp = 'button';
  const prop = { onClick, ...passProp };
  if (to) {
    prop.to = to;
    Comp = Link;
  } else if (href) {
    prop.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', { primary, outline, small, large, text, disable, rounded });

  return (
    <Comp
      class={classes}
      {...prop}
    >
      {lefticon && <span className={cx('icon')}>{lefticon}</span>}
      <span className={cx('title')}>{children}</span>
      {righticon && <span className={cx('icon')}>{righticon}</span>}
    </Comp>
  );
}
export default Button;
