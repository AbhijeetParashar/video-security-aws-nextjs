import MUXPlayer from "./_components/MUXPlayer";

const MuxContent = () => {
  return (
    <div className="flex flex-col text-center items-center">
      <div className="text-orange-500 text-2xl my-2 w-full">
        MUX Player DEMO
      </div>
      <MUXPlayer />
    </div>
  );
};

export default MuxContent;
