import React, { useState } from "react";
import "./index.css";

const init = 0;
// hello this is chck commet for github

function Task() {
  const [point, setPoint] = useState();
  const [valA, setValA] = useState(init);
  const [valB, setValB] = useState(init);
  const arr = [10, 20, 25];

  const handlePlayerA = () => {
    setValA((valA) => valA + 1);
    if (valA >= point) {
      alert("A won the match");
      handleReset();
    }
    console.log(valA);
  };
  const handlePlayerB = () => {
    setValB((valB) => valB + 1);
    if (valB >= point) {
      alert("B won the match");
      handleReset();
    }
    console.log(valB);
  };
  const handleReset = () => {
    setValB((valB) => valB * 0);
    setValA((valA) => valA * 0);
  };

  const checkA = () => {
    if (valA >= point) {
      alert("Player A  has won");
      setValA(init);
    }
  };

  const checkB = () => {
    if (valB >= point) {
      alert("Player B has won");
      setValB(init);
    }
  };

  const handlePoint = (e) => {
    console.log(e.target.val);
    setPoint(e.target.value);
  };

  console.log(point);

  return (
    <div className="h-screen">
      <div
        id="backgr"
        className="backgr h-[775px] body w-full  "
        // style={{
        //   backgroundImage: `url("https://wallpapercave.com/dwp1x/wp1961444.jpg")`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   width: "100vw",
        //   height: "[775px]",
        // }}
      >
        <div>
          <nav className="  text-zinc-100 bg-slate-500 pt-2 flex justify-between align items-center">
            <span className=" text-3xl  capitalize ml-12 text-white  font-semibold">
              ping pong score board ohhhh
            </span>
            <div className="gap-3">
              <button
                type="button"
                className="text-red-600 -white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-500 dark:text-white dark:border-gray-600 dark:hover:bg-red-500 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Login
              </button>
              <button
                type="button"
                className="text-red-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-500 dark:text-white dark:border-gray-600 dark:hover:bg-red-500 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Sign up
              </button>
            </div>
          </nav>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="mainbox text-white flex flex-col justify-center items-center mt-9   ">
            <div>
              <img
                src="https://tabletennis.h5games.usercontent.goog/v/24f1dad4-8ec6-4a10-8700-168324e23c86/high_res_banner.jpg"
                alt=""
                className="h-[250px] rounded-lg"
              />
            </div>
          </div>
          <div className="bgcolor flex flex-col justify-center items-center  w-[440px]  mb-10  ">
            <h2
              className=" uppercase text-3xl my-3  text-gray-900
            "
            >
              Let's Play
            </h2>
            <div className="mb-4">
              <label className="text-black  capitalize text-3xl mr-3 mb-5">
                match points
              </label>
              <select
                className="text-2xl bg- border border-white text-black w-14"
                value={point}
                onChange={handlePoint}
              >
                <option>00</option>
                <option onClick={() => setPoint(arr[0])}>5</option>
                <option onClick={() => setPoint(arr[0])}>10</option>
                <option onClick={() => setPoint(arr[1])}>15</option>
                <option onClick={() => setPoint(arr[2])}>25</option>
              </select>
            </div>

            <div className="flex flex-row ">
              <div className="flex flex-col justify-center items-center mr-14 mt-2  gap-2">
                <input
                  type="Number"
                  value={valA}
                  className="w-16 rounded h-12 text-center border border-white bg-zinc-700 text-white font-bold  "
                  onChange={checkA}
                />
                <button
                  type="button"
                  onClick={handlePlayerA}
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Player A
                </button>
              </div>
              <div className="flex flex-col justify-center items-center ml-14 mt-2 gap-2  ">
                <input
                  type="number"
                  value={valB}
                  onChange={checkB}
                  className="w-16 rounded h-12 text-center border border-white bg-zinc-700 text-white font-bold  "
                />

                <button
                  type="button"
                  onClick={handlePlayerB}
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
                >
                  Player B
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              onChange={checkA}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
