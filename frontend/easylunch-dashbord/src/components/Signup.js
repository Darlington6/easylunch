import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state

    const { username, email, password, confirmPassword } = formData;
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true); // Set loading to true

        if (password !== confirmPassword) {
            setErrors({ confirmPassword: 'Passwords do not match' });
            setLoading(false); // Set loading to false
            return;
        }

        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/register/`, {
                username,
                email,
                password,
            });

            if (response.status === 201) {
                setSuccessMessage('Registration successful! Please log in.');
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
                setLoading(false); // Set loading to false
                navigate('/login'); // Redirect to login page
            }
        } catch (error) {
            console.log('Error details:', error);
            if (error.response && error.response.data) {
                setErrors(error.response.data);
            } else {
                setErrors({ general: 'An error occurred. Please try again.' });
            }
            setLoading(false); // Set loading to false
        }
    };

    return (
        <div>
            <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen mt-36">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#1f2937] ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        {successMessage && <p className="text-green-500">{successMessage}</p>}
                        {errors.general && <p className="text-red-500">{errors.general}</p>}
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="text-sm rounded-lg block w-full p-2.5 placeholder:text-black"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.username && <p className="text-red-500">{errors.username}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="text-sm rounded-lg block w-full p-2.5 placeholder:text-black"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="text-sm rounded-lg block w-full p-2.5 placeholder:text-black"
                                    value={password}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.password && <p className="text-red-500">{errors.password}</p>}
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    className="text-sm rounded-lg block w-full p-2.5 placeholder:text-black"
                                    value={confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                            </div>
                            <button
                                type="submit"
                                className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                disabled={loading} // Disable button while loading
                            >
                                {loading ? 'Creating Account...' : 'Create an Account'}
                            </button>
                            <p className="text-sm font-medium text-white dark:text-white">
                                Already have an account? <a href="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;