import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Input from '../../../components/submission/Input'
import Label from '../../../components/submission/Label'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import InputSelect from '../../../components/submission/InputSelect';
import InputFile from '../../../components/submission/InputFile';

export default function FormSubmission(){
    // const [idTask, setIdTask] = useState(0);
    const [task, setTask] = useState([]);
    // const path = window.location.pathname
    const [message, setMessage] = useState("");
    const [form, setForm] = useState({
        name: '',
        nim: '',
        task_name: '',
        group_name: '',
        document: ''
    });

    const group = [
        "Python",
        "C++", 
        "C#",
        "Javascript",
        "Java", 
        "Pascal",
        "Golang",
        "PHP",
        "Dart",
        "Swift"
    ]


    const handleChange = ({ target: {name, value} }) => {
        setForm((prevState) => {
            return {...prevState, [name]: value}
        })
    }

    const getTask = async () => {
        const response = await axios({
            method: "get",
            url: "http://api-developer-bitif.hmifunej.id/api/get-task"
        });
        let tugas = []
        for (let index = 0; index < response.data.tasks.length; index++) {
            
            tugas.push(response.data.tasks[index].task);
            
        } 
        setTask(tugas)
    }

    useEffect(() => {
        getTask()
        // console.log(task)
    }, [])

    useEffect(() => {
        console.log(form)
    }, [form])


    const failed = () => {
        toast.error("Gagal ditambah !", {
          position: toast.POSITION.TOP_LEFT
        });
    }

    const success = () => {

        toast.success(message, {
          position: toast.POSITION.TOP_CENTER
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const post = axios({
            method: "GET",
            url: "http://api-developer-bitif.hmifunej.id/api/post-task-individual"
        }).than(response => {
            setMessage(post.data.message)
            success()
        }).catch((err) => {
            setMessage("gagal ditambahkan")
            failed()
        })
        
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
                <div className='mb-6'>
                    <Label label={'Group Name'} />
                    <InputSelect name={'group_name'} onChange={handleChange} data={group} />
                </div>
                <div className='mb-6'>
                    <Label label={'Task Name'} />
                    <InputSelect name={'task_name'} onChange={handleChange} data={task} />
                </div>
                <div className='mb-6'>
                    <Label label={'Document'} />
                    <InputFile name={'document'} onChange={handleChange} />
                </div>
                <div>
                    <button className='w-full bg-green-500 p-3 text-white rounded-md' type="submit"  onClick={handleSubmit}>Kumpulkan</button>
                </div>
            </form>
            <ToastContainer /> 
        </div>
    )
}