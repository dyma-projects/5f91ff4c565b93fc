import { Component } from "@angular/core";
import { UserService } from "./shared/services/user-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UserService],
})
export class AppComponent {
  title = "projet5-service";
}
