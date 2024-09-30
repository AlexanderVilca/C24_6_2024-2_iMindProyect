/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import patientAvatar2 from '../../assets/images/patient-avatar-2.png'
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}}
        breakpoints={{
            640: {
                slidesPerView:1,
                spaceBetween:0
            },
            768: {
                slidesPerView:2,
                spaceBetween:20
            },
            1024: {
                slidesPerView:3,
                spaceBetween:30
            },
        }}>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar2} style={{ maxWidth: '15%', borderRadius: '8%' }} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Ana López</h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "Gracias a iMind, he podido controlar mi ansiedad de una manera mucho más efectiva. Los sonidos relajantes y las meditaciones guiadas han sido un salvavidas en momentos difíciles."
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Carlos Fernández</h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "Las consultas con los psicólogos de iMind me han dado las herramientas necesarias para gestionar mis emociones y mejorar mi calidad de vida. Es una plataforma que realmente cuida de ti."
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar2} style={{ maxWidth: '15%', borderRadius: '8%' }} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>María González</h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    "La combinación de recursos como el blog, los ejercicios de relajación y las consultas con expertos en iMind ha sido fundamental para mejorar mi bienestar mental. Recomiendo esta plataforma a cualquier persona que necesite apoyo emocional."
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Javier Ramírez</h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "Utilizar iMind ha sido una experiencia transformadora. Las meditaciones guiadas me han ayudado a reducir mi estrés y la posibilidad de agendar consultas con psicólogos me ha dado el apoyo que necesitaba."
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial