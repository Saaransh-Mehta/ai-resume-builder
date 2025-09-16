import { useState } from "react"
import { Eye, EyeClosed } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  useState(() => {
    const timer1 = setTimeout(() => setProgress(80), 1000)
    const timer2 = setTimeout(() => setLoading(false), 1800)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let response = await axios.post('http://localhost:3000/api/user/register',{
        
            username,
            email,
            password,
            country
    }).then((res)=>{
        navigate('/login')
    }).catch((err)=>{
        console.log(err)
    })
    
  }

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4 bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <h1 className="font-bold text-3xl text-blue-700 tracking-tight">AI Resume Builder</h1>
        <Progress value={progress} className="w-[40%]" />
        <p className="text-gray-500">Loading your AI-powered experience...</p>
      </div>
    )
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-tr from-white via-blue-50 to-blue-100">
      <div className="w-full max-w-lg bg-white/90 rounded-2xl shadow-xl px-10 py-12 flex flex-col items-center border border-blue-100 backdrop-blur-lg">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-1 tracking-tight">Create Account</h1>
          <p className="text-gray-500 text-base font-medium">Sign up to start building your AI-powered resume</p>
        </div>
        <form className="w-full flex flex-col gap-5 mt-2" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-blue-700 font-semibold mb-2">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Your username"
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              autoComplete="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-blue-700 font-semibold mb-2">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="you@email.com"
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-blue-700 font-semibold mb-2">Country</label>
            <input
              id="country"
              type="text"
              placeholder="Your country"
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              autoComplete="country"
              value={country}
              onChange={e => setCountry(e.target.value)}
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-blue-700 font-semibold mb-2">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              autoComplete="new-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
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
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold text-lg shadow hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
        <div className="mt-8 w-full flex flex-col items-center gap-2">
          <span className="text-gray-400 text-xs">Already have an account?</span>
          <a href="/login" className="text-blue-600 text-sm font-semibold hover:underline">Login</a>
        </div>
      </div>
    </div>
  )
}

export default Register