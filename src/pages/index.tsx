import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic';
import { FiUser, FiCalendar } from "react-icons/fi";

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <>
      <header className={`${commonStyles.container} ${styles.header}`}>
        <div className={commonStyles.container__content}>
          <img src="/images/Logo.svg" alt="Logo" />
        </div>
      </header>
      <section className={`${commonStyles.container} ${styles.section}`}>
        <article className={commonStyles.container__content}>
          <h3>Title</h3>
          <p>Paragrah</p>
          <div>
            <time> <FiCalendar/> Date</time> <span> <FiUser/> Author</span>
          </div>
        </article>
      </section>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
