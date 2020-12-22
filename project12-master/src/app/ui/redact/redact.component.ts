import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-redact',
  templateUrl: './redact.component.html',
  styleUrls: ['./redact.component.css']
})
export class RedactComponent implements OnInit {
  myWorkerType = MyWorkerType;
  idnew: number;
  namenew: string;
  surnamenew: string;
  type = 0;

  @Output() RedactWorker = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {}
  
  onRedactWorker() {
    let re = /\S/;
    let nn = this.namenew;
    let ns = this.surnamenew;
    if ((nn.search(re)==-1)||(ns.search(re)==-1)||(this.idnew<0)){ alert('Заполните поля корректно!')}
    else {
    this.RedactWorker.emit({
      id: this.idnew,
      name: this.namenew,
      surname: this.surnamenew,
      type: this.type,
    });
    }
  }
}
