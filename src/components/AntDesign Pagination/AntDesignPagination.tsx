'use client';
import React, { useState } from "react";
import type { PaginationProps } from 'antd';
import { Pagination, Card } from 'antd';
import Image from 'next/image';

const AntDesignPagination = () => {
  const [current, setCurrent] = useState(1);

  const itemRender: PaginationProps['itemRender'] = (
    _,
    type,
    originalElement,
  ) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize);
  };

  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    console.log('Page: ', pageNumber);
    setCurrent(pageNumber);
  };

  return (
    <div className={'bg-white'}>
      <section className={'grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}>
        <Card title={'Ant Design Pagination'}>
          <Image
            src={imageSrc}
            alt={'image from picsum'}
            width={640}
            height={400}
          />
        </Card>
        <Card title={'Ant Design Pagination'}>
          <Image
            src={imageSrc}
            alt={'image from picsum'}
            width={640}
            height={400}
          />
        </Card>
        <Card title={'Ant Design Pagination'}>
          <Image
            src={imageSrc}
            alt={'image from picsum'}
            width={640}
            height={400}
          />
        </Card>
        <Card title={'Ant Design Pagination'}>
          <Image
            src={imageSrc}
            alt={'image from picsum'}
            width={640}
            height={400}
          />
        </Card>
      </section>
      <Pagination
        current={current}
        total={500}
        showSizeChanger={false}
        showQuickJumper={false}
        className={'text-amber-950'}
        itemRender={itemRender}
        onShowSizeChange={onShowSizeChange}
        onChange={onChange}
      />
    </div>
  );
};

export default AntDesignPagination;
