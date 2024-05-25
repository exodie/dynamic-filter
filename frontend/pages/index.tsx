import { NextPage } from 'next';

import { Layout } from '@/components/layout';
import { List } from '@/components/list';

const HomePage: NextPage = () => (
  <Layout>
    <List />
  </Layout>
);

export default HomePage;
