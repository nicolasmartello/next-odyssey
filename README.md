# Next-odyssey

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). And combines [Nextjs](https://nextjs.org/docs/basic-features/typescript), [Typescript](https://www.typescriptlang.org/) and [Apollojs](https://www.apollographql.com/). Nextjs is in charge of load the server and client. We use Graphql, running Apollojs. The logic follows the [Apollo-odyssey](https://odyssey.apollographql.com/) tutorial

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you want to run the app in a different port or use a separate server, keep in mind that Apollo-client connects using the the config in `next.config.js`. You must to update the enviornment variable `apiBaseUrl`

