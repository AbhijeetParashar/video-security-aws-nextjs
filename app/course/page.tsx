import Contents from "./_components/Contents";

const CoursePreview = async () => {
  // useDisableInspect();

  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/s3-files`, {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((t) => t.json());
  return (
    <div className="flex flex-col">
      <h1 className="text-orange-500 text-2xl my-2 w-full text-center">
        {"Let's see a Demo Video from CDN"}
      </h1>
      <Contents courseList={data} />
    </div>
  );
};

export default CoursePreview;
