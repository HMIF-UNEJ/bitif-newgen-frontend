import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Input from '../../../components/submission/Input'
import Label from '../../../components/submission/Label'
import { toast } from 'react-toastify';

export default function FormSubmission(){
    const [form, setForm] = useState({
        name: '',
        nim: ''
    });


    const handleChange = ({ target: {name, value} }) => {
        setForm((prevState) => {
            return {...prevState, [name]: value}
        })
    }
    useEffect(() => {
        console.log(form)
    }, [form])


    const notify = () => {
        toast("Default Notification !");
  
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
  
        toast.error("Error Notification !", {
          position: toast.POSITION.TOP_LEFT
        });
  
        toast.warn("Warning Notification !", {
          position: toast.POSITION.BOTTOM_LEFT
        });
  
        toast.info("Info Notification !", {
          position: toast.POSITION.BOTTOM_CENTER
        });
  
      };

      
    const handleSubmit = (e) => {
        e.preventDefault()
        notify()
    }

    return (
        <div className='sm:w-[90%] md:max-w-6xl mx-auto py-10'>
            <form action="">
                <div className='mb-6'>
                    <Label label={"Nama"} />
                    <Input name="name" placeholder={"Susanto sarigi"} onChange={handleChange} />
                </div>
                <div className='mb-6'>
                    <Label label={"Nomer Induk Mahasiswa"} />
                    <Input name="nim" placeholder={"2024101030xx"} onChange={handleChange} />
                </div>
                <div>
                    <input type="submit"  onClick={handleSubmit} value={"Kumpulkan"} />
                </div>
            </form>
        </div>
    )
}