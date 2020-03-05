import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice3",
  templateUrl: "./exercice3.component.html",
  styleUrls: ["./exercice3.component.css"]
})
export class Exercice3Component implements OnInit {
  statut: boolean;
  constructor() {
    this.statut = true;
  }
  reverse_statut(event: EventListener, statut = this.statut): void {
    this.statut = !statut;
  }

  ngOnInit(): void {}
}
