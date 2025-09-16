import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Eye, EyeClosed } from "lucide-react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {userAuthStore} from '../store/userStore.ts'

const Login = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
const navigate = useNavigate()
  useState(() => {
    const timer1 = setTimeout(() => setProgress(80), 1200)
    const timer2 = setTimeout(() => setLoading(false), 2200)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  })
  const handleSubmit = async(e:Event)=>{
    e.preventDefault()
    const response = await axios.post('http://localhost:3000/api/user/login',{
        email,
        password
    }).then((res)=>{
        let data = res.data
        userAuthStore.getState().setUser({
          id:data.user.id,
          name:data.user.name,
          email:data.user.email
        })

        if(data.token){
          localStorage.setItem('token',data.token)
        }


        navigate('/dashboard')
    }).catch((err)=>{
        console.log(err)
    })

    


  }

  return loading ? (
    <div className="flex flex-col justify-center items-center h-screen gap-4 bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <h1 className="font-bold text-3xl text-blue-700 tracking-tight">AI Resume Builder</h1>
      <Progress value={progress} className="w-[40%]" />
      <p className="text-gray-500">Loading your AI-powered experience...</p>
    </div>
  ) : (
    <div className="h-screen flex justify-center items-center bg-gradient-to-tr from-white via-blue-50 to-blue-100">
      <div className="w-full max-w-lg bg-white/90 rounded-2xl shadow-xl px-10 py-12 flex flex-col items-center border border-blue-100 backdrop-blur-lg">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-1 tracking-tight">Login</h1>
          <p className="text-gray-500 text-base font-medium">Access your AI-powered resume dashboard</p>
        </div>
        <form className="w-full flex flex-col gap-5 mt-2">
          <div>
            <label htmlFor="email" className="block text-blue-700 font-semibold mb-2">Email Address</label>
            <input
              id="email"
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              autoComplete="email"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-blue-700 font-semibold mb-2">Password</label>
            <input
              id="password"
              onChange={(e)=>setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              autoComplete="current-password"
            />
            {showPassword ? (
              <Eye
                className="absolute right-3 top-[38px] cursor-pointer text-blue-500"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <EyeClosed
                className="absolute right-3 top-[38px] cursor-pointer text-blue-500"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <button
            type="submit"
            onClick={(e)=>handleSubmit(e as unknown as Event)}
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold text-lg shadow hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-8 w-full flex flex-col items-center gap-2">
          <a href="/forgot-password" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
          <span className="text-gray-400 text-xs">or</span>
          <a href="/register" className="text-blue-600 text-sm font-semibold hover:underline">Create an account</a>
        </div>
      </div>
    </div>
  )
}

export default Login