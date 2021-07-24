import Link from 'next/link';
import { MainPath } from '../../common/LinkPath';
import styles from './Nav.module.scss';

const Nav = ({ children, className, ...rest }) => {
  let mainClassName = styles.header;

  if (className) {
    mainClassName = `${mainClassName} ${className}`;
  }

  return (
    <header className={mainClassName} {...rest}>
      <Link href={MainPath.home} className="logo">Photo Gallery</Link>
    </header>
  );
};

export default Nav;
