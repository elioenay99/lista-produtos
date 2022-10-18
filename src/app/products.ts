export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Um Smartphone largo e número 1 em qualidade de tela...'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Ele pode ser pequeno mas é gigante quando se trata de camêra..'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];

