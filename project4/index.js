var text = "React World...";
function Myh1() {
  let text = "Local React World...";
  return <h1>Hello {text}</h1>;
}
const comp = <h1>Hello {text}</h1>;
ReactDOM.render(<Myh1 />, document.getElementById('react'));
ReactDOM.render(comp, document.getElementById('div1'));