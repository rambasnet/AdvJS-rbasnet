var text = "Global React World...";

const MyH1 = (props) => {
  return (<h1 id='id1' className={props.className} style={ {"color": "red"} }>Hello {props.text} {2**3}</h1>);
}

function MyP(props) {
  return <p>ptext: {props.ptext}</p>;
}

function Hello(props) {
  if (props.name)
    return <h2>Hello {(props.name.length < 5) ? "Short Name": "Long Name"}</h2>;
  else
    return <h2>Hello Anonymous!</h2>
}

function MyDiv(props) {
  //let text = "Local React World...";

  return (
    <div>
      <MyH1 text={props.text} className={props.className} />
      <MyH1 {...props} />
      <MyP ptext={props.ptext} />
      <Hello />
      <Hello name="Jakeasfasf" />
    </div>
  );
}

const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const myElement1 = <input type="text" />;

const comp = <h1>Hello {text}</h1>;
ReactDOM.render(<MyDiv text="Prop React World" ptext="some paragraph..." className="heading" />, document.getElementById('react'));
ReactDOM.render(<MyDiv text="another eg." ptext="another para" className="heading" />, document.getElementById('div1'));
ReactDOM.render(myElement1, document.getElementById('ul'));