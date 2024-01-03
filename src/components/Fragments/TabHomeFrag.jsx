import React from 'react';
import { Tabs } from 'antd';
import Card from '../Elements/Card/Card';

function TabHomeFrag() {
    return (
        <Tabs
            defaultActiveKey="1"
            centered
            items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: <Card />,
                    };
                })}
        />
    )
}

export default TabHomeFrag
