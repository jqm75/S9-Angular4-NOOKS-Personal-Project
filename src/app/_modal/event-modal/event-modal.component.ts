import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild, TemplateRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
})
export class EventModalComponent {

  @ViewChild('modalContent') modalContent!: TemplateRef<any>;
  title!: string;

  constructor(
    private modalFunctions: NgbModal,
    private modalService: ModalService,
  ) {
    this.modalService.modals['addEvent'] = this
  }

  open(){
    this.modalFunctions.open(this.modalContent);
  }

  //TODO: Crear formulario aquí.
}
