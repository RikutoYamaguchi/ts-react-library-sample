import { container } from 'tsyringe';
import { Fetch } from 'src/infrastructures/Fetch';

container.register('Fetch', {
  // TODO: update api endpoint
  useValue: new Fetch('api'),
});
