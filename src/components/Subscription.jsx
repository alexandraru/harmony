import React from 'react';
import {useSelector} from 'react-redux';
import { useForm } from 'react-hook-form';
import sendMessage from "../api/telegram.ts";
import { toast, Zoom } from 'react-toastify';
import { selectorText } from '../store/selector.jsx';



function Subscription (){
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
      } = useForm({
        mode: "onBlur"
      });

      const onSubmit = (data) => {
        sendMessage(JSON.stringify(data));
        reset()
        toast.success('Готово!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
          });
      }
      const text = useSelector(selectorText);
    return (
       <>
      <div className='container'>
      <h2>{text.headerButton2}</h2>
       <form id="sub-form" className='d-flex' onSubmit={handleSubmit(onSubmit)}>
        <div className='sub-form-item d-flex'>
            <label htmlFor='name'>{text.subscribeName}:</label>
            <input  id='name' {...register('name', { required: true })}/>
        </div>
        <div className='sub-form-error' style={{height: 20, marginBottom: 40, color: "red", paddingLeft: "29%"}}>
        {errors.name && <p>{text.error}</p>}
        </div>
        <div className='sub-form-item item2 d-flex'>
            <label htmlFor='email'>{text.subscribeEmail}:</label>
            <input type='email' {...register('email', { required: true })} placeholder='harmony@gmail.com' id='email'/>
        </div>
        <div className='sub-form-error' style={{height: 10, marginBottom: 40, color: "red", paddingLeft: "29%"}}>
        {errors.email && <p>{text.error}</p>}
        </div>
        <div>
            <input type='checkbox' id='courseSub' defaultChecked/>
            <label className='sub-form-text' htmlFor='courseSub'>{text.subscribeCourse}</label>
        </div>
        <input type='submit' disabled={!isValid} className='sub-button' variant="primary" size="lg" value={text.subscribeBut}/>
       </form>
       </div>
       </>
    )
}

export default Subscription
