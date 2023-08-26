import { Outlet } from 'react-router-dom';
import Heading from '../../Heading';
import Nav from '../../Nav';
import NavBar from '../../Nav/NavBar';
import './common.css'
import { useEffect, useState } from 'react';
import 'src/styles/homeStyles.css'

const RootLayout = () => {


  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://192.168.0.109:8000/api/interview/candidate_details/1')
      .then((response) =>
      console.log("response",response)
        )
     
      .catch((err) => {
        console.log(err.message);
      });
  }, []);



  return (
    <div className="flex w-full h-[100vh] bg_screen homescreen">
      {/* <Nav /> */}
      <div className="flex flex-col items-center w-full h-full gap-8 py-24 xl:py-20 lg:pt-0 lg:pb-16 overflow-y-auto">
        {/* <NavBar /> */}
        <Heading />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;


