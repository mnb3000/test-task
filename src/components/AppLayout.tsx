import React from 'react';
import { ToDos } from './ToDos';
import { Layout } from 'antd';

const { Header, Content } = Layout;

export const AppLayout = () => {
  return (
    <Layout>
      <Header>
        <h1 className="logo">Todo List</h1>
      </Header>
      <Content>
        <ToDos/>
      </Content>
    </Layout>
  )
}
