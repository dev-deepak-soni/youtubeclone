import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";
import Spinner from "./src/component/Spinner";
import videoDetailsURL, { channelDetailsURL } from "./src/helper/Constant";

const Watch = () => {

    const [videoDetails, setVideoDetails] = useState('');
    const [channelDetail, setChannelDetail] = useState('');
    const [params] = useSearchParams()
    const videoId = params.get('v');
    useEffect(() => {
        getVideoDetails();
    }, [])


    const getVideoDetails = async () => {
        try {
            const callApi = await fetch(videoDetailsURL + videoId);
            const result = await callApi.json();
            setVideoDetails(result);

            await getChannelDetails(result.items[0]?.snippet?.channelId);

        } catch (error) {
            console.log('error', error.message);
        }
    }

    const getChannelDetails = async (channelId) => {
        try {
            const callApi = await fetch(channelDetailsURL + channelId);
            const result = await callApi.json();
            console.log('result', result);
            setChannelDetail(result);
        } catch (error) {
            console.log('error', error.message);
        }
    }



    return (!videoDetails || !channelDetail) ? <Spinner /> : (
        <div className='container w-[830px]'>
            <div>
                <iframe width="830" height="538" src={`https://www.youtube.com/embed/${videoId}`} title={videoDetails?.items[0]?.snippet?.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div>
                <p className='mt-10 font-semibold text-lg'>
                    {videoDetails?.items[0]?.snippet?.title}
                </p>
            </div>
            <div className='mt-3'>
                {/* <Link to={`channel/${videoDetails?.items[0]?.snippet?.channelId}`}> */}
                    <p>
                        <img src={channelDetail?.items[0]?.snippet?.thumbnails?.medium?.url} className='h-10 w-10 rounded-full float-left' alt='channel Image' />
                        <span className='m-2 font-semibold text-xl'>
                            {channelDetail?.items[0]?.snippet?.title}
                        </span>
                    </p>
                {/* </Link> */}
            </div>
            <div>
                <p className='ml-14 text-sm font-semibold'>
                    {channelDetail?.items[0]?.statistics?.subscriberCount} <span className="font-semibold"> Subscriber</span>
                </p>
            </div>
            <div className='mt-5 hover:bg-gray-200 bg-gray-100 border border-gray-500 shadow rounded-md whitespace-normal'>
                <p className="font-semibold">{videoDetails?.items[0]?.statistics?.viewCount}</p>
                <p className="font-semibold">{videoDetails?.items[0]?.snippet?.publishedAt}</p>
                <p>
                    {videoDetails?.items[0]?.snippet?.description}
                </p>
            </div>
        </div>
    )
}

export default Watch