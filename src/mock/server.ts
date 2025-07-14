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
      this.namespace = 'api/auth';
      this.timing = 750;

      // 1. 인증 제공자
      this.get('/providers', () => {
        return {
          credentials: {
            id: 'credentials',
            name: 'Credentials',
            type: 'credentials',
          },
        };
      });

      // 2. CSRF 토큰
      this.get('/csrf', () => {
        // NextAuth는 실제로 csrf 토큰이 필요함
        return {
          csrfToken: faker.string.uuid(),
        };
      });

      // 3. 로그인(콜백)
      this.post('/callback/credentials', (schema, request) => {
        const body = JSON.parse(request.requestBody);
        const { csrfToken, email, id, password } = body;

        // id 또는 email로 받는 경우 모두 대응
        const userId = id || email;

        // @ts-ignore
        const user = schema.users.findBy({ email: userId, password });

        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.username,
            image: user.avatarUrl,
          };
        } else {
          return new Response(
            401,
            { 'Content-Type': 'application/json' },
            JSON.stringify({ error: '이메일 또는 비밀번호가 올바르지 않습니다.' })
          );
        }
      });
    }
  });
}
