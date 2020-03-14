import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  execption() {
    return "its workikng";
  }
  getUser() {
    return this.http.get("api/users");
  }

  AddUser(user: any): Observable<any> {
    return this.http.post("api/users/register", user);
  }

  addToken(name: string, user: any): void {
    if (typeof user === "string") {
      localStorage.setItem(name, user);
    } else {
      localStorage.setItem(name, JSON.stringify(user));
    }
  }

  // getUserProfile(id: number): Observable<any> {
  //   return this.http.get(`api/users/profile/${id}`);
  // }

  sendMail(email: any, url: string): Observable<any> {
    email = email.reduce((arr, item) => {
      return (arr.push(item.email), arr);
    }, []);
    return this.http
    .post("api/users/sendmail", {email, url});
  }

  checkEmailIsValid(token): Observable<any> {
    return this.http.put("/api/users/checkEmail", {token});
  }
 }
