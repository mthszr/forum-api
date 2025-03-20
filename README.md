## 🚀 Project Overview

This project is a forum API that allows users to create questions, provide answers, and engage in discussions through comments. It follows clean architecture principles and uses domain-driven design to organize business logic.

## 🔧 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/mthszr/forum-api.git

# Navigate to project directory
cd forum-api

# Install dependencies
npm install
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```


## ✨ Features

- **Questions**: Create, edit, delete, and fetch questions
- **Answers**: Answer questions, select best answers
- **Comments**: Comment on questions and answers
- **Attachments**: Add attachments to questions and answers
- **Notifications**: Receive notifications for important events


## 🏗️ Architecture

The project is structured following DDD principles:

```bash
src/
├── core/           # Core functionality, shared across domains
│   ├── entities/   # Base entity classes
│   ├── errors/     # Error handling
│   ├── events/     # Domain events
│   ├── repositories/
│   └── types/      # Shared type definitions
├── domain/
    ├── forum/      # Forum domain
    │   ├── application/
    │   │   ├── repositories/  # Repository interfaces
    │   │   ├── use-cases/     # Application use cases
    │   │   └── subscribers/   # Event subscribers
    │   └── enterprise/
    │       ├── entities/      # Domain entities
    │       └── events/        # Domain-specific events
    └── notification/          # Notification domain
        ├── application/
        └── enterprise/
```

## 🧩 Design Patterns Used

- **Event-driven**: Uses domain events for cross-domain communication
- **Error Handling**: Uses Either monad pattern for predictable error handling
- **Value Objects**: Implements concepts like Slug as value objects
- **Aggregates**: Uses aggregate roots (Question, Answer) to maintain consistency
- **Domain Events**: Implements a pub/sub system with domain events
- **Repository Pattern**: Abstracts data access behind repository interfaces
- **Clean Architecture**: Separates concerns into layers (enterprise, application)

## 🧠 What I Learned

Throughout this project, I gained extensive experience with:

- **Domain-Driven Design**: Applying DDD concepts including aggregates, entities, value objects, and domain events to model a complex problem domain
- **Clean Architecture**: Implementing a layered architecture that separates concerns and makes the system more maintainable
- **Test-Driven Development**: Writing tests first to guide the implementation and ensure code quality
- **Advanced TypeScript**: Using TypeScript's type system for safer code, including generics, discriminated unions, and utility types
- **Error Handling**: Implementing the Either monad pattern for predictable error handling without exceptions
- **Event-Driven Architecture**: Using domain events for decoupled communication between different parts of the system
- **In-Memory Repositories**: Creating in-memory implementations for testing and development
- **Factory Patterns**: Implementing factory methods and patterns for creating complex objects
- **Dependency Injection**: Applying DI principles to increase testability and reduce coupling
- **Advanced OOP Principles**: Applying encapsulation, inheritance, and polymorphism effectively
- **Repository Pattern**: Abstracting data access behind well-defined interfaces
- **Unit Testing**: Writing comprehensive tests using Vitest
- **Mocking and Spies**: Utilizing advanced testing techniques for verifying behavior

These skills have significantly improved my approach to building complex backend applications with clean, maintainable code.