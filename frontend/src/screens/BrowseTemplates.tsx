import { useState } from "react"
import { Button } from "@/components/ui/button"
import { userAuthStore } from "@/store/userStore"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useNavigate } from "react-router-dom"
import { templates } from '../templates/templates.ts'
import ReactPaginate from 'react-paginate'

const ITEMS_PER_PAGE = 6

const BrowseTemplates = () => {
  const user = userAuthStore((state) => state.user)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const navigate = useNavigate()
  if (!user) {
    navigate("/login")
  }

  const avatarUrl = "https://github.com/shadcn.png"

  const pageCount = Math.ceil(templates.length / ITEMS_PER_PAGE)
  const offset = currentPage * ITEMS_PER_PAGE
  const currentTemplates = templates.slice(offset, offset + ITEMS_PER_PAGE)

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="dashboard-screen min-h-screen bg-white">
      <div className="navbar flex justify-between items-center p-4 sm:p-6 md:p-8">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">AI Resume Builder</h1>
        <div className="flex items-center gap-4 relative">
          <div className="relative">
            <button
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center focus:outline-none overflow-hidden border border-blue-300 bg-blue-100"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                <AvatarImage src={avatarUrl} alt="User" />
                <AvatarFallback>
                  U
                </AvatarFallback>
              </Avatar>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 sm:w-64 bg-white shadow-lg rounded-xl border border-blue-100 z-10 p-4 flex flex-col gap-3">
                <div className="flex flex-col gap-1 items-center">
                  <Avatar className="w-12 h-12 sm:w-16 sm:h-16 mb-2">
                    <AvatarImage src={avatarUrl} alt="User" />
                    <AvatarFallback>
                      U
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-bold text-blue-700 text-base sm:text-lg">{user?.name}</span>
                  <span className="text-gray-600 text-xs sm:text-sm">{user?.email}</span>
                </div>
                <Button variant="outline" className="w-full border-blue-400" onClick={() => {/* update user logic */ }}>
                  Update Profile
                </Button>
                <Button variant="outline" className="w-full border-red-400" onClick={() => {/* logout logic */ }}>
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="main-section container flex flex-col justify-center gap-3 mx-auto p-4 sm:p-8">
        <div className="flex flex-col max-w-[720px] gap-3 mx-auto justify-center items-center mt-5">
          <h1 className="text-2xl sm:text-4xl monsteratt font-semibold text-center">Browse Templates</h1>
          <div className="flex flex-col justify-center items-center text-center">
            <p>Each resume template is designed to follow the exact rules you need to get hired faster.</p>
            <p>Use our resume templates and get free access to 18 more career tools!</p>
          </div>
        </div>

        <div className="main-mid-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {currentTemplates.map((template) => (
            <div key={template.id} className="template-card border border-blue-200 rounded-xl p-4 my-2 mx-auto w-full max-w-[420px] hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{template.name}</h2>
              <p className="mb-4 text-sm sm:text-base">{template.description}</p>
              <img src={template.image} alt={template.name} className="w-full h-auto mb-4 rounded-lg object-cover" />
              <Button onClick={() => navigate(`/create-resume/${template.id}`)} className="bg-blue-600 text-white hover:bg-blue-700 mt-auto">
                Use Template
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"flex gap-2"}
            pageClassName={"px-3 py-1 rounded border border-blue-200 cursor-pointer"}
            activeClassName={"bg-blue-600 text-white"}
            previousClassName={"px-3 py-1 rounded border border-blue-200 cursor-pointer"}
            nextClassName={"px-3 py-1 rounded border border-blue-200 cursor-pointer"}
            breakClassName={"px-3 py-1"}
            forcePage={currentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default BrowseTemplates