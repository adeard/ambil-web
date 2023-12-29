import React from 'react';
import { Layout } from 'antd';
import HeaderMenu from '../components/Fragments/HeaderMenu';
import ContentLayout from '../components/Layouts/ContentLayout';

const { Footer } = Layout;

function Home() {
  return (
    <Layout>
      <HeaderMenu />
      <ContentLayout />
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default Home
