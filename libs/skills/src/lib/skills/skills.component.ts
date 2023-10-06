import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'portfolio-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit{

  @ViewChild('scroller') scroller! :ElementRef<HTMLDivElement>;
  @ViewChild('scroller__inner') scrollerInner! :ElementRef<HTMLUListElement>;

  constructor(private renderer:Renderer2)
  {}

  ngAfterViewInit(): void {
      this.handleScollAnimation();
  }

  handleScollAnimation()
  {
    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    {
      this.addAnimation();
    }
  }
  addAnimation()
  {

    this.renderer.setAttribute(this.scroller.nativeElement,'data-animated',"true");
    
    const scrollerContent = Array.from(this.scrollerInner.nativeElement.children) as HTMLElement[];
    scrollerContent.forEach((item)=>{
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      // Duplicated Content should be hidden from screen reader
      duplicatedItem.setAttribute('aria-hidden',"true")
      console.log(duplicatedItem);
      this.renderer.appendChild(this.scrollerInner.nativeElement,duplicatedItem)

    })
  }
}
