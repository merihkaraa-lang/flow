# FLOW Landing Page

FLOW için hazırlanmış Türkçe statik tanıtım sayfası.

## Çalıştırma

Bu proje tamamen statik dosyalardan oluşur. Python bulunmayan bilgisayarlar için öncelikli yöntem Node.js kullanmaktır.

## Dosyaları İndirme

Bu projeyi yerel bilgisayarınıza almak için aşağıdaki yöntemlerden birini kullanabilirsiniz:

### 1) Git ile klonlama (önerilen)

```bash
git clone <repo_url>
cd flow
```

> İpucu: GitHub’da repo sayfasında **Code** (yeşil) düğmesine tıklayıp URL’yi kopyalayabilirsiniz.

### 2) ZIP olarak indirme (GitHub arayüzü)

1. GitHub repo sayfasında **Code** (yeşil) düğmesine tıklayın.
2. Açılan menüden **Download ZIP** seçeneğini seçin.
3. İnen ZIP dosyasını açın ve proje klasörüne girin.

> Not: ZIP ile indirdiğinizde `git` komutları çalışmaz; sadece dosyalar gelir.

### 3) Tarayıcıda doğrudan açma

`index.html` dosyasını çift tıklayarak açabilirsiniz.

> Not: Bazı tarayıcılar `file://` protokolünde JS davranışlarını sınırlayabilir. Bu durumda aşağıdaki yerel sunucu yöntemlerini kullanın.

### 4) Yerel sunucu (Node.js) — Önerilen

```bash
node serve.js 8000
```

> Not: `node -v` ile Node.js kurulu olduğunu kontrol edebilirsiniz.

Alternatif olarak çalıştırılabilir script:

```bash
./serve-node.sh 8000
```

### 5) Basit bir yerel sunucu (Python) — Opsiyonel

```bash
cd /workspace/flow
python3 -m http.server 8000
```

Eğer `python3` yoksa:

```bash
python -m http.server 8000
```

Alternatif olarak çalıştırılabilir script:

```bash
./serve.sh 8000
```

Ardından tarayıcıda `http://localhost:8000` adresini açın.

## Dosyalar

- `index.html`: İçerik ve sayfa yapısı
- `styles.css`: Görsel tasarım ve responsive düzen
- `app.js`: CTA butonları için yumuşak kaydırma
- `serve.sh`: Python ile hızlı servis scripti
- `serve-node.sh`: Node.js ile hızlı servis scripti (npx yöntemi)
- `serve.js`: Node.js ile bağımsız yerel sunucu (paket gerektirmez)
