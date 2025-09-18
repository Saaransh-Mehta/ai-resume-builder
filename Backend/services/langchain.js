import {Cohere} from '@langchain/cohere'
import {ChatPromptTemplate , HumanMessagePromptTemplate, SystemMessagePromptTemplate} from '@langchain/core/prompts'

export const langchainService = async()=>{
    const cohere = new Cohere({
        apiKey: process.env.COHERE_API_KEY,
        model:'command-r-plus',
        temperature:0.5
    })

    const prompt =  ChatPromptTemplate.fromMessages([
        ["system","You are a very helpful assistant that helps people to improve the quality of their about e section of resume "],
        ["user","Improve the quality of this about me section of resume : {aboutme}"]


    ])

const res = await cohere.invoke(
  prompt, 
  { aboutme: "I am a software developer with 5 years of experience in web development. I have worked on various projects using different technologies. I am passionate about coding and love to learn new things." }
);
    console.log(res)
    return res
}