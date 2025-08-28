import React from "react";

const Loginpage = () => {
    return(
        <div classname ="min-h-screen flex item center justify-center bg-gray-100">
            <div className ="max-w-md w-full bg-white p-8 rounded-lg shahdow-md">
                <h2 clasName ="text-2xl font bold mb-6 text center">Login your Account</h2>
                <form classname ="space-y-6">
                    <div className =" ">
                        <label className="
                        block text-sm font-medium text-gray-700/>">Email</label>
                        <input
                        type ="email"
                        placeholder="Email"
                        classname ="w-full px-3 py-2 border border gray-300 rounded mb-3 focus;outline none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className ="">
                        <label className="
                        block text-sm font-medium text-gray-700/>">Password</label>
                        <input
                        type ="password"
                        placeholder="Password"
                        classname ="w-full px-3 py-2 border border gray-300 rounded mb-3 focus;outline none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Loginpage;