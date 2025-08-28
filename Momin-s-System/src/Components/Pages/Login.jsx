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
                        type ="string"
                        placeholder="Email"
                        classname ="w-full px-3 py-2 border border gray-300 rounded mb-3 focus;outline none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className ="">
                        <label className="
                        block text-sm font-medium text-gray-700/>">Password</label>
                        <input
                        type ="string"
                        placeholder="Password"
                        classname ="w-full px-3 py-2 border border gray-300 rounded mb-3 focus;outline none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </form>
                 
                   <button
                     type="submit"  
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                     onClick={(e)=> {e.preventDefault();
                     console.log("Login button clicked");
                     console.log("Form submitted");
                        window.location.href='/'
                     } }>
                        Login
                     </button>  
            </div>
        </div>
    )
}
export default Loginpage;