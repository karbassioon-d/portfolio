import { motion } from "framer-motion";
import { initialVariants, animateVariants, transition1, transition2 } from './MotionVariants';
import { useState } from 'react';
import pug from '../assets/pug.gif'

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async () => {
    const url = import.meta.env.VITE_API_GATEWAY_ENDPOINT_URL;
    
    try {
      if (!url) {
        throw new Error('API endpoint URL is not defined.');
      }
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, emailSubject: subject, email, messageBody: message })
      });
      const result = await response.json();

      setFeedback(result.message);
    } catch (error) {
      setFeedback('An error occurred. Please try again later.');
    }
  }

  return (
    <section className='h-screen flex flex-col items-center'>
      <motion.h1
        initial={initialVariants}
        animate={animateVariants}
        transition={transition1}
        className="text-green-500 font-josefin my-3"
      >
        Contact
        </motion.h1>
      <motion.div 
      className="flex flex-col bg-gray-700 rounded m-4"
      initial={initialVariants}
      animate={animateVariants}
      transition={transition2}
      >
        <div className="md:flex md:flex-row justify-center m-2">
          <div className="m-4 flex items-center justify-center flex-col">
            <label>Your Name</label>
              <input 
                className='h-10 rounded text-black' 
                type="textbox" 
                placeholder='Your Name'
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              >
            </input>
          </div>
          <div className="m-4 flex items-center justify-center flex-col">
            <label>Email</label>
            <input 
            className='h-10 rounded text-black' 
            type="email" 
            placeholder='name@email.com'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            >
            </input>
          </div>
        </div>
        <div className="m-1 flex items-center justify-center flex-col">
          <label>Subject</label>
          <input 
          className='h-10 rounded w-96 text-black' 
          type="subject" 
          placeholder='I want to give you my money'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
          >
          </input>
        </div>
        <div className="flex items-center justify-center flex-col pt-4">
          <label>Message</label>
          <textarea 
          className='md:w-96 md:h-28 rounded text-black' 
          placeholder='Your message here'
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          >
          </textarea>
          <motion.button 
          whileTap={{ translateY: 1, scale: 0.9 }}
          className="w-20 md:w-32 h-10 my-4 rounded bg-green-500"
          onClick={handleSubmit}
          >
            Send
          </motion.button>
          {feedback && 
          <div className="flex gap-3 justify-center items-center m-3">
            <p>{feedback}</p>
            <img className="w-12 rounded-xl" src={pug} />
          </div>}
        </div>
      </motion.div>
    </section>
  )
}

export default Contact