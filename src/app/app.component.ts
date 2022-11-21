import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  @HostListener('window:scroll')
  onScroll() {
    this.changeNavItems();
    this.showTopNavbar = window.scrollY < 5.1 * window.innerHeight;
  }

  //#region constructor

  constructor(
    public translateService: TranslateService,
    public router: Router,
  ) {
    translateService.addLangs([ 'en', 'pt' ]);
    translateService.setDefaultLang('pt');
  }

  //#endregion

  //#region properties

  public title = 'ods-tracker';

  public showTopNavbar: boolean = true;

  public currentSDG: any = {
    id: '1',
    title: '1. Erradicação da Pobreza',
    description: 'Acabar com a pobreza em todas suas formas, em todos os lugares',
  };

  public chart: any;
  public options: any = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#F5F5F5',
        titleColor: '#3DC8FF',
        bodyColor: '#3DC8FF',
        displayColors: false,
      },
    },
  };

  public navItemsIds: string[] = [ 'home', 'info', 'overview', 'sdg', 'charts', 'ranking' ];

  //#endregion

  //#region methods

  public changeNavItems() {
    this.navItemsIds.forEach(e => {
      const id = `nav-${ e }`;
      const index = this.navItemsIds.indexOf(e);
      const currentHeight = window.scrollY;
      const screenHeight = window.innerHeight;
      const items = Object.values(document.querySelectorAll('.nav--item'));
      const currentItem = items.filter(f => f.id === id)[0];
      const otherItems = items.filter(f => f.id !== id);

      document.getElementById(id)!.classList.remove('active');

      if (currentHeight >= ((index * screenHeight) - 0.3)) {
        currentItem.classList.add('active');
        otherItems.map(m => m.classList.remove('active'));
      }
    });
  }

  public changeSdg(item: any): void {
    this.currentSDG.title = `${ item.ID }. ${ item.TITLE }`;
    this.currentSDG.description = item.DESCRIPTION;
  }

  public getChartData(data: any): any {
    this.chart = {
      labels: data['NAME'],
      datasets: [ {
        label: 'Score',
        backgroundColor: '#3DC8FF',
        borderColor: '#F5F5F5',
        color: '#F5F5F5',
        data: data['VALUE'],
      } ],
    };

    return this.chart;
  }

  //#endregion
}
