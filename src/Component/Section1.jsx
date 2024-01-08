
export default function Section1({setshowcv}) {
  return (
    <div>
      <div className="bg2 w-full h-[500px] rounded-2xl my-3 flex-col flex justify-center items-center gap-8">
        <h1 className="text-white text-[48px] text-">Generate Your Cv For Free and With High Quality</h1>
        <a href="#"  className="bg-white px-10 py-3 rounded-2xl " onClick={()=>{setshowcv(true)}}>
          Generate
        </a>
      </div>
    </div>
  );
}
