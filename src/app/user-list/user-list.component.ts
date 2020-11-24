import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observer, Subscription } from "rxjs";
import { UserService } from "../shared/services/user-service.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: string[];

  private userListObs: Observer<string[]> = {
    next: (serviceUsers) => (this.users = serviceUsers),
    complete: () => {},
    error: () => {},
  };
  private userListSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.userListSub = this.userService.users.subscribe(this.userListObs);
    this.userListSub = this.userService.users.subscribe(this.userListObs);
  }

  ngOnDestroy() {
    this.userListSub.unsubscribe();
  }
}
