import commonStyles from '../../styles/common.module.scss';
import styles from './header.module.scss';

export default function Header() {
  return(
    <header className={`${commonStyles.container} ${styles.header}`}>
      <div className={commonStyles.container__content}>
        <img src="/images/Logo.svg" alt="Logo" />
      </div>
    </header>
  );
}
