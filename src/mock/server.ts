import { createServer, Factory, Model, Response } from 'miragejs';
import { faker } from '@faker-js/faker';

export function makeServer() {
  return createServer({
    models: {
      post: Model,
      user: Model,
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
      server.create('user', {
        id: 'test@test.com',
        email: 'test@test.com',
        password: '1234',
        username: 'mockuser',
        avatarUrl: faker.image.avatar(),
      });
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750;

      // NextAuth의 모든 라우트를 passthrough로 처리
      this.passthrough('/auth/**');

      this.get('/posts', (schema) => {
        return schema.all('post');
      });

      this.post('/login', (schema, request) => {
        const { id, password } = JSON.parse(request.requestBody);
        // @ts-ignore
        const user = schema.users.findBy({ id, password });

        if (user) {
          return {
            id: user.id,
            email: user.email,
            username: user.username,
            token: 'mock-jwt-token',
          };
        }
        return new Response(
          401,
          { 'Content-Type': 'application/json' },
          JSON.stringify({ error: '이메일 또는 비밀번호가 올바르지 않습니다.' })
        );
      });
    }
  });
}
