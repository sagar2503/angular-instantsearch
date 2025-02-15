import { Component, AfterViewInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  config = {
    //searchClient: algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76'),
    searchClient: algoliasearch('jfk-search-service-w2a6dt7sodehi.search.windows.net', '5D2D2D0B066FF2AAA832B2B361DB9A69'),
    indexName: 'jfkindex',
    routing: false,
  };
  resultsContainer = undefined;
  header = undefined;

  onKeyUp = event => {
    if (event.key !== 'Escape') {
      return;
    }
    this.closeFilters();
  };

  onClick = event => {
    if (event.target !== this.header) {
      return;
    }
    this.closeFilters();
  };

  ngAfterViewInit() {
    this.resultsContainer = document.querySelector('.container-results');
    this.header = document.querySelector('#header');
  }

  public openFilters() {
    document.body.classList.add('filtering');
    window.scrollTo(0, 0);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('click', this.onClick);
  }

  public closeFilters() {
    document.body.classList.remove('filtering');
    this.resultsContainer.scrollIntoView();
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('click', this.onClick);
  }
}
