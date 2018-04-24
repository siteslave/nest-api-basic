import { Injectable } from '@nestjs/common';
import { getConnection, Connection, EntityManager } from 'typeorm';

@Injectable()
export class UsersService {
  entityManager: EntityManager;

  constructor(private readonly connection: Connection) {
    this.entityManager = this.connection.createEntityManager();
  }

  login() {
    return this.entityManager.query('SELECT * FROM students where id in (?)', [[1000, 999]]);
  }

}
