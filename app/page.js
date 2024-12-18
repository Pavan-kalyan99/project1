//import Image from "next/image";
import dynamic from 'next/dynamic';
// import Header from "./NavBar/Header";
const Header = dynamic(() => import('./NavBar/Header'), {
  loading: () => <div className='text-4xl text-white'>Loading ...</div>,
});
// import Dashboard from './Components/Home1'
import Dashboard from './Components/Dashboard';
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Header/>

    </>
  );
}
