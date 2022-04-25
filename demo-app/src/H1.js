function MyH() {
  
  // eslint-disable-next-line no-unused-vars
  function clickMe() {
    window.clickMe();
  }

  return <h1 onClick={clickMe}>Hello React App...</h1>;
}

export default MyH;