import React from 'react'
import axios from 'axios'


async function Test() {

    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    const data = response.data

    return (
        <>
            {
                data ?
                    data.map((data: any) => {
                        return (
                            <div className='w-full h-full border'>
                                <p>id : {data?.id}</p>
                                <p>title : {data?.title}</p>
                            </div>
                        )
                    })
                    :
                    <div className='w-screen h-screen flex justify-center items-center text-black'>
                        Loading ...
                    </div>
            }
        </>
    )
}

export default Test