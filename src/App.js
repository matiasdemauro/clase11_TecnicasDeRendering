
import './App.css';
import SpreadProperties from './components/SpreadProperties';
//import ClassBasedCondition from './components/ClassBasedCondition';
//import InLineStyles from './components/InLineStyles';
//import InLineTernary from './components/InLineTernary';
//import BinaryOperator from './components/BinaryOperator';
//import ReturnTemprano from './components/ReturnTemprano';
//import LoadingComponent from './components/LoadingComponents';
//falsy : , undefined , null ,"" , NaN
const stylesComponent ={
  fontSize: '22px',
  color: 'red',

}

function App() {
  return (
    <div className="App">
      <h2>Hola coders!</h2>
    {/*  <ReturnTemprano condicion={"sebas"}/>*/}
    {/*  <BinaryOperator condicion={false}/>*/}
    {/*  <InLineTernary condicion={false}/>*/}
    {/*  <LoadingComponent/> */}
    {/*<InLineStyles condicion={false}/>*/}
    {/*<ClassBasedCondition condicion={true} />*/} {/*mas*/ }
    <SpreadProperties additionalStyles={stylesComponent}/>
    </div>
  );
}

export default App;
