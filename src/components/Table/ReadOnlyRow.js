import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ReadOnlyRow = ({ user, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="py-4 px-6">{user.id}</td>
      <td className="py-4 px-6">{user.bookTitle}</td>
      <td className="py-4 px-6">{user.bookAuthor}</td>
      <td className="py-4 px-6">{user.bookCategory}</td>
      <td className="py-4 px-6">{user.bookDescription}</td>
      <td className="py-4 px-6">
        <button
          className="font-medium text-red-600 dark:text-blue-500 hover:underline mr-4"
          type="button"
          onClick={(event) => handleEditClick(event, user)}
        >
          <FaEdit />
        </button>
        <button
          className="font-medium text-red-600 dark:text-blue-500 hover:underline"
          type="button"
          onClick={() => handleDeleteClick(user.id)}
        >
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
