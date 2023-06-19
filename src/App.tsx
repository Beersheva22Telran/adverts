import  Clocks  from "./components/Clocks"
import Input from "./components/common/Input";
import InputResult from "./model/InputResult";

 const App: React.FC = () => {
  return <Input submitFn={function (inputText: string): InputResult {
    console.log(inputText); return {status:'error',message:inputText}
  } } type="text" placeholder={"enter"} buttonTitle="kodima"/>
}
export default App;