import { Button, Paper, Stack } from '@mui/material'
import React from 'react'
import { Input } from './Input'

const data = {
    username: 'Johnathan',
    first_name: 'Syed',
    last_name: 'Rafay',
    email: 'mail@mail.com',
    phone: '123456',
    address: 'Roy G.Holland Memorial park Fishers In 46038 shelter 5'
}

const User_Profile_Section = () => {
    return (
        <>
            {/* <div className='rounded-md px-3 py-4 mt-3 bg-white max-w-full '>



                <h1 className='font-medium text-primary_color text-xl mb-3'>
                    My Profile
                </h1>



                <div className='' >
                    <div className='grid grid-cols-1 space-y-3'>
                        <div>
                            <p className='text-secondary_color text-md'>
                                First name
                            </p>
                            <h1 className='text-lg font-medium text-primary_color'>
                                {data.first_name}
                            </h1>
                        </div>
                        <div>
                            <p className='text-secondary_color text-md'>
                                Last name
                            </p>
                            <h1 className='text-lg font-medium text-primary_color'>
                                {data.last_name}
                            </h1>
                        </div>
                        <div>
                            <p className='text-secondary_color text-md'>
                                Username
                            </p>
                            <h1 className='text-lg font-medium text-primary_color'>
                                {data.username}
                            </h1>
                        </div>
                        <div>
                            <p className='text-secondary_color text-md'>
                                Email address
                            </p>
                            <h1 className='text-lg font-medium text-primary_color'>
                                {data.email}
                            </h1>
                        </div>
                        <div>
                            <p className='text-secondary_color text-md'>
                                Phone
                            </p>
                            <h1 className='text-lg font-medium text-primary_color'>
                                {data.phone}
                            </h1>
                        </div>
                        <div>
                            <p className='text-secondary_color text-md'>
                                Address
                            </p>
                            <h1 className='text-lg font-medium text-primary_color'>
                                {data.address}
                            </h1>
                        </div>
                    </div>
                </div>

            </div> */}

            <Stack className='hmariapp my-5 mx-5'>
                <Paper className='kchkro'>
                    <div className='px-5 py-5'>
                        <h1 className='font-bold text-center'>Todo App</h1>
                        <Input />
                    </div>
                        <Button>Add todo</Button>
                        <Button>Edit</Button>
                        <Button>Delete</Button>

                </Paper>
            </Stack>

        </>
    )
}

export { User_Profile_Section }
