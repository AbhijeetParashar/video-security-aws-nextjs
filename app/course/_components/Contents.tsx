"use client";
// import useDisableInspect from "@/hook/useDisableInpect";

import { useState } from "react";

interface IContents {
  courseList: any[];
}

const Contents = ({ courseList }: IContents) => {
  const [video, setVideo] = useState(courseList[0]?.signedUrl);
  //   useDisableInspect();
  return (
    <>
      {courseList?.length > 0 ? (
        <div className="flex p-2">
          <div className="h-screen max-w-[270px] relative border-r-2 border-sky-500 mr-3">
            {courseList?.map((el: any) => (
              <div
                key={el.fileName}
                className="h-10 w-full border-b border-gray-400 p-1 cursor-pointer"
                onClick={() => setVideo(el.signedUrl)}
              >
                {el.fileName}
              </div>
            ))}
          </div>
          <div className="h-full w-[calc(100%-270px)]">
            <video
              src={video}
              autoPlay
              controls
              height={500}
              width={600}
              controlsList="nodownload"
              style={{ marginBottom: "15px" }}
            />

            {/* <Player signedUrl={video} /> */}
          </div>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </>
  );
};

export default Contents;
