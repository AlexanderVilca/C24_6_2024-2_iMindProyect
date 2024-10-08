
import DoctorCard from './DoctorCard'
import { BASE_URL } from '../../config.js'
import useFetchData from '../../hooks/useFetchData.jsx'
import Loader from '../../components/Loader/Loading.jsx'
import Error from '../Error/Error.jsx'

const DoctorList = () => {

  const {data: doctors, loading, error} = useFetchData(`${BASE_URL}/doctors`)

  return (
    <>
    {loading && <Loader />}
    {error && <Error />}

    { !loading && !error && (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
    lg:met-[55px]">{doctors
      //.filter((doctor) => doctor.id)
      .map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}</div>
    )}
    </>
  )
}

export default DoctorList