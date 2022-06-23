import React,{ useEffect, useState} from 'react'
import HeroImage from '../assets/profile.jpg'

const _Text = "Full Stack X Developer";
const edu = "B.E (Electronic) at 2014, M.E (Electronic) at 2020"
const Terminal = () => {
  const initText = "> ";
  const [myText,setMyText] = useState('');
  
  useEffect(() =>{
    const timeout = setTimeout(() => {
      setMyText(_Text.slice(0, myText.length + 1))
    },100)

    return () => clearTimeout(timeout)
  },[myText])
  
  return (

    <div className='flex flex-col bg-gray-900  h-full'>
      <div className='flex flex-row justify-center text-white font-bold text-xl lg:text-5xl pt-6 md:pb-2'>I'm Aung Min Khant</div> 
      <div className='flex flex-row justify-center text-green-200 font-bold text-lg lg:text-4xl pt-4 md:pb-6'>{myText}</div>
    <div className='flex flex-col md:flex-row bg-gray-900 md:h-screen h-full'>
       
       <div className="flex-1 p-4 md:px-20 md:mt-14 order-2">
        <div className='flex flex-col h-80 md:h-96 bg-slate-700 rounded-t-2xl'>
          {/* windows bar */}
          <div className='flex flex-row justify-start bg-slate-800 rounded-t-2xl p-1 cursor-move'>
              <div className='w-4 h-4 rounded-full bg-green-500 text-center items-start m-1 cursor-pointer'>
                  <span className='text-gray-900 text-xl'></span>
              </div>
              <div className='w-4 h-4 rounded-full bg-yellow-500 text-center items-start m-1 cursor-pointer'>
                  <span className='text-xl font-bold text-gray-700'></span>
              </div>
              <div className='w-4 h-4 rounded-full bg-red-600 text-center items-start m-1 text-gray-400 shadow-md cursor-pointer'>
                  <span className='text-sm font-bold text-white'></span>
              </div>
          </div>
          <div className='overflow-y-scroll'>
            <div className='px-3 py-1 text-purple-500 cursor-text text-md mr-1'>
                {initText}<span className='ml-1 text-indigo-200'>
                  whoami
                </span>
                {/* <span className='animate-ping duration-50 px-1 text-lg font-bold text-red-700'>|</span> */}
                <div className='flex flex-col text-green-300 text-sm px-4 tracking-wider ml-6'>
                  <div className='mt-2'>
                  --name <span className='ml-12 md:ml-40'>Aung Min Khant</span>
                  </div>
                  <div className='mt-1'>
                  --develop <span className='ml-4 md:ml-32 px-2'>Full Stack X Developer</span>
                  </div>
                </div>
            </div>
            <div className='px-3 py-1 text-purple-500 cursor-text text-md mr-2'>
                {initText}<span className='ml-1 text-indigo-200'>
                  ls -l skill
                </span>
                {/* <span className='animate-ping duration-50 px-1 text-lg font-bold text-red-700'>|</span> */}
                <div className='flex flex-col text-green-300 text-sm px-4 tracking-wider ml-6'>
                  <div className='mt-2'>
                    --web-frontend <span className='ml-2 md:ml-24 px-2'> HTML, CSS, javascript, Vue, React</span>
                  </div>
                  <div className='mt-1'>
                    --web-backend <span className='ml-6 md:ml-28'>Laravel</span>
                  </div>
                  <div className='mt-2'>
                  --android -ios <span className='ml-4 md:ml-24 px-2'>flutter</span>
                  </div>
                  <div className='mt-1'>
                  --embedded-IoT <span className='ml-3 md:ml-24 px-2'>C, C++, C#, Arduino</span>
                  </div>
                </div>
            </div>
            <div className='px-3 py-1 text-purple-500 cursor-text text-md mr-2'>
                {initText}<span className='ml-1 text-indigo-200'>
                  ls -l work
                </span>
                {/* <span className='animate-ping duration-50 px-1 text-lg font-bold text-red-700'>|</span> */}
                <div className='flex flex-col text-green-300 text-sm px-4 tracking-wider ml-6'>
                  <div className='mt-2'>
                  --finish <span className='ml-16 md:ml-40'>Fover Ever Shop POS</span>
                  </div>
                  <div className='mt-2'>
                  --finish <span className='ml-16 md:ml-40'>Training School Management System</span>
                  </div>
                  <div className='mt-2'>
                  --finish <span className='ml-16 md:ml-40'>Multi Consolse Control System With Map Server</span>
                  </div>
                  <div className='mt-2'>
                  --ongoing <span className='ml-12 md:ml-36 px-2'>Japanese Language School Management System</span>
                  </div>
                  <div className='mt-2'>
                  --ongoing <span className='ml-12 md:ml-36 px-2'>Ecommerce and Delivery Manage System</span>
                  </div>
                </div>
            </div>
            <div className='px-3 py-1 text-purple-500 cursor-text text-md mr-2'>
                {initText}<span className='ml-1 text-indigo-200'>
                  status
                </span>
                {/* <span className='animate-ping duration-50 px-1 text-lg font-bold text-red-700'>|</span> */}
                <div className='flex flex-col text-green-300 text-sm px-4 tracking-wider ml-6'>
                  <div className='mt-2'>
                  --state <span className='ml-16 md:ml-40 px-2'>available now</span>
                  </div>
                </div>
            </div>
            <div className='px-3 py-1 text-purple-500 cursor-text text-md mr-2'>
                {initText}<span className='ml-1 text-indigo-200'>
                  about
                </span>
                {/* <span className='animate-ping duration-50 px-1 text-lg font-bold text-red-700'>|</span> */}
                <div className='flex flex-col text-green-300 text-sm px-4 tracking-wider ml-6'>
                  <div className='mt-2'>
                  --education <span className='ml-8 md:ml-32 px-3'>{edu}</span>
                  </div>
                  <div className='mt-2'>
                  --journey <span className='ml-12 md:ml-36 px-2'>My 6 years of IT experience has given me a strong foundation for web development and building complex solutions. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</span>
                  </div>
                </div>
            </div>
            <div className='px-3 py-1 text-purple-500 cursor-text text-md mr-2'>
                {initText}<span className='ml-1 text-indigo-200'>
                  connect -me
                </span>
                {/* <span className='animate-ping duration-50 px-1 text-lg font-bold text-red-700'>|</span> */}
                <div className='flex flex-col text-green-300 text-sm px-4 tracking-wider ml-6'>
                  <div className='mt-2'>
                  --facebook <span className='ml-12 md:ml-36 px-1 underline cursor-pointer'>Min Khant</span>
                  </div>
                  <div className='mt-2'>
                  --telegram <span className='ml-12  md:ml-36 underline cursor-pointer'>t.me/minkhantX</span>
                  </div>
                  <div className='mt-2'>
                  --email <span className='ml-14 md:ml-40 px-2'>wannakyawhtin17@gmail.com</span>
                  </div>
                  <div className='mt-2'>
                  --phone <span className='ml-16 md:ml-40 px-2'>+959428132135</span>
                  </div>
                </div>
            </div>

            <div className='px-3 py-1 text-purple-500 cursor-text text-md mr-2'>
                {initText}<span className='ml-1 text-indigo-200 blinking-cursor'>
                </span>
            </div>
          </div>
      </div>
      <div className='bg-slate-500 h-2 rounded-b-lg'></div>
    </div>
    <div className='h-96 w-96 md:mx-24 flex-1 order-1 md:order-3'>
      <img src={HeroImage} alt="profile" className='rounded-full p-8 md:p-16'/>
    </div>  
    </div>

    <div className='flex flex-row justify-center text-white text-lg'>
      Made with React and Tailwindcss
    </div>
  </div>
    
  )
}

export default Terminal