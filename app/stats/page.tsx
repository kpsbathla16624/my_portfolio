"use client";
import React, { useState, useEffect } from "react";
import QuestionCountGraph from "./QuestionBar";
import GitHubCalendar from "react-github-calendar";
import HeatMap from "./heatmap";
import LeetcodeTags from "./tagWiseCount";
import GithubStats from "./githubStats";
import RatingBox from "./ratingBox";
import Ratingcharts from "./ratingcharts";

function StatsPage() {
  const [calendarSize, setCalendarSize] = useState({ blockSize: 12, blockMargin: 4 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
     if (width<900) {
      
       setCalendarSize({ blockSize: 8, blockMargin: 3 }); // For medium screens
     }
       else if (width < 1500 && width > 1024 ) {
        setCalendarSize({ blockSize: 10, blockMargin: 3 }); // For medium screens
      } 
      else {
        setCalendarSize({ blockSize: 12, blockMargin: 4 }); // For larger screens
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="stats" className="z-50 px-5 lg:px-10 relative text-white">
      <div className="h-20 w-full flex justify-center items-center my-5">
        <h1 className="py-5 sm:py-10 text-2xl sm:text-3xl lg:text-4xl text-primary font-share-tech-mono text-center md:text-left">
          Coding Statistics
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-y-10 gap-x-4 grid-flow-row-dense auto-rows-auto">
        {/* QuestionCountGraph */}
        <div className="col-span-1 md:col-span-3 flex items-center justify-center flex-col max-h-[320px] overflow-y-hidden">
          <QuestionCountGraph />
        </div>

        {/* LeetcodeTags */}
        <div className="col-span-1 md:col-span-7 lg:col-span-5 flex items-center justify-center flex-col max-h-[400px] overflow-y-auto">
          <LeetcodeTags />
        </div>

        {/* RatingBox */}
        <div className="lg:col-span-2 col-span-3 flex items-center justify-center">
          <RatingBox />
        </div>

        {/* HeatMap */}
        <div className="col-span-1 md:col-span-10 lg:col-span-6 flex items-start justify-start flex-col bg-transparent">
          <HeatMap
            codechefId="kps_bathla"
            codeforcesId="kpsbathla"
            leetcodeId="kamalpreet6198"
          />
        </div>

        <div className="col-span-7 lg:col-span-4">
          <Ratingcharts />
        </div>

        {/* GitHub Contributions */}
        <div className="col-span-1 md:col-span-10 xl:col-span-6 border border-white space-y-2 flex flex-col w-min h-auto p-4 rounded-xl">
          <h1 className="text-xl sm:text-2xl font-bold">
            Github Contributions
          </h1>
          <GitHubCalendar
            blockMargin={calendarSize.blockMargin}
            blockSize={calendarSize.blockSize}
            username="kpsbathla16624"
          />
        </div>

        {/* GithubStats */}
        <div className="col-span-1 md:col-span-4 flex items-start justify-start">
          <GithubStats />
        </div>

        {/* GitHub Trophies */}
        <div className="col-span-1 md:col-span-6 flex flex-col justify-end h-auto border border-white rounded-xl p-4">
          <h1 className="font-bold text-xl sm:text-2xl">🏆 GitHub Trophies</h1>
          <iframe
            className="w-full"
            src="https://github-profile-trophy.vercel.app/?username=kpsbathla16624&theme=onestar&no-frame=false&no-bg=true&margin-w=4"
            title="GitHub"
          />
        </div>
      </div>
    </div>
  );
}

export default StatsPage;
