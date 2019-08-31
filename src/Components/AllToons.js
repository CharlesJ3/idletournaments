import React from 'react';
import Combat from '../Components/Combat';

const AllToons = (props) => {

  return (
    <div className="allToons">
    <Combat>

    </Combat>
    {props.children}
    </div>
  );
}

export default AllToons;