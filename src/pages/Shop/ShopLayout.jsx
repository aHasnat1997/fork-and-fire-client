import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HeaderBanner from '../../components/HeaderBanner';
import banner from '../../assets/shop/banner2.jpg';
import 'react-tabs/style/react-tabs.css';
import OrderTab from '../../components/OrderTab';

const ShopLayout = () => {
  return (
    <>
      <HeaderBanner image={banner} title={'OUR SHOP'} />
      <div className='max-w w-full my-16'>
        <Tabs>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderTab categoryName={'salad'} />
          </TabPanel>
          <TabPanel>
            <OrderTab categoryName={'pizza'} />
          </TabPanel>
          <TabPanel>
            <OrderTab categoryName={'soup'} />
          </TabPanel>
          <TabPanel>
            <OrderTab categoryName={'dessert'} />
          </TabPanel>
          <TabPanel>
            <OrderTab categoryName={'drinks'} />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ShopLayout;
