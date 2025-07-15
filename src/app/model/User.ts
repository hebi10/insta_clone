import { Session } from "next-auth";

export interface User {
  session: Session | null;
}