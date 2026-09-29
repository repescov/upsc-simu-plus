# 🎓 UPSC SIMU Plus
**Versiunea:** 15.1 (Turbo Import CSV direct AJAX, Lipire Multi-celulă din Excel, Absențe în Masă Inline 2-Step, Contrast Ore Trecute, Fuzzy Matching AI, Arhitectură Modulară CSS, Separator Zecimal Românesc, QR Offline)  
**Autor:** Vadim Repeșco  
**Platforma țintă:** `https://simu.upsc.md/*/teacher/electronicRegister/*`

## 📝 Descriere
**UPSC SIMU Plus** este o extensie Chrome avansată concepută pentru a ușura munca profesorilor de la Universitatea Pedagogică de Stat „Ion Creangă”. Aceasta transformă registrul electronic SIMU dintr-o unealtă statică într-un asistent digital inteligent, rapid și plăcut vizual.

## 🚀 Funcționalități Principale

### 0. ⚡ Noutăți Majore în v15.1
*   **🚀 Turbo Import CSV (Direct AJAX):** Salvează sute de note în sub 30 de secunde (de ~20x mai rapid), transmițând cererile direct către server fără înghețarea ecranului sau deschiderea lentă a pop-up-urilor la fiecare celulă. Sincronizează catalogul printr-o singură reîncărcare la final.
*   **📋 Lipire Directă din Excel / Google Sheets (Multi-cell Paste):** Copiezi o coloană întreagă de note din Excel (`Ctrl+C`) și apeși `Ctrl+V` pe prima celulă a unui student din SIMU. Extensia distribuie și salvează automat notele în cascadă pe rândurile de mai jos!
*   **⚡ Absențe în Masă Inline (`⚡ a` ➔ `Sigur? ⚡`):** Inserat pe fiecare antet de oră/dată. Fără nicio fereastră modală pop-up agresivă (`confirm`): primul click transformă butonul într-un puls cald `Sigur? ⚡`, iar al doilea click salvează direct absențele pentru toți studenții fără notă din acea oră (cu revenire automată la starea inițială după 3,5s).
*   **🌑 Contrast Optimizat pentru Orele Trecute:** Nuanță mai închisă, mată și clar demarcată pentru coloanele lecțiilor desfășurate înainte de data de azi, eliminând suprapunerea vizuală cu fundalul paginii.
*   **🧠 Fuzzy Matching Inteligent (AI Bridge):** Recunoaște studenții chiar dacă ChatGPT/OCR a generat mici diferențe de diacritice (`ș/ş`, `ț/ţ`, `â/î`), cratime sau ordinea Prenume-Nume. Dacă există studenți negăsiți, extensia afișează o listă clară de avertizare.
*   **🎨 Arhitectură Modulară & Zero FOUC:** Cele peste 950 de linii de CSS au fost extrase într-un fișier dedicat `style.css` injectat la `document_start`, eliminând complet sclipirile de stil și accelerând încărcarea paginii.
*   **🇷🇴 Convenție Academică Românească:** Toate mediile din panoul de statistici folosesc virgula (`,`) ca separator zecimal (ex: `8,50`).
*   **☕ QR Code 100% Offline (Donație MIA):** Codul QR funcționează independent de internet sau servere externe (Imgur), fiind integrat direct în extensie.
*   **🎯 Throttling Crosshair & Observer Optimizat:** Performanță fluidă la mișcarea mouse-ului (`requestAnimationFrame`) și eliminarea ciclurilor inutile de re-randare DOM.
*   **👥 Populație Dinamică Profesori:** Lista de cadre didactice din setări este preluată dinamic direct din baza SIMU, eliminând datele hardcodate învechite.

### 1. 🎨 Design Modern & Management Temporal
*   **Evidențiere Ore Trecute (Completate):** Coloanele lecțiilor desfășurate până în prezent au un fundal mai închis, mat (`slate`), separând clar istoricul de orele viitoare.
*   **Linie de Demarcație Cronologică:** Graniță verticală indigo între ultima oră trecută și orele viitoare.
*   **Lecția Curentă (AZI):** Coloana zilei de azi este evidențiată cu un accent albastru și o etichetă rotundă `AZI` în antet.
*   **Semnalare Căsuțe Uitate:** Căsuțele goale din orele trecute au un contur punctat chihlimbar, prevenind omiterea notării sau a absențelor.
*   **🔗 Duplicare Absențe la Ore Pereche:** Comutator dedicat (`ACTIV / OPRIT`). Când se introduce absența (`a`), extensia completează automat absența și la cealaltă oră din aceeași dată (pereche).
*   **Focus Dinamic & Zoom Nume:** Când o celulă este selectată, numele studentului crește subtil (+6%) cu avatar evidențiat, iar rândul și coloana sunt accentuate fără niciun artefact alb în Dark Mode.

### 2. 📤 Import Date din CSV (AI Bridge)
*   Permite completarea automată a sutelor de note în câteva secunde.
*   **Flux:** Profesorul fotografiază registrul fizic -> GPT extrage datele în CSV -> Extensia injectează datele direct în SIMU.
*   Gestionează inteligent perechile (două perechi în aceeași zi) și maparea numelor studenților prin potrivire aproximativă (fuzzy).

### 3. 📋 Gestionare teme curriculum (Optimizat)
*   **Două liste simultane:** Permite introducerea separată a temelor de Teorie (Curs) și Seminar în două casete distincte.
*   **Detecție Secțiuni:** Extensia recunoaște automat separatoarele albastre din SIMU și distribuie temele în blocurile corespunzătoare de Teorie sau Seminar.
*   **Flux Silențios:** Notificări tip 'toast' elegante pentru progres, fără ferestre de confirmare agresive.
*   **Copiere în Memorie:** Transferă rapid listele de teme între diferite grupe sau registre.

### 4. 🌙 Mod Întunecat 2.0 (Dark Mode High-End)
*   Interfață complet adaptată pe nuanțe Slate/Zinc profunde, cu contrast excelent și lizibilitate maximă pe timp de noapte.
*   Activabil rapid din panoul de setări (FAB).

### 5. 📊 Analytics & Statistici
*   **Media Grupei:** Calculată automat în timp real cu virgulă zecimală (format românesc).
*   **Distribuția Notelor:** Grafic vizual cu numărul de note de 10, 9, 8 etc.
*   **Alerte:** Evidențierea studenților fără note sau cu multe absențe.

### 6. ⌨️ Productivitate Maximă
*   **Navigare cu Săgețile:** Te miști prin tabel ca în Excel.
*   **Lipire din Excel (`Ctrl+V`):** Distribuie o coloană copiată direct în catalog.
*   **Auto-Salvare (Adaptat Noului SIMU):** Apeși o cifră (2-9) sau "a" și nota sau absența se salvează instant prin simularea fluxului din pop-up-ul nativ. Pentru nota `10`, se apasă tastele `1` apoi `0`. Pentru a confirma nota `1` se apasă tasta `Enter`.
*   **⚡ Buton Absențe în Masă pe Coloană (`⚡ a` -> `Sigur? ⚡`):** Inserat pe fiecare antet de dată. Fără nicio fereastră pop-up modală intruzivă: primul click transformă butonul în `Sigur? ⚡` (cu alertă vizuală caldă), iar al doilea click aplică și salvează automat absențele pentru toți studenții fără notă din acea oră (dacă nu se reconfirmă în 3,5 secunde, revine automat la starea inițială).
*   **Dublu-Click pe Antet:** Funcționează și prin dublu-click direct pe textul datei lecției.

### 7. 👁️ Optimizare Vizuală
*   **Crosshair Fluid:** Evidențierea rândului și coloanei unde este indicatorul mouse-ului, accelerat prin hardware (`requestAnimationFrame`).
*   **Heatmap:** Notele sunt colorate diferit (Verde = 9-10, Galben = 5-6, Roșu = 1-4).
*   **Coloane Compacte:** Ascunderea coloanelor de totalizare (Nota medie, evaluări curente etc).

## 🛠️ Instalare / Actualizare
1. Deschide Chrome la `chrome://extensions/`.
2. Asigură-te că **Developer Mode** este activat (dreapta sus).
3. Apasă butonul de reîncărcare (iconița de refresh 🔄) din dreptul extensiei **UPSC SIMU Plus** (sau dacă o instalezi prima dată, apasă **Load unpacked** și selectează folderul `UPSC_SIMU_Plus`).

---
*Creat cu ❤️ pentru comunitatea academică UPSC.*
