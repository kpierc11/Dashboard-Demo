/** @type {import('next').NextConfig} */
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/stations',
          permanent: true, // 301 redirection
        },
       
      ];
    },
  };

