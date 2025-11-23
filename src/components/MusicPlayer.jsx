import React from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  VolumeX,
  Heart,
} from "lucide-react";
import ProgressBar from "./ProgressBar";

const MusicPlayer = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-7xl p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 ">
              <div className="shrink-0">
                <div className="size-64 mx-auto md:mx-0 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-200 group-hover:scale-105">
                  <img src="" alt="asd" />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-violet-500">
                    Track Title
                  </h2>
                  <p className="text-gray-400">Artist</p>
                  <div className="flex justify-center items-center gap-4 md:justify-start mt-6">
                    <button
                      className={`p-3 rounded-full transition-all duration-300 bg-gray-300 border `}
                    >
                      <Heart size={20} />
                    </button>
                    <button
                      className={`px-6 py-3 bg-linear-to-r from-violet-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 cursor-pointer`}
                    >
                      Add To Playlist
                    </button>
                  </div>
                </div>
                <div className="">
                  <ProgressBar />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>Current Time</span>
                    <span>Current Track Duration</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                      className={`p-3 rounded-full transition-all duration-300 text-dark hover:bg-gray-300 hover:scale-110 `}
                    >
                      <Shuffle size={18} />
                    </button>
                    <button
                      className={`p-3 rounded-full transition-all duration-300 text-dark hover:bg-gray-300 hover:scale-110 `}
                    >
                      <SkipBack size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="">Sidebar</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
