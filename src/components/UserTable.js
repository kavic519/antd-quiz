import { Space, Table } from 'antd';
import React, { useState } from 'react';

const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '日期',
        dataIndex: 'updateTime',
        key: 'updateTime',
        render: (text) => text ? new Date(text).toLocaleString() : '',
    },
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>编辑</a>
                <a>删除</a>
            </Space>
        ),
    },
];

// 使用原有的虚拟数据格式
const staticData = [
    {
        key: '1',
        id: '1',
        userName: 'John Brown',
        updateTime: '2025-09-11T10:30:00'
    },
    {
        key: '2',
        id: '2',
        userName: 'Jim Green',
        updateTime: '2025-09-11T14:20:00'
    },
    {
        key: '3',
        id: '3',
        userName: 'Joe Black',
        updateTime: '2025-09-11T09:15:00'
    },
    {
        key: '4',
        id: '4',
        userName: 'Joe Black',
        updateTime: '2025-09-11T16:45:00'
    },
    {
        key: '5',
        id: '5',
        userName: 'Joe Black',
        updateTime: '2025-09-11T11:20:00'
    }
];

const App = () => {
    const [data] = useState(staticData);
    
    // 分页配置 - 与Question组件保持一致
    const pagination = {
        current: 1,
        pageSize: 5,
        total: 100,
        showSizeChanger: false,
        position: ['bottomLeft'],
    };

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={pagination}
            onChange={onChange}
        />
    );
};

export default App;