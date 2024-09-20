/* eslint-disable react/prop-types */
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = ({name, about, qualifications, experience}) => {
  return <div>
    <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex
        items-center gap-2'>
            About of
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                {name}
            </span>
        </h3>
        <p className="text__para">
            {about}
        </p>
    </div>


    <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Education
        </h3>
        <ul className='pt-4 md:p-5'>

            {qualifications?.map((item,index)=>
            <><li key={index} className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                            {formateDate("08-04-2004")} - {formateDate("12-05-2010")}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Psychology
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        Hospital Hermilio Valdizan
                    </p>
                </li><li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                        <div>
                            <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                                {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
                            </span>
                            <p className='text-[16px] leading-6 font-medium text-textColor'>
                                {item.degree}
                            </p>
                        </div>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                            {item.university}
                        </p>
                    </li></>)}
        </ul>
    </div>

    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Experience
        </h3>

        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>

            {experience?.map((item,index)=>
                <><li key={index} className='p-4 rounded bg-[#FFF9EA]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                        {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        {item.position}
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        {item.hospital}
                    </p>
                </li>
                <li className='p-4 rounded bg-[#FFF9EA]'>
                        <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                            {formateDate("08-04-2014")} - {formateDate("10-06-2018")}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Mr. Psycologist
                        </p>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                            Hospital Hermilio Valdizan
                        </p>
                    </li></>
            )}

            
        </ul>
    </div>

  </div>
}

export default DoctorAbout