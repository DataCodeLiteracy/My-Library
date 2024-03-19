export interface UserInfo {
  email: string
  password: string
  rePassword: string
  name?: string
  phoneNo?: string
  [key: string]: string | boolean | undefined
}
