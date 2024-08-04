import axios from "axios";
import {useRouter} from "vue-router";
const API_URL:string = "http://localhost:8081";
const router = useRouter();

interface SignUpBody {
    username:string;
    password:string;
    userType:string;
    tel:string;
}

class AuthService {
    signUp({
        username,
        password,
        userType,
        tel
           }): Promise<""> {
        return axios
            .put<boolean>(API_URL+"/auth/signUp", {
                username,
                password,
                userType,
                tel
            }, {
                "headers": {
                    "Authorization": "X-CODE"
                }
            }).then(response => {
                return response;
                if (response.status == 200) {
                    alert("저장 성공");
                    router.push("/");
                    return;
                }

                alert("저장 실패");
            }).catch(e => {
                alert("저장 실패");
            })
    }
    login(username: string, password: string): Promise<boolean> {
        return axios
          .post<boolean>(API_URL + '/auth/login', { "userId": username, password },
          {
                    "headers": {
                      "Authorization": "X-CODE"
                    },
                 }
              )
          .then(response => {
              return response.data;
          });
    }

    logout(): Promise<void> {
        return axios.post(API_URL + '/logout').then(() => {
            localStorage.removeItem('authenticated');
        });
    }

    isAuthenticated(): boolean {
        return localStorage.getItem('authenticated') === 'true';
    }
}

export default new AuthService();