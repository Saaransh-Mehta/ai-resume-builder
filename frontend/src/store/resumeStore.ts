import { create } from "zustand";

interface ResumeState{
    resumes: any[];
    addResume: (resume: any) => void;
    removeResume: (id: string) => void;
    updateResume: (id: string, updatedResume: any) => void;
}