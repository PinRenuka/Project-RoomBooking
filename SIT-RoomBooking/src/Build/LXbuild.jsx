import React from 'react';
import Table from './Table';
import Carender from './Carender';
const LXbuild = () => {
  return (
    <div className='h-screen bg-[url(./img/Pic-sit.png)] bg-cover bg-center' >
      <div className="flex justify-between p-4">
        {/* <Table></Table> */}
        <Carender></Carender>
      </div>
    </div>
  );
}

export default LXbuild;

