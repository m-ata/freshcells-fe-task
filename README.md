# Freshcells Frontend Task
Welcome to the Freshcells frontend task which allow user to login and see their account information.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Implementation Details](#implementation-details)

## Features

- Login screen.
- Account Information page.
- Responsive design.
- Form Validation (Email & Password are required fields and must match email pattern).
- Login button will be disabled during request pending.
- Localization (There is a dropdown in the top right corner where user can change the language including English, German, and Polish).


## Getting Started

Follow these steps to set up and run the project locally:
1. Clone the repository by following the command `(https://github.com/m-ata/freshcells-fe-task.git)`.
2. Navigate to the project directory: `cd freshcells-fe-task`.
3. Install dependencies: `npm install`.
4. Add `.env` including variables `VITE_PORT, VITE_GRAPHQL_URI`
5. Start the development server: `npm run dev`.
6. Access the app by opening the web browser and navigating to http://localhost:4000/ assuming you set `VITE_PORT=4000`.


## Implementation Details
- **Routing:** The application incorporates client-side routing with lazy loading for optimal performance. A router outlet, wrapped in suspense with a fallback for improved user experience, is utilized. `Private and Public` routes logic is also implemented in order to support authentication.
- **Vite:** To maximize development speed, Vite is used as the module bundler since it is comparatively fast as compared to other bundlers such as Webpack, Rollup.
- **.env:** The project makes use of environment variables, which are loaded from `.env` file.
- **Style:** I love to write my own css instead of preferring UI library as you have a full control of your application css when you write custom styles and sometimes overriding classes is more diffuclt if the library renders it's classes at runtime. Sass and it's common features such as mixin, variables has been utilized to prevent repeatitive styles.
- **Utils:** Utility functions play a crucial role in preventing code duplication and adhering to the DRY (Don't Repeat Yourself) principle. Functions such as `getLanguageConfig` for getting locale confiuration and `extractErrorMessage` for extract the exact graphql error message are included.
- **Components Modularity:** Every component in the application follows the Single Responsibility Principle, meaning each component handles a specific task. For instance, `LanguageDropdown` is responsible for taking care of changing the language in the context. Similarly, we have `Loader` component to show the loader.
- **Hooks:** Custom hooks, such as `useFormatMessage` to format the messages from locale, `useAuth` to utilize auth context, `useUser` to use user query, `useLocale` to get locales, are developed to promote code reusability and maintainability.
- **Context:** As we all know that props drilling is not eficient if you are working with `React`. So, in order to prevent it, I utilized the concept of Context and added two context `AuthContext` to save auth related information and `LocaleContext` to save selected locale.
- **Redux:** Managing states are sometime difficult when it comes to the complex system, therefore redux is used to manage the states throghout the system using @redux/toolkit since it allows you to break your states into slices. So, I created `user` store since it's a dynamic data.
- **GraphQL API:** GraphQL integration has been done using `apollo/client`. I have created `FreshCellsApolloProvider` for graphql integration so it will be available throughout the application. `LOGIN_MUTATION` is defined to integrate login mechanism and `GET_USER_QUERY` is defined to get the user information to show in the account page.
- **Linting:** As we are software developers, we do common mistakes while writing the code which could cost us so I have setup ESLint and write `.eslintrc.yml` to prevent unnecessary code breaking. You can run `npm run lint` to check the linting errors/warning, if you get any error you may run `npm run lint:fix` to fix all those errors.
- **Prettier:** Formatting is one of the major factor when it comes to the readability of the code, so the prettier has been setup with `.prettierrc.yml` to format the code.
- **Pre Commit Hooks:** I have configured pre commit hooks to prevent unnecessary error related commits. You can run it with the following command `npm run pre:commit`.
