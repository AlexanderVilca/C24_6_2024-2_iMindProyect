
import aboutImg from '../../assets/images/about.png'
import aboutCarding from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return <section>
    <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            <div className='relative w-3/4 lg:w-1/2 xl:w-[700px] z-10 order-2 lg:order-1'>
                <img src={aboutImg} alt="" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                    <img src={aboutCarding} alt="" />
                </div>
            </div>

            {/* ==================== about ===================== */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className='heading'>Orgullosos de ser una plataforma asociada a el bienestar mental</h2>
                <p className='text__para'>
                En iMind, estamos comprometidos a mejorar la salud mental de las personas, ofreciendo una plataforma accesible y efectiva para gestionar el estrés, la ansiedad, la depresión, entre otras condiciones. Nuestro enfoque combina la tecnología con la empatía, brindando herramientas personalizadas como ejercicios de relajación, meditaciones guiadas y un blog sobre informacion de la salud mental.
                Seguido de una oportunidad para acordar una consulta con un psicologo.
                </p>
                <p className='text__para mt-[30px]'>
                Nuestra misión es crear una comunidad de apoyo, donde cada persona pueda sentirse comprendida y acompañada. Desde el seguimiento de tu estado emocional hasta eventos interactivos que fomentan el bienestar, iMind te proporciona las herramientas necesarias para tomar el control de tu salud mental y mejorar tu calidad de vida.
                </p>

                <Link to='/'>
                    <button className='btn'>Leer Mas</button>
                </Link>
            </div>
        </div>
    </div>
  </section>
}

export default About