/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type UsersIdentityResponse = WebAPICallResult & {
  ok?:       boolean;
  warning?:  string;
  error?:    string;
  needed?:   string;
  provided?: string;
  user?:     User;
  team?:     Team;
};

export interface Team {
  name?: string;
  id?:   string;
}

export interface User {
  name?:      string;
  id?:        string;
  email?:     string;
  image_24?:  string;
  image_32?:  string;
  image_48?:  string;
  image_72?:  string;
  image_192?: string;
  image_512?: string;
}
