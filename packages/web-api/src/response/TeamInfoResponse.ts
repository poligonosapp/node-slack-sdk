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
export type TeamInfoResponse = WebAPICallResult & {
  ok?:       boolean;
  team?:     Team;
  error?:    string;
  needed?:   string;
  provided?: string;
};

export interface Team {
  id?:                string;
  name?:              string;
  domain?:            string;
  email_domain?:      string;
  icon?:              Icon;
  is_verified?:       boolean;
  url?:               string;
  enterprise_id?:     string;
  enterprise_name?:   string;
  enterprise_domain?: string;
  discoverable?:      string;
}

export interface Icon {
  image_34?:       string;
  image_44?:       string;
  image_68?:       string;
  image_88?:       string;
  image_102?:      string;
  image_132?:      string;
  image_230?:      string;
  image_original?: string;
}
