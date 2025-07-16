import { createServer, Factory, Model, Response } from 'miragejs';
import { faker } from '@faker-js/faker';

export function makeServer() {
  return createServer({
    models: {
      post: Model,
      user: Model,
      reel: Model,
      notification: Model,
      chat: Model,
      explorePost: Model,
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
      user: Factory.extend({
        username() {
          return faker.internet.userName();
        },
        fullName() {
          return faker.person.fullName();
        },
        avatar() {
          return faker.image.avatar();
        },
        bio() {
          return faker.lorem.paragraph(2);
        },
        website() {
          return faker.internet.url();
        },
        postsCount() {
          return faker.number.int({ min: 50, max: 500 });
        },
        followersCount() {
          return faker.number.int({ min: 100, max: 10000 });
        },
        followingCount() {
          return faker.number.int({ min: 50, max: 1000 });
        },
        isFollowing() {
          return faker.datatype.boolean();
        },
        isOwnProfile() {
          return false;
        },
      }),
      reel: Factory.extend({
        username() {
          return faker.internet.userName();
        },
        avatar() {
          return faker.image.avatar();
        },
        description() {
          return `${faker.lorem.sentence()} #릴스 #인스타그램 #일상`;
        },
        likeCount() {
          return faker.number.int({ min: 1000, max: 50000 });
        },
        commentCount() {
          return faker.number.int({ min: 50, max: 1000 });
        },
        isLiked() {
          return faker.datatype.boolean();
        },
        isFollowing() {
          return faker.datatype.boolean();
        },
      }),
      notification: Factory.extend({
        type() {
          const types = ['like', 'comment', 'follow', 'mention'];
          return faker.helpers.arrayElement(types);
        },
        username() {
          return faker.internet.userName();
        },
        avatar() {
          return faker.image.avatar();
        },
        timestamp() {
          return faker.date.recent({ days: 7 });
        },
        isRead() {
          return faker.datatype.boolean();
        },
        postImage() {
          return faker.image.urlPicsumPhotos({ width: 150, height: 150 });
        },
        text() {
          return faker.lorem.sentence();
        },
        isFollowing() {
          return faker.datatype.boolean();
        },
      }),
      chat: Factory.extend({
        name() {
          return faker.person.fullName();
        },
        username() {
          return faker.internet.userName();
        },
        avatar() {
          return faker.image.avatar();
        },
        lastMessage() {
          return faker.lorem.sentence();
        },
        timestamp() {
          return faker.date.recent({ days: 7 });
        },
        unreadCount() {
          return Math.random() > 0.6 ? faker.number.int({ min: 1, max: 5 }) : 0;
        },
        isOnline() {
          return faker.datatype.boolean();
        },
      }),
      explorePost: Factory.extend({
        imageUrl() {
          return faker.image.urlPicsumPhotos({ width: 400, height: 400 });
        },
        likeCount() {
          return faker.number.int({ min: 100, max: 10000 });
        },
        commentCount() {
          return faker.number.int({ min: 10, max: 500 });
        },
        username() {
          return faker.internet.userName();
        },
      }),
    },
    seeds(server) {
      server.createList('post', 10);
      server.createList('reel', 15);
      server.createList('notification', 25);
      server.createList('chat', 12);
      server.createList('explorePost', 30);
      server.createList('user', 20);
      
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

      // 홈 피드 게시물
      this.get('/posts', (schema) => {
        return schema.all('post');
      });

      // 릴스
      this.get('/reels', (schema) => {
        return schema.all('reel');
      });

      // 탐색 페이지 게시물
      this.get('/explore', (schema) => {
        return schema.all('explorePost');
      });

      // 알림
      this.get('/notifications', (schema) => {
        return schema.all('notification');
      });

      // 채팅 목록
      this.get('/chats', (schema) => {
        return schema.all('chat');
      });

      // 특정 채팅 상세 정보
      this.get('/chats/:chatId', (schema, request) => {
        const chatId = request.params.chatId;
        const user = {
          id: chatId,
          name: faker.person.fullName(),
          username: faker.internet.userName(),
          avatar: faker.image.avatar(),
          isOnline: Math.random() > 0.5,
          lastSeen: faker.date.recent(),
        };

        const messages = Array.from({ length: 20 }, (_, i) => {
          const isOwn = Math.random() > 0.6;
          const isImage = Math.random() > 0.8;
          
          return {
            id: `msg-${i}`,
            senderId: isOwn ? 'me' : user.id,
            senderName: isOwn ? '나' : user.name,
            senderAvatar: isOwn ? '/images/default-avatar.png' : user.avatar,
            content: isImage 
              ? `https://picsum.photos/seed/chat-${chatId}-${i}/300/200`
              : faker.lorem.sentence(),
            type: isImage ? 'image' : 'text',
            timestamp: faker.date.recent({ days: 3 }),
            isOwn,
          };
        }).sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

        return { user, messages };
      });

      // 프로필 정보
      this.get('/users/:username', (schema, request) => {
        const username = request.params.username;
        const users = schema.all('user').models;
        const user = users.find(u => u.attrs.username === username) || users[0];
        
        // 필요한 필드들을 명시적으로 포함
        return {
          username: user.attrs.username || username,
          fullName: user.attrs.fullName || faker.person.fullName(),
          avatar: user.attrs.avatar || faker.image.avatar(),
          bio: user.attrs.bio || faker.lorem.paragraph(2),
          website: user.attrs.website || faker.internet.url(),
          postsCount: user.attrs.postsCount || faker.number.int({ min: 50, max: 500 }),
          followersCount: user.attrs.followersCount || faker.number.int({ min: 100, max: 10000 }),
          followingCount: user.attrs.followingCount || faker.number.int({ min: 50, max: 1000 }),
          isFollowing: user.attrs.isFollowing !== undefined ? user.attrs.isFollowing : faker.datatype.boolean(),
          isOwnProfile: username === 'myusername', // 현재 사용자인지 확인
        };
      });

      // 사용자 게시물
      this.get('/users/:username/posts', (schema, request) => {
        // 프로필 페이지용 게시물 (그리드 형태)
        const posts = Array.from({ length: 12 }, () => ({
          id: faker.string.uuid(),
          imageUrl: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
          likeCount: faker.number.int({ min: 50, max: 1000 }),
          commentCount: faker.number.int({ min: 5, max: 100 }),
        }));
        return { posts };
      });

      // 저장된 게시물
      this.get('/users/:username/saved', (schema, request) => {
        const posts = Array.from({ length: 6 }, () => ({
          id: faker.string.uuid(),
          imageUrl: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
          likeCount: faker.number.int({ min: 50, max: 1000 }),
          commentCount: faker.number.int({ min: 5, max: 100 }),
        }));
        return { posts };
      });

      // 태그된 게시물
      this.get('/users/:username/tagged', (schema, request) => {
        const posts = Array.from({ length: 8 }, () => ({
          id: faker.string.uuid(),
          imageUrl: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
          likeCount: faker.number.int({ min: 50, max: 1000 }),
          commentCount: faker.number.int({ min: 5, max: 100 }),
        }));
        return { posts };
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
