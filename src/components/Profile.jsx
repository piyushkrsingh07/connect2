import React from 'react'

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100">
    <h1 className="text-2xl font-bold mb-4">Profile</h1>
    <img
      src="https://via.placeholder.com/200" // Increased image size
      alt="User"
      className="rounded-full mb-6 w-32 h-32" // Adjust width and height
    />
    <div className="text-center">
      <p className="mb-2"><strong>Name:</strong> John Doe</p> {/* Updated field */}
      <p><strong>Section:</strong> A1</p> {/* Updated field */}
    </div>
  </div>
  )
}

export default Profile
