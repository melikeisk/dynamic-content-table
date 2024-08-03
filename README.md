# DOM Manipulation Example

Bu proje, DOM (Document Object Model) manipülasyonunu öğrenmek amacıyla geliştirilmiştir. 

## Proje Tanımı

Bu proje, HTML ve JavaScript kullanarak bir web sayfasında tabloyu dinamik olarak güncellemek ve düzenlemek için bir arayüz sağlar. Kullanıcılar tabloya yeni satırlar ekleyebilir, mevcut satırları silebilir, belirli hücrelerin arka plan rengini değiştirebilir ve sayfadaki div ve paragraf içeriklerini güncelleyebilir.

## Özellikler

- Div içeriğini güncelleme
- Paragraf içeriğini güncelleme
- Tablo hücresinin arka plan rengini değiştirme
- Tabloya yeni satır ekleme
- Tabloyu son satırdan silme

## Kurulum

Bu projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. **Projeyi Klonlayın**: GitHub'dan projeyi klonlamak için aşağıdaki komutu kullanabilirsiniz:
   ```bash
   git clone https://github.com/melikeisk/dynamic-content-table.git
   ````
2. **Proje Dizini**: Klonlama işlemi tamamlandığında, terminal veya komut istemcisinde proje dizinine gidin:
   ```bash
    cd dynamic-content-table
   ````
3. **İnceleme ve Çalıştırma**: Proje dosyalarını inceleyin ve bir tarayıcıda `index.html` dosyasını açarak uygulamanın çalıştığını doğrulayın.
4. **Butonları Deneyin**: Proje sayfasında bulunan butonlara tıklayarak çeşitli fonksiyonları test edin.

## Kullanım

1. **Div İçeriğini Güncelleme**: "Update Div Content" butonuna tıklayarak `.content-div` sınıfına sahip div'in içeriğini değiştirebilirsiniz.
2. **Paragraf İçeriğini Güncelleme**: "Update Paragraph Content" butonuna tıklayarak `#contentParagraph` id'sine sahip paragrafın içeriğini güncelleyebilirsiniz.
3. **Hücre Rengini Değiştirme**: "Highlight Cell" butonuna tıklayarak tablodaki ilk satırın ikinci hücresinin rengini sarı yapabilirsiniz.
4.  **Yeni Satır Ekleme**: "Add Row to Table" butonuna tıklayarak tabloya yeni bir satır ekleyebilirsiniz.
5.  **Son Satırı Silme**: "Remove Last Row" butonuna tıklayarak tablodaki son satırı kaldırabilirsiniz.

## Dosya Yapısı

Proje şu dosya yapısına sahiptir:

- `index.html`: Web sayfasının HTML içeriğini içerir.
- `styles.css`: Sayfanın stil ve tasarımını belirler.
- `dom.js`: Sayfadaki dinamik işlemleri yöneten JavaScript kodlarını içerir.

## Lisans

Bu proje [MIT Lisansı](https://opensource.org/licenses/MIT) ile lisanslanmıştır.
