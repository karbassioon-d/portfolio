import { motion } from "framer-motion";
import { initialVariants, animateVariants, transition1, transition2, transition3 } from './MotionVariants';

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
      className="flex flex-col md:w-6/12 bg-gray-700 rounded"
      initial={initialVariants}
      animate={animateVariants}
      transition={transition2}
      >
        <div className="md:flex md:flex-row justify-center m-4">
          <div className="m-4 flex items-center justify-center flex-col">
            <label>Full Name</label>
            <input className='rounded' type="textbox" placeholder='Bob Smith'></input>
          </div>
          <div className="m-4 flex items-center justify-center flex-col">
            <label>Email</label>
            <input className='rounded' type="email" placeholder='name@email.com'></input>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <label>Message</label>
          <textarea className='rounded' placeholder='your message here'></textarea>
        </div>
        <button className="w-48 rounded bg-green-500">Send</button>
      </motion.div>
    </section>
  )
}

export default Contact