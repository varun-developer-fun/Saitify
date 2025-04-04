// import Saitifylogo from '../assets/Saitify_Full_Logo_RGB_Green.png'
import background from '../assets/background-intro.mp4'
const Opening = () => {

  return (
    <div className="h-screen bg-[#121212] flex items-center justify-center ">
        {/* <img className='w-[50%] mx-[25%] py-[17%]' src={Saitifylogo} alt="" /> */}
        {/* <img className='w-[50%] animate-pulse' src={Saitifylogo} alt="" /> */}
        <video className='w-[75%] object-cover mix-blend-screen' src={background} preload='auto' autoPlay loop muted></video>
    </div>
  )
}

export default Opening