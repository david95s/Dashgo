import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

type UserProps = {
  name: string;
  email: string;
  create_at: string;
}
/*
  <Partial<UserProps>>
  <Partial> => Qr dizer q pode conter <UserProps>(name,email,create_at) OU NÃO
*/
export const makeServer = () =>{

  const server = createServer({
    models:{
      user: Model.extend<Partial<UserProps>>({})
    },

    factories:{
      user: Factory.extend({
        name(i: number){
          return `User ${i + 1}`
        },
        email(i){
          return faker.internet.email().toLocaleLowerCase();
        },
        createAt(i){
          return faker.date.recent(10);
        }
      })
    },

    seeds(server){
      server.createList('user', 200);
    },

    routes(){
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    }
  });

  return server;
};