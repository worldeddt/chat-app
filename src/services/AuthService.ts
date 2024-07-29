import axios from "axios";


const API_URL:string = "http://localhost:8081";

class AuthService {
    login(username: string, password: string): Promise<boolean> {
        return axios
          .post<boolean>(API_URL + '/login', { username, password })
          .then(response => {
              if (response.data) {
                  localStorage.setItem('authenticated', 'true');
              }
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