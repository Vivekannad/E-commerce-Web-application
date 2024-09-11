import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const firstNameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const signUpChangeHandler = (e) => {
        e.preventDefault()
        let firstNameVal = firstNameRef.current.value
        let lastNameVal = lastNameRef.current.value
        let emailVal =  emailRef.current.value
        let passwordVal = passwordRef.current.value
        if((!firstNameVal )|| !lastNameVal || !emailVal || !passwordVal){
            alert('Fill the form');
            return
        }
        const valueObject = {
            firstName: firstNameVal,
            lastName: lastNameVal,
            email: emailVal,
            password: passwordVal 
        }
        localStorage.removeItem('userDetails');
        localStorage.setItem('userDetails',JSON.stringify(valueObject))
        navigate('/login')
    }
  return (
    <>
    <div className="form w-full flex justify-center h-96 items-center ">
        <form className="form-control flex flex-col justify-around w-1/3 h-2/3 items-center  p-5 shadow-lg shadow-slate-600" onSubmit={signUpChangeHandler}>
            <div className="name-input flex justify-around w-full">
                <label htmlFor="name" className='mr-3'>Name</label>
                <input type="text" name="name" className='border-2 border-black w-1/2' ref={firstNameRef} />
            </div>
            <div className="last-name-input flex justify-around w-full">
                <label htmlFor="last-name" className='mr-3'>Last name</label>
                <input type="text" name="last-name" className='border-2 border-black w-1/2' ref={lastNameRef} />
            </div>
            <div className="email-input flex justify-around w-full">
                <label htmlFor="email" className='mr-3'>email</label>
                <input type="email" name="email" className='border-2 border-black w-1/2' ref={emailRef} />
            </div>
            <div className="password-input flex justify-around w-full">
                <label htmlFor="password" className='mr-3'>password</label>
                <input type="password" name="password" className='border-2 border-black w-1/2' ref={passwordRef} />
                
            </div>
            <div className="submit">
                <button className='px-3 py-1 bg-orange-600 focus:ring-slate-400 text-white rounded-lg'>Submit</button>
            </div>
        </form>
        </div>
    </>
)
}

export default Signup