import logo from './logo.svg';
import './App.css';

// option-1
// function App() {
//   return (
//     <div className="App">
//       <Person name="Rahim" nayka="mousumi"></Person>
//       <Person name="Bapparaz" nayka="cheka"></Person>
//       <Person name="Kuber" nayka="Kopila"></Person>
//       <h5>New component</h5>
//       <Friend></Friend>
//     </div>
//   );
// }

// function Person(props){
//   return (
//     <div className='person'>
//       <h1>Name: {props.name}</h1>
//       <p>Nayka: {props.nayka}</p>
//     </div>
//   )
// }

// function Friend(){
//   return (
//     <div className='container'>
//       <h2>Singho mama</h2>
//       <p>This lion</p>
//     </div>
//   )
// }

// opotion-2
const nayoks = ['Riyaz', 'Razzak', 'Bappada', 'Jasim', 'Anowar']
const singers = [
  {name: 'Mahfuz', job: 'singer'},
  {name: 'Eva', job: 'singer1'},
  {name: 'Agun', job: 'singer2'}
]
function App() {
  return (
    <div className="App">
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      <h5>New component</h5>
      {
        singers.map(singer => <Friend name={singer.name} job={singer.job}></Friend>)
      }
      
    </div>
  );
}

function Person(props){
  return (
    <div className='person'>
      <h1>Name: {props.name}</h1>
      <p>Nayka: {props.nayka}</p>
    </div>
  )
}

function Friend(props){
  return (
    <div className='container'>
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </div>
  )
}
export default App;
