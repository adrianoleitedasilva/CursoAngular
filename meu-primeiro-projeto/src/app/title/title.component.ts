import { Component, OnChanges, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnChanges, OnDestroy {
  @Input() title: string = 'Titulo'

  ngOnChanges():void {
    console.log("Foi alterado com sucesso!")
  }

  ngOnDestroy(): void {
    console.log('Deu bom, destruiu!');
  }
}
