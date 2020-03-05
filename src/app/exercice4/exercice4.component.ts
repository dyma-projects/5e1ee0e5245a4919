import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice4",
  templateUrl: "./exercice4.component.html",
  styleUrls: ["./exercice4.component.css"]
})
export class Exercice4Component implements OnInit {
  tests: Array<{ texts: string }> = [];
  constructor() {
    this.tests.push({ texts: "un" });
    this.tests.push({ texts: "deux" });
    this.tests.push({ texts: "trois" });
  }

  ngOnInit(): void {}
}
