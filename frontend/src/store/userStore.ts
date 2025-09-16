import {create} from 'zustand'
import {persist} from 'zustand/middleware'



type User={
    id:string,
    name:string,
    email:string
} | null

interface AuthStore{
    user: User,
    setUser: (user: NonNullable<User>)=>void,
    removeUser:()=>void
}

export const userAuthStore = create<AuthStore>()(
    persist(
        (set)=>({
            user: null,
            setUser:(user:User)=>set({user}),
            removeUser:()=>set({user:{} as User})
        }),
        {name:"user-storage"}
    )
) 