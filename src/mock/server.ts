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
      // 임시 유저 생성 (id: 1, email: test@test.com, password: 1234)
      server.create('user', {
        id: '1',
        email: 'test@test.com',
        password: '1234',
        username: 'mockuser',
        avatarUrl: faker.image.avatar(),
      });
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/posts', (schema) => {
        // @ts-ignore
        return schema.all('post');
      });

      // 로그인 엔드포인트 추가
      this.post('/login', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const { email, password } = attrs;

        // @ts-ignore
        const user = schema.users.findBy({ email, password });

        if (user) {
          return {
            user: {
              id: user.id,
              email: user.email,
              username: user.username,
              avatarUrl: user.avatarUrl,
            },
            token: faker.string.uuid(),
          };
        } else {
          return new Response(
            401,
            { 'Content-Type': 'application/json' },
            JSON.stringify({ error: '이메일 또는 비밀번호가 올바르지 않습니다.' })
          );
        }
      });
    },
  });
}
