import { useState } from "react"
import Template_01 from "@/templates/Template_01"

const initialResumeData = {
  name: "John Doe",
  email: "john@example.com",
  phone: "123-456-7890",
  summary: "Experienced software engineer with a passion for building scalable web applications.",
  experience: [
    {
      company: "Tech Corp",
      role: "Frontend Developer",
      duration: "2021 - Present",
      description: "Developed modern UIs with React and Tailwind."
    }
  ],
  education: [
    {
      school: "State University",
      degree: "B.Sc. Computer Science",
      year: "2020"
    }
  ],
  skills: ["React", "TypeScript", "TailwindCSS"]
}

export const ResumeEditor = () => {
  const [resumeData, setResumeData] = useState(initialResumeData)

  // You can build a form here to update resumeData

  return (
    <div className="flex gap-8">
      {/* Editor form goes here */}
      <Template_01 resumeData={resumeData} />
    </div>
  )
}