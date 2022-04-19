const Football = function(props) {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <input id={props.id} type="button" onClick={() => shoot("Goal!")} value="Take the shot!" />
  );
}

export default Football;