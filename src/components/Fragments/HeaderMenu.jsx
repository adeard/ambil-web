import React from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
  
}));

function HeaderMenu() {
  return (
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <Button
            type="text"
            icon={<UserOutlined />}
            onClick={console.log('click')}
            style={{
              fontSize: '12px',
              width: 100,
              height: 64,
              float: "right",
              color: "white"
            }}
        >
          Sign Out
        </Button>
      </Header>
  )
}

export default HeaderMenu
