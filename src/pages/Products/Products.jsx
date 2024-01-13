import React, { useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';

export default function PRoducts() {
  const [ProductName, setProductName] = useState('');
  const [ProductStock, setProductStock] = useState('');
  const [ProductOff, setProductOff] = useState('');
  const [ProductPrice, setProductPrice] = useState('');
  const AddingNewProduct = () => {};
  const ProductDeleteHandler = () => {
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
  const SettingOffProduct = () => {
    Swal.fire({
      title: 'Enter OFF Percent',
      input: 'text',
      inputPlaceholder: 'for example => 50',
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  };
  return (
    <div className=" bg-white mx-4 my-5  shadow-md ">
      {/* ProductHeader */}
      <div className="flex items-center justify-between mx-9 h-24 ">
        <div className=" flex items-end  space-x-2 ">
          <span className="text-primaryTitle text-xl font-normal ">
            Product catalogue
          </span>
          <button className="bg-primaryGreen w-14 h-5 text-white text-sm font-normal rounded  ">
            new item
          </button>
        </div>

        <div className="flex flex-row-reverse items-center   gap-4">
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
      {/* ProductHeader */}
      {/* Adding new Product */}
      <div className="flex flex-wrap  justify-between mx-9 my-5 h-auto gap-2 ">
        <div className="flex flex-col items-start justify-start gap-2">
          <label
            htmlFor="name"
            className="text-base font-semibold text-primaryItem">
            Product Name :
          </label>
          <input
            type="text"
            id="name"
            className="bg-none p-1 text-primaryItem focus:outline-none px-[5px] border-solid border border-primaryItem/50 rounded w-56 h-10  "
            placeholder="Product Name"
            onChange={(event) => setProductName(event.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <label
            htmlFor="Stock"
            className="text-base font-semibold text-primaryItem">
            Stock :
          </label>
          <input
            type="text"
            id="Stock"
            className="bg-none p-1 text-primaryItem focus:outline-none px-[5px] border-solid border border-primaryItem/50 rounded w-56 h-10  "
            placeholder="Stock "
            onChange={(event) => setProductStock(event.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <label
            htmlFor="Off"
            className="text-base font-semibold text-primaryItem">
            Off :
          </label>
          <input
            type="text"
            id="Off"
            className="bg-none p-1 text-primaryItem focus:outline-none px-[5px] border-solid border border-primaryItem/50 rounded w-56 h-10  "
            placeholder="Off "
            onChange={(event) => setProductOff(event.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <label
            htmlFor="Price"
            className="text-base font-semibold text-primaryItem">
            Price :
          </label>
          <input
            type="text"
            id="Price"
            className="bg-none p-1 text-primaryItem focus:outline-none px-[5px] border-solid border border-primaryItem/50 rounded w-56 h-10  "
            placeholder="Price "
            onChange={(event) => setProductPrice(event.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <button
            className="bg-primaryButton text-white text-base font-normal w-24 h-10 rounded py-[10px] px-[15px] "
            onClick={AddingNewProduct}>
            Add New
          </button>
        </div>
      </div>

      {/* Adding new Product */}
      {/* ProductTable */}
      <table className="flex flex-col w-full overflow-auto">
        <thead className="bg-primaryTableHeader w-full h-10 ">
          <th className="text-primaryTitle text-base font-normal flex justify-between items-center px-8 h-full">
            <td>#</td>
            <td>Product</td>
            <td>stock</td>
            <td>Price</td>
            <td>off</td>
            <td>Actions</td>
          </th>
        </thead>
        <tbody className="w-full h-full">
          <tr className="flex justify-between items-center  h-16 text-primaryItem  font-normal text-base px-8 border-b border-solid border-b-primaryInput">
            <td>03</td>
            <td>i phone 13</td>
            <td>95</td>
            <td>15.000.000</td>
            <td>50</td>
            <td className="space-x-2">
              <button
                className="bg-none border-b border-solid border-b-primaryItem/50"
                onClick={ProductDeleteHandler}>
                Delete
              </button>
              <button
                className="bg-none border-b border-solid border-b-primaryItem/50"
                onClick={SettingOffProduct}>
                Set Off
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ProductTable */}
    </div>
  );
}
