import AuthService from "../service/auth/AuthService";
import AuthServiceFake from "../service/auth/AuthServiceFake";
import AuthServiceJwt from "../service/auth/AuthServiceJwt";
import AuthServiceFire from "../service/auth/AuthSeviceFire";
import EmployeesService from "../service/crud/EmployeesService";
import EmployeesServiceFire from "../service/crud/EmployeesServiceFire";

export const authService: AuthService =
    new AuthServiceFire();
export const employeesService: EmployeesService =
    new EmployeesServiceFire();