# TestNgApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Angular services/DI

Testable, Reusable, Maintainable code
Avoiding tight coupling (easy to maintain overtime)

## Observables in Angular

Observables are a powerful tool in Angular for handling asynchronous data streams. They provide a flexible and efficient way to manage data that arrives over time, such as user input, HTTP responses, and timer events.

Key Concepts:

- Observable: An Observable is like a stream that can emit multiple values over time. It doesn't emit values until you subscribe to it.
- Subscriber: A Subscriber is an object that receives notifications from an Observable. It has methods to handle the next value, error, and completion notifications.
- Subscription: The act of connecting a Subscriber to an Observable is called subscribing. When you subscribe, the Observable starts emitting values, and the Subscriber receives them.
- Operators: RxJS (Reactive Extensions for JavaScript) provides a rich set of operators that allow you to transform and combine Observables in various ways.
