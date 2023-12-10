document.addEventListener('DOMContentLoaded', function() {
    // Şifre oluşturma fonksiyonu
    function generatePassword(length) {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+?><:{}[]';
        let password = '';

        for (let i = 0; i < length; ++i) {
            const randomChar = Math.floor(Math.random() * charset.length);
            password += charset[randomChar];
        }

        return password;
    }

    // Slider değerini gösteren alanı seçme
    const uzunlukDeger = document.getElementById('uzunlukDeger');
    const rangeSlider = document.querySelector('.range');

    // Slider'ın değerini dinleyerek gösterilen alandaki değeri güncelleme
    rangeSlider.addEventListener('input', function() {
        uzunlukDeger.textContent = this.value;
    });

    // "Oluştur" butonuna tıklama olayı ekleme
    const olusturButton = document.getElementById('olusturbuton');
    olusturButton.addEventListener('click', function() {
        const uzunluk = document.querySelector('.range').value;
        const sifreInput = document.querySelector('#sifreinput');
        const yeniSifre = generatePassword(uzunluk);
        sifreInput.value = yeniSifre;
    });

    // "Şifreyi Kopyala" butonuna tıklama olayı ekleme
    const kopyalaButton = document.getElementById('olusturbuton2');
    kopyalaButton.addEventListener('click', async function() {
        const sifreInput = document.querySelector('#sifreinput');
        const sifreMetni = sifreInput.value;

        try {
            await navigator.clipboard.writeText(sifreMetni);
            alert('Şifre başarıyla kopyalandı!');
        } catch (err) {
            console.error('Kopyalama işlemi başarısız:', err);
            alert('Kopyalama işlemi başarısız oldu, lütfen manuel olarak kopyalayınız.');
        }
    });
    // "Temizle" butonuna tıklama olayı ekleme
    const temizleButton = document.getElementById('olusturbuton3');
    temizleButton.addEventListener('click', function() {
        const sifreInput = document.querySelector('#sifreinput');
        sifreInput.value = ''; // Şifre input alanını temizleme
    });
});
