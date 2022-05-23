import React from 'react'
import { 
    LocationMarkerIcon, 
    LinkIcon, 
    CalendarIcon, 
    NewspaperIcon, 
    ChatIcon, 
    RefreshIcon, 
    HeartIcon, 
    UploadIcon, 
    DotsHorizontalIcon 
} from '@heroicons/react/outline'

export const TopPage: React.FC = () => {
  return (
    <div className="flex justify-center bg-white">
    <div className="w-full border-l border-r">
        <div>
            <img src="https://pbs.twimg.com/profile_banners/1477275683315646470/1653292637/1500x500" />
        </div>
        
        <div className="flex justify-between">
        <div className="rounded-full border-4 border-white inline-block -mt-16 w-32 ml-3">
            <img className="w-32 rounded-full" src="https://pbs.twimg.com/profile_images/1501404892292091904/wDV1rE1V_400x400.jpg" />
        </div>
        
        <div>
            <button className="rounded-full px-3 py-2 mt-3 mr-3 transition hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold">Follow</button>
        </div>
        </div>
        
        <div className="ml-3">
        <p className="font-bold text-lg">Masaki Yoshiiwa</p>
        <p className="text-gray-500">@cymagix</p>
        </div>
        
        <div className="px-3 mt-3">
        <p>
            Frontend developer
        </p>
        </div>
        
        <div className="px-3 flex mt-3">
        <div className="flex items-center">
            <LocationMarkerIcon className="w-5" />
            <p className="ml-2">Japan or Australia</p>
        </div>
        
        <div className="flex items-center ml-3">
            <LinkIcon className="w-5" />
            <p className="ml-2">
                <a className="text-blue-500 hover:underline" target="_blank" rel="noopener" href="https://github.com/cymagix">github.com</a>
            </p>
        </div>
        
        <div className="flex items-center ml-3">
            <CalendarIcon className="w-5" />
            <p className="ml-2">Born Feb 1993</p>
        </div>
        </div>
        
        <div className="px-3 mt-3 flex">
        <p className="cursor-pointer hover:underline"><span className="font-bold">0</span> Following</p>
        <p className="ml-5 cursor-pointer hover:underline"><span className="font-bold">0</span> Following</p>
        </div>
        
        <div className="flex mt-3 border-b">
            <div className="flex-1 px-8 hover:bg-blue-50 justify-center border-b-4 border-blue-400 text-blue-400 py-5 cursor-pointer transition">
                <p className="text-center font-bold">Tweets</p>
            </div>
            
            <div className="flex-1 px-8 py-5 hover:bg-blue-50 justify-center text-gray-500 hover:text-blue-400 cursor-pointer transition">
                <p className="text-center font-bold">Replies</p>
            </div>
            
            <div className="flex-1 px-8 py-5 hover:bg-blue-50 justify-center text-gray-500 hover:text-blue-400 cursor-pointer transition">
                <p className="text-center font-bold">Media</p>
            </div>
            
            <div className="flex-1 px-8 py-5 hover:bg-blue-50 justify-center text-gray-500 hover:text-blue-400 cursor-pointer transition">
                <p className="text-center font-bold">Likes</p>
            </div>
        </div>
        
        <div className="p-3">
            <div>
                <div className="mt-2">
                <div className="flex">
                    <div>
                    <img className="w-16 rounded-full" src="https://pbs.twimg.com/profile_images/1501404892292091904/wDV1rE1V_400x400.jpg" />
                    </div>

                    <div className="ml-4">
                    <p>
                        <span className="font-bold">Masaki Yoshiiwa</span> <span className="text-gray-500">@cymagix · Jan 2</span>
                    </p>

                    <p>
                        My GitHub account is here:
                    </p>
                    </div>
                </div>
                
                <a className="flex flex-1 rounded-lg border ml-14 mt-3 cursor-pointer"  target="_blank" rel="noopener" href="https://github.com/cymagix">
                    <div className="flex justify-center items-center py-8 px-12 bg-gray-100 border-r">
                    <NewspaperIcon className="w-6" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center py-8 pr-16 pl-4">
                    <p>cymagix(Masaki Yoshiiwa)</p>
                    <p className="text-gray-500">Masaki Yoshiiwa</p>
                    <p className="text-gray-500 flex"><LinkIcon className="w-4" />github.com</p>
                    </div>
                </a>
                
                <div className="flex justify-around mt-4 pl-3">
                    <div className="text-gray-500 hover:text-blue-400 transition">
                        <ChatIcon className="w-5" />
                    </div>
                    
                    <div className="text-gray-500 hover:text-blue-400 transition">
                        <RefreshIcon className="w-5" />
                    </div>
                    
                    <div className="text-gray-500 hover:text-blue-400 transition">
                        <HeartIcon className="w-5" />
                    </div>
                    
                    <div className="text-gray-500 hover:text-blue-400 transition">
                        <UploadIcon className="w-5" />
                    </div>
                    
                    <div className="text-gray-500 hover:text-blue-400 transition">
                        <DotsHorizontalIcon className="w-5" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
