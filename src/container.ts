import { container } from 'tsyringe';
import { Fetch } from 'src/infrastructures/Fetch';
import { NotifulApiRepository } from 'src/infrastructures/repositories/NotifulApiRepository';

container.register('Fetch', {
  // TODO: update api endpoint
  useValue: new Fetch('api'),
});

container.register('NotifulApiRepository', {
  useClass: NotifulApiRepository,
});
