import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-nav',
  templateUrl: './p-nav.component.html',
  styleUrls: ['./p-nav.component.scss'],
})
export class PNavComponent {
  menu_lateral = true;
  menus: {
    nome: string;
    link: string;
    icon: string;
  }[] = [];

  nome_usuario = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.nome_usuario = 'Fulano da Silva';
    this.setMenus();
  }

  setMenus() {
    this.menus = [
      {
        nome: 'Início',
        link: '/inicio',
        icon: 'home',
      },
      {
        nome: 'Softwares',
        link: '/softwares',
        icon: 'terminal',
      },
      {
        nome: 'Empresas',
        link: '/empresas',
        icon: 'apartment',
      },
      {
        nome: 'Contratos',
        link: '/contratos',
        icon: 'edit_document',
      },
      {
        nome: 'Chamados',
        link: '/chamados',
        icon: 'notification_important',
      },
    ];
  }

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }

  getVoltar() {
    return window.innerWidth < 600;
  }

  logout() {}
}
