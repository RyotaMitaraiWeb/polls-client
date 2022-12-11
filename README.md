# Polls Client

Client-side for polls application, written in Angular

## Installation

To run this application, you must first run its [server](https://github.com/RyotaMitaraiWeb/polls-server).

After getting the server running successfully, enter the following in your terminal

```npm
npm install
```

## Structure

### auth
The auth module contains components related to authentication.

### core
The core folder/module contains services, components, and other functionalities that are needed for this application to be usable in any normal manner. The core module has a mechanism to ensure that it is imported only once (otherwise, your application won't run)

### shared
The shared module contains components and other functionalities that you know can (and will) be imported more than once across your application. This is also where you should import Angular Material components that you intend to use throughout the application (such as ``mat-icon``)

### features
The features module contains functionalities with minor impact to the application, such as the search field, burger menu, and etc.

### store
This is where all the ngrx logic is stored. In addition, ``test-state.ts`` contains an object which you can provide to the mock store when writing tests.

### interfaces.ts
This file contains all custom interfaces.

## License

[MIT](https://choosealicense.com/licenses/mit/)