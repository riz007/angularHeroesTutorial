import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './hero';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      {id:11, name: 'Mr.Rizwanul'},
      {id:12, name: 'Mr. Salman'},
      {id:13, name: 'Mr. Faisal'},
      {id:14, name: 'Mr. Garry'},
      {id:15, name: 'Mr. Randy'},
      {id:16, name: 'Mr. Tarek'},
      {id:17, name: 'Mr. Gerard'},
      {id:18, name: 'Mr. Steen'},
      {id:19, name: 'Mr. Saiful'},
      {id:20, name: 'Mr. Riazul'},
      {id:21, name: 'Mr. Ivan'},
      {id:22, name: 'Mr. Rudra'},
      {id:23, name: 'Ms. Namtan'},
      {id:24, name: 'Ms. Natasha'},
      {id:25, name: 'Ms. Tanny'},
      {id:26, name: 'Ms. Rosey'},
      {id:27, name: 'Ms. Rakhee'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]):number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero=>hero.id)) +1 : 11;
  }

}
