# BEESMRT Game Platform 🎮

A modern web-based educational game platform built with TypeScript, Hono, and MySQL. BEESMRT offers various interactive games designed to enhance learning through gamification.

## 🚀 Features

- **Multiple Game Types**:
  - Drag & Drop games
  - Hangman
  - Memory games
- **User Authentication**: Secure user management with Better Auth
- **Level Progression**: Configurable difficulty levels for each game
- **Game Logging**: Track player progress and performance
- **RESTful API**: Built with Hono framework for fast and lightweight API
- **Database Integration**: MySQL with Drizzle ORM for type-safe database operations

## 🛠️ Tech Stack

- **Runtime**: Bun
- **Framework**: Hono
- **Database**: MySQL
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **Validation**: Zod
- **Code Quality**: Biome
- **Containerization**: Docker & Docker Compose

## 📋 Prerequisites

- [Bun](https://bun.sh/) (latest version)
- [Docker](https://www.docker.com/) and Docker Compose
- MySQL 9.3.0 or compatible

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd my-app
```

### 2. Install Dependencies
```bash
bun install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
DATABASE_URL=mysql://username:password@localhost:3306/beesmrt
PORT=3000
ORIGIN=http://localhost:3000
DBUSER=your_db_user
DBPASS=your_db_password
DBNAME=beesmrt
DBPORT=3306
BDROOTPASS=your_root_password
```

### 4. Start the Database
```bash
# Development environment
docker-compose -f docker-compose.dev.yaml up -d

# Production environment
docker-compose -f docker-compose.prod.yaml up -d
```

### 5. Run Database Migrations
```bash
bunx drizzle-kit push
```

### 6. Start the Development Server
```bash
bun run dev
```

The application will be available at `http://localhost:3000`

## 🗄️ Database Schema

The application uses the following main entities:

- **Users**: User authentication and profile information
- **Games**: Different game types (drag & drop, hangman, memory)
- **Available Levels**: Configurable game difficulty levels
- **Game Logs**: Player progress and performance tracking

## 🎮 Game Modules

### Drag & Drop Games
Interactive drag and drop challenges for enhanced learning engagement.

### Hangman
Classic word-guessing game with educational content.

### Memory Games
Memory enhancement games with various difficulty levels.

## 🔧 Development Commands

```bash
# Start development server with hot reload
bun run dev

# Run database migrations
bunx drizzle-kit push

# Generate database migrations
bunx drizzle-kit generate

# Code formatting and linting
bunx biome check
bunx biome check --apply
```

## 🐳 Docker Support

### Development
```bash
docker-compose -f docker-compose.dev.yaml up -d
```

### Production
```bash
docker-compose -f docker-compose.prod.yaml up -d
```

## 📁 Project Structure

```
my-app/
├── src/
│   ├── config/           # Configuration files and schemas
│   ├── modules/          # Feature modules
│   │   ├── auth/         # Authentication module
│   │   └── games/        # Game modules
│   ├── presentation/     # API routes and server setup
│   ├── utils/           # Utility functions
│   ├── validators/      # Input validation schemas
│   └── errors/          # Error handling
├── init/                # Database initialization scripts
├── migrations/          # Drizzle database migrations
└── docker-compose.*.yaml # Docker configuration
```

## 🧪 Testing

```bash
# Run tests (when implemented)
bun test
```

## 🚀 Deployment

### Production Build
```bash
# Build the application
bun run build

# Start production server
bun start
```

### Docker Deployment
```bash
# Build and run production containers
docker-compose -f docker-compose.prod.yaml up -d --build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

This project uses Biome for code formatting and linting. Run the following commands to maintain code quality:

```bash
bunx biome check
bunx biome check --apply
```

## 🔒 Security

- Secure authentication with Better Auth
- Input validation using Zod schemas
- Environment-based configuration
- Docker containerization for consistent deployments

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports

If you encounter any bugs or issues, please create an issue in the GitHub repository with:
- A clear description of the problem
- Steps to reproduce the issue
- Expected behavior
- Screenshots (if applicable)

## 📧 Support

For support and questions, please create an issue in the GitHub repository.

---

**Happy Gaming! 🎮**
