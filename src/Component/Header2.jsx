import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import ReactToPrint from 'react-to-print';

export default function Header2({ setshowcv, cvComponentRef }) {

    const component = cvComponentRef.current;


  return (
    <div className='bg-[#1d1d20] w-full text-white py-4 px-6 flex justify-between items-center'>
      <button className='border-white flex items-center gap-4 border-[1px] py-3 px-5 rounded-lg' onClick={() => { setshowcv(false) }}>
        <ArrowBackIcon />
        <p>Return</p>
      </button>
      <h1 className='text-[20px] font-bold'>Resume name prenom</h1>
      <ReactToPrint
  trigger={() => (
    <button className='font-bold py-3 px-5 rounded-lg bg-[#4314b6] flex gap-4'>
      <DownloadIcon />
      <p>Download</p>
    </button>
  )}
  content={() => cvComponentRef.current}
/>
    </div>
  );
}
