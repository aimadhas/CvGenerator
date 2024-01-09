import Team from '../assets/Team-E.png'

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between px-10 py-8 bg-[#FFFFFF] shadow-md rounded-2xl">
      {/* <h1 className="text-[25px] text-[#56299F] font-bold">Team-e</h1> */}
      <img src={Team} alt="" className='w-[70px]' />
      <div className="flex gap-12 px-5">
        <a href="" className="font-semibold">About</a>
        <a href="" className="font-semibold">contact</a>
        <a href="https://react-project-ochre-rho.vercel.app/" className="font-semibold">Founders</a>
      </div>
    </div>
  )
}
