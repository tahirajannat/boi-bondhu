import React, { useState } from "react";
import EditableRow from "./Table/EditableRow";
import data from "./Table/mock-data.json";
import ReadOnlyRow from "./Table/ReadOnlyRow";

export default function BookList() {
  const [users, setusers] = useState(data);

  const [editFormData, setEditFormData] = useState({
    bookTitle: "",
    bookAuthor: "",
    bookCategory: "",
    bookDescription: "",
  });

  const [edituserId, setEdituserId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault(); // ???

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  // save (App )
  const handleEditFormSubmit = (event) => {
    event.preventDefault(); // prevent submit

    const editeduser = {
      id: edituserId, // null
      bookTitle: editFormData.bookTitle,
      bookAuthor: editFormData.bookAuthor,
      bookCategory: editFormData.bookCategory,
      bookDescription: editFormData.bookDescription,
    };

    const newusers = [...users]; //json.data +
    const index = users.findIndex((user) => user.id === edituserId);
    newusers[index] = editeduser;

    setusers(newusers);
    setEdituserId(null);
  };

  // edit
  const handleEditClick = (event, user) => {
    event.preventDefault(); // ???

    setEdituserId(user.id);
    const formValues = {
      bookTitle: user.bookTitle,
      bookAuthor: user.bookAuthor,
      bookCategory: user.bookCategory,
      bookDescription: user.bookDescription,
    };
    setEditFormData(formValues);
  };

  //edit
  const handleCancelClick = () => {
    setEdituserId(null);
  };

  const handleDeleteClick = (userId) => {
    const newusers = [...users];
    const index = users.findIndex((user) => user.id === userId);
    newusers.splice(index, 1);
    setusers(newusers);
  };

  //save(submit)  submit > handleEditFormSubmit
  return (
    <div className="container mx-auto px-20 pt-6 pb-16">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <form onSubmit={handleEditFormSubmit}>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ID
                </th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">book Author</th>
                <th className="py-3 px-6">Book Category</th>
                <th className="py-3 px-6">book Description</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <>
                  {edituserId === user.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      user={user}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
