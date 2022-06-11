import commonStyles from '../../styles/common.module.scss';
import styles from './header.module.scss';
import Link from 'next/link';

export default function Header() {
  return(
    <header className={`${commonStyles.container} ${styles.header}`}>
        <div className={commonStyles.container__content}>
          <Link href='/'>
            <a className={styles.header_logo}>
              <img src="/images/Logo.svg" alt="Logo" />
            </a>
          </Link>
        </div>
    </header>
  );
}
