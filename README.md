# 🥽 SENAC 360 - Plataforma WebVR Corporativa

**Uma plataforma de visitas virtuais imersivas para Meta Quest 3, Desktop e Mobile**

> Construída com Next.js, NestJS, MySQL, Prisma e Azure Cloud

## 📋 Visão Geral

SENAC 360 é uma solução empresarial que permite criar experiências de realidade virtual profissionais diretamente no navegador do Meta Quest 3, sem necessidade de instalar aplicativos nativos.

### ✨ Características Principais

- ✅ **Painel Administrativo** - Gerenciar filiais, tours e conteúdo
- ✅ **Upload de Fotos 360°** - Integração com Azure Blob Storage
- ✅ **Criação de Tours Virtuais** - Sequências guiadas de ambientes
- ✅ **Hotspots Interativos** - Vídeos, áudios, textos e navegação
- ✅ **Visualização em VR** - A-Frame + WebXR no Meta Quest 3
- ✅ **Compatibilidade Multi-plataforma** - VR Headset, Desktop, Mobile
- ✅ **Autenticação & Permissões** - Controle de acesso granular
- ✅ **Arquitetura Escalável** - Pronta para gamificação futura

## 🏗️ Arquitetura

```
┌─────────────────────────────────────────────────────────┐
│                    Meta Quest 3 Browser                 │
│           WebVR Viewer (A-Frame + WebXR)                │
└────────────────────┬────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────┐
│         Backend API (Node.js + NestJS)                  │
│  ├─ Auth Service      ├─ Tour Service                   │
│  ├─ User Service      ├─ Hotspot Service                │
│  ├─ Branch Service    └─ Media Service                  │
│  └─ Environment Service                                 │
└────────────────────┬────────────────────────────────────┘
                     │
         ┌───────────┼───────────┐
         ↓           ↓           ↓
    ┌─────────┐ ┌──────────┐ ┌────────────┐
    │  MySQL  │ │ Prisma   │ │ Azure Blob │
    │Database │ │   ORM    │ │ Storage    │
    └─────────┘ └──────────┘ └────────────┘
         ↑
         │
┌────────┴──────────────────────────────────────────────┐
│    Admin Panel (Next.js + React + Tailwind CSS)       │
│  ├─ Dashboard          ├─ Branches Management          │
│  ├─ Environments       ├─ Tours Management             │
│  ├─ Media Upload       └─ Hotspots Editor              │
└─────────────────────────────────────────────────────────┘
```

## 📁 Estrutura de Pastas

```
senac360/
├── backend/                    # API NestJS
│   ├── src/
│   │   ├── auth/              # Autenticação JWT
│   │   ├── users/             # Gerenciamento de usuários
│   │   ├── branches/          # Filiais
│   │   ├── environments/      # Ambientes/Setores
│   │   ├── tours/             # Tours virtuais
│   │   ├── hotspots/          # Hotspots interativos
│   │   ├── media/             # Upload de mídia
│   │   ├── common/            # Decorators, Guards, etc
│   │   ├── prisma/            # ORM Prisma
│   │   └── main.ts            # Entry point
│   ├── prisma/
│   │   ├── schema.prisma      # Schema do banco
│   │   └── migrations/        # Migrações
│   ├── .env
│   ├── package.json
│   └── Dockerfile
│
├── frontend/                   # Admin Panel Next.js
│   ├── src/
│   │   ├── app/               # Rotas e layouts
│   │   ├── components/        # React components
│   │   ├── hooks/             # Custom hooks
│   │   ├── lib/               # Utilitários
│   │   ├── context/           # Context API
│   │   ├── styles/            # CSS global
│   │   └── types/             # TypeScript types
│   ├── public/
│   ├── .env.local
│   ├── package.json
│   └── Dockerfile
│
├── vr-viewer/                 # WebVR A-Frame (Opcional)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── docker-compose.yml         # Orquestração local
├── .env.example              # Template de variáveis
├── .gitignore
└── README.md                 # Este arquivo
```

## 🚀 Stack Tecnológico

### Frontend
- **Next.js 14** - Framework React
- **React 18** - UI Library
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utility-first
- **Axios** - Cliente HTTP

### WebVR
- **A-Frame 1.4** - Framework WebVR
- **Three.js** - Renderização 3D
- **WebXR API** - Suporte a headsets VR

### Backend
- **Node.js 20 LTS** - Runtime
- **NestJS** - Framework modular
- **Prisma** - ORM type-safe
- **JWT** - Autenticação

### Banco de Dados
- **MySQL 8.0** - SGBD Relacional
- **Prisma Migrations** - Versionamento

### Cloud
- **Microsoft Azure** - Hospedagem
- **Azure Blob Storage** - Armazenamento de mídia
- **Azure App Service** - Backend
- **Azure Static Web Apps** - Frontend

### DevOps
- **Docker** - Containerização
- **Docker Compose** - Orquestração local

## 📋 Pré-requisitos

### Software Necessário
- ✅ Node.js 20 LTS ([download](https://nodejs.org/))
- ✅ Git ([download](https://git-scm.com/))
- ✅ VS Code ([download](https://code.visualstudio.com/))
- ✅ Docker Desktop ([download](https://www.docker.com/products/docker-desktop))
- ✅ MySQL 8.0 ([download](https://www.mysql.com/downloads/))

### Contas Necessárias
- ✅ GitHub ([criar conta](https://github.com/signup))
- ✅ Microsoft Azure ([criar conta free](https://azure.microsoft.com/pt-br/free/))

### Extensões VS Code Recomendadas
```
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prisma
- Thunder Client
- Docker
- Azure Tools
```

## ⚡ Quick Start (5 minutos)

### 1. Clone o Repositório
```bash
git clone https://github.com/nandohvisk/senac360.git
cd senac360
```

### 2. Configure o Backend
```bash
cd backend
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run start:dev
```

### 3. Configure o Frontend
```bash
cd ../frontend
cp .env.example .env.local
npm install
npm run dev
```

### 4. Acesse
- **Admin Panel**: http://localhost:3000
- **API**: http://localhost:3333/api

## 📚 Documentação

- **[SETUP.md](./SETUP.md)** - Guia completo de instalação
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Detalhes técnicos
- **[DATABASE.md](./DATABASE.md)** - Schema e migrações
- **[API.md](./API.md)** - Endpoints da API
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deploy no Azure

## 🎯 Roadmap

### MVP (Fase 1) ✅ Atual
- [x] Estrutura do projeto
- [ ] Backend com APIs REST
- [ ] Banco de dados
- [ ] Frontend Admin
- [ ] WebVR Viewer
- [ ] Upload Azure
- [ ] Autenticação
- [ ] Docker

### Fase 2 - Gamificação
- [ ] Sistema de pontos
- [ ] Quizzes e ranking
- [ ] Analytics avançado
- [ ] Integração IA

### Fase 3 - Expansão
- [ ] App nativo React Native
- [ ] Multiplayer
- [ ] Certificações
- [ ] Marketplace

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

MIT License - veja [LICENSE](./LICENSE) para detalhes

## 👨‍💻 Autor

**Nando Hvisk**
- GitHub: [@nandohvisk](https://github.com/nandohvisk)
- Data: 2026-05-13

## 📞 Suporte

- 📧 GitHub Issues: [Abra uma issue](https://github.com/nandohvisk/senac360/issues)
- 💬 Discussões: [GitHub Discussions](https://github.com/nandohvisk/senac360/discussions)

---

**Versão:** 1.0.0-MVP  
**Status:** 🚧 Em desenvolvimento  
**Última atualização:** 2026-05-13
