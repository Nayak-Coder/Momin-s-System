import React, { useState } from "react";

const Loginpage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlelogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please Fill Email And Password Correctly");
            return;
        }
        setError("");
        console.log("Login button clicked with", { email, password });
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login your Account</h2>
                <form className="space-y-4" onSubmit={handlelogin}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 border border-gray-300 rounded mb-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded mb-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Loginpage;