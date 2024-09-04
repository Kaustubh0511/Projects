import React, { useState } from 'react';
import test from "./test.png"

const GalleryWidget = () => {
  const [images, setImages] = useState([
    { id: 1, src: test },
    { id: 2, src: test },
    { id: 3, src: test }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Function to handle the file input and add the image to the gallery immediately
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newImage = { id: images.length + 1, src: imageUrl };
      setImages([...images, newImage]);

      // Close the modal immediately after selection
      setIsModalOpen(false);
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg w-full mx-96 h-full">
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-lg font-bold text-white">Gallery</h2>
        <button
          className="bg-gray-600 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-700"
          onClick={() => setIsModalOpen(true)} // Open the modal when clicked
        >
          + Add Image
        </button>
      </div>

      {/* Gallery Section */}
      <div className="flex space-x-4 overflow-x-scroll pb-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="w-16 h-16 bg-gray-500 rounded-lg flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={image.src}
              alt={`Gallery Item ${image.id}`}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Modal (Popup) for Image Upload */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Select an Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-600 file:text-white hover:file:bg-gray-700"
            />
            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)} // Close the modal manually
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryWidget;
