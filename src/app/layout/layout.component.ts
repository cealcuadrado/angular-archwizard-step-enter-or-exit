import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardComponent } from 'angular-archwizard';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentStep: number;
  @ViewChild(WizardComponent, { static: true }) wizard: WizardComponent;

  constructor() { }

  ngOnInit(): void {
    this.currentStep = this.wizard.currentStepIndex;
  }

  arriveStep(step: number): void {
    this.currentStep = this.wizard.currentStepIndex;
  }
}
