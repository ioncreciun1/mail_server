export interface SignUpUser
{
    name:string,
    email:string,
    password:string,
    role:string
}

export interface LogInUser
{
    email:string,
    password:string,
}

export interface UpdateUser
{
    id:string,
    name:string,
    email:string
}

export interface currentUser
{
    id:string
}