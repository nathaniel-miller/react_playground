class App extends React.Component{
  render (){
    return (
      <div>
        Here's a bare bones React playground.
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('content')
);