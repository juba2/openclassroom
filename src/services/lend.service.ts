import { Lend } from '../models/lend';

export class LendService {
  bookList: Lend[]= [
    {
      name: 'Madame Bovary',
      isOn: false
    },
    {
      name: 'Le Père Goriot',
      isOn: true
    },
    {
      name: 'Don Quichotte ',
      isOn: true
    },
    {
      name: 'Les Frères Karamazov ',
      isOn: true
    },
    {
      name: 'Le Vieil Homme et la Mer ',
      isOn: true
    },
    {
      name: 'Le Roi Lear ',
      isOn: true
    },
    {
      name: 'Énéide',
      isOn: true
    },
  ]

  cdList: Lend[]= [
    {
      name: 'Led Zeppelin - Physical Graffiti',
      isOn: true
    },
    {
      name: 'U2 - War',
      isOn: true
    },
    {
      name: 'U2 - Achtung Baby',
      isOn: false
    },
    {
      name: 'Jean Michel Jarre - Oxygène',
      isOn: false
    },
    {
      name: 'The cars - Heartbeat City',
      isOn: false
    }
  ]
  ;


}
