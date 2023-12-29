import React from 'react';
import { Layout, theme, Col, Row } from 'antd';
import BreadcrumbMenu from '../Elements/Breadcrumb/BreadcrumbMenu';
import ItemList from '../Fragments/ItemList';

const { Content } = Layout;

function ContentLayout() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Content style={{
            padding: '0 48px',
        }}>
            <BreadcrumbMenu />
            <div style={{
                minHeight: 500,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}>
                <ItemList />
            </div>
        </Content>
    )
}

export default ContentLayout
