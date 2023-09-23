import { motion } from "framer-motion";
import { initialVariants, animateVariants, transition1, transition2 } from './MotionVariants';

const Contact = () => {
  return (
    <section className='h-screen flex flex-col items-center'>
      <motion.h1
        initial={initialVariants}
        animate={animateVariants}
        transition={transition1}
        className="text-cyan-400"
      >
        Contact
        </motion.h1>
      <motion.div 
      className="flex flex-col md:h-80 bg-gray-700 rounded m-4"
      initial={initialVariants}
      animate={animateVariants}
      transition={transition2}
      >
        <div className="md:flex md:flex-row justify-center m-2">
          <div className="m-4 flex items-center justify-center flex-col">
            <label>Full Name</label>
            <input className='h-10 rounded' type="textbox" placeholder='Your Name'></input>
          </div>
          <div className="m-4 flex items-center justify-center flex-col">
            <label>Email</label>
            <input className='h-10 rounded' type="email" placeholder='name@email.com'></input>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <label>Message</label>
          <textarea className='md:w-96 rounded' placeholder='Your message here'></textarea>
          <button className="w-20 h-10 my-6 rounded bg-green-500">Send</button>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact