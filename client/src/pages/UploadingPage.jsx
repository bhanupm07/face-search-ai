import React, { useState } from "react";
import Header from "../components/HomePage/Header";
import { Spinner, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../utils/constants";

const UploadingPage = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleFileUpload = async (e) => {
    setIsLoading(true);
    try {
      const file = e.target.files[0];
      const imageForm = new FormData();
      imageForm.append("file", file);
      imageForm.append("cloud_name", "dxn1nqijs");
      imageForm.append("upload_preset", "internvilla");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dxn1nqijs/image/upload",
        {
          method: "POST",
          body: imageForm,
        }
      );
      const data = await response.json();
      setUploadedFile(data.secure_url);
      // console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleSearchButton = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${serverUrl}/api/v1/user/upload-image`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      if (response.ok) {
        toast({
          title: "Image saved successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error during image upload:", error);
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Find Your Photos Anywhere
        </h2>
        <p className="text-gray-400 mb-8 text-center max-w-md">
          Upload a photo to let our AI search for matches across the web. Click
          to upload.
        </p>

        <div
          className="w-full max-w-lg p-8 bg-gray-800 border-dashed border-2 border-gray-700 rounded-lg text-center relative hover:shadow-xl"
          style={{ transition: "transform 0.3s ease" }}
        >
          {!uploadedFile ? (
            <>
              <p className="text-gray-500">No file uploaded yet!</p>
            </>
          ) : (
            <img
              src={uploadedFile}
              className="h-32 rounded border-white border p-[2px] border-dashed inline"
              alt=""
            />
          )}

          {/* {uploadedFile && (
            <div>
              <p className="text-gray-400">Uploaded File:</p>
              <p className="font-semibold">{uploadedFile.name}</p>
            </div>
          )} */}
        </div>

        <label
          htmlFor="file-upload"
          className="cursor-pointer inline-block bg-gray-700 py-2 px-4 my-6 rounded-lg text-white hover:bg-purple-500 text-sm"
        >
          {isLoading ? <Spinner /> : "Click to Upload"}
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
          disabled={isLoading}
        />

        {uploadedFile && (
          <button
            onClick={handleSearchButton}
            className="w-full max-w-lg bg-purple-600 py-2 px-6 rounded-lg hover:bg-purple-500 text-lg font-semibold"
          >
            Search Now
          </button>
        )}

        {/* Animated Processing Effect */}
        {/* {isProcessing && (
          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 animate-spin"></div>
            <p className="text-gray-400">Processing Your Request...</p>
          </div>
        )} */}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        &copy; 2024 FaceSearch AI. All rights reserved.
      </footer>
    </div>
  );
};

export default UploadingPage;
