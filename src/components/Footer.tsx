import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import yt from '../assets/yt.svg';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-2 px-4 flex items-center justify-between">
      <p className="font-josefin text-sm">Copyright 2025 All rights reserved</p>
      <div className="flex space-x-3">
        <a target="_blank" href="https://github.com/karbassioon-d" rel="noreferrer">
          <img
            src={github}
            className="w-6 hover:scale-110 transition-transform"
            alt="GitHub"
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/darakarbassioon/" rel="noreferrer">
          <img
            src={linkedin}
            className="w-6 hover:scale-110 transition-transform"
            alt="LinkedIn"
          />
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noreferrer">
          <img
            src={yt}
            className="w-6 hover:scale-110 transition-transform"
            alt="YouTube"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
