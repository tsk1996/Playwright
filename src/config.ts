type Env = 'qa' | 'dev' | 'prod';

const env: Env = (process.env.ENV as Env) || 'qa';

const configs = {
  qa: {
    baseUrl: 'https://www.google.com'
  },
  dev: {
    baseUrl: 'https://www.google.com'
  },
  prod: {
    baseUrl: 'https://www.google.com'
  }
};

export const config = configs[env];