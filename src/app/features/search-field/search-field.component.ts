import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchFieldComponent {

}
