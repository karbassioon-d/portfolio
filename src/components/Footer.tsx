import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import yt from '../assets/yt.svg';

const Footer = () => {
  return (
    <div className='flex items-center justify-between h-10 bg-gray-700 md:fixed md:bottom-0 w-full'>
      <p>Copyright 2023 All rights reserved</p>
      <div className='flex'>
        <a target="blank" href="https://github.com/karbassioon-d">
          <img src={github} className='w-4 mr-2 hover:cursor-pointer' alt="github"/>
        </a>
        <a target="blank" href="https://www.linkedin.com/in/darakarbassioon/">
          <img src={linkedin} className='mr-2 w-4 hover:cursor-pointer'alt="linkedin"/>
        </a>
        <a target="blank" href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>
          <img src={yt} className='w-4 hover:cursor-pointer mr-2' alt="youtube" />
        </a>
      </div>
    </div>
  )
}

export default Footer