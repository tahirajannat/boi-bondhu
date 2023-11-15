import React, { useState } from "react";

export default function DashboardUser() {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

  return (
    <div className="container mx-auto px-52  my-10 pt-6">
      <div className="bg-white  shadow-lg border">
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-span-5 block border mx-8 py-4">
            <label htmlFor="upload-button">
              {image.preview ? (
                <img src={image.preview} alt="dummy" width="300" height="150" />
              ) : (
                <>
                  <div className="mx-8 border border-red-100">
                    <img
                      class="block mx-auto border-2 border-red-200"
                      src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4"
                      alt=""
                    />
                  </div>
                  <h5 className="text-center my-2">Upload your photo</h5>
                </>
              )}
            </label>
          </div>
          <div className="col-span-7 text-left">
            <label>Start Date</label>
            <br />
            <input
              type="date"
              className=" text-red-300 border border-red-300 my-4"
            />
          </div>
        </div>

        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleChange}
        />
        <br />
        <button
          onClick={handleUpload}
          className="bg-black text-white px-8 py-2 rounded-md mb-6 hover:shadow-lg"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
