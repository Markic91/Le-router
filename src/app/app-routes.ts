import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const ROUTES = [
  {path: "user-profile", component: UserProfileComponent},
  {path: "sign-up", component: SignUpComponent},
  {path: "", component: UserProfileComponent}
];

export {ROUTES}
