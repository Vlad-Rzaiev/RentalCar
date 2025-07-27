# 🚗 RentalCar

**RentalCar** is a frontend web application for a car rental service. It allows users to browse available vehicles, filter listings, view car details, and submit a booking request via a form.

### 🔗 Live Demo

👉 [rental-car-five-tau.vercel.app](https://rental-car-five-tau.vercel.app)

---

## 🌟 Features

- Home page with banner and call-to-action
- Vehicle catalog with filtering options:
  - Brand (single selection)
  - Price per hour (single selection)
  - Mileage range (from/to)
- "Load More" pagination (server-side)
- Favorites list (persisted in `localStorage`)
- Vehicle detail page with full description
- Booking form with validation and success toast
- Mileage formatting with spacing (e.g., `5 000 km`)
- Real-time loading indicators during async operations

---

## 📄 Pages & Routes

| Page            | Route          |
| --------------- | -------------- |
| Home            | `/`            |
| Catalog         | `/catalog`     |
| Vehicle Details | `/catalog/:id` |

---

## ⚙️ Tech Stack

- React + Redux Toolkit
- React Router
- Axios for API requests
- Formik + Yup for forms and validation
- CSS Modules for styling
- React Hot Toast for notifications
- React Spinners for loaders

API used: [car-rental-api.goit.global](https://car-rental-api.goit.global/api-docs/)

---

## 🚀 Installation

```bash
git clone https://github.com/Vlad-Rzaiev/rental-car.git
cd rental-car
npm install
npm run dev

👨‍💻 Author
Vladyslav Rzaiev

GitHub: github.com/Vlad-Rzaiev

LinkedIn: linkedin.com/in/vladyslav-rzaiev

Email: vlad.rzaev@gmail.com
```
