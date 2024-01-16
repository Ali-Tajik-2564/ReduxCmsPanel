import React, { useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';
export default function Users() {
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassWord, setNewUserPassWord] = useState('');

  const AddingNewUser = () => {
    Swal.fire({
      title: 'Adding New User',
      html: `
        
      <input type="text" id="swal-input1" class="swal2-input"  placeholder="user name">
  
      <input type="email" id="swal-input2" class="swal2-input"  placeholder="email">
    
        <input type="password" id="swal-input3" class="swal2-input"  placeholder="password">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
        ];
      },
    }).then((infos) => {
      if (infos.isConfirmed) {
        setNewUserName(infos.value[0]);
        setNewUserEmail(infos.value[1]);
        setNewUserPassWord(infos.value[2]);
      }
    });
  };
  const userDeleteHandler = () => {
    Swal.fire({
      title: 'are you sure on deleting ? ',
      icon: 'question',
      confirmButtonText: 'yes',
      showCancelButton: true,
      cancelButtonText: 'no',
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  };
  return (
    <div className=" bg-white mx-4 my-5  shadow-md ">
      {/* UserHeader */}
      <div className="flex items-center justify-between mx-9 h-24 ">
        <div className=" flex items-end  space-x-2 ">
          <span className="text-primaryTitle text-xl font-normal ">
            User catalogue
          </span>
          <button className="bg-primaryGreen w-14 h-5 text-white text-sm font-normal rounded  ">
            new item
          </button>
        </div>

        <div className="flex flex-row-reverse items-center   gap-4">
          <button
            className="bg-primaryButton text-white text-base font-normal w-24 h-10 rounded py-[10px] px-[15px] "
            onClick={AddingNewUser}>
            Add New
          </button>
          <div className="flex w-56 h-10  text-primaryItem  items-center justify-start px-[5px] border-solid border border-primaryItem/50 rounded  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              className="bg-none p-1 text-primaryItem focus:outline-none"
              placeholder="Search item ..."
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Please Search by name"
              data-tooltip-place="bottom"
            />
            <Tooltip id="my-tooltip" />
          </div>
        </div>
      </div>
      {/* UserHeader */}
      {/* UserTable */}
      <table className="flex flex-col w-full overflow-auto">
        <thead className="bg-primaryTableHeader w-full h-10 ">
          <th className="text-primaryTitle text-base font-normal flex justify-between items-center px-8 h-full">
            <td>#</td>
            <td>User</td>
            <td>email</td>
            <td>Roll</td>
            <td>Actions</td>
          </th>
        </thead>
        <tbody className="w-full h-full">
          <tr className="flex justify-between items-center  h-16 text-primaryItem  font-normal text-base px-8 border-b border-solid border-b-primaryInput">
            <td>03</td>
            <td>AiTajik</td>
            <td>@ali.1385.tajik.a@gamil.com</td>
            <td>User</td>
            <button className="bg-none" onClick={userDeleteHandler}>
              Delete
            </button>
          </tr>
          <tr className="flex justify-between items-center  h-16 text-primaryItem  font-normal text-base px-8 border-b border-solid border-b-primaryInput">
            <td>03</td>
            <td>AiTajik</td>
            <td>@ali.1385.tajik.a@gamil.com</td>
            <td>user</td>
            <button className="bg-none">Delete</button>
          </tr>
        </tbody>
      </table>

      {/* UserTable */}
    </div>
  );
}
