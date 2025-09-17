type ResumeData = {
  name: string
  email: string
  phone: string
  summary: string
  experience: { company: string; role: string; duration: string; description: string }[]
  education: { school: string; degree: string; year: string }[]
  skills: string[]
}

interface Template01Props {
  resumeData: ResumeData
}

const Template_01 = ({ resumeData }: Template01Props) => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 font-sans">
      <div className="border-b pb-4 mb-4">
        <h1 className="text-3xl font-bold">{resumeData.name}</h1>
        <div className="text-gray-600">{resumeData.email} | {resumeData.phone}</div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
        <p>{resumeData.summary}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        {resumeData.experience.map((exp, idx) => (
          <div key={idx} className="mb-2">
            <div className="font-bold">{exp.role} at {exp.company}</div>
            <div className="text-sm text-gray-500">{exp.duration}</div>
            <div>{exp.description}</div>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        {resumeData.education.map((edu, idx) => (
          <div key={idx} className="mb-2">
            <div className="font-bold">{edu.degree}, {edu.school}</div>
            <div className="text-sm text-gray-500">{edu.year}</div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Template_01