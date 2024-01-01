// src/components/Menu/MenuList.js
import React from 'react';
import styled from 'styled-components';
import FoodCard from './FoodCard';

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MenuList = ({ menu }) => {
  return (
    <ListWrapper>
      {menu.map((food, index) => (
        <FoodCard key={index} food={food} />
      ))}
    </ListWrapper>
  );
};

export default MenuList;

// import React from 'react';
// import MenuItem from './MenuItem';

// const MenuList = ({ menu }) => {
//   return (
//     <div>
//       <h2>Menu</h2>
//       {menu.map((item, index) => (
//         <MenuItem key={index} item={item} />
//       ))}
//     </div>
//   );
// };

// export default MenuList;
