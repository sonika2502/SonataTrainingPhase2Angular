import { Component } from '@angular/core';

@Component({
  selector: 'app-search-names',
  templateUrl: './search-names.component.html',
  styleUrls: ['./search-names.component.css']
})
export class SearchNamesComponent {
  searchTerm: string = '';
  list: string[] = ['Shailaja', 'Jayashree', 'Mary', 'Ganesh', 'Roja', 'Sheela'];
}
