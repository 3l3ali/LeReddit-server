import { Connection, EntityManager, IDatabaseDriver } from '@mikro-orm/core';
import { Request, Response } from 'express';

export type MyContex = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>,
  req: Request & {session: any},
  res: Response
}