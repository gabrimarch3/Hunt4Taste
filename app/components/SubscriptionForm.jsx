import React, { useState } from 'react';

export default function SubscriptionForm() {
//   const [formData, setFormData] = useState({ name: '', email: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Qui va la logica per gestire l'invio del form
//     console.log(formData);
//   };

  return (
    <div className='form-container flex flex-col p-3'>
        <h2 className='text-gray-500 font-bold text-xl pb-3'>
            RIMANI IN CONTATTO
        </h2>
        <div className='w-full min-h-[200px] p-7 bg-white flex flex-col justify-center shadow-lg rounded-xl'>
            <form action="/" className='h-15 w-full'>
                <input type="text" className='w-full border-b border-b-gray-700 bg-transparent text-gray-600 mb-10' placeholder='Nome e Cognome' />
                <div className='flex flex-row'>
                    <input type="email" className='w-full border-b border-b-gray-700 bg-transparent text-gray-600' placeholder='Email' />
                    <button type='submit' className='ml-20 text-center bg-[#8B487E] w-full rounded-xl text-white h-10'>Iscriviti</button>
                </div>
            </form>
        </div>
    </div>
  );
}
