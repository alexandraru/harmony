import React from 'react';
import { useForm } from 'react-hook-form';
import sendMessage from "../api/telegram.ts";
import { toast, Zoom } from 'react-toastify';



function Subscription (props){
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

    return (
       <>
      {props.text.map((el, index) => ( 
      <div key={index} className='container'>
      <h2>{el.headerButton2}</h2>
       <form id="sub-form" className='d-flex' onSubmit={handleSubmit(onSubmit)} action="https://formsubmit.co/el/mimafo" method="POST">
        <div className='sub-form-item d-flex'>
            <label htmlFor='name'>{el.subscribeName}:</label>
            <input  id='name' {...register('name', { required: true })}/>
        </div>
        <div style={{height: 20, marginBottom: 40, color: "red", paddingLeft: "29%"}}>
        {errors.name && <p>{el.error}</p>}
        </div>
        <div className='sub-form-item item2 d-flex'>
            <label htmlFor='email'>{el.subscribeEmail}:</label>
            <input type='email' {...register('email', { required: true })} placeholder='harmony@gmail.com' id='email'/>
        </div>
        <div style={{height: 10, marginBottom: 40, color: "red", paddingLeft: "29%"}}>
        {errors.email && <p>{el.error}</p>}
        </div>
        <div>
            <input type='checkbox' id='courseSub' defaultChecked/>
            <label className='sub-form-text' htmlFor='courseSub'>{el.subscribeCourse}</label>
        </div>
        <input type='submit' disabled={!isValid} className='sub-button' variant="primary" size="lg" value={el.subscribeBut}/>
       </form>
       </div>))}
       </>
    )
}

export default Subscription