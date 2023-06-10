'use client';
import { useState } from "react";

export default function Login() {
    const [values, setValues] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(values.email);
    }
    return(
        <div className="bg-gray-200 font-sans text-gray-700 h-[100vh]">
            <div className="container mx-auto p-8 flex">
                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl text-center mb-12 font-thin font-bold">Admin Login</h1>
                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                        <div className="p-8">
                            <form method="POST" onSubmit={handleSubmit}>
                                <div className="mb-5">
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>

                                    <input type="text" name="email" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" value={values.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-5">
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>

                                    <input type="password" name="password" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" value={values.password} onChange={handleChange} required />
                                </div>
                                <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
