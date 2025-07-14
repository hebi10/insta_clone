import { faker } from "@faker-js/faker";
import { Avatar } from "./feed.style";

export default function MySide() {
  return (
    <>
      <div>
        {/* Your MySide component content goes here */}
        <Avatar src={faker.image.avatar()} alt="fingerpets96님의 프로필 사진" />
        <h3>내 프로필</h3>
        <p>fingerpets96</p>
      </div>
      <div>
        <h4>회원님을 위한 추천 프로필</h4>
        <ul>
          <li>
            <Avatar src={faker.image.avatar()} alt="test01" />
            <h3>프로필</h3>
            <p>test01</p>
          </li>
          <li>
            <Avatar src={faker.image.avatar()} alt="test02" />
            <h3>프로필</h3>
            <p>test02</p>
          </li>
          <li>
            <Avatar src={faker.image.avatar()} alt="test03" />
            <h3>프로필</h3>
            <p>test03</p>
          </li>
          <li>
            <Avatar src={faker.image.avatar()} alt="test04" />
            <h3>프로필</h3>
            <p>test04</p>
          </li>
          <li>
            <Avatar src={faker.image.avatar()} alt="test05" />
            <h3>프로필</h3>
            <p>test05</p>
          </li>
        </ul>
      </div>
    </>
  );
}