/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://izzzy.xyz';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'izzzy_xyz';
export const BRAND_NAME = 'izzzy swap';
export const SITE_NAME_MULTILINE = ['IZZZY', 'Inc'];
export const SITE_NAME = 'IZZZY Inc';
export const META_NAME = 'ICO';
export const META_DESCRIPTION =
  'Ethereum NFT project. Made through the collaboration of creators, designers, and developers by the crypto community!';
export const SITE_DESCRIPTION =
  'An interactive blockchain online experience by the community.';
export const DATE = '15 December 2022';
export const SHORT_DATE = 'Dec 15 - 9:00am PST';
export const FULL_DATE = 'Dec 15th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = '/legal';
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const SMART_CONTRACT =
  'https://polygonscan.com/token/0x612e62488A2d36018ec7539a6a8BcfFC412B5eD6';
export const REPO = 'https://twitter.com/izzzy_xyz';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Pre Ico',
    route: '/drop'
  },
  {
    name: 'Roles',
    route: '/roles'
  },
  {
    name: 'Info',
    route: '/info'
  },
  {
    name: 'Roadmap',
    route: '/roadmap'
  },
  {
    name: 'Discord',
    route: '/discord'
  },
];

export type TicketGenerationState = 'default' | 'loading';
