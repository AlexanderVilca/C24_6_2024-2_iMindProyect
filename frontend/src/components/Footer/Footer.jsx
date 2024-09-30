import { Link } from 'react-router-dom'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillGithub, } from 'react-icons/ai'

const socialLinks = [
  {
    path: "",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "Nosotros",
  },
  {
    path: "/services",
    display: "Servicios",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/doctors",
    display: "Buscar un Psicologo",
  },
  {
    path: "/doctors",
    display: "Agendar una cita",
  },
  {
    path: "/",
    display: "Acceder a herramientas",
  },
  {
    path: "/",
    display: "Obtener una opinion",
  },
];

const quickLinks03 = [
  {
    path: "/contact",
    display: "Contactenos",
  },
];

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='pb-16 pt-10'>
    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
            <label className='text-textColor text-[20px] leading-7 font-[800]'>
              iMind
            </label>
          <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'> Copyright @ {year} iMind all right reserved</p>

          <div className='flex items-center gap-3 mt-4'>
            {socialLinks.map((link, index)=>(
              <Link to={link.path}
              key={index}
              className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center
              justify-center group hover:bg-primaryColor hover:border-none'>
              {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Enlaces
            </h2>

            <ul>
              {quickLinks01.map((item, index)=><li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
              </li>)}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Quiero
            </h2>

            <ul>
              {quickLinks02.map((item, index)=><li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
              </li>)}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Apoyar
            </h2>

            <ul>
              {quickLinks03.map((item, index)=><li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
              </li>)}
            </ul>
          </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer