import { useState } from 'react';
import { Input, Button } from '@headlessui/react';
import confetti from "canvas-confetti";
import {toast} from "react-toastify"
interface SignupFormProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    // Add other props if needed
  }
const SignupForm:React.FC<SignupFormProps> = ({setIsOpen}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {

        const signupData = {
         username,email,password,confirmPassword
        };
        if(username && email && password && confirmPassword === ""){
            alert("all feild are required")
        }else if(password !== confirmPassword){
              alert('cp must name ')
        }else{
            setIsOpen(false);
            const end = Date.now() + 1 * 1000; 
            const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
         
            const frame = () => {
              if (Date.now() > end) return;
         
              confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
              });
              confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
              });
         
              requestAnimationFrame(frame);
            };
            frame();
            localStorage.setItem("signup",JSON.stringify(signupData));
            const name = localStorage.getItem('signup'); 
const d = name ? JSON.parse(name) : null;    

             toast(`Welcome ${d?.username} to Crypto World`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            
        }
        
    };

    return (
        <div className="flex items-center justify-center min-h-[60vh] py-3 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-white">
                <div>
                    <h2 className=" text-center text-3xl font-extrabold">Sign up for an account</h2>
                </div>
                <form className=" space-y-6" onSubmit={e => e.preventDefault()}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <Input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Username"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-white text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent"
                        />
                        <Input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email address"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-white text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent"
                        />
                        <Input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-white text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent"
                        />
                        <Input
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-white text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-transparent"
                        />
                    </div>

                    <div>
                        <Button
                            onClick={handleSignup}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign up
                        </Button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
