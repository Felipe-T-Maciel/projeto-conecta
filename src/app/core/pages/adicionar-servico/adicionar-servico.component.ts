import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-servico',
  templateUrl: './adicionar-servico.component.html',
  styleUrls: ['./adicionar-servico.component.scss']
})
export class AdicionarServicoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentIndex = 1;

  // Método para avançar ou retroceder na lista de imagens
  move(direction: number): void {
    this.currentIndex += direction;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    } else if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
  }

  currentIndexAparte = 1

  images = [
    'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
    'https://developer.spotify.com/images/guidelines/design/icon3@2x.png',
    'https://pop.proddigital.com.br/wp-content/uploads/sites/8/2023/07/01-15.jpg'
  ];

  moveAparte(direction: number): void {
    this.currentIndexAparte += direction;
    if (this.currentIndexAparte >= this.imagesAparte.length) {
      this.currentIndexAparte = 0;
    } else if (this.currentIndexAparte < 0) {
      this.currentIndexAparte = this.images.length - 1;
    }
  }

  imagesAparte = [
    'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
    'https://developer.spotify.com/images/guidelines/design/icon3@2x.png',
    'https://pop.proddigital.com.br/wp-content/uploads/sites/8/2023/07/01-15.jpg'
  ];

}
