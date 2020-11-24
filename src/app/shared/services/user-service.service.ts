import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() {}

  public addUser(username: string) {
    // Makes new array of users with the new user added
    const newUsers = this.users.value.slice();
    newUsers.push(username);

    // Spread new user array to observers
    this.users.next(newUsers);
  }
}
