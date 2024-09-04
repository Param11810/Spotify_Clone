import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id]
    const {playWithId}=useContext(PlayerContext)


    return (
        <>
            <Navbar />
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img src={albumData.image} className="w-48 rounded" />
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-1'>
                        <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                        <b>Spotify</b>
                        1,31,235,644 likes
                        •<b> 50 Songs,
                            about 2hrs 30mins</b>
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 mt-10 mb-4 pl-2 text-[#a7a7a7] items-center">
  <p className="flex items-center"><b className="mr-4">#</b>Title</p>
  <p>Album</p>
  <p className="hidden sm:block">Date Added</p>
  <div className="flex justify-center">
    <img className="w-4  ml-[81px]" src={assets.clock_icon} alt="" />
  </div>
</div>

                <hr />
                {
                    songsData.map((item, index) => (
                        <div onClick={()=>playWithId(item.id)} key={index} className="grid grid-cols-4 sm:grid-cols-5 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                        <div className="flex items-center">
                          <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                          <img className="block w-10 mr-5" src={item.image} alt="" />
                        </div>
                        <p className='text-[12px]'>{item.name}</p>
                        <p className="text-[12px]">{albumData.name}</p>
                        <p className="text-[12px] hidden sm:block">5 days ago</p>
                        <p className='text-[12px]'>{item.duration}</p>
                      </div>
                      
                     
                    ))
                }
          
        </>
    )
}

export default DisplayAlbum
