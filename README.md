# React PostsApp (JSONPlaceholder)

Basit bir React post çekme uygulaması. `https://jsonplaceholder.typicode.com/posts` ve `https://jsonplaceholder.typicode.com/users` linklerinden verileri çeker, postları ilgili kullanıcı bilgisiyle birlikte listeler.

## Nasıl Çalıştırılır

```bash
npm install
npm start
```

Geliştirme sunucusu açıldığında tarayıcıdan `http://localhost:4321` adresine gidin.

## Üretim Derlemesi

```bash
npm run build
```

`build/` klasörü altında optimize edilmiş prod derleme oluşur.

## Kısa Teknik Notlar

- Ek kütüphane yok; sadece React ve tarayıcı `fetch` API’si.
- `Posts.js` içinde tek bir `useEffect` ile iki istek paralel alınır ve `userId`–`id` üzerinden eşleştirilir.
- Basit ve okunaklı bir grid görünümü için küçük CSS düzeni (`Posts.css`).

## API

- Posts: `GET https://jsonplaceholder.typicode.com/posts`
- Users: `GET https://jsonplaceholder.typicode.com/users`

## Lisans

Kişisel amaçlı örnek proje.
