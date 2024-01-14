import React, { useState, useEffect } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';
import Editor from '../../components/Editor/Editor';
import ArticleSchema from '../../Validation/ArticleVaidate';
export default function Articles() {
  const [articleBody, setArticleBody] = useState('');
  const [articleName, setArticleName] = useState('');
  const [articleCategory, setArticleCategory] = useState('');
  const [articleWriter, setArticleWriter] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newArticle = {
      body: articleBody,
      name: articleName,
      category: articleCategory,
      writer: articleWriter,
    };

    // const isValid = await registerSchema.isValid(newUser);
    try {
      const isValid = ArticleSchema.validate(newArticle, {
        abortEarly: false,
      });
      console.log({ isValid });
    } catch (err) {
      let errors = err.inner.reduce(
        (acc, err) => ({
          ...acc,
          [err.path]: err.message,
        }),
        {}
      );
      setErrors(errors);
    }
  }, [articleBody, articleName, articleCategory, articleWriter]);

  const AddingNewArticle = () => {};
  const articleDeleteHandler = () => {
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
      {/* ArticleHeader */}
      <div className="flex items-center justify-between mx-9 h-24 ">
        <div className=" flex items-end  space-x-2 ">
          <span className="text-primaryTitle text-xl font-normal ">
            Article catalogue
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
              className="bg-none p-1 text-primaryItem focus:outline-none "
              placeholder="Search item ..."
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Please Search by name"
              data-tooltip-place="bottom"
            />
            <Tooltip id="my-tooltip" />
          </div>
        </div>
      </div>
      {/* ArticleHeader */}
      {/* Adding new Article */}
      <div className="flex flex-wrap  justify-between mx-9 my-5 h-auto gap-2 ">
        <div className="flex flex-col items-start justify-start gap-2">
          <label
            htmlFor="name"
            className="text-base font-semibold text-primaryItem">
            Article Name :
          </label>
          <input
            type="text"
            id="name"
            className="bg-none p-1 text-primaryItem focus:outline-none px-[5px] border-solid border border-primaryItem/50 rounded w-56 h-10  "
            placeholder="Article Name"
            onChange={(event) => setArticleName(event.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <label
            htmlFor="category"
            className="text-base font-semibold text-primaryItem">
            Category :
          </label>
          <input
            type="text"
            id="category"
            className="bg-none p-1 text-primaryItem focus:outline-none px-[5px] border-solid border border-primaryItem/50 rounded w-56 h-10  "
            placeholder="category "
            onChange={(event) => setArticleCategory(event.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <label
            htmlFor="writer"
            className="text-base font-semibold text-primaryItem">
            Writer :
          </label>
          <input
            type="text"
            id="writer"
            className="bg-none p-1 text-primaryItem focus:outline-none px-[5px] border-solid border border-primaryItem/50 rounded w-56 h-10  "
            placeholder="writer "
            onChange={(event) => setArticleWriter(event.target.value)}
          />
        </div>

        <div className="flex flex-col items-start justify-start gap-2">
          <label
            htmlFor="writer"
            className="text-base font-semibold text-primaryItem">
            Body :
          </label>
          <Editor value={articleBody} setValue={setArticleBody} />
        </div>
        <div className="flex flex-col items-end justify-center gap-2">
          <button
            className="bg-primaryButton text-white text-base font-normal w-24 h-10 rounded py-[10px] px-[15px] "
            onClick={AddingNewArticle}>
            Add New
          </button>
        </div>
      </div>

      {/* Adding new Article */}

      {/* ArticleTable */}
      <table className="flex flex-col w-full overflow-auto">
        <thead className="bg-primaryTableHeader w-full h-10 ">
          <th className="text-primaryTitle text-base font-normal flex justify-between items-center px-8 h-full">
            <td>#</td>
            <td>ArticleName</td>
            <td>category</td>
            <td>Writer</td>
            <td>Actions</td>
          </th>
        </thead>
        <tbody className="w-full h-full">
          <tr className="flex justify-between items-center  h-16 text-primaryItem  font-normal text-base px-8 border-b border-solid border-b-primaryInput">
            <td>03</td>
            <td>i phone 13</td>
            <td>Tech</td>
            <td>ALi tajik</td>
            <button className="bg-none" onClick={articleDeleteHandler}>
              Delete
            </button>
          </tr>
        </tbody>
      </table>

      {/* ArticleTable */}
    </div>
  );
}
