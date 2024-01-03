import React from 'react';
import { Layout, theme } from 'antd';
import BreadcrumbMenu from '../Elements/Breadcrumb/BreadcrumbMenu';
import ItemList from '../Fragments/ItemList';
import CarouselFrag from '../Fragments/CarouselFrag';
import TabHomeFrag from '../Fragments/TabHomeFrag';
import SearchBox from '../Fragments/SearchBox';

const { Content } = Layout;

function ContentLayout() {
    const onSearch = (value, _e, info) => console.log(info?.source, value);

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
                <CarouselFrag />
                <br />
                <SearchBox />
                <br />
                <ItemList />
                <br />
                <TabHomeFrag />
            </div>
        </Content>
    )
}

export default ContentLayout
