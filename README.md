# MegaBlog

A modern full-stack blogging platform built with React, Vite, Redux, and Appwrite.

## Features
- User authentication (signup, login, logout)
- Create, edit, delete, and view blog posts
- Rich text editor for posts (TinyMCE)
- Image upload and preview
- Public and private post access
- Responsive UI with Tailwind CSS

## Tech Stack
- **Frontend:** React, Vite, Redux, Tailwind CSS
- **Backend:** Appwrite (Auth, Database, Storage)

## Getting Started

### Prerequisites
- Node.js & npm
- Appwrite instance (cloud or self-hosted)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/SaxenaPrashast/Blog-App.git
   cd Blog-App
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Copy `.env.sample` to `.env` and fill in your Appwrite credentials.

### Running Locally
```sh
npm run dev
```

### Appwrite Setup
- Create a project in Appwrite.
- Add Database, Collection, and Storage Bucket.
- Set permissions for users and guests as needed.
- Update your `.env` file with the correct IDs and endpoint.

## Folder Structure
```
src/
  appwrite/        # Appwrite service logic
  components/      # Reusable UI components
  pages/           # Route pages
  store/           # Redux store and slices
  conf/            # Configuration files
  assets/          # Static assets
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
