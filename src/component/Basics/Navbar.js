import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group_item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
          {/* <button
            className="btn-group_item"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group_item"
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group_item"
            onClick={() => filterItem("evening")}
          >
            evening
          </button>
          <button
            className="btn-group_item"
            onClick={() => filterItem("dinner")}
          >
            dinner
          </button>
          <button className="btn-group_item" onClick={() => setMenuData(Menu)}>
            All
          </button> */}
        </div>
      </nav>
      {/* <MenuCard menuData={menuData} /> */}
    </>
  );
};

export default Navbar;
