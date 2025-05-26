import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white px-4 text-center">
            <h1 className="text-5xl font-extrabold mb-4 pt-24">404 - Page Not Found</h1>
            <p className="text-lg mb-8 max-w-md">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <button
                onClick={() => navigate('/')}
                className="bg-white text-purple-700 font-semibold rounded-full px-8 py-3 shadow-lg hover:bg-purple-100 transition"
                aria-label="Go back to homepage"
            >
                Go Home
            </button>
        </div>
    )
}

export default Error404
