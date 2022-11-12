<div align="center">
  <h1>Burgers On You<h1>
</div>

Live at : [https://grape-thoughts.vercel.app/](https://grape-thoughts.vercel.app/)

GrapeThoughts is a web app that let's you share thoughts anonymyously on the internet

Whole project heavily uses [Nextjs](https://nextjs.org/)

## Running The Project Locally

Download the repository and then on the root , Running

```bash
npm install
```

you need to create a .env file on the root which should have the following things (fill those values out)

```env
DATABASE_URL=

NEXTAUTH_SECRET=
```

this project uses mysql but if u wanna change that , go to [prisma/schema.prisma](https://github.com/grapeJUICE1/Grape-Thoughts/blob/main/prisma/schema.prisma) and change provider to your favorite database

Then u can run

```bash
npm run dev
```

This will start the development server at port 3000

## Features

- Login/Signup with jwt
- Anonymyously post thoughts
- Like and Bookmark thoughts
- Profile page
- See your thoughts/bookmarks
- Share Thoughts

## Screenshots

#### Home Page

![Home Page](https://github.com/grapeJUICE1/Grape-Thoughts/blob/main/screenshots/Home.png?raw=true)

#### All Thoughts Page

![All Thoughts Page](https://github.com/grapeJUICE1/Grape-Thoughts/blob/main/screenshots/All-Thoughts.png?raw=true)

#### Login/Signup Page

![Login/Signup Page](https://github.com/grapeJUICE1/Grape-Thoughts/blob/main/screenshots/Login-Signup.png?raw=true)

#### User's Thoughts/Bookmarks Page

![User's Thoughts/Bookmarks Page](https://github.com/grapeJUICE1/Grape-Thoughts/blob/main/screenshots/Bookmarks.png?raw=true)

#### Profile Page

![Home Page](https://github.com/grapeJUICE1/Grape-Thoughts/blob/main/screenshots/Profile.png?raw=true)

#### Light Mode

![Home Page](https://github.com/grapeJUICE1/Grape-Thoughts/blob/main/screenshots/Light-mode.png?raw=true)
