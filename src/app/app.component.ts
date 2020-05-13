import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Title]
})
export class AppComponent {
  name = "Angular";
  constructor(private title: Title) {
    this.title.setTitle("page title changed");
  }
}
