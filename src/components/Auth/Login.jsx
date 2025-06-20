import React, { useState } from 'react'

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);

        setEmail("");
        setPassword(""); 
    }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <h1 className='text-3xl font-bold mb-4'>Login</h1>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col items-center justify-center '>
                 <input 
                 value={email}
                 onChange={(e)=>{
                    setEmail(e.target.value)
                 }}
                 required 
                 className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} required 
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login

// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log('Email:', email);
//     console.log('Password:', password);
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div className="h-screen w-screen bg-[#0f1117] text-white flex items-center justify-center font-mono">
//       <div className="relative p-10 border border-gray-700 rounded-2xl backdrop-blur-md bg-[#0f1117]/60 shadow-[0_0_20px_rgba(16,185,129,0.3)] w-[380px]">
//         <h1 className="text-4xl mb-6 font-semibold tracking-wider text-emerald-400">Login</h1>
//         <form onSubmit={submitHandler} className="flex flex-col gap-5">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="bg-transparent border border-emerald-600 px-5 py-3 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
//           />
//           <input
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="bg-transparent border border-emerald-600 px-5 py-3 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
//           />
//           <button
//             type="submit"
//             className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-full transition-all"
//           >
//             Log in
//           </button>
//         </form>

//         {/* Optional Grid Effect */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




