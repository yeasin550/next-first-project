"use client"
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="w-40 mx-auto mt-12 text-center">
            <h1 className="text-5xl">404</h1>
            <p className="text-3xl">Not Found</p>
             <Link
              href="/"
              className="bg-purple-700 py-2 px-4 rounded-md"
            >
              Back To Home
            </Link>
        </div>
    );
};

export default NotFound;