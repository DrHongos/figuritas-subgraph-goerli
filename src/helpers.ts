import { UserE } from "../generated/schema";


export function getUser(address: string): UserE {
  let user = UserE.load(address)
  if (user == null) {
    user = new UserE(address)
  }
  return user as UserE;
}
