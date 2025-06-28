import React from "react";

function Header({ cartCount, onSearch, onShowCart, onShowHistory }) {
  return (
    <header className="header">
      <div className="logo">AMAZARIAN</div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <div>
        <button onClick={onShowHistory}>Orders</button>
        <button onClick={onShowCart}>Cart ({cartCount})</button>
      </div>
    </header>
  );
}

export default Header;