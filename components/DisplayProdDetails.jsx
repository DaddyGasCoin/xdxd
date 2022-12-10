import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';

const DisplayProdDetails = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://dummyjson.com/products');
            setData(res.data);
        };
        fetchData();
    }, []);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => a.price - b.price
        },
        {
            title: 'Discount Percentage',
            dataIndex: 'discountPercentage',
            key: 'discountPercentage',
            sorter: (a, b) => a.discountedPrice - b.discountedPrice
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand'
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category'
        },
        {
            title: 'Image (thumbnail)',
            dataIndex: 'thumbnail',
            key: 'thumbnail',
            render: thumbnail => <img src={thumbnail} alt="thumbnail" style={{ width: '50px', height: '50px' }} />

        }
    ];

    return (

        <Table columns={columns} dataSource={data.products} responsive={true} />

    );
};


export default DisplayProdDetails