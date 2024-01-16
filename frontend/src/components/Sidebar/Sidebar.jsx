import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function Sidebar() {
  const [selectedPanel, setSelectedPanel] = useState('Dashboard');
  const logOutHandler = () => {
    Swal.fire({
      title: 'you have Logged out successfully',
      icon: 'success',
      closeButtonAriaLabel: false,
      timer: 2500,
      timerProgressBar: true,
      toast: true,
    });
  };
  return (
    <div className="relative w-full h-full bg-primarySide">
      <div className="w-full flex items-center pt-[35px] pl-[35px] pb-[86px] pr-[47px] ">
        <Link to="/">
          {' '}
          <img
            src=".././logo-1.png"
            className="w-[75px] h-[45px]"
            onClick={() => setSelectedPanel('Dashboard')}
          />
        </Link>
        <p className="text-white text-base font-bold ">A.devepol</p>
      </div>

      <ul className=" w-full flex flex-col items-center justify-center text-base text-white  font-bold  space-y-16">
        <Link
          to="/users/1"
          className="w-full  relative"
          onClick={() => setSelectedPanel('Dashboard')}>
          {' '}
          <li className="pl-[60px] pr-[112px]">Dashboard</li>{' '}
          {selectedPanel === 'Dashboard' ? (
            <span className="absolute right-[-2px]  top-[-10px] bg-primaryPink w-2 h-16 rounded-3xl  "></span>
          ) : (
            ''
          )}
        </Link>
        <Link
          to="/users/1"
          className="w-full  relative"
          onClick={() => setSelectedPanel('User management')}>
          {' '}
          <li className="pl-[60px] pr-[50px]">User management</li>{' '}
          {selectedPanel === 'User management' ? (
            <span className="absolute right-[-2px] top-[-10px]  bg-primaryPink w-2 h-16 rounded-3xl "></span>
          ) : (
            ''
          )}
        </Link>
        <Link
          to="/articles/1"
          className="w-full  relative"
          onClick={() => setSelectedPanel('Articles')}>
          {' '}
          <li className="pl-[60px] pr-[112px]">Articles</li>{' '}
          {selectedPanel === 'Articles' ? (
            <span className="absolute right-[-2px] top-[-10px]  bg-primaryPink w-2 h-16 rounded-3xl "></span>
          ) : (
            ''
          )}
        </Link>
        <Link
          to="/products/1"
          className="w-full  relative"
          onClick={() => setSelectedPanel('Products')}>
          {' '}
          <li className="pl-[60px] pr-[112px]">Products</li>{' '}
          {selectedPanel === 'Products' ? (
            <span className="absolute right-[-2px] top-[-10px]  bg-primaryPink w-2 h-16 rounded-3xl "></span>
          ) : (
            ''
          )}
        </Link>
      </ul>

      <div
        className="absolute bottom-0 w-full bg-primaryLogOut text-white py-4 "
        onClick={logOutHandler}>
        <p className="text-base font-bold  ml-[60px] mr-[112px] cursor-pointer ">
          Log Out
        </p>
      </div>
    </div>
  );
}
