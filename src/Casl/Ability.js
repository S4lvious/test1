import { createMongoAbility } from "@casl/ability";

export default function defineAbilityFor(user, permissions) {
  if(user){
  return createMongoAbility(permissions[user.role]);
  }
}
