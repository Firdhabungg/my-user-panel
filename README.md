# User Dashboard SPA

Aplikasi Single Page Application (SPA) sederhana untuk menampilkan daftar pengguna yang datanya diambil dari public API (JSONPlaceholder). Proyek ini dibangun sebagai bagian dari Take-Home Test Frontend Developer.

## Fitur
- **Daftar Pengguna**: Menampilkan user dalam bentuk grid card.
- **Pencarian Realtime**: Fitur filter pengguna berdasarkan nama dan email (Client-side).
- **Detail Pengguna**: Menampilkan informasi lengkap pengguna pada halaman terpisah.
- **Handling**: Mengelola state loading saat data dimuat dan error handling jika API gagal.

## Teknologi yang Digunakan
- React.js (Vite)
- Tailwind CSS
- React Router (untuk navigasi)
- React Use (untuk hooks utilitas)

## Cara Menjalankan Proyek Secara Lokal
1. Clone repositori ini.
2. Buka terminal di folder proyek dan jalankan `npm install` untuk mengunduh dependencies.
3. Buat file `.env` dan tambahkan baris ini: `VITE_API_PATH=https://jsonplaceholder.typicode.com/`.
4. Jalankan server lokal dengan perintah `npm run dev`.
5. Buka browser pada URL yang diberikan (biasanya `http://localhost:5173`).

---

## Jawaban Pertanyaan Pemahaman (Take-Home Test)

### 1. State Management & Lifecycle
**Bagaimana cara Anda melakukan fetching data di React? Jika Anda menggunakan useEffect, jelaskan bagaimana cara Anda mencegah terjadinya memory leak atau pemanggilan API berulang (infinite loop).**

**Jawaban:**
Pengambilan data (fetching) dilakukan menggunakan fungsi asinkron (melalui API `fetch`) di dalam *React Hooks*. Pada aplikasi ini, saya menggunakan hook `useEffectOnce` (dari library `react-use`), yang secara konsep ekuivalen dengan `useEffect` dengan *dependency array* kosong `[]`.
- **Mencegah Infinite Loop:** Penggunaan *dependency array* kosong (`[]`) pada argumen kedua `useEffect` akan menginstruksikan React agar fungsi *fetch* tersebut hanya dijalankan **satu kali saja** saat komponen pertama kali dipasang (di-*mount*). Jika tidak ada kurung siku tersebut, komponen akan terus me-render ulang setiap kali state diperbarui, dan kembali melakukan *fetch* berulang kali tanpa henti.
- **Mencegah Memory Leak:** Jika komponen di-*unmount* (misal: user pindah halaman) saat proses *fetching* belum selesai, mencoba men-*set state* (memanggil `setUsers`) akan menyebabkan memory leak. Praktik terbaik untuk mencegah ini adalah dengan menyediakan fungsi pembersihan (*cleanup function*) di dalam `useEffect` dengan menggunakan `AbortController` untuk membatalkan permintaan API, atau setidaknya membuat sebuah variabel *flag* boolean `isMounted` untuk mengecek apakah komponen masih ada sebelum men-set state.

### 2. Struktur Folder
**Mengapa Anda menstrukturisasi folder/file seperti yang ada di project Anda saat ini? Jelaskan alasannya.**

**Jawaban:**
Saya membuat struktur folder project di dalam folder `src/` dengan memisahkan berkas berdasarkan tanggung jawab utamanya (*Separation of Concerns*):
- `components/`: Khusus berisi komponen UI yang bisa digunakan berulang-ulang (*reusable*), seperti kerangka antarmuka (`App.jsx`), kartu pengguna (`UserCard.jsx`).
- `pages/`: Berisi komponen yang bertindak sebagai "Halaman" utama (seperti `Dashboard.jsx`) dan `Detail User`. Halaman ini bertugas mengelola logika utama, *state*, dan menggabungkan banyak komponen kecil menjadi satu tampilan utuh.
- `services/`: Tempat menyimpan logika yang berinteraksi dengan pihak eksternal, contohnya `api.js` untuk melakukan *fetch data* ke *backend*/pihak ketiga.

**Alasan Utama:** Struktur ini membuat *source code* jauh lebih mudah untuk dibaca dan dinavigasikan, kode tidak tumpang tindih (*clean code*), memudahkan pemecahan *bug* (mudah mengisolasi error), dan arsitektur aplikasi ini bisa dengan mudah diperbesar (*scalable*) seiring bertambahnya fitur aplikasi di masa mendatang.

### 3. Optimasi Kinerja (Performance)
**Anggaplah API tiba-tiba mengembalikan 10.000 data user sekaligus dan membuat aplikasi lag saat diketik di kolom pencarian. Pendekatan apa (fitur React apa) yang akan Anda gunakan untuk mengatasi lag tersebut?**

**Jawaban:**
Jika saya harus merender dan memfilter 10.000 data sekaligus, ada dua area penting yang akan menyebabkan *lag* yang parah dan saya akan menyelesaikannya dengan dua teknik utama:
1. **Mengatasi Lag Input dengan *Debouncing*:** 
   Setiap kali pengguna mengetik 1 huruf, *state* berubah dan React langsung mencoba memfilter 10.000 data dan me-render ulang. Ini sangat memakan CPU. Saya akan mengatasinya dengan menggunakan teknik **Debounce** pada *input search*. Dengan menggunakan teknik debounce, eksekusi algoritma filter dan perubahan UI hanya akan dijalankan **setelah** pengguna berhenti mengetik selama sekian milidetik (misalnya 300-500ms).
2. **Mengatasi Lag Render dengan *Virtualization/Windowing*:**
   Browser (Chrome/Safari) tidak sanggup merender 10.000 tag HTML secara bersamaan di layar (akan menyebabkan aplikasi *freeze* atau *crash*). Saya akan menggunakan pustaka React seperti `react-window` atau `react-virtualized`. Teknik "Virtualisasi" ini hanya akan me-render komponen Card yang **benar-benar sedang dilihat di dalam kotak layar pengguna (viewport)** (mungkin hanya 10 atau 20 data). Sisa ribuan data lainnya hanya akan dirender secara dinamis ketika pengguna melakukan *scroll* ke bawah. Ini membuat 10.000 data terasa seringan 10 data. Opsi alternatif yang lebih sederhana adalah menerapkan Pagination (penomoran halaman).
