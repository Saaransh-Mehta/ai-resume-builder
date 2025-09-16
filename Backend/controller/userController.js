import { PrismaClient } from "@prisma/client";
import bcryptjs from 'bcryptjs'

const prisma = new PrismaClient()
export const registerUser = async(request,reply)=>{
    
    try{
        const {username,email,password,country} = request.body
        if(!email || !password || !username){
            return reply.code(400).send({error:"Missing required fields"})
        }
        const existingUser = await prisma.user.findUnique({
            where:{email}
        })
        if(existingUser){
            return reply.code(400).send({error:"User already exists"})

        }
        const hashedPassword = await bcryptjs.hash(password,10)

        const newUser = await prisma.user.create({
            data:{
                name:username,
                email,
                password:hashedPassword
            }
        })

        return reply.code(201).send({message:"User registered successfully",user:{id:newUser.id,name:newUser.name,email:newUser.email}})

    }catch(err){
        return reply.code(500).send({error:'Internal Server Error'})
    }

}


export const loginUser = async(request,reply)=>{
    

    try{
        const {email,password} = request.body
        if(!email || !password){
            return reply.code(400).send({error:"Missing required fields"})

        }

        const user = await prisma.user.findUnique({
            where:{email}
        })

        if(!user){
            return reply.code(400).send({error:"Invalid email or password"})
        }

        const isPasswordCorrect = await bcryptjs.compare(password,user.password)
        if(!isPasswordCorrect){
            return reply.code(400).send({error:"Invalid email or password"})
        }
        const token = await request.server.jwt.sign({id:user.id},process.env.JWT_SECRET_KEY,{expiresIn:'1d'})

        return reply.code(201).setCookie('token',token,{
            path:'/',
            httpOnly:true,
            secure:false,
            maxAge:24*60*60,
        }).send({message:"Login successful",user:{id:user.id,name:user.name,email:user.email},token})
    }catch(error){
        return reply.code(500).send({error:error.message})
    }

}


export const getUser = async(request,reply)=>{
    try{
        const userId = request.user.id
        const user = await prisma.user.findUnique({
            where:{id:userId},
            select:{id:true,name:true,email:true}
        }
    )
        if(!user){
            return reply.code(404).send({error:"User not found"})
        }
        return reply.code(200).send({user})

    }catch(err){
        return reply.code(500).send({error:err})
    }
}