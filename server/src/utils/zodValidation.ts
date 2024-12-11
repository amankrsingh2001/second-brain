import zod from 'zod'

export const signupValidation = zod.object({
    fullName : zod.string(),
    username :zod.string(),
    password:zod.string().min(6)

})

export const logininValidation = zod.object({
    username:zod.string(),
    password:zod.string().min(6)
})


