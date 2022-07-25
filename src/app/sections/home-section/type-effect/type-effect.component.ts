import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-type-effect',
  templateUrl: './type-effect.component.html',
  styleUrls: ['./type-effect.component.less']
})
export class TypeEffectComponent implements AfterViewInit {

  @ViewChild("textElement")textElement!: ElementRef;
  @ViewChild("blinkElement")blinkElement!: ElementRef;

  wordArray: string[] = [
    "Developer",
    "Designer",
    "Photographer"
  ];
  typingSpeedMilliseconds = 140;
  deleteSpeedMilliseconds = 100;

  private i = 0;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(()=>{this.typingEffect();},1000);
  }

  private typingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        setTimeout(()=>{this.deletingEffect();},2500);
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.textElement.nativeElement.innerHTML = word.join("");
      } else {
        this.i = this.wordArray.length > this.i + 1 ? this.i+1 : 0;
        setTimeout(()=>{this.typingEffect();},1000)
        let val :any = false;
        return val;
      }
      setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
      
    };
    loopDeleting();
  }
}
