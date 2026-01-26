# 🛒 E-Commerce Project

Modern ve tam özellikli bir e-ticaret web uygulaması. React, Redux ve TailwindCSS ile geliştirilmiştir.

![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-5.0-764ABC?logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite&logoColor=white)

## 🌟 Özellikler

### 🛍️ Alışveriş
- ✅ Ürün listeleme ve filtreleme
- ✅ Kategori bazlı ürün görüntüleme
- ✅ Ürün arama fonksiyonu
- ✅ Ürün detay sayfası
- ✅ Sepet yönetimi (ekleme, çıkarma, miktar güncelleme)
- ✅ Favorilere ekleme sistemi

### 👤 Kullanıcı İşlemleri
- ✅ Kullanıcı kayıt (Customer/Store)
- ✅ Kullanıcı girişi
- ✅ Token tabanlı kimlik doğrulama
- ✅ Korumalı rotalar
- ✅ Adres yönetimi
- ✅ Kredi kartı yönetimi

### 🛒 Sipariş İşlemleri
- ✅ Sipariş oluşturma
- ✅ Sipariş geçmişi görüntüleme
- ✅ Sipariş durumu takibi

### 🎨 UI/UX
- ✅ **Dark/Light Mode** desteği
- ✅ Tam responsive tasarım (Mobile-first)
- ✅ Modern ve kullanıcı dostu arayüz
- ✅ Toast bildirimleri
- ✅ Loading skeleton'lar
- ✅ Smooth animasyonlar

### ⚡ Performans
- ✅ Lazy loading (Code splitting)
- ✅ Optimized images
- ✅ API caching

### 🧪 Test
- ✅ Unit testleri (Vitest + React Testing Library)
- ✅ Component testleri
- ✅ Redux reducer testleri
- ✅ E2E testleri (Cypress)
- ✅ %85+ code coverage

## 🛠️ Teknolojiler

| Kategori | Teknoloji |
|----------|-----------|
| **Frontend** | React 19, JSX |
| **State Management** | Redux, Redux Thunk |
| **Routing** | React Router v5 |
| **Styling** | TailwindCSS 3.4 |
| **HTTP Client** | Axios |
| **Form Handling** | React Hook Form |
| **Icons** | Lucide React |
| **Notifications** | React Toastify |
| **Build Tool** | Vite |
| **Unit Testing** | Vitest, React Testing Library |
| **E2E Testing** | Cypress |

##  Proje Yapısı

```
src/
├── api/              # API client ve endpoint tanımları
├── assets/           # Static dosyalar (images, fonts)
├── components/       # Yeniden kullanılabilir UI bileşenleri
│   ├── Categories.jsx
│   ├── ErrorBoundary.jsx
│   ├── LoadingSpinner.jsx
│   ├── ProductCard.jsx
│   ├── ProtectedRoute.jsx
│   ├── Skeleton.jsx
│   └── ThemeToggle.jsx
├── context/          # React Context (Theme)
├── data/             # Static data (cities, etc.)
├── layout/           # Layout bileşenleri
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── PageContent.jsx
├── pages/            # Sayfa bileşenleri
│   ├── HomePage.jsx
│   ├── Shop.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Favorites.jsx
│   ├── Login.jsx
│   ├── SignUp.jsx
│   ├── CreateOrder.jsx
│   ├── Orders.jsx
│   └── ...
├── store/            # Redux store
│   ├── actions/      # Action creators
│   ├── reducers/     # Reducers
│   └── index.js      # Store configuration
├── utils/            # Utility fonksiyonlar
├── App.jsx           # Ana uygulama bileşeni
├── main.jsx          # Entry point
└── index.css         # Global stiller
```

##  Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/merve-dasci/test-e-commerce-repo.git
cd e-commerce-project
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Development sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:5173
```

##  Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Development sunucusunu başlatır |
| `npm run build` | Production build oluşturur |
| `npm run preview` | Production build'i önizler |
| `npm run lint` | ESLint ile kod kontrolü yapar |

##  API

Proje [Workintech E-Commerce API](https://workintech-fe-ecommerce.onrender.com) kullanmaktadır.

### Temel Endpoints
- `POST /signup` - Kullanıcı kaydı
- `POST /login` - Kullanıcı girişi
- `GET /products` - Ürün listesi
- `GET /categories` - Kategoriler
- `GET /order` - Siparişler
- `POST /order` - Sipariş oluştur

##  Ekran Görüntüleri

### Ana Sayfa
- Hero slider
- Kategori kartları
- Öne çıkan ürünler
- Blog yazıları

### Ürün Listesi
- Grid/Liste görünümü
- Filtreleme (kategori, fiyat)
- Sıralama
- Arama

### Sepet
- Ürün listesi
- Miktar kontrolü
- Fiyat özeti
- Sipariş butonu

##  Güvenlik Özellikleri

- Token tabanlı authentication
- Protected routes
- API interceptors
- Form validation

##  Responsive Tasarım

Uygulama tüm cihazlarda sorunsuz çalışır:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

##  Dark Mode

Kullanıcı tercihine göre otomatik veya manuel tema değişimi:
- Sistem temasını algılama
- localStorage'da tercih saklama
- Smooth geçiş animasyonları

##  Test

Projede Vitest, React Testing Library ve Cypress ile kapsamlı unit, integration ve E2E testler bulunmaktadır.

### Unit & Integration Testleri

```bash
# Testleri çalıştır
npm test

# Watch modunda test
npm run test

# Coverage raporu
npm run test:coverage
```

**Test Kapsamı:**
- **Component Testleri**: ProductCard, ThemeToggle, ErrorBoundary
- **Redux Testleri**: shoppingCartReducer, productReducer
- **Coverage**: %85+

### E2E Testleri (Cypress)

```bash
# Cypress'i aç (interaktif mod)
npx cypress open

# Headless modda testleri çalıştır
npx cypress run
```

**E2E Test Senaryoları:**
- **Homepage**: Sayfa yükleme, navigasyon, dark mode toggle
- **Authentication**: Login, signup, form validation, protected routes
- **Shopping Cart**: Ürün ekleme, sepet işlemleri
- **Favorites**: Favori ekleme/çıkarma, localStorage persistence

##  Geliştirici

**Merve Daşcı**

- GitHub: [@merve-dasci](https://github.com/merve-dasci)

##  Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
