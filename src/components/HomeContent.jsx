import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { FiTrendingUp } from "react-icons/fi";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { trendingUrl,upcomingUrl } from "../utils/requests";
import HomeThumb from "./HomeThumb";

const HomeContent = () => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingRes = await axios(trendingUrl);
      const upcomingRes = await axios(upcomingUrl);
      setTrending(trendingRes.data.results);
      setUpcoming(upcomingRes.data.results);
    };
    fetchMovies();
  }, []);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <Fragment>
      <div className="pt-10">
        <div className="flex items-center justify-between py-3 px-5 border-l-10 border-b-gray border-b mb-6">
          <div className="text-xl font-bold flex items-start">
            <FiTrendingUp className="mr-4 text-2xl" /> Trending
          </div>
          <div className="text-sm">see more</div>
        </div>
        <div className="relative flex items-center">
          <div className="w-16 md:w-20 lg:w-24 bg-gradient-to-r from-black z-10 h-full absolute top-0 bottom-0 left-0 flex items-center justify-start cursor-pointer">
            <BsChevronLeft fontSize={30} onClick={slideLeft} />
          </div>
          <div
            id="slider"
            className="flex items-center justify-between flex-no-wrap gap-x-6 overflow-x-scroll scrollbar-hide pl-1 scroll-smooth transition-all duration-200 ease-in-out"
          >
            {trending.map((trend) => (
              <HomeThumb {...trend} key={trend.id} />
            ))}
          </div>
          <div className="w-16 md:w-20 lg:w-24 h-full bg-gradient-to-l from-black absolute top-0 bottom-0 right-0 flex items-center justify-end cursor-pointer">
            <BsChevronRight fontSize={30} onClick={slideRight} />
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="flex items-center justify-between py-3 px-5 border-l-10 border-b-gray border-b mb-6">
          <div className="text-xl font-bold flex items-start">
            <FiTrendingUp className="mr-4 text-2xl" /> Upcoming
          </div>
          <div className="text-sm">see more</div>
        </div>
        <div className="relative flex items-center">
          <div className="w-16 md:w-20 lg:w-24 bg-gradient-to-r from-black z-10 h-full absolute top-0 bottom-0 left-0 flex items-center justify-start cursor-pointer">
            <BsChevronLeft fontSize={30} onClick={slideLeft} />
          </div>
          <div
            id="slider"
            className="flex items-center justify-between flex-no-wrap gap-x-6 overflow-x-scroll scrollbar-hide pl-1 scroll-smooth transition-all duration-200 ease-in-out"
          >
            {upcoming.map((trend) => (
              <HomeThumb {...trend} key={trend.id} />
            ))}
          </div>
          <div className="w-16 md:w-20 lg:w-24 h-full bg-gradient-to-l from-black absolute top-0 bottom-0 right-0 flex items-center justify-end cursor-pointer">
            <BsChevronRight fontSize={30} onClick={slideRight} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeContent;
