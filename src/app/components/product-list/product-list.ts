import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  imports: [CommonModule, ProductCard]
})
export class ProductList {
  products = [
    {
      nome: 'Camisa Masculina Nike Manga Curta Dri-Fit Park VII',
      descricao: 'A camiseta Nike perfeita para te acompanhar nos diversos treinos é a Park VII.',
      preco: 49,
      desconto: 10,
      estoque: 100,
      imagens: [
        '/tshirt.jpg',
        '/tshirt_2.jpg'

      ]
    },
    {
      nome: 'Tênis Feminino Nike Air Zoom Alphafly 3',
      descricao: 'Ajustado para a velocidade da maratona, o Alphafly 3 ajuda você a ir além do que você pensava ser possível.',
      preco: 249,
      desconto: 15,
      estoque: 42,
      imagens: [
        '/shoes.jpg',
        '/shoes_2.jpg',
        '/shoes_3.jpg'

      ]
    },
    {
      nome: 'Fone de Ouvido Bluethooth JBL Tune 770 NC',
      descricao: 'Fone de Ouvido Bluetooth JBL Tune 770 NC Headphone Preto com Cancelamento de Ruídos Adaptativo',
      preco: 199,
      desconto: 5,
      estoque: 0,
      imagens: [
        '/headphones.jpg',
        '/headphones_2.jpg',
        '/headphones_3.jpg'
      ]
    },
    {
      nome: 'Apple iPhone 17 Pro Max 256GB Laranja-cósmico 6,9" 48MP iOS 5G',
      descricao: 'O iPhone mais potente já produzido. Tela brilhante de 6,9 polegadas*',
      preco: 11249,
      desconto: 10,
      estoque: 21,
      imagens: [
        '/iphone17.jpg',
        '/iphone17_2.jpg',
        '/iphone17_3.jpg'
      ]
               

  },
     {
      nome: 'Apple Carregador MagSafe',
      descricao: 'Com o carregador MagSafe, você recarrega seus aparelhos num instante e sem fios.',
      preco: 324,
      desconto: 5,
      estoque: 100,
      imagens: ['/carregadormag.jpg']
               

    }
  ];
}
