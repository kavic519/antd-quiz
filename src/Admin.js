import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import SearchUser from './components/SearchUser';
import UserTable from './components/UserTable';
import { useState } from 'react';
import SearchQuestion from './components/SearchQuestion';
import QuestionTable from './components/QuestionTable';
const { Header, Footer, Sider, Content } = Layout;
const Admin = () => {
  const [selectedKey, setSelectedKey] = useState('1');


  return (
    <>
    <Layout>
      <Header><h1 style={{color:'#ffffff'}}>Quiz管理系统</h1></Header>
      <Layout>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={({ key }) => setSelectedKey(key)}
            items={[
              { key: '1', icon: <UserOutlined />, label: '用户管理' },
              { key: '2', icon: <VideoCameraOutlined />, label: '题目管理' }
            ]}
          />
        </Sider>
        <Content>
          {selectedKey === '1' && (
            <>
              <SearchUser />
              <UserTable />
            </>
          )}
          {selectedKey === '2' && (
            <>
            <SearchQuestion />
            <QuestionTable />
            </>
          )}
        </Content>
      </Layout>
            <Footer style={{
        textAlign: 'center',
      }}
      >Quiz管理系统 ©2025 Created by gjh</Footer>
    </Layout>
    </>
  );
};
export default Admin;