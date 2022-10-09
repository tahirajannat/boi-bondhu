import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="py-4 px-6 inline-block">
        <p>Editable</p>
        <input
          className="w-20"
          type="number"
          required="required"
          placeholder="Enter Id..."
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="py-4 px-6">
        <input
          className="w-20"
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="bookTitle"
          value={editFormData.bookTitle}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="py-4 px-6">
        <input
          className="w-20"
          type="text"
          required="required"
          placeholder="Enter an bookAuthor..."
          name="bookAuthor"
          value={editFormData.bookAuthor}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="py-4 px-6">
        <input
          className="w-20"
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="py-4 px-6">
        <input
          className="w-20"
          type="text"
          required="required"
          placeholder="Enter an bookDescription..."
          name="bookDescription"
          value={editFormData.bookDescription}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="py-4 px-6 inline-flex">
        <button
          className="font-medium text-red-600 dark:text-blue-500 hover:underline mr-4"
          type="submit"
        >
          Save
        </button>
        <button
          className="font-medium text-red-600 dark:text-blue-500 hover:underline mr-4"
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
