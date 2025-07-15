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

      this.get('/auth/providers', () => {
        return {
          credentials: {
            id: 'credentials',
            name: 'Credentials',
            type: 'credentials',
          },
        };
      });

      this.get('/auth/csrf', () => {
        return {
          csrfToken: 'test-csrf-token',
        };
      });

      this.get('/posts', (schema) => {
        return schema.all('post');
      });

      // 로그인: email, password로 파싱
      this.post('/login', (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        // @ts-ignore
        const user = schema.users.findBy({ email, password });

        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.username,
            image: user.avatarUrl,
            token: 'mock-jwt-token',
          };
        }
        return new Response(
          401,
          { 'Content-Type': 'application/json' },
          JSON.stringify({ error: '이메일 또는 비밀번호가 올바르지 않습니다.' })
        );
      });

      this.get('/auth/session', (schema) => {
        return {
          user: {
            id: '1',
            email: 'test@test.com',
            name: 'mockuser',
            image: faker.image.avatar(),
          },
          expires: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
        };
      });

      // NextAuth credential 콜백: email, password로 파싱
      this.post('/auth/callback/credentials', (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        // @ts-ignore
        const user = schema.users.findBy({ email, password });

        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.username,
            image: user.avatarUrl,
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
