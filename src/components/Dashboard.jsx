import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DateTime from './DateTime';
import BoxSection from './BoxSection';
import UserSection from './UserSection';
import VendorSection from './VendorSection';
import NewCustomers from './NewCustomers';
import SocilaMediaSection from './SocilaMediaSection';

const Dashboard = () => {
  return (
    <div className='flex '>
      <Sidebar/>
      <div>
        <Navbar />
        <DateTime />
        <BoxSection />
        <UserSection />
        <VendorSection />
        <NewCustomers />
        <SocilaMediaSection />
      </div>

    </div>
  )
}

export default Dashboard