import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';


@Component({
  selector: 'app-animation-form',
  templateUrl: './animation-form.component.html',
  styleUrls: ['./animation-form.component.css'],
  animations: [
    trigger("growUpAnimation", [state("kid", style({ color: 'red', transform: 'scale(2)' })),
                                state("elder", style({ color: 'green', transform: 'scale(5)' })),
                                transition('kid <=> elder', animate('300ms ease-in'))
    ])
  ]
})
export class AnimationFormComponent implements OnInit {
  /*declaring the variable*/
  defaultState: String = 'kid';
  constructor() { }

  ngOnInit() {
  }
  animateNow() {
    this.defaultState = this.defaultState == 'elder' ? 'kid' : 'elder';
  }
}
