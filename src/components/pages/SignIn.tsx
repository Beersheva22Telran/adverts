import { useDispatch } from "react-redux";
import Input from "../common/Input";
import InputResult from "../../model/InputResult";
import { authActions } from "../../redux/slices/authSlice";
const SignIn: React.FC = () => {
    const dispatch = useDispatch();
    //FIXME should work with real form and real auth service
    return <Input submitFn={function (username: string): InputResult {
        setTimeout(() =>dispatch(authActions.set(username)), 5000);
        return {status: "error", message:username}
    } } placeholder="username" />
}

 export default SignIn;