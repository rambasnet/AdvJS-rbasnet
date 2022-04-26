function MyH() {
  function clickMe() {
    window.clickMe();
  }
  return <h1 data-testid="h1" onClick={clickMe}>Hello React App...</h1>;
}

export default MyH;