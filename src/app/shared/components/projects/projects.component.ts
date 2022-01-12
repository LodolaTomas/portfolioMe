import { AfterViewInit, Component, ElementRef, HostListener, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent{
  @ViewChild('drag', { read: DragScrollComponent }) 
  private ds!: DragScrollComponent;

  @ViewChild('holdDrag')
  private holdDrag!: ElementRef;

  constructor(private render2: Renderer2) {}

  redirecTo(value: string) {
    if (value === 'clinica') {
      window.open('https://github.com/LodolaTomas/TP_Clinica-Online', '_blank');
    } else if (value === 'estudioContable') {
      window.open('https://github.com/LodolaTomas/estudioContable', '_blank');
    } else if (value === 'pacoRabanne') {
      window.open('https://competent-kirch-832668.netlify.app/', '_blank');
    } else if (value === 'repairService') {
      window.open('https://github.com/LodolaTomas/RepairService', '_blank');
    } else if (value === 'restaurant') {
      window.open(
        'https://github.com/LodolaTomas/2021_TP_PPS_Comanda_1_cuatri',
        '_blank'
      );
    }
  }
  @HostListener('document:mousedown', ['$event'])
    onPointerMove(event: PointerEvent): void {
      this.ds.isPressed==true ? this.render2.addClass(this.holdDrag.nativeElement, 'display-none') :'' ;
    }
}
