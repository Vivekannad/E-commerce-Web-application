import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isUserLogged } from '../../Slice Container/AuthSlice'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userDetails = JSON.parse(localStorage.getItem('userDetails'))
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const loginChangeHandler = (e) => {
        e.preventDefault()
        if (emailRef.current.value === userDetails.email || passwordRef.current.value === userDetails.password) {
            navigate('/')
        } else {
            alert('Incorrect password or email')
        }
        dispatch(isUserLogged(true));
    }
    return (
        <>
            <div className="form w-full flex justify-center h-screen items-center">
                <form
                    className="form-control flex flex-col justify-around w-1/3 h-1/2 items-center  p-5 shadow-lg shadow-slate-600"
                    onSubmit={loginChangeHandler}>
                    <div className="email-input flex justify-around w-full">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            className='border-2 border-black' ref={emailRef}
                        />
                    </div>
                    <div className="password-input flex justify-around w-full">
                        <label htmlFor="password">password</label>
                        <input
                            type="password"
                            name="password"
                            className='border-2 border-black' ref={passwordRef} title='Paasswprd'
                        />
                    </div>
                    <div className="submit">
                        <button className='px-3 py-1 bg-orange-600 focus:ring-slate-400 text-white rounded-lg'>Submit</button>
                    </div>
                    <p>Not registered? <Link to={'/signup'} className='text-red-600 font-medium' >Register here</Link></p>

                </form>
            </div>

        </>
    )
}

export default Login