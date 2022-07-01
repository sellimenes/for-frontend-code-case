# For Frontend Code Case

🔷 Selim Enes Erdogan

🔷 07.01.2022

🔷 Demo: https://for-frontend-code-case-oca3awbie-sellimenes.vercel.app/

![image](https://user-images.githubusercontent.com/23125375/176843241-7b0d721f-475b-4e72-94c8-2956e0a1b046.png)

🔷 Kullanılan paketler:
- React Helmet (Dinamik başlık için)
- React Router (Sayfa geçişleri için)
- React Paginate (Sayfa işlemleri için)
 
🔷 Kullanılan Hooklar:
- useState
- useEffect
---
### _Kurallar_
- Framework olarak Next.js kullanılmalı.
- React Hooks kullanılarak hazırlanmalıdır.
- Proje GitHub veya Bitbucket'ta public bir repo olarak paylaşılmalı.
- Projenin temel özellikleri çalışır olmalı.
- Responsive olarak tüm ekranlarda uygun görünümlü olması.
### _Beklenenler_
https://rickandmortyapi.com/ adresinde detaylarına erişebileceğin API’yi kullanarak bir Next.js Uygulaması
geliştirmeni bekliyoruz. (Dilediğin bir UI kütüphanesi kullanabilirsin)
## Temel Özellikler
  - ### _Giriş Sayfası_
    - İlgili api kullanılarak ilk 20 karakterlerin bu sayfada listelenmesi sağlanacak (Görsel, title vb.).
    - Sayfada pagination yapısı olarak apiden diğer sayfalar çekilerek listelenecek.
    (https://rickandmortyapi.com/api/character?page=1)
    - Bir karaktere tıklandığında o karakterin detay sayfasına ulaşabilecek.

  - ### _Karakter Detay Sayfası_
    - İlgili karakter apiden çekilerek detay sayfasında temel bilgileri listelenecek.
    - Sayfanın <title> bilgisi karakter başlığı olarak gelecek.
    
   - ### _İsteğe Bağlı Ekstra Özellikler_
        - Giriş Sayfasında listelenen karakterlerin virtual scroll kullanılarak sayfalamasının yapılması. Sayfanın
sonuna scroll ile gelindiğinde diğer sayfanın içeriklerinin otomatik olarak çekilmesi ve sayfa sonuna
eklenmesi.
        - Detay sayfasının Server Side Rendering ile dinamik çalışır olması.
    
