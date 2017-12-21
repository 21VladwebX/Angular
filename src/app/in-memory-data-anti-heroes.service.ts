import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataServices implements InMemoryDbService {
  createDb() {
    const antiHeroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Mr. Nice' },
      { id: 13, name: 'Mr. Nice' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Mr. Nice' },
      { id: 16, name: 'Mr. Nice' },
      { id: 17, name: 'Mr. Nice' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {antiHeroes};
  }
}
