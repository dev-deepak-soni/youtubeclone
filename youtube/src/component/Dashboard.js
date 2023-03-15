import React, { useEffect, useState } from 'react'
import { youTubeVideoUrl } from '../helper/Constant'
import Shimmer from './Shimmer'
import Sidebar from './Sidebar'
import Topmenu from './Topmenu'
import Videocard from './Videocard'
import LoadingBar from 'react-top-loading-bar'
import InfiniteScroll from 'react-infinite-scroll-component'
import data from '../data/DummyData.json'

const Dashboard = () => {

    const [videos, setVideos] = useState([])
    const [progress, setProgress] = useState(0)
    const [nextPageToken, setNextPageToken] = useState()
    const [prevPageToken, setPrevPageToken] = useState()
    const [totalResults, setTotalResults] = useState(1000)
    const [resultsPerPage, setResultsPerPage] = useState()

    const arr = [1, 2, 3, 4, 5];
    useEffect(() => {

        console.log('env credential', process.env.REACT_APP_GOOGLE_API_SECRET_KEY);
        // getYoutubeVideo();
        setProgress(15);
        setVideos(data.items);

        setNextPageToken(data?.nextPageToken);
        setPrevPageToken(data?.prevPageToken);
        setTotalResults(data?.pageInfo?.totalResults);
        setResultsPerPage(data?.pageInfo?.resultsPerPage);
    }, [])

    const getYoutubeVideo = async () => {
        setProgress(15);
        const apicall = await fetch(youTubeVideoUrl);
        const result = await apicall.json();

        setProgress(100);

        setVideos(result.items);
        setNextPageToken(result?.nextPageToken);
        setPrevPageToken(result?.prevPageToken);
        setTotalResults(result?.pageInfo?.totalResults);
        setResultsPerPage(result?.pageInfo?.resultsPerPage);



        console.log('nextPageToken', nextPageToken, 'prevPageToken', prevPageToken, 'totalResults', totalResults, 'resultsPerPage', resultsPerPage);
        console.log('result', result);
        console.log('videos', videos);
    }

    const fetchData = async () => {
        setProgress(15);
        console.log('fetchData worked');
        const apicall = await fetch(youTubeVideoUrl);
        const result = await apicall.json();
        setProgress(100);
        console.log('result', result);
        setVideos(videos.concat(result.items));
    }

    return (!videos) ? <Shimmer /> : (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />

            <div className="flex mt-[55px]">
                <div className="h-[600px] overflow-y-auto">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <div className='flex fixed w-full'>
                        <Topmenu />
                    </div>
                    <div id='testDeepak' className='mt-16 h-[500px] overflow-y-auto p-2 flex flex-wrap'>

                        <InfiniteScroll
                            dataLength={totalResults} //This is important field to render the next data
                            // next={fetchData}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}

                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }
                        >

                            {videos && videos?.map((items, i) => <Videocard key={`test_${i}`} data={items} />)}
                            {/* {arr && arr.map((items, i) => <Videocard key={`test_${i}`} data={items} />)} */}
                        </InfiniteScroll>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard