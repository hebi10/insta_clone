import assert from "node:assert/strict";

const baseUrl = process.argv[2] ?? "http://localhost:3000";

async function getJson(path) {
  const response = await fetch(`${baseUrl}${path}`);
  assert.equal(response.ok, true, `${path} returned ${response.status}`);
  return response.json();
}

const [firstPosts, secondPosts] = await Promise.all([
  getJson("/api/posts"),
  getJson("/api/posts"),
]);

assert.deepEqual(firstPosts, secondPosts, "posts API should be stable between calls");
assert.ok(Array.isArray(firstPosts.posts), "posts should be an array");
assert.ok(firstPosts.posts.length >= 6, "posts should include enough feed items");

const firstPost = firstPosts.posts[0];
assert.equal(typeof firstPost.username, "string");
assert.equal(typeof firstPost.avatarUrl, "string");
assert.equal(typeof firstPost.imageUrl, "string");
assert.equal(typeof firstPost.description, "string");
assert.equal(typeof firstPost.likeCount, "number");
assert.equal(typeof firstPost.commentCount, "number");

const profile = await getJson("/api/users/testuser");
assert.equal(profile.user.username, "testuser");
assert.equal(typeof profile.user.fullName, "string");
assert.equal(typeof profile.user.bio, "string");

const chats = await getJson("/api/chats");
assert.ok(Array.isArray(chats.chats), "chats should be an array");
assert.ok(chats.chats.length >= 3, "chats should include sample conversations");

console.log("API shape checks passed");
