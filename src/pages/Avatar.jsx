import React from 'react'
export default function Avatar() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Avatar</h1>
      <img
        src="/avatar-default.svg"
        alt="Avatar"
        className="w-32 h-32 rounded-full border-4 border-chronoBlue mx-auto"
      />
    </div>
  )
}
