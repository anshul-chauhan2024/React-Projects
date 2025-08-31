import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import images from '../assets/images';
import '../App.css'
function WatchVideo() {
    return (
        <>
            <div className="video_sec">
                {/* <img src={images.video_bg} alt="" /> */}

                <div className='video_content'>
                    <button><PlayCircleIcon  className='animated h-7 w-7 mb-2' /></button>
                    <p>Watch video overview</p>
                </div>
            </div>
        </>
    )
}


export default WatchVideo