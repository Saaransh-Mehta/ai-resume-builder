import { useState } from "react"
import { Button } from "@/components/ui/button"
import { userAuthStore } from "@/store/userStore"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useNavigate } from "react-router-dom"
// import templates from '../templates/templates.js'

const BrowseTemplates = () => {
  const user = userAuthStore((state) => state.user)
  const [dropdownOpen, setDropdownOpen] = useState(false)
const navigate = useNavigate()
  if(!user){
    navigate("/login")
  }


  const avatarUrl = "https://github.com/shadcn.png"

  return (
    <div className="dashboard-screen h-screen ">
      <div className="navbar flex justify-between items-center p-8">
        <h1 className="text-2xl font-bold tracking-tight">AI Resume Builder</h1>
        <div className="flex items-center gap-4 relative">
          <div className="relative">
            <button
              className="rounded-full w-12 h-12 flex items-center justify-center focus:outline-none overflow-hidden border border-blue-300 bg-blue-100"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <Avatar className="w-10 h-10">
                <AvatarImage src={avatarUrl} alt="User" />
                <AvatarFallback>
                  U
                </AvatarFallback>
              </Avatar>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-xl border border-blue-100 z-10 p-4 flex flex-col gap-3">
                <div className="flex flex-col gap-1 items-center">
                  <Avatar className="w-16 h-16 mb-2">
                    <AvatarImage src={avatarUrl} alt="User" />
                    <AvatarFallback>
                      U
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-bold text-blue-700 text-lg">{user?.name}</span>
                  <span className="text-gray-600 text-sm">{user?.email}</span>
                </div>
                <Button variant="outline" className="w-full border-blue-400" onClick={() => {/* update user logic */}}>
                  Update Profile
                </Button>
                <Button variant="outline" className="w-full border-red-400" onClick={() => {/* logout logic */}}>
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
            <div className="main-section container flex flex-col justify-center gap-3 mx-auto p-8">
              <div className="flex flex-col max-w-[720px] gap-3 mx-auto justify-center items-center mt-5">

                <h1 className=" text-4xl monsteratt font-semibold">Browse Templates</h1>
                <div className="flex flex-col justify-center items-center ">
                <p>Each resume template is designed to follow the exact rules you need to get hired faster.</p>
                <p> Use our resume templates and get free access to 18 more career tools!</p>
                </div>
              </div>

              <div className="main-mid-section">

              </div>
            </div>

    </div>
  )
}

export default BrowseTemplates