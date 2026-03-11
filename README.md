# 🍔 MERN Food Ordering App

A full-stack food ordering web application built with the MERN stack (MongoDB, Express, React, Node.js), featuring Auth0 authentication, Stripe payments, and end-to-end deployment on Render.



---

## ✨ Features

### 👤 User
- Auth0-based login / registration (Google OAuth supported)
- Profile management: name, address, city, country
- Search restaurants by city, cuisine, or name
- Sort results by best match, delivery time, or price
- Add items to cart and place orders via Stripe Checkout
- Real-time order status tracking with estimated delivery time

### 🍽️ Restaurant Owner
- Create and manage restaurant profile (name, location, cuisines, delivery info)
- Upload restaurant cover image
- Add / edit menu items with prices
- View incoming orders and update their status

---

## 🛠️ Tech Stack

### Frontend
| Tool | Purpose |
|------|---------|
| React + TypeScript | UI framework |
| Vite | Build tool |
| Tailwind CSS + shadcn/ui | Styling & component library |
| React Hook Form + Zod | Form management & validation |
| React Query | Server state management |
| Auth0 React SDK | Authentication |

### Backend
| Tool | Purpose |
|------|---------|
| Node.js + Express | REST API server |
| TypeScript | Type safety |
| Mongoose + MongoDB Atlas | Database ORM & hosting |
| Auth0 (JWT) | Auth middleware |
| Stripe | Payment processing |
| Cloudinary | Image upload & storage |
| Multer | File handling middleware |

### Deployment
| Service | Role |
|---------|------|
| Render | Backend hosting |
| Render / Vercel | Frontend hosting |
| MongoDB Atlas | Cloud database |

---

## 📁 Project Structure

```
/
├── frontend/          # React + Vite app
│   ├── src/
│   │   ├── api/       # API request hooks (React Query)
│   │   ├── components/
│   │   ├── forms/     # ManageRestaurantForm, UserProfileForm
│   │   ├── pages/
│   │   └── types/
│   └── ...
│
└── backend/           # Express + TypeScript API
    ├── src/
    │   ├── controllers/
    │   ├── middleware/  # Auth0 JWT verification
    │   ├── models/      # Mongoose schemas
    │   ├── routes/
    │   └── index.ts
    └── ...
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Auth0 account
- Stripe account
- Cloudinary account

### 1. Clone the repo

```bash
git clone https://github.com/MaierCheng/MERN-FOOD-ORDERING-APP.git
cd MERN-FOOD-ORDERING-APP
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```env
MONGODB_CONNECTION_STRING=your_mongodb_atlas_uri
AUTH0_AUDIENCE=your_auth0_api_audience
AUTH0_ISSUER_BASE_URL=https://your-tenant.auth0.com/

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

STRIPE_API_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

FRONTEND_URL=http://localhost:5173
```

Start the backend:

```bash
npm run dev
```

### 3. Frontend setup

```bash
cd frontend
npm install
```

Create a `.env` file in `/frontend`:

```env
VITE_API_BASE_URL=http://localhost:7000
VITE_AUTH0_DOMAIN=your-tenant.auth0.com
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
VITE_AUTH0_CALLBACK_URL=http://localhost:5173
VITE_AUTH0_AUDIENCE=your_auth0_api_audience
```

Start the frontend:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deployment

### Backend → Render
1. Push backend code to GitHub
2. Create a new **Web Service** on [Render](https://render.com)
3. Set build command: `npm install && npm run build`
4. Set start command: `npm start`
5. Add all `.env` variables in the Render dashboard
6. **MongoDB Atlas**: whitelist Render's outbound IP ranges (or use `0.0.0.0/0` for dev)

### Frontend → Render / Vercel
1. Set `VITE_API_BASE_URL` to your deployed backend URL
2. Deploy the `frontend/` directory

---

## 📸 Screenshots

> Add screenshots here after deployment — e.g., homepage, restaurant search, checkout page, manage restaurant form.

```
![Homepage](./screenshots/homepage.png)
![Restaurant Search](./screenshots/search.png)
![Checkout](./screenshots/checkout.png)
![Manage Restaurant](./screenshots/manage-restaurant.png)
```

---

## 📝 Key Learnings

- Integrating **Auth0** with both Client Access (M2M) and User Access in the same app
- Using **`z.coerce` + `react-hook-form`** with the three-generic `useForm<Input, unknown, Output>` pattern for type-safe form coercion
- Configuring **Mongoose** schemas with proper field validation and debugging via server-side logs
- Handling **TypeScript** build errors on deployment (unused imports, strict tsconfig)
- Setting `process.env.PORT` dynamically for Render hosting

