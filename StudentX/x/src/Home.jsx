import React from 'react'
import Containers from './Component/Containers';
import Title from './Title';
import News from './Component/News';
import './index.css';
import Hfooter from './Hfooter';
import Banner from './Banner';

 function Home() {
  return (
   <>
    <Banner/>
    <Title/>
    <h1 className='hh'>CSIT ACHIVEMENT</h1>
    <Containers/>
    <h1 className='hh'>NEWS</h1>
    <News/>
    <News/>
    <News/>
    <News/>
    <News/>
    <News/>
    <News/>
    <Hfooter/>

   </>
  );
}
export default Home;
