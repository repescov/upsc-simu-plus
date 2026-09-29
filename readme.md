# 🎓 UPSC SIMU Plus
**Versiunea:** 15.0.1 (Hotfix Buclă Infinită Lecție Curentă AZI, Ore Trecute, Absențe Pereche, Redesign Modern UI)  
**Autor:** Vadim Repeșco  
**Platforma țintă:** `https://simu.upsc.md/*/teacher/electronicRegister/*`

## 📝 Descriere
**UPSC SIMU Plus** este o extensie Chrome avansată concepută pentru a ușura munca profesorilor de la Universitatea Pedagogică de Stat „Ion Creangă”. Aceasta transformă registrul electronic SIMU dintr-o unealtă statică într-un asistent digital inteligent, rapid și plăcut vizual.

## 🚀 Funcționalități Principale

### 0. 🎨 Design Modern & Management Temporal (NOU în v15.0)
*   **Evidențiere Ore Trecute (Completate):** Coloanele lecțiilor desfășurate până în prezent au un fundal mai închis, mat (`slate`), separând clar istoricul de orele viitoare.
*   **Linie de Demarcație Cronologică:** Graniță verticală indigo între ultima oră trecută și orele viitoare.
*   **Lecția Curentă (AZI):** Coloana zilei de azi este evidențiată cu un accent albastru și o etichetă rotundă `AZI` în antet.
*   **Semnalare Căsuțe Uitate:** Căsuțele goale din orele trecute au un contur punctat chihlimbar, prevenind omiterea notării sau a absențelor.
*   **🔗 Duplicare Absențe la Ore Pereche:** Comutator dedicat (`ACTIV / OPRIT`). Când se introduce absența (`a`), extensia completează automat absența și la cealaltă oră din aceeași dată (pereche).
*   **Focus Dinamic & Zoom Nume:** Când o celulă este selectată, numele studentului crește subtil (+6%) cu avatar evidențiat, iar rândul și coloana sunt accentuate fără niciun artefact alb în Dark Mode.

### 1. 📤 Import Date din CSV (AI Bridge)
*   Permite completarea automată a sutelor de note în câteva secunde.
*   **Flux:** Profesorul fotografiază registrul fizic -> GPT extrage datele în CSV -> Extensia injectează datele direct în SIMU.
*   Gestionează inteligent perechile (două perechi în aceeași zi) și maparea numelor studenților.

### 2. 📋 Gestionare teme curriculum (Optimizat)
*   **Două liste simultane:** Permite introducerea separată a temelor de Teorie (Curs) și Seminar în două casete distincte.
*   **Detecție Secțiuni:** Extensia recunoaște automat separatoarele albastre din SIMU și distribuie temele în blocurile corespunzătoare de Teorie sau Seminar.
*   **Flux Silențios:** Notificări tip 'toast' elegante pentru progres, fără ferestre de confirmare agresive.
*   **Copiere în Memorie:** Transferă rapid listele de teme între diferite grupe sau registre.

### 3. 🌙 Mod Întunecat 2.0 (Dark Mode High-End)
*   Interfață complet adaptată pe nuanțe Slate/Zinc profunde, cu contrast excelent și lizibilitate maximă pe timp de noapte.
*   Activabil rapid din panoul de setări (FAB).

### 4. 📊 Analytics & Statistici
*   **Media Grupei:** Calculată automat în timp real.
*   **Distribuția Notelor:** Grafic vizual cu numărul de note de 10, 9, 8 etc.
*   **Alerte:** Evidențierea studenților fără note sau cu multe absențe.

### 5. ⌨️ Productivitate Maximă
*   **Navigare cu Săgețile:** Te miști prin tabel ca în Excel.
*   **Auto-Salvare (Adaptat Noului SIMU):** Apeși o cifră (2-9) sau "a" și nota sau absența se salvează instant prin simularea fluxului din pop-up-ul nativ, ocolind blocarea scrierii directe de la tastatură. Pentru nota `10`, se apasă tastele `1` apoi `0`. Pentru a confirma nota `1` se apasă tasta `Enter`.
*   **Ștergere Rapidă:** Tastele `Backspace` și `Delete` șterg automat nota atât din câmp, cât și de pe server.
*   **Bulk Actions:** Dublu-click pe antetul datei pentru a pune absențe tuturor studenților ce au celule necompletate.

### 6. 👁️ Optimizare Vizuală
*   **Crosshair:** Evidențierea rândului și coloanei unde este indicatorului mouse-ului sau care conțin celula de lucru.
*   **Heatmap:** Notele sunt colorate diferit (Verde = 9-10, Galben = 5-6, Roșu = 1-4).
*   **Coloane Compacte:** Ascunderea coloanelor de totalizare (Nota medie, evaluări curente etc).

## 🛠️ Instalare
1. Descarcă codul sursă (click pe butonul verde din dreapta sus <> Code --> click pe download zip).
2. Dezarhivează undeva unde nu va fi șters accidental.
3. Deschide Chrome la `chrome://extensions/`.
4. Activează **Developer Mode** (dreapta sus).
5. Apasă **Load unpacked** și selectează folderul extensiei (mapa dezarhivată).

---
*Creat cu ❤️ pentru comunitatea academică UPSC.*
