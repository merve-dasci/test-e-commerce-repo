# 🛒 E-Commerce Project

Modern ve tam özellikli bir e-ticaret web uygulaması. React, Redux ve TailwindCSS ile geliştirilmiştir.

![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-5.0-764ABC?logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-TR%20%7C%20EN-green?logo=google-translate&logoColor=white)

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

### 🌐 Internationalization (i18n)
- ✅ **Çoklu dil desteği** (Türkçe 🇹🇷 / English 🇺🇸)
- ✅ Tarayıcı dilini otomatik algılama
- ✅ LocalStorage'da dil tercihi saklama
- ✅ 200+ çeviri anahtarı
- ✅ Anlık dil değişimi (sayfa yenilemeden)

### ⚡ Performans
- ✅ Lazy loading (Code splitting)
- ✅ Optimized images
- ✅ API caching

### 🔐 Environment Variables
- ✅ `.env` ile güvenli konfigürasyon
- ✅ API URL'leri environment'tan okunur
- ✅ Hassas bilgiler Git'e yüklenmez
- ✅ `.env.example` ile kolay kurulum

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
| **Internationalization** | react-i18next, i18next |
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
│   ├── LanguageSwitcher.jsx  # Dil değiştirici (i18n)
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
├── locales/          # Çeviri dosyaları (i18n)
│   ├── en/           # İngilizce çeviriler
│   │   └── translation.json
│   └── tr/           # Türkçe çeviriler
│       └── translation.json
├── utils/            # Utility fonksiyonlar
├── App.jsx           # Ana uygulama bileşeni
├── i18n.js           # i18n konfigürasyonu
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

3. **Environment variables ayarlayın**
```bash
# .env.example dosyasını kopyalayın
cp .env.example .env

# .env dosyasını düzenleyin (gerekirse)
```

4. **Development sunucusunu başlatın**
```bash
npm run dev
```

5. **Tarayıcıda açın**
```
http://localhost:5173
```

## 🔐 Environment Variables

Proje güvenli konfigürasyon için `.env` dosyası kullanmaktadır.

### Kurulum

1. `.env.example` dosyasını `.env` olarak kopyalayın
2. Gerekli değişkenleri doldurun

### Değişkenler

| Değişken | Açıklama | Varsayılan |
|----------|----------|------------|
| `VITE_API_BASE_URL` | API base URL | `https://workintech-fe-ecommerce.onrender.com` |
| `VITE_API_TIMEOUT` | API timeout (ms) | `10000` |
| `VITE_GEMINI_API_KEY` | Google Gemini API Key | - |
| `VITE_APP_NAME` | Uygulama adı | `Bandage E-Commerce` |

> ⚠️ **Önemli:** `.env` dosyası Git'e yüklenmez. Hassas bilgilerinizi güvende tutar.

### Vercel Deployment

Vercel'e deploy ederken, environment variables'ları Vercel Dashboard'dan ekleyin:
1. Project Settings → Environment Variables
2. Her değişkeni ekleyin

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
- Environment variables ile güvenli konfigürasyon
- Hassas bilgiler `.gitignore` ile korunur

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

## 🌐 Internationalization (i18n)

Proje **react-i18next** ile çoklu dil desteği sunmaktadır.

### Desteklenen Diller
- 🇹🇷 Türkçe (tr)
- 🇺🇸 English (en)

### Özellikler
- **Otomatik Dil Algılama:** Tarayıcı dilini otomatik algılar
- **Dil Değiştirici:** Header'da bayraklı dropdown menü
- **Kalıcı Tercih:** Kullanıcı tercihi localStorage'da saklanır
- **Anlık Değişim:** Sayfa yenilemeden dil değişir

### Kullanım

```jsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return <h1>{t('nav.home')}</h1>; // "Home" veya "Ana Sayfa"
};
```

### Çeviri Dosyaları
```
src/locales/
├── en/
│   └── translation.json  # İngilizce çeviriler
└── tr/
    └── translation.json  # Türkçe çeviriler
```

### Yeni Çeviri Ekleme
1. `src/locales/en/translation.json` dosyasına İngilizce metni ekleyin
2. `src/locales/tr/translation.json` dosyasına Türkçe çeviriyi ekleyin
3. Komponente `t('key.name')` ile kullanın

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



## 🌐 Live Demo
[Canlı Siteyi Görüntüle](https://e-commerce-project-final.vercel.app)

##  Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
