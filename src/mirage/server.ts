import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

export function makeServer() {
  return createServer({
    models: {
      post: Model,
    },
    factories: {
      post: Factory.extend({
        username() {
          return faker.internet.userName();
        },
        avatarUrl() {
          return faker.image.avatar();
        },
        imageUrl() {
          return faker.image.urlPicsumPhotos({ width: 600, height: 400 });
        },
        description() {
          return faker.lorem.sentence();
        },
        likeCount() {
          return faker.number.int({ min: 1, max: 5000 });
        },
        commentCount() {
          return faker.number.int({ min: 1, max: 200 });
        },
      }),
    },
    seeds(server) {
      server.createList('post', 5);
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750;
      this.get('/posts', (schema) => {
        // @ts-ignore
        return schema.all('post');
      });
    },
  });
}
