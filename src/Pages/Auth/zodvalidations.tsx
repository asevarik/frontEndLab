"use client"
import { z } from "zod"

export const userSignUpObject = z.object({
  username:z.string().nonempty('username is required'),
  name:z.string().nonempty('first name is required'),
  email:z.string().email().nonempty('Email is required'),
  password:z.string().min(5).nonempty('password is required'),
})

export type UserSignUpObject = z.infer<typeof userSignUpObject>;

export const userLoginObject = z.object({
  email:z.string().email().nonempty('Email is required'),
  password:z.string().min(5).nonempty('password is required'),
})

export type UserLoginObject = z.infer<typeof userLoginObject>;