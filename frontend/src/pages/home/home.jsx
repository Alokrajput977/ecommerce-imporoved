// import React, { useState } from 'react'
// import "./home.css"
// import Header from '../../components/header/header.jsx'
// import ExploreMenu from '../../components/exploreMenu/exploreMenu.jsx'
// import Fooddisplay from '../../components/fooddisplay/fooddisplay.jsx'
// const home = () => {
//   const [category,setCategory]=useState("all");
//   return (
//     <div>
//       <Header />
//       <ExploreMenu category={category} setCategory={setCategory} />
//       <Fooddisplay category={category}  />
//     </div>
//   )
// }

// export default home
import React, { useState } from 'react';
import './home.css';
import Header from '../../components/header/header.jsx';
import ExploreMenu from '../../components/exploreMenu/exploreMenu.jsx';
import Fooddisplay from '../../components/fooddisplay/fooddisplay.jsx';
import Appdownlord from '../../components/appdownlord/appdownlord.jsx';

const Home = () => {
    const [category, setCategory] = useState('all');
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <Fooddisplay category={category} />
            <Appdownlord/>
        </div>
    );
};

export default Home;
