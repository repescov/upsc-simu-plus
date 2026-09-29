(function() {
    'use strict';

    // Schimbare titlu pagină
    document.title = 'SIMU UPSC';
    console.log('%c[UPSC SIMU Plus v15.1]%c Modern SaaS Design Activat! 🚀', 'background: #4f46e5; color: #fff; padding: 4px 8px; border-radius: 4px; font-weight: bold;', 'color: #4f46e5; font-weight: bold;');

    // ==========================================
    // 1. STILIZAREA UNIVERSALĂ (Încărcată ultra-rapid din style.css via manifest.json)
    // ==========================================

    // Funcție pentru notificări discrete
    function showToast(message, duration = 3000) {
        let toast = document.getElementById('upsc-toast-msg');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'upsc-toast-msg';
            toast.className = 'upsc-toast';
            document.body.appendChild(toast);
        }
        toast.innerText = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), duration);
    }

    // ==========================================
    // 2. SETĂRI FLOTANTE & AUTO-COMPLETARE MODAL
    // ==========================================
    let s_teacher = localStorage.getItem('upsc_set_teacher') || '371';
    let s_block = localStorage.getItem('upsc_set_block') || '10';
    let s_auditory = localStorage.getItem('upsc_set_auditory') || '195';

    // Inițializare Dark Mode
    if (localStorage.getItem('upsc_dark_mode') === 'true') {
        document.body.classList.add('upsc-dark-mode');
    }


    function getTeacherOptionsHtml() {
        const nativeTeacherSelect = document.querySelector('select[x-ref="teacher"]');
        if (nativeTeacherSelect && nativeTeacherSelect.options && nativeTeacherSelect.options.length > 5) {
            localStorage.setItem('upsc_cached_teachers_html', nativeTeacherSelect.innerHTML);
            return nativeTeacherSelect.innerHTML;
        }
        const cached = localStorage.getItem('upsc_cached_teachers_html');
        if (cached && cached.length > 50) {
            return cached;
        }
        return '<option disabled selected>Alege Profesorul...</option>';
    }

    function populateTeacherSelect() {
        const teacherSelect = document.getElementById('set-teacher');
        if (!teacherSelect) return;
        if (teacherSelect.options.length <= 1) {
            teacherSelect.innerHTML = getTeacherOptionsHtml();
            if (s_teacher) teacherSelect.value = s_teacher;
        }
    }

    const fab = document.createElement('div'); 
    fab.id = 'upsc-settings-fab'; 
    fab.setAttribute('title', 'Setări UPSC SIMU Plus');
    fab.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
    `;

    const panel = document.createElement('div'); panel.id = 'upsc-settings-panel';
    panel.innerHTML = `
        <div class="upsc-panel-header">
            <div class="upsc-panel-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="color: #4f46e5;">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                <span>Setări UPSC SIMU Plus</span>
            </div>
            <button id="upsc-settings-close" class="upsc-btn-icon-close" title="Închide">✕</button>
        </div>
        
        <label>Profesor</label>
        <select id="set-teacher">
            ${getTeacherOptionsHtml()}
        </select>
        
        <label>ID Bloc</label>
        <input type="text" id="set-block" value="${s_block}" placeholder="Ex: 10">
        
        <label>ID Auditoriu</label>
        <input type="text" id="set-auditory" value="${s_auditory}" placeholder="Ex: 195">
        
        <div class="upsc-switch-wrapper">
            <span class="upsc-switch-label">🌙 Mod Întunecat (Dark Mode)</span>
            <label class="upsc-switch">
                <input type="checkbox" id="set-dark-mode" ${localStorage.getItem('upsc_dark_mode') === 'true' ? 'checked' : ''}>
                <span class="upsc-slider"></span>
            </label>
        </div>

        <div class="upsc-switch-wrapper">
            <div>
                <span class="upsc-switch-label">🔗 Duplicare absențe la ore pereche</span>
                <div style="font-size: 11.5px; color: #64748b; margin-top: 2px;">Pune automat absență ('a') și la ora din aceeași dată</div>
            </div>
            <label class="upsc-switch">
                <input type="checkbox" id="set-pair-absences" ${localStorage.getItem('upsc_auto_pair_absences') !== null ? (localStorage.getItem('upsc_auto_pair_absences') === 'true' ? 'checked' : '') : 'checked'}>
                <span class="upsc-slider"></span>
            </label>
        </div>

        <div class="upsc-switch-wrapper">
            <div>
                <span class="upsc-switch-label">📅 Evidențiere ore trecute / azi</span>
                <div style="font-size: 11.5px; color: #64748b; margin-top: 2px;">Nuanță mai închisă pentru lecțiile parcurse până în prezent și ziua curentă</div>
            </div>
            <label class="upsc-switch">
                <input type="checkbox" id="set-highlight-past" ${localStorage.getItem('upsc_highlight_past_cols') !== null ? (localStorage.getItem('upsc_highlight_past_cols') === 'true' ? 'checked' : '') : 'checked'}>
                <span class="upsc-slider"></span>
            </label>
        </div>

        <div class="help-tip">
            💡 <b>Nu știi ID-ul Blocului/Auditoriului?</b><br><br>
            Deschide <b>Inspectare (Ctrl+Shift+I)</b>, dă click pe iconița "săgeată" și selectează lista dorită. Copiază cifra din <code>value="..."</code>.
        </div>

        <div class="donation">
            Îți este utilă această extensie?<br>
            <a href="#" id="toggle-qr-btn" style="color: #d97706; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; padding: 6px 14px; background: #fffbeb; border-radius: 9999px; margin-top: 8px; border: 1px solid #fde68a; transition: all 0.2s; font-size: 12px;">☕ Oferă o cafea autorului (MIA)</a>
            <div id="mia-qr-container">
                <img src="data:image/jpeg;base64,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" width="192" height="192" style="border-radius: 12px; border: 1px solid #e2e8f0; padding: 6px; background: #fff; box-shadow: 0 4px 14px rgba(0,0,0,0.08); margin-top: 8px;">
                <div style="font-size: 11px; color: #64748b; margin-top: 6px; font-weight: 500;">Scanează cu orice aplicație bancară din MD</div>
            </div>
        </div>
    `;
    document.body.appendChild(fab); document.body.appendChild(panel);
    document.getElementById('set-teacher').value = s_teacher;

    fab.addEventListener('click', () => { panel.classList.toggle('active'); populateTeacherSelect(); });
    const closeSettingsBtn = document.getElementById('upsc-settings-close');
    if (closeSettingsBtn) {
        closeSettingsBtn.addEventListener('click', () => panel.classList.remove('active'));
    }
    panel.addEventListener('input', (e) => {
        if(e.target.id === 'set-teacher') { localStorage.setItem('upsc_set_teacher', e.target.value); s_teacher = e.target.value; }
        if(e.target.id === 'set-block') { localStorage.setItem('upsc_set_block', e.target.value); s_block = e.target.value; }
        if(e.target.id === 'set-auditory') { localStorage.setItem('upsc_set_auditory', e.target.value); s_auditory = e.target.value; }
        if(e.target.id === 'set-dark-mode') {
            const isDark = e.target.checked;
            localStorage.setItem('upsc_dark_mode', isDark);
            document.body.classList.toggle('upsc-dark-mode', isDark);
        }
        if(e.target.id === 'set-pair-absences') {
            const isPair = e.target.checked;
            localStorage.setItem('upsc_auto_pair_absences', isPair ? 'true' : 'false');
            const toolbarBtn = document.getElementById('toggle-pair-absences-btn');
            if (toolbarBtn) {
                toolbarBtn.innerHTML = isPair ? '🔗 Absențe Pereche: <b>ACTIV</b>' : '🔗 Absențe Pereche: <b>OPRIT</b>';
                if (isPair) toolbarBtn.classList.add('active');
                else toolbarBtn.classList.remove('active');
            }
            if (window.toastr) {
                if (isPair) toastr.success("Absențe pereche activate!", "UPSC Plus", { progressBar: true });
                else toastr.info("Absențe pereche dezactivate.", "UPSC Plus", { progressBar: true });
            }
        }
        if(e.target.id === 'set-highlight-past') {
            const isHighlight = e.target.checked;
            localStorage.setItem('upsc_highlight_past_cols', isHighlight ? 'true' : 'false');
            const toolbarBtn = document.getElementById('toggle-highlight-past-btn');
            if (toolbarBtn) {
                toolbarBtn.innerHTML = isHighlight ? '📅 Ore Trecute: <b>ACTIV</b>' : '📅 Ore Trecute: <b>OPRIT</b>';
                if (isHighlight) toolbarBtn.classList.add('active');
                else toolbarBtn.classList.remove('active');
            }
            highlightDateColumns();
            if (window.toastr) {
                if (isHighlight) toastr.success("Evidențierea orelor trecute activată!", "UPSC Plus", { progressBar: true });
                else toastr.info("Evidențierea orelor trecute dezactivată.", "UPSC Plus", { progressBar: true });
            }
        }
    });

    const qrBtn = document.getElementById('toggle-qr-btn');
    const qrContainer = document.getElementById('mia-qr-container');
    if (qrBtn && qrContainer) {
        qrBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            const isShowing = qrContainer.classList.toggle('show-qr');
            if (isShowing) {
                setTimeout(() => {
                    panel.scrollTo({ top: panel.scrollHeight, behavior: 'smooth' });
                }, 300);
            }
        });
    }

    document.addEventListener('click', function(e) {
        const addBtn = e.target.closest('div[data-target="#addEventModal"]');
        if (addBtn) {
            let attempts = 0;
            const checkInterval = setInterval(() => {
                attempts++;
                const teacherSelect = document.querySelector('select[x-ref="teacher"]');
                const blockSelect = document.querySelector('select[wire\\:model="block"]');
                const auditorySelect = document.querySelector('select[x-ref="auditory"]');

                if (teacherSelect && blockSelect && auditorySelect) {
                    clearInterval(checkInterval); 
                    const setVal = (el, val) => {
                        if (el) {
                            el.value = val;
                            el.dispatchEvent(new Event('input', { bubbles: true }));
                            el.dispatchEvent(new Event('change', { bubbles: true }));
                            if (window.jQuery) window.jQuery(el).trigger('chosen:updated');
                        }
                    };
                    setVal(teacherSelect, s_teacher);
                    setVal(blockSelect, s_block);
                    setVal(auditorySelect, s_auditory);
                } else if (attempts > 15) { clearInterval(checkInterval); }
            }, 100);
        }
    });

    // ==========================================
    // AJUTĂTOARE REGISTRU & SALVARE DIRECTĂ AJAX
    // ==========================================
    function getRegisterId() {
        const match = window.location.pathname.match(/\/electronicRegister\/(\d+)/);
        if (match) return match[1];
        
        const wireEl = document.querySelector('[wire\\:initial-data*="register_id"]');
        if (wireEl) {
            const m = wireEl.getAttribute('wire:initial-data').match(/["']register_id["']\s*:\s*(\d+)/);
            if (m) return m[1];
        }

        const flagLink = document.querySelector('a[href*="/electronicRegister/"]');
        if (flagLink) {
            const m = flagLink.href.match(/\/electronicRegister\/(\d+)/);
            if (m) return m[1];
        }

        return window.location.pathname.split('/').filter(Boolean).pop();
    }

    function getRegisterBaseUrl() {
        const langMatch = window.location.pathname.match(/^\/([a-z]{2})\//);
        const lang = langMatch ? langMatch[1] : 'ro';
        return `${window.location.origin}/${lang}/teacher/electronicRegister`;
    }

    async function saveNoteDirectAJAX(input, noteValue, registerId, csrfToken) {
        return new Promise((resolve, reject) => {
            const regId = registerId || getRegisterId();
            const token = csrfToken || (window.jQuery && window.jQuery('meta[name="csrf-token"]').attr('content')) || document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
            const baseUrl = getRegisterBaseUrl();

            const isEval = input.classList.contains('student-evaluation');
            const url = isEval
                ? `${baseUrl}/setEvaluationNote/${regId}`
                : `${baseUrl}/setNote/${regId}`;

            const data = {
                student_id: input.getAttribute('data-student-id'),
                note: noteValue
            };

            if (isEval) {
                data.type = input.getAttribute('data-type');
            } else {
                data.date = input.getAttribute('data-date');
                data.event_id = input.getAttribute('data-event-id');
            }

            if (window.jQuery) {
                window.jQuery.ajax({
                    headers: { 'X-CSRF-TOKEN': token },
                    url: url,
                    type: 'POST',
                    data: data,
                    success: function(resp) {
                        if (resp && resp.type === 'error') {
                            reject(new Error(resp.message || 'Eroare server SIMU la salvarea notei'));
                        } else {
                            resolve(resp);
                        }
                    },
                    error: function(err) {
                        if (err.status === 419 && window.toastr) {
                            window.toastr.error("Sesiunea SIMU a expirat! Te rugăm să reîmprospătezi pagina (F5).", "Sesiune Expirată", { progressBar: true });
                        }
                        reject(err);
                    }
                });
            } else {
                fetch(url, {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'X-CSRF-TOKEN': token,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: new URLSearchParams(data).toString()
                })
                .then(res => res.json())
                .then(resp => {
                    if (resp && resp.type === 'error') {
                        reject(new Error(resp.message || 'Eroare server SIMU la salvarea notei'));
                    } else {
                        resolve(resp);
                    }
                })
                .catch(reject);
            }
        });
    }

    function normalizeName(str) {
        if (!str) return '';
        return str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[\-_\.]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    function nameSimilarity(name1, name2) {
        const n1 = normalizeName(name1);
        const n2 = normalizeName(name2);
        if (n1 === n2) return 1.0;

        const words1 = n1.split(' ').filter(w => w.length > 1);
        const words2 = n2.split(' ').filter(w => w.length > 1);

        const matchCount1 = words1.filter(w1 => words2.some(w2 => w2.includes(w1) || w1.includes(w2))).length;
        const matchCount2 = words2.filter(w2 => words1.some(w1 => w1.includes(w2) || w2.includes(w1))).length;

        const tokenScore = Math.max(
            words1.length > 0 ? matchCount1 / words1.length : 0,
            words2.length > 0 ? matchCount2 / words2.length : 0
        );
        if (tokenScore >= 0.8) return tokenScore;

        const len1 = n1.length, len2 = n2.length;
        if (len1 === 0 || len2 === 0) return 0;

        const matrix = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(0));
        for (let i = 0; i <= len1; i++) matrix[i][0] = i;
        for (let j = 0; j <= len2; j++) matrix[0][j] = j;

        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                const cost = n1[i - 1] === n2[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + cost
                );
            }
        }
        return 1 - (matrix[len1][len2] / Math.max(len1, len2));
    }

    function findMatchingStudent(csvName, studentList) {
        const normCsv = normalizeName(csvName);
        if (!normCsv) return null;

        // 1. Potrivire exactă normalizată
        const exact = studentList.find(s => s.normalized === normCsv);
        if (exact) return exact;

        // 2. Token match (toate cuvintele din nume)
        const csvWords = normCsv.split(' ').filter(w => w.length > 1);
        const tokenMatch = studentList.find(s => {
            const simuWords = s.normalized.split(' ').filter(w => w.length > 1);
            return (csvWords.length > 0 && csvWords.every(cw => simuWords.some(sw => sw.includes(cw) || cw.includes(sw)))) ||
                   (simuWords.length > 0 && simuWords.every(sw => csvWords.some(cw => cw.includes(sw) || sw.includes(cw))));
        });
        if (tokenMatch) return tokenMatch;

        // 3. Similaritate bazată pe distanță Levenshtein (prag 0.75)
        let bestMatch = null;
        let bestScore = 0;
        for (let s of studentList) {
            let score = nameSimilarity(normCsv, s.normalized);
            if (score > bestScore) {
                bestScore = score;
                bestMatch = s;
            }
        }
        if (bestScore >= 0.75) return bestMatch;
        return null;
    }

    // ==========================================
    // 3. MENU ACTIUNI (Extra Cols, Statistici, Export)
    // ==========================================
    const eregisterDivDom = document.getElementById('eregister');
    if (eregisterDivDom && !document.getElementById('upsc-controls-bar')) {
        
        const controlsBar = document.createElement('div');
        controlsBar.id = 'upsc-controls-bar';
        controlsBar.className = 'upsc-controls-wrapper';
        
        // Buton Extra Cols
        let hideExtraColsState = localStorage.getItem('upsc_hide_extra_cols') || 'true';
        if (hideExtraColsState === 'true') document.body.classList.add('hide-extra-cols');
        
        const tBtn = document.createElement('button'); 
        tBtn.id = 'toggle-extra-cols-btn';
        tBtn.className = 'upsc-btn';
        const updBtn = (isHidden) => { tBtn.innerHTML = isHidden ? '👁️ Afișează Totalizare' : '🙈 Ascunde Totalizare'; };
        updBtn(hideExtraColsState === 'true');
        tBtn.addEventListener('click', e => {
            e.preventDefault();
            const hidden = document.body.classList.toggle('hide-extra-cols');
            localStorage.setItem('upsc_hide_extra_cols', hidden ? 'true' : 'false'); updBtn(hidden);
        });

        // Buton Absențe Pereche (Duble)
        let pairAbsState = localStorage.getItem('upsc_auto_pair_absences') !== null 
            ? localStorage.getItem('upsc_auto_pair_absences') === 'true' 
            : true;
        
        const pairAbsBtn = document.createElement('button');
        pairAbsBtn.id = 'toggle-pair-absences-btn';
        pairAbsBtn.className = 'upsc-btn';
        const updPairBtn = (isActive) => {
            pairAbsBtn.innerHTML = isActive 
                ? '🔗 Absențe Pereche: <b>ACTIV</b>' 
                : '🔗 Absențe Pereche: <b>OPRIT</b>';
            pairAbsBtn.title = isActive 
                ? 'Absențele puse la o oră se pun automat și la ora pereche din aceeași dată. Click pentru dezactivare.' 
                : 'Click pentru a activa duplicarea automată a absenței la orele pereche din aceeași dată.';
            if (isActive) pairAbsBtn.classList.add('active');
            else pairAbsBtn.classList.remove('active');
        };
        updPairBtn(pairAbsState);
        pairAbsBtn.addEventListener('click', e => {
            e.preventDefault();
            pairAbsState = !pairAbsState;
            localStorage.setItem('upsc_auto_pair_absences', pairAbsState ? 'true' : 'false');
            updPairBtn(pairAbsState);
            const settingsSwitch = document.getElementById('set-pair-absences');
            if (settingsSwitch) settingsSwitch.checked = pairAbsState;
            if (window.toastr) {
                if (pairAbsState) toastr.success("Absențe pereche activate! La notarea absenței ('a'), se va completa automat și ora pereche.", "UPSC Plus", { progressBar: true });
                else toastr.info("Absențe pereche dezactivate.", "UPSC Plus", { progressBar: true });
            }
        });

        // Buton Evidențiere Ore Trecute
        let highlightPastState = localStorage.getItem('upsc_highlight_past_cols') !== null 
            ? localStorage.getItem('upsc_highlight_past_cols') === 'true' 
            : true;

        const highlightPastBtn = document.createElement('button');
        highlightPastBtn.id = 'toggle-highlight-past-btn';
        highlightPastBtn.className = 'upsc-btn';
        const updHighlightPastBtn = (isActive) => {
            highlightPastBtn.innerHTML = isActive 
                ? '📅 Ore Trecute: <b>ACTIV</b>' 
                : '📅 Ore Trecute: <b>OPRIT</b>';
            highlightPastBtn.title = isActive 
                ? 'Coloanele până la ziua de azi sunt evidențiate cu o nuanță mai închisă. Click pentru dezactivare.' 
                : 'Click pentru a evidenția coloanele până la ziua de azi cu o nuanță mai închisă.';
            if (isActive) highlightPastBtn.classList.add('active');
            else highlightPastBtn.classList.remove('active');
        };
        updHighlightPastBtn(highlightPastState);
        highlightPastBtn.addEventListener('click', e => {
            e.preventDefault();
            highlightPastState = !highlightPastState;
            localStorage.setItem('upsc_highlight_past_cols', highlightPastState ? 'true' : 'false');
            updHighlightPastBtn(highlightPastState);
            const settingsSwitch = document.getElementById('set-highlight-past');
            if (settingsSwitch) settingsSwitch.checked = highlightPastState;
            highlightDateColumns();
            if (window.toastr) {
                if (highlightPastState) toastr.success("Evidențierea orelor trecute activată!", "UPSC Plus", { progressBar: true });
                else toastr.info("Evidențierea orelor trecute dezactivată.", "UPSC Plus", { progressBar: true });
            }
        });

        // Buton Statistici
        const statsBtn = document.createElement('button');
        statsBtn.id = 'btn-show-stats';
        statsBtn.className = 'upsc-btn btn-stats';
        statsBtn.innerHTML = '📊 Statistici Grupă';
        
        // Buton Export Excel
        const exportBtn = document.createElement('button');
        exportBtn.id = 'btn-export-csv';
        exportBtn.className = 'upsc-btn btn-export';
        exportBtn.innerHTML = '📥 Descarcă Excel (CSV)';

        // Buton Import Date (Nou)
        const openImportBtn = document.createElement('button');
        openImportBtn.id = 'btn-open-import';
        openImportBtn.className = 'upsc-btn btn-open-import';
        openImportBtn.innerHTML = '📤 Importă din CSV';

        const brandBadge = document.createElement('div');
        brandBadge.className = 'upsc-brand-badge';
        brandBadge.innerHTML = '⚡ UPSC Plus <b>v15.1</b>';

        controlsBar.appendChild(brandBadge);
        controlsBar.appendChild(tBtn);
        controlsBar.appendChild(pairAbsBtn);
        controlsBar.appendChild(highlightPastBtn);
        controlsBar.appendChild(statsBtn);
        controlsBar.appendChild(exportBtn);
        controlsBar.appendChild(openImportBtn);
        
        eregisterDivDom.parentNode.insertBefore(controlsBar, eregisterDivDom);

        // Injectăm modalul pentru import în body
        const importOverlay = document.createElement('div');
        importOverlay.id = 'upsc-import-overlay';
        importOverlay.innerHTML = `
            <div id="upsc-import-modal">
                <div class="upsc-modal-header">
                    <h3>📤 Import Date din Registru Fizic</h3>
                    <button class="upsc-modal-close" id="btn-close-import-x" title="Închide">✕</button>
                </div>
                <p style="font-size: 13.5px; color: #64748b; margin-bottom: 16px; line-height: 1.5;">
                    Urmează pașii de mai jos pentru a completa automat registrul digital folosind inteligența artificială (GPT).
                </p>
                
                <div style="font-weight: 700; font-size: 13.5px; margin-bottom: 8px; color: #4f46e5;">Pasul 1: Copiază textul de mai jos și trimite-l către GPT împreună cu poza registrului:</div>
                <div class="prompt-box">
                    <button class="btn-copy-prompt" id="btn-copy-import-prompt">Copiază prompt</button>
                    <p class="prompt-text" id="import-prompt-text">Te rog să extragi datele din această fotografie a registrului universitar fizic. 
Generază un fișier de tip text în format CSV folosind ";" (punct și virgulă) ca separator. 
Coloanele trebuie să fie: "Nume Student" și apoi datele calendaristice identificate (ex: 15.09, 22.10). 
IMPORTANT: Dacă pentru o dată există două note, creează două coloane separate cu același nume de dată (ex: 15.09; 15.09; 22.10).
Notează absențele cu litera "a". 
Asigură-te că numele studenților sunt extrase complet și corect.</p>
                </div>

                <div style="font-weight: 700; font-size: 13.5px; margin-bottom: 8px; color: #10b981;">Pasul 2: Încarcă fișierul CSV generat de GPT:</div>
                <div class="import-upload-zone" id="csv-drop-zone">
                    <div class="import-zone-icon">📄</div>
                    <span id="csv-file-name">Trage fișierul aici sau dă click pentru selectare</span>
                    <input type="file" id="csv-file-input" accept=".csv" style="display: none;">
                </div>

                <div id="import-progress-area" style="display: none; margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
                    <div style="font-weight: 700; font-size: 13px; margin-bottom: 6px; color: #334155;" id="import-status-text">Se procesează...</div>
                    <div style="height: 8px; background: #e2e8f0; border-radius: 9999px; overflow: hidden;">
                        <div id="import-progress-bar" style="height: 100%; background: linear-gradient(90deg, #10b981, #059669); width: 0%; transition: width 0.3s;"></div>
                    </div>
                </div>

                <button id="btn-close-import">Anulează</button>
            </div>
        `;
        document.body.appendChild(importOverlay);

        // LOGICA MODAL IMPORT
        openImportBtn.addEventListener('click', (e) => {
            e.preventDefault();
            importOverlay.classList.add('active');
        });

        const closeImport = () => importOverlay.classList.remove('active');
        document.getElementById('btn-close-import').addEventListener('click', closeImport);
        const closeImportX = document.getElementById('btn-close-import-x');
        if (closeImportX) closeImportX.addEventListener('click', closeImport);
        importOverlay.addEventListener('click', (e) => { if (e.target === importOverlay) closeImport(); });

        document.getElementById('btn-copy-import-prompt').addEventListener('click', () => {
            const text = document.getElementById('import-prompt-text').innerText;
            navigator.clipboard.writeText(text).then(() => {
                const btn = document.getElementById('btn-copy-import-prompt');
                btn.innerText = '✅ Copiat!';
                setTimeout(() => btn.innerText = 'Copiază prompt', 2000);
            });
        });

        const dropZone = document.getElementById('csv-drop-zone');
        const fileInput = document.getElementById('csv-file-input');
        
        dropZone.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const file = e.target.files[0];
                document.getElementById('csv-file-name').innerText = file.name;
                handleCSVImport(file);
            }
        });


        // ==========================================
        // TURBO CSV IMPORT (DIRECT AJAX CU PROGRES LIN)
        // ==========================================
        async function handleCSVImport(file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const text = e.target.result;
                const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
                if (lines.length < 2) return alert("Fișierul CSV este gol sau invalid!");

                const allData = lines.map(line => line.split(';').map(v => v.replace(/"/g, '').trim()));
                const csvHeader = allData[0];
                const csvRows = allData.slice(1);

                const progressArea = document.getElementById('import-progress-area');
                const progressBar = document.getElementById('import-progress-bar');
                const statusText = document.getElementById('import-status-text');

                progressArea.style.display = 'block';
                progressBar.style.width = '0%';

                const allTheadRows = Array.from(document.querySelectorAll('#eregister thead tr'));
                let dateHeaderRow = null;
                const simuDateSlots = [];

                const monthMap = {
                    'ian': '01', 'feb': '02', 'mar': '03', 'apr': '04', 'mai': '05', 'iun': '06',
                    'iul': '07', 'aug': '08', 'sep': '09', 'oct': '10', 'nov': '11', 'dec': '12',
                    'jan': '01', 'may': '05', 'jun': '06', 'jul': '07'
                };

                allTheadRows.forEach(tr => {
                    const ths = Array.from(tr.querySelectorAll('th'));
                    let matches = 0;
                    ths.forEach(th => {
                        if (th.innerText.match(/\d{1,2}\s+[a-z]{3}/i) || th.innerText.match(/\d{1,2}[\.\/]\d{1,2}/)) matches++;
                    });
                    if (!dateHeaderRow || matches > dateHeaderRow.matches) { dateHeaderRow = { tr, matches, ths }; }
                });

                if (!dateHeaderRow || dateHeaderRow.matches === 0) {
                    alert("Nu am putut identifica nicio coloană cu date în antetul tabelului!");
                    progressArea.style.display = 'none'; return;
                }

                let currentVisualIdx = 0;
                dateHeaderRow.ths.forEach((th) => {
                    const colspan = parseInt(th.getAttribute('colspan') || '1');
                    let txt = th.innerText.toLowerCase().trim();
                    let m = txt.match(/(\d{1,2})\s+([a-z]{3})/) || txt.match(/(\d{1,2})[\.\/](\d{1,2})/);
                    if (m) {
                        let d = m[1].padStart(2, '0');
                        let monthPart = m[2];
                        let mon = isNaN(monthPart) ? monthMap[monthPart.substring(0,3)] : monthPart.padStart(2, '0');
                        if (mon) {
                            for (let c = 0; c < colspan; c++) { simuDateSlots.push({ date: `${d}.${mon}`, index: currentVisualIdx + c }); }
                        }
                    }
                    currentVisualIdx += colspan;
                });

                console.log("[Turbo Import] Harta sloturilor SIMU (Visual Index):", simuDateSlots);

                // Construim lista de studenți din tabelul SIMU
                const simuRows = Array.from(document.querySelectorAll('#eregister tbody tr:not(.register-notes-header)'));
                const simuStudents = simuRows.map(tr => {
                    const nameSpan = tr.querySelector('th.text-left span.text-dark');
                    const rawName = nameSpan ? nameSpan.innerText.trim() : '';
                    return {
                        tr,
                        name: rawName,
                        normalized: normalizeName(rawName)
                    };
                }).filter(s => s.name.length > 0);

                const tasksToSave = [];
                const unmatchedStudents = [];

                for (let i = 0; i < csvRows.length; i++) {
                    const row = csvRows[i];
                    const studentNameCSV = row[0] ? row[0].trim() : '';
                    if (!studentNameCSV) continue;

                    const matchedStudent = findMatchingStudent(studentNameCSV, simuStudents);
                    if (!matchedStudent) {
                        if (!unmatchedStudents.includes(studentNameCSV)) unmatchedStudents.push(studentNameCSV);
                        continue;
                    }

                    let usedSlots = [];
                    for (let j = 1; j < csvHeader.length; j++) {
                        const dateCSV = csvHeader[j] ? csvHeader[j].trim() : '';
                        const valCSV = row[j] ? row[j].trim() : '';
                        if (!valCSV) continue;

                        const slot = simuDateSlots.find(s => s.date === dateCSV && !usedSlots.includes(s.index));
                        if (slot) {
                            usedSlots.push(slot.index);
                            const cell = matchedStudent.tr.children[slot.index];
                            const input = cell ? cell.querySelector('input') : null;
                            if (input && !input.disabled) {
                                if (input.value.trim().toLowerCase() === valCSV.toLowerCase()) continue;
                                tasksToSave.push({
                                    studentName: matchedStudent.name,
                                    dateCSV,
                                    valCSV,
                                    input
                                });
                            }
                        }
                    }
                }

                if (tasksToSave.length === 0) {
                    progressArea.style.display = 'none';
                    if (unmatchedStudents.length > 0) {
                        alert("Nu s-au găsit note noi de actualizat! Studenți din CSV negăsiți:\n- " + unmatchedStudents.join('\n- '));
                    } else {
                        alert("Toate notele din CSV sunt deja la zi în catalog!");
                    }
                    return;
                }

                statusText.innerText = `Pornire Turbo Import: ${tasksToSave.length} note de salvat...`;

                const registerId = window.location.pathname.split('/').filter(Boolean).pop();
                const csrfToken = $('meta[name="csrf-token"]').attr('content') || document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

                let completedTasks = 0;
                const totalTasks = tasksToSave.length;

                for (let task of tasksToSave) {
                    statusText.innerText = `[${completedTasks + 1}/${totalTasks}] Se salvează: ${task.studentName} (${task.dateCSV} -> ${task.valCSV})...`;
                    task.input.value = task.valCSV;
                    applyHeatmap();

                    try {
                        await saveNoteDirectAJAX(task.input, task.valCSV, registerId, csrfToken);
                        completedTasks++;
                    } catch (err) {
                        console.warn(`[Turbo Import] Eroare la ${task.studentName}:`, err);
                    }

                    progressBar.style.width = `${Math.round((completedTasks / totalTasks) * 100)}%`;
                    await new Promise(r => setTimeout(r, 120));
                }

                statusText.innerText = `✅ Salvare finalizată! Sincronizare catalog...`;

                const baseUrl = getRegisterBaseUrl();
                $('#eregister').load(`${baseUrl}/${registerId} #eregister > table`, function () {
                    runAllDecorations();
                    $('.card-body').unblock();
                    if (window.toastr) {
                        toastr.success(`Turbo Import finalizat: ${completedTasks} note actualizate cu succes!`, "UPSC Plus", { progressBar: true });
                    }
                    if (unmatchedStudents.length > 0) {
                        setTimeout(() => {
                            alert(`Atenție: Următorii studenți din CSV nu au fost găsiți în catalog:\n- ${unmatchedStudents.join('\n- ')}`);
                        }, 500);
                    }
                    setTimeout(() => {
                        importOverlay.classList.remove('active');
                        progressArea.style.display = 'none';
                    }, 1200);
                });
            };
            reader.readAsText(file);
        }


        // Injectăm modalul pentru statistici în body
        const statsOverlay = document.createElement('div');
        statsOverlay.id = 'upsc-stats-overlay';
        statsOverlay.innerHTML = `
            <div id="upsc-stats-modal">
                <div class="upsc-modal-header">
                    <h3>📊 Statistici Evaluare Curentă</h3>
                    <button class="upsc-modal-close" id="btn-close-stats-x" title="Închide">✕</button>
                </div>
                <div class="stats-top-grid">
                    <div class="stat-card primary">
                        <div class="stat-val" id="stat-total-grades">0</div>
                        <div class="stat-desc">Note Totale</div>
                    </div>
                    <div class="stat-card danger">
                        <div class="stat-val" id="stat-absences">0</div>
                        <div class="stat-desc">Absențe (a) din total</div>
                    </div>
                    <div class="stat-card success">
                        <div class="stat-val" id="stat-avg">0.00</div>
                        <div class="stat-desc">Media Grupei</div>
                    </div>
                </div>
                
                <div class="stats-top-grid" id="periodic-eval-grid" style="display: none; margin-top: -10px;">
                    <div class="stat-card info" id="card-eval1" style="display: none;">
                        <div class="stat-val" id="stat-eval1">0.00</div>
                        <div class="stat-desc">Media Eval. Periodică 1</div>
                        <div class="stat-missing" id="stat-eval1-missing" style="display: none;"></div>
                    </div>
                    <div class="stat-card info" id="card-eval2" style="display: none;">
                        <div class="stat-val" id="stat-eval2">0.00</div>
                        <div class="stat-desc">Media Eval. Periodică 2</div>
                        <div class="stat-missing" id="stat-eval2-missing" style="display: none;"></div>
                    </div>
                </div>

                <div class="chart-wrap">
                    <div class="chart-title">Distribuția Notelor Curente</div>
                    <div id="chart-bars-container"></div>
                </div>
                <button id="btn-close-stats">Închide Statistici</button>
            </div>
        `;
        document.body.appendChild(statsOverlay);

        // LOGICA STATISTICI
        statsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let grades = [];
            let absences = 0;
            let totalProcessedCells = 0;
            let dist = {10:0, 9:0, 8:0, 7:0, 6:0, 5:0, 4:0, 3:0, 2:0, 1:0};
            
            let eval1Grades = [];
            let eval1Missing = 0;
            let eval2Grades = [];
            let eval2Missing = 0;

            document.querySelectorAll('input.student-note, input.student-evaluation').forEach(inp => {
                let td = inp.closest('td');
                if (!td) return;
                
                let tr = td.closest('tr');
                if (!tr || tr.classList.contains('register-notes-header')) return;

                let tdIndex = Array.from(tr.children).indexOf(td);
                let totalCols = tr.children.length;
                let val = inp.value.trim().toLowerCase();
                let n = parseFloat(val);

                // Extragem Evaluarea Periodică 1 (a 5-a de la sfârșit)
                if (tdIndex === totalCols - 5) {
                    if (val === '' || val === 'a') eval1Missing++; 
                    else if (!isNaN(n) && n >= 1 && n <= 10) eval1Grades.push(n);
                    return; 
                }
                
                // Extragem Evaluarea Periodică 2 (a 4-a de la sfârșit)
                if (tdIndex === totalCols - 4) {
                    if (val === '' || val === 'a') eval2Missing++;
                    else if (!isNaN(n) && n >= 1 && n <= 10) eval2Grades.push(n);
                    return; 
                }

                // Filtrăm restul ultimelor coloane să nu intre în notele curente
                if (tdIndex >= totalCols - 7) return; 

                totalProcessedCells++; 
                if(val === 'a') {
                    absences++;
                } else {
                    if(!isNaN(n) && n >= 1 && n <= 10) {
                        grades.push(n);
                        let rounded = Math.round(n);
                        dist[rounded] = (dist[rounded] || 0) + 1;
                    }
                }
            });

            document.getElementById('stat-total-grades').innerText = grades.length;
            document.getElementById('stat-absences').innerText = `${absences} din ${totalProcessedCells}`;
            let avg = grades.length > 0 ? (grades.reduce((a,b)=>a+b,0) / grades.length).toFixed(2).replace('.', ',') : '0,00';
            document.getElementById('stat-avg').innerText = avg;

            let card1 = document.getElementById('card-eval1');
            if (eval1Grades.length > 0) {
                document.getElementById('stat-eval1').innerText = (eval1Grades.reduce((a,b)=>a+b,0) / eval1Grades.length).toFixed(2).replace('.', ',');
                let missingBadge1 = document.getElementById('stat-eval1-missing');
                if (eval1Missing > 0) {
                    let totalEval1 = eval1Grades.length + eval1Missing;
					missingBadge1.innerText = `⚠️ ${eval1Missing} din ${totalEval1} fără notă`;
                    missingBadge1.style.display = 'inline-block';
                } else {
                    missingBadge1.style.display = 'none';
                }
                card1.style.display = 'block';
            } else {
                card1.style.display = 'none';
            }

            let card2 = document.getElementById('card-eval2');
            if (eval2Grades.length > 0) {
                document.getElementById('stat-eval2').innerText = (eval2Grades.reduce((a,b)=>a+b,0) / eval2Grades.length).toFixed(2).replace('.', ',');
                let missingBadge2 = document.getElementById('stat-eval2-missing');
                if (eval2Missing > 0) {
                    let totalEval2 = eval2Grades.length + eval2Missing;
                    missingBadge2.innerText = `⚠️ ${eval2Missing} din ${totalEval2} fără notă`;
                    missingBadge2.style.display = 'inline-block';
                } else {
                    missingBadge2.style.display = 'none';
                }
                card2.style.display = 'block';
            } else {
                card2.style.display = 'none';
            }
            let evalGrid = document.getElementById('periodic-eval-grid');
            if (eval1Grades.length > 0 || eval2Grades.length > 0) {
                evalGrid.style.display = 'grid';
                let activeCards = (eval1Grades.length > 0 ? 1 : 0) + (eval2Grades.length > 0 ? 1 : 0);
                evalGrid.style.gridTemplateColumns = activeCards === 1 ? '1fr' : '1fr 1fr';
            } else {
                evalGrid.style.display = 'none';
            }

            const chartContainer = document.getElementById('chart-bars-container');
            chartContainer.innerHTML = '';
            
            let maxFreq = Math.max(...Object.values(dist));
            if(maxFreq === 0) maxFreq = 1;

            for(let i = 10; i >= 1; i--) {
                let count = dist[i];
                let widthPct = (count / maxFreq) * 100;
                
                let barColor = '#f43f5e'; 
                if(i >= 9) barColor = '#10b981'; 
                else if(i >= 7) barColor = '#3b82f6'; 
                else if(i >= 5) barColor = '#f59e0b'; 

                chartContainer.innerHTML += `
                    <div class="bar-row">
                        <div class="bar-label">${i}</div>
                        <div class="bar-track">
                            <div class="bar-fill" style="width: 0%; background-color: ${barColor};" data-width="${widthPct}%"></div>
                        </div>
                        <div class="bar-count">${count}</div>
                    </div>
                `;
            }

            statsOverlay.classList.add('active');
            
            setTimeout(() => {
                document.querySelectorAll('.bar-fill').forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });
            }, 50);
        });

        const closeStats = () => {
            statsOverlay.classList.remove('active');
            setTimeout(() => {
                document.querySelectorAll('.bar-fill').forEach(bar => bar.style.width = '0%');
            }, 300);
        };
        document.getElementById('btn-close-stats').addEventListener('click', closeStats);
        const closeStatsX = document.getElementById('btn-close-stats-x');
        if (closeStatsX) closeStatsX.addEventListener('click', closeStats);
        statsOverlay.addEventListener('click', (e) => { if (e.target === statsOverlay) closeStats(); });

        // LOGICA EXPORT CSV
        exportBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!confirm("Descarc registrul complet în format Excel (CSV)?")) return;

            let csvArray = [];
            let rows = document.querySelectorAll('#eregister tbody tr:not(.register-notes-header)');
            
            if(rows.length === 0) {
                alert("Nu am găsit date pentru export!");
                return;
            }

            let groupName = "UPSC";
            const groupLi = Array.from(document.querySelectorAll('li.list-group-item'))
                                 .find(li => li.innerText.includes('Grup:'));
            if (groupLi) {
                groupName = groupLi.querySelector('b')?.innerText.trim() || "UPSC";
            }

            let headerRow = ["Nume Student"];
            let allHeaderThs = document.querySelectorAll('#eregister thead.sticky-thead th');
            
            let monthMap = { 
                'Jan':'01', 'Ian':'01', 'Feb':'02', 'Mar':'03', 'Apr':'04', 
                'May':'05', 'Mai':'05', 'Jun':'06', 'Iun':'06', 'Jul':'07', 
                'Iul':'07', 'Aug':'08', 'Sep':'09', 'Oct':'10', 'Nov':'11', 'Dec':'12' 
            };

            allHeaderThs.forEach((th, index) => {
                if (index === 0) return; 

                let cleanText = th.innerText.split('Sigur stergeti')[0]; 
                cleanText = cleanText.replace(/\s+/g, ' ').trim(); 
                cleanText = cleanText.replace(/Semestrul \d/gi, '').replace(groupName, '').trim();
                cleanText = cleanText.replace(/\bAZI\b/gi, '').trim();
                cleanText = cleanText.replace(/^[-–—\s]+|[-–—\s]+$/g, '');

                let parts = cleanText.split(' ');
                if (parts.length >= 2 && !isNaN(parts[0]) && monthMap[parts[1]]) {
                    let day = parts[0].padStart(2, '0');
                    let month = monthMap[parts[1]];
                    let year = new Date().getFullYear(); 
                    cleanText = `${day}.${month}.${year}`; 
                }
                
                if (cleanText === "") cleanText = `Coloana ${index}`;
                headerRow.push(`"${cleanText}"`);
            });
            
            csvArray.push(headerRow.join(";"));

            rows.forEach(tr => {
                let rowData = [];
                let nameSpan = tr.querySelector('th.text-left span.text-dark');
                let name = nameSpan ? nameSpan.innerText.trim() : "Necunoscut";
                rowData.push(`"${name}"`);

                tr.querySelectorAll('input.student-note, input.student-evaluation').forEach(inp => {
                    rowData.push(`"${inp.value.trim()}"`);
                });
                
                csvArray.push(rowData.join(";"));
            });

            let csvString = csvArray.join("\n");
            let blob = new Blob(["\uFEFF" + csvString], { type: 'text/csv;charset=utf-8;' }); 
            let url = URL.createObjectURL(blob);
            
            let a = document.createElement("a");
            a.setAttribute("href", url);
            let dateStr = new Date().toLocaleDateString('ro-RO').replace(/\./g, '-');
            a.setAttribute("download", `Registru_${groupName}_${dateStr}.csv`);
            
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }

    // Sectiunea Tematici
    const eregisterRow = document.getElementById('eregister')?.closest('.row');
    if (eregisterRow && !document.getElementById('upsc-topics-toolbar-wrapper')) {
        const topicsActionContainer = document.createElement('div');
        topicsActionContainer.id = 'upsc-topics-toolbar-wrapper';
        
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'toggle-topics-btn';
        toggleBtn.className = 'upsc-btn';
        toggleBtn.innerHTML = '📋 Gestionare teme curriculum';
        
        const buttonsToolbar = document.createElement('div');
        buttonsToolbar.id = 'upsc-topics-toolbar';
        buttonsToolbar.innerHTML = `
            <div style="display: flex; gap: 12px; width: 100%; margin-bottom: 12px; align-items: stretch;">
                <textarea id="upsc-bulk-topics-1" placeholder="Listă Tematici A (ex: Curs)" style="flex: 1; min-height: 100px; padding: 12px; border-radius: 10px; border: 1.5px solid #cbd5e1; font-size: 13.5px; font-family: inherit; resize: vertical; box-sizing: border-box;"></textarea>
                <textarea id="upsc-bulk-topics-2" placeholder="Listă Tematici B (ex: Seminar)" style="flex: 1; min-height: 100px; padding: 12px; border-radius: 10px; border: 1.5px solid #cbd5e1; font-size: 13.5px; font-family: inherit; resize: vertical; box-sizing: border-box;"></textarea>
            </div>
            <div style="display: flex; gap: 10px; width: 100%; flex-wrap: wrap; align-items: center;">
                <button class="upsc-btn upsc-btn-apply" id="btn-bulk-apply-topics">🚀 Aplică Temele (Alternat A-B)</button>
                <button class="upsc-btn upsc-btn-copy" id="btn-copy-topics">📄 Copiază în Memorie</button>
                <button class="upsc-btn upsc-btn-paste" id="btn-paste-topics">📋 Lipește din Memorie</button>
                <div style="font-size: 12px; color: #64748b; margin-top: 6px; width: 100%;">
                    💡 <b>Tip:</b> Listele vor fi aplicate alternativ (Rând 1 din Lista A, Rând 2 din Lista B, etc). Dacă vrei doar o listă, las-o pe a doua goală.
                </div>
            </div>
        `;

        topicsActionContainer.appendChild(toggleBtn);
        topicsActionContainer.appendChild(buttonsToolbar);
        eregisterRow.parentNode.insertBefore(topicsActionContainer, eregisterRow.nextSibling);

        let showTopicsToolbar = localStorage.getItem('upsc_show_topics_toolbar') === 'true';
        const updateToolbarUI = (show) => {
            buttonsToolbar.style.display = show ? 'flex' : 'none';
            toggleBtn.classList.toggle('active', show);
        };
        updateToolbarUI(showTopicsToolbar);

        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showTopicsToolbar = !showTopicsToolbar;
            localStorage.setItem('upsc_show_topics_toolbar', showTopicsToolbar);
            updateToolbarUI(showTopicsToolbar);
        });

        async function waitForLivewire() {
            return new Promise(resolve => {
                let checks = 0;
                let interval = setInterval(() => {
                    checks++;
                    if (!document.querySelector('.blockUI') || checks > 50) { clearInterval(interval); resolve(); }
                }, 100);
            });
        }

        document.getElementById('btn-bulk-apply-topics').addEventListener('click', async () => {
            const listA = document.getElementById('upsc-bulk-topics-1').value.split('\n').map(l => l.trim()).filter(l => l !== '');
            const listB = document.getElementById('upsc-bulk-topics-2').value.split('\n').map(l => l.trim()).filter(l => l !== '');
            
            if (listA.length === 0 && listB.length === 0) return showToast("⚠️ Introdu cel puțin o listă de teme!");

            // 1. Mapăm input-urile la secțiuni (Teorie vs Seminar)
            const inputMappings = [];
            let currentSection = 'A'; 
            
            const allRows = document.querySelectorAll('tr');
            allRows.forEach(tr => {
                const cells = tr.querySelectorAll('th, td');
                cells.forEach(cell => {
                    const text = cell.innerText.toUpperCase();
                    const style = cell.getAttribute('style') || "";
                    if (text.includes('SEMINAR') || style.includes('004080')) {
                        currentSection = 'B';
                    } 
                    else if (text.includes('CURS') || text.includes('TEORIE') || style.includes('008000')) {
                        currentSection = 'A';
                    }
                });
                if (tr.querySelector('input[wire\\:model="topic"]')) {
                    inputMappings.push(currentSection);
                }
            });

            if (inputMappings.length === 0) return showToast("❌ Nu am găsit câmpuri de tematică!");

            const countA = inputMappings.filter(s => s === 'A').length;
            const countB = inputMappings.filter(s => s === 'B').length;

            showToast(`🚀 Pornesc: ${countA} Teorie, ${countB} Seminar...`);

            let idxA = 0;
            let idxB = 0;
            let totalSaved = 0;

            // 2. Procesăm fiecare input folosind maparea salvată
            for (let i = 0; i < inputMappings.length; i++) {
                const sectionOfInput = inputMappings[i];
                const currentInputs = document.querySelectorAll('input[wire\\:model="topic"]');
                const topicInput = currentInputs[i];
                if (!topicInput) continue;

                let theme = "";
                if (sectionOfInput === 'A') {
                    if (idxA < listA.length) theme = listA[idxA++];
                } else {
                    if (idxB < listB.length) theme = listB[idxB++];
                }

                if (theme && topicInput.value !== theme) {
                    topicInput.value = theme;
                    topicInput.dispatchEvent(new window.Event('input', { bubbles: true }));
                    
                    const parentTr = topicInput.closest('tr');
                    const saveBtn = parentTr.querySelector('input[type="submit"][value="Salvare"]');
                    if (saveBtn) { 
                        saveBtn.click(); 
                        totalSaved++; 
                        await new Promise(r => setTimeout(r, 600)); 
                        await waitForLivewire(); 
                    }
                }
            }
            showToast(`✅ Gata! S-au actualizat ${totalSaved} teme.`);
        });

        document.getElementById('btn-copy-topics').addEventListener('click', () => {
            const topicInputs = Array.from(document.querySelectorAll('input[wire\\:model="topic"]'));
            const topics = topicInputs.map(inp => inp.value);
            if (topics.length === 0) return alert("Nu am găsit nicio temă pe această pagină.");
            localStorage.setItem('upsc_saved_topics', JSON.stringify(topics));
            alert(`S-au copiat ${topics.length} teme în memorie. Poți merge în alt tab să le lipești.`);
        });

        document.getElementById('btn-paste-topics').addEventListener('click', async () => {
            const savedTopics = JSON.parse(localStorage.getItem('upsc_saved_topics') || '[]');
            if (savedTopics.length === 0) return alert("Nu există teme copiate în memorie.");
            
            const totalInputs = document.querySelectorAll('input[wire\\:model="topic"]').length;
            if (totalInputs === 0) return alert("Această grupă nu are rânduri pentru tematici adăugate.");
            
            if (!confirm(`Lipim ${savedTopics.length} teme aici? Nu apăsa pe nimic pe durata procesului!`)) return;

            let pastedCount = 0;
            for (let i = 0; i < totalInputs; i++) {
                if (savedTopics[i] && savedTopics[i].trim() !== '') {
                    let currentInput = document.querySelectorAll('input[wire\\:model="topic"]')[i];
                    if (!currentInput) continue;

                    if (currentInput.value !== savedTopics[i]) {
                        currentInput.value = savedTopics[i];
                        currentInput.dispatchEvent(new window.Event('input', { bubbles: true }));
                        
                        let saveBtn = currentInput.closest('tr').querySelector('input[type="submit"][value="Salvare"]');
                        if (saveBtn) { saveBtn.click(); pastedCount++; await new Promise(r => setTimeout(r, 200)); await waitForLivewire(); }
                    }
                }
            }
            alert(`S-au completat cu succes ${pastedCount} teme noi!`);
        });
    }

    // ==========================================
    // 4. UI EXTRAS (Heatmap, Data, Crosshair, Bulk)
    // ==========================================
    function applyHeatmap() {
        document.querySelectorAll('#eregister input.student-note, #eregister input.student-evaluation, #eregister tbody td input').forEach(input => {
            let val = (input.value || '').toLowerCase().trim();
            input.classList.remove('grade-excellent', 'grade-good', 'grade-ok', 'grade-bad', 'grade-abs');
            if (val === 'a') {
                input.classList.add('grade-abs');
            } else if (val !== '') {
                let n = parseFloat(val.replace(',', '.'));
                if (!isNaN(n)) {
                    if (n >= 8.5) input.classList.add('grade-excellent');
                    else if (n >= 6.5) input.classList.add('grade-good');
                    else if (n >= 4.5) input.classList.add('grade-ok');
                    else if (n > 0) input.classList.add('grade-bad');
                }
            }
        });
    }

    function reformatTopicDates() {
        document.querySelectorAll('tr[wire\\:id] td:nth-child(2) input[readonly]').forEach(input => {
            if (/^\d{4}-\d{2}-\d{2}$/.test(input.value)) {
                const p = input.value.split('-'); input.value = `${p[2]}.${p[1]}.${p[0]}`;
                input.style.cssText = "background-color:transparent; border:none; font-weight:bold; color:#5a5c69; box-shadow:none; padding:0;";
            }
        });
    }

    function highlightDateColumns() {
        const eregisterTable = document.querySelector('#eregister table.table-sm');
        if (!eregisterTable) return;

        const isEnabled = localStorage.getItem('upsc_highlight_past_cols') !== null 
            ? localStorage.getItem('upsc_highlight_past_cols') === 'true' 
            : true;

        const headerRow = eregisterTable.querySelector('thead tr.register-notes-header');
        const tbodyRows = Array.from(eregisterTable.querySelectorAll('tbody tr'));
        if (!headerRow || tbodyRows.length === 0) return;

        const headerCells = Array.from(headerRow.children);
        const totalCols = headerCells.length;

        // Dacă funcționalitatea este dezactivată, curățăm toate clasele și badge-urile
        if (!isEnabled) {
            eregisterTable.querySelectorAll('.col-past, .col-today, .col-last-past').forEach(el => {
                el.classList.remove('col-past', 'col-today', 'col-last-past');
            });
            eregisterTable.querySelectorAll('.badge-today').forEach(el => el.remove());
            eregisterTable.querySelectorAll('.input-missing-past').forEach(el => el.classList.remove('input-missing-past'));
            return;
        }

        // Calculăm data curentă în format YYYY-MM-DD (ora locală a utilizatorului)
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const todayStr = `${year}-${month}-${day}`;

        let lastPastColIdx = -1;

        // Coloanele de lecții sunt de la indexul 1 până la totalCols - 7 exclusiv (ultimele 7 sunt de totalizare)
        const maxLessonCol = Math.max(1, totalCols - 7);

        for (let colIdx = 1; colIdx < maxLessonCol; colIdx++) {
            // Obținem data coloanei din primul rând care conține un input cu data-date
            let colDate = null;
            for (let r = 0; r < Math.min(tbodyRows.length, 5); r++) {
                const cell = tbodyRows[r]?.children[colIdx];
                const inp = cell?.querySelector('input[data-date]');
                if (inp && inp.getAttribute('data-date')) {
                    colDate = inp.getAttribute('data-date').trim();
                    break;
                }
            }

            // Fallback dacă nu a fost găsit în tbody: căutăm în header wire:initial-data
            if (!colDate && headerCells[colIdx]) {
                const headerHtml = headerCells[colIdx].innerHTML;
                const match = headerHtml.match(/["']date["']\s*:\s*["'](\d{4}-\d{2}-\d{2})["']/);
                if (match) colDate = match[1];
            }

            const th = headerCells[colIdx];
            if (!th) continue;

            // Curățăm clasele vechi de pe header
            th.classList.remove('col-past', 'col-today', 'col-last-past');
            const existingBadge = th.querySelector('.badge-today');

            if (!colDate || !/^\d{4}-\d{2}-\d{2}$/.test(colDate)) {
                if (existingBadge) existingBadge.remove();
                // Dacă nu avem o dată validă pentru coloană, curățăm și celulele
                tbodyRows.forEach(row => {
                    const td = row.children[colIdx];
                    if (td) {
                        td.classList.remove('col-past', 'col-today', 'col-last-past');
                        const inp = td.querySelector('input');
                        if (inp) inp.classList.remove('input-missing-past');
                    }
                });
                continue;
            }

            const isPast = colDate < todayStr;
            const isToday = colDate === todayStr;

            if (isPast) {
                th.classList.add('col-past');
                lastPastColIdx = colIdx;
                if (existingBadge) existingBadge.remove();
            } else if (isToday) {
                th.classList.add('col-today');
                lastPastColIdx = colIdx;
                if (!existingBadge) {
                    const badge = document.createElement('span');
                    badge.className = 'badge-today';
                    badge.textContent = 'AZI';
                    th.appendChild(badge);
                }
            } else {
                if (existingBadge) existingBadge.remove();
            }

            // Aplicăm stilurile pe fiecare celulă din rândurile tabelului
            tbodyRows.forEach(row => {
                const td = row.children[colIdx];
                if (!td) return;

                td.classList.remove('col-past', 'col-today', 'col-last-past');
                const inp = td.querySelector('input.student-note, input.student-evaluation');

                if (isPast) {
                    td.classList.add('col-past');
                    if (inp) {
                        const val = inp.value.trim();
                        if (val === '' && !inp.disabled && !inp.readOnly) {
                            inp.classList.add('input-missing-past');
                            inp.title = "Atenție: Lecție trecută fără notă sau absență completată";
                        } else {
                            inp.classList.remove('input-missing-past');
                            if (inp.title === "Atenție: Lecție trecută fără notă sau absență completată") {
                                inp.removeAttribute('title');
                            }
                        }
                    }
                } else if (isToday) {
                    td.classList.add('col-today');
                    if (inp) {
                        inp.classList.remove('input-missing-past');
                        if (inp.title === "Atenție: Lecție trecută fără notă sau absență completată") {
                            inp.removeAttribute('title');
                        }
                    }
                } else {
                    if (inp) {
                        inp.classList.remove('input-missing-past');
                        if (inp.title === "Atenție: Lecție trecută fără notă sau absență completată") {
                            inp.removeAttribute('title');
                        }
                    }
                }
            });
        }

        // Aplicăm linia de demarcație pe ultima coloană din trecut sau de azi
        if (lastPastColIdx !== -1) {
            if (headerCells[lastPastColIdx]) {
                headerCells[lastPastColIdx].classList.add('col-last-past');
            }
            tbodyRows.forEach(row => {
                const td = row.children[lastPastColIdx];
                if (td) td.classList.add('col-last-past');
            });
        }
    }

    let lastHoveredCol = -1;
    let isMouseMoveThrottled = false;

    document.addEventListener('mousemove', e => { 
        const eregister = document.getElementById('eregister');
        if (!eregister) return;

        if (eregister.classList.contains('disable-hover')) {
            if (!document.activeElement || !document.activeElement.closest('#eregister')) {
                eregister.classList.remove('disable-hover');
            }
        }

        if (isMouseMoveThrottled) return;
        isMouseMoveThrottled = true;

        requestAnimationFrame(() => {
            isMouseMoveThrottled = false;
            let cell = e.target.closest('td, th');
            if (cell && cell.closest('#eregister')) {
                let tr = cell.closest('tr');
                if (tr) {
                    let index = Array.from(tr.children).indexOf(cell);
                    if (index !== lastHoveredCol && index >= 0) {
                        document.querySelectorAll('.hovered-col').forEach(el => el.classList.remove('hovered-col'));
                        document.querySelectorAll('#eregister tr').forEach(row => {
                            if (row.children[index]) row.children[index].classList.add('hovered-col');
                        });
                        lastHoveredCol = index;
                    }
                }
            }
        });
    }, { passive: true });
    document.addEventListener('focusin', e => {
        if (e.target.matches('#eregister input, input[wire\\:model="topic"]')) {
            document.getElementById('eregister')?.classList.add('disable-hover');
            document.querySelectorAll('.hovered-col, .col-hover').forEach(el => {
                el.classList.remove('hovered-col');
                el.classList.remove('col-hover');
            });
            lastHoveredCol = -1; 

            document.querySelectorAll('.focused-row').forEach(el => el.classList.remove('focused-row'));
            document.querySelectorAll('.focused-col').forEach(el => el.classList.remove('focused-col'));

            let cell = e.target.closest('td, th');
            if (cell && cell.closest('#eregister')) {
                let tr = cell.closest('tr');
                tr.classList.add('focused-row');
                let index = Array.from(tr.children).indexOf(cell);
                document.querySelectorAll('#eregister tr').forEach(row => {
                    if (row.children[index]) row.children[index].classList.add('focused-col');
                });
            }
        }
    });

    document.addEventListener('focusout', e => {
        if (e.target.matches('#eregister input, input[wire\\:model="topic"]')) {
            setTimeout(() => {
                if (!document.activeElement || !document.activeElement.closest('#eregister')) {
                    document.querySelectorAll('.focused-row').forEach(el => el.classList.remove('focused-row'));
                    document.querySelectorAll('.focused-col').forEach(el => el.classList.remove('focused-col'));
                }
            }, 60);
        }
    });

    document.addEventListener('click', e => {
        let th = e.target.closest('#eregister table.table-sm thead tr.register-notes-header th');
        if (th && th.closest('#eregister')) {
            let tr = th.closest('tr');
            let index = Array.from(tr.children).indexOf(th);
            if (index > 0) {
                document.querySelectorAll('.focused-row').forEach(el => el.classList.remove('focused-row'));
                document.querySelectorAll('.focused-col').forEach(el => el.classList.remove('focused-col'));
                document.querySelectorAll('#eregister tr').forEach(row => {
                    if (row.children[index]) row.children[index].classList.add('focused-col');
                });
            }
        }
    });

    // Curățare / actualizare alertă lipsă notă instant la tastare + reactualizare Heatmap culori
    document.addEventListener('input', e => {
        if (e.target.matches('#eregister input.student-note, #eregister input.student-evaluation, #eregister tbody td input')) {
            applyHeatmap();
            if (e.target.value.trim() !== '') {
                e.target.classList.remove('input-missing-past');
                if (e.target.title === "Atenție: Lecție trecută fără notă sau absență completată") {
                    e.target.removeAttribute('title');
                }
            } else if (e.target.closest('td.col-past')) {
                e.target.classList.add('input-missing-past');
                e.target.title = "Atenție: Lecție trecută fără notă sau absență completată";
            }
        }
    });

    async function fillAbsencesForColumn(colIdx, dateName) {
        const registerId = getRegisterId();
        const csrfToken = (window.jQuery && window.jQuery('meta[name="csrf-token"]').attr('content')) || document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

        const rows = Array.from(document.querySelectorAll('#eregister tbody tr:not(.register-notes-header)'));
        const emptyInputs = [];
        for (let tr of rows) {
            const cell = tr.children[colIdx];
            const input = cell ? cell.querySelector('input.student-note, input.student-evaluation') : null;
            if (input && !input.disabled && input.value.trim() === '') {
                emptyInputs.push(input);
            }
        }

        if (emptyInputs.length === 0) {
            if (window.toastr) toastr.info("Toate celulele din această dată sunt deja completate!", "UPSC Plus");
            else showToast("Toate celulele din această dată sunt deja completate!");
            return;
        }

        const dateSuffix = dateName ? ` (${dateName})` : '';
        showToast(`⚡ Se pun absențe pentru ${emptyInputs.length} studenți...`, 4000);
        let processedCount = 0;

        for (let input of emptyInputs) {
            input.value = 'a';
            applyHeatmap();
            try {
                await saveNoteDirectAJAX(input, 'a', registerId, csrfToken);
                processedCount++;
            } catch (err) {
                console.warn('[Bulk Absences] Eroare la salvarea notei:', err);
            }
            await new Promise(r => setTimeout(r, 90));
        }

        if (processedCount > 0) {
            if (window.toastr) {
                toastr.success(`S-au marcat ${processedCount} absențe${dateSuffix}! Se sincronizează catalogul...`, "UPSC Plus", { progressBar: true });
            }
            const baseUrl = getRegisterBaseUrl();
            $('#eregister').load(`${baseUrl}/${registerId} #eregister > table`, function () {
                runAllDecorations();
                if ($('.card-body').unblock) $('.card-body').unblock();
            });
        } else {
            if (window.toastr) {
                toastr.error("Nu s-a putut salva nicio absență. Verificați sesiunea sau consola (F12).", "Eroare Salvare", { progressBar: true });
            } else {
                showToast("⚠️ Nu s-a putut salva nicio absență.");
            }
        }
    }

    function initColumnBulkButtons() {
        const eregisterTable = document.querySelector('#eregister table.table-sm');
        if (!eregisterTable) return;

        const headerRow = eregisterTable.querySelector('thead tr.register-notes-header');
        if (!headerRow) return;

        const headerCells = Array.from(headerRow.children);
        const totalCols = headerCells.length;
        const maxLessonCol = Math.max(1, totalCols - 7);

        for (let colIdx = 1; colIdx < maxLessonCol; colIdx++) {
            const th = headerCells[colIdx];
            if (!th) continue;

            const isDateCol = th.innerText.match(/\d{1,2}\s+[a-z]{3}/i) || 
                              th.innerText.match(/\d{1,2}[\.\/]\d{1,2}/) || 
                              th.querySelector('span[style*="color"]');
            if (!isDateCol) continue;

            let bulkBtn = th.querySelector('.btn-bulk-abs-col');
            if (!bulkBtn) {
                bulkBtn = document.createElement('button');
                bulkBtn.type = 'button';
                bulkBtn.className = 'btn-bulk-abs-col';
                bulkBtn.innerHTML = '⚡ a';
                bulkBtn.title = "Click: Pune absență ('a') tuturor celor fără notă din această coloană.";
                
                let resetConfirmTimer = null;

                bulkBtn.addEventListener('click', async (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();

                    if (bulkBtn.dataset.saving === 'true') return;

                    // Pasul 1: Primul click -> transformare inline în "Sigur? ⚡" (fără pop-up)
                    if (!bulkBtn.classList.contains('btn-bulk-confirming')) {
                        // Resetăm orice alt buton care așteaptă confirmare
                        document.querySelectorAll('.btn-bulk-abs-col.btn-bulk-confirming').forEach(b => {
                            b.classList.remove('btn-bulk-confirming');
                            b.innerHTML = '⚡ a';
                            b.title = "Click: Pune absență ('a') tuturor celor fără notă din această coloană.";
                        });

                        // Verificăm dacă sunt celule goale
                        const rows = document.querySelectorAll('#eregister tbody tr:not(.register-notes-header)');
                        let hasEmpty = false;
                        for (let r of rows) {
                            const cell = r.children[colIdx];
                            const inp = cell ? cell.querySelector('input.student-note, input.student-evaluation') : null;
                            if (inp && !inp.disabled && inp.value.trim() === '') {
                                hasEmpty = true;
                                break;
                            }
                        }
                        if (!hasEmpty) {
                            if (window.toastr) toastr.info("Toate celulele din această dată sunt deja completate!", "UPSC Plus");
                            else showToast("Toate celulele sunt deja completate!");
                            return;
                        }

                        bulkBtn.classList.add('btn-bulk-confirming');
                        bulkBtn.innerHTML = 'Sigur? ⚡';
                        bulkBtn.title = "Click din nou pentru a confirma marcarea absențelor ('a')";

                        if (resetConfirmTimer) clearTimeout(resetConfirmTimer);
                        resetConfirmTimer = setTimeout(() => {
                            bulkBtn.classList.remove('btn-bulk-confirming');
                            bulkBtn.innerHTML = '⚡ a';
                            bulkBtn.title = "Click: Pune absență ('a') tuturor celor fără notă din această coloană.";
                        }, 3500);
                        return;
                    }

                    // Pasul 2: Al doilea click -> Execuție salvare
                    if (resetConfirmTimer) clearTimeout(resetConfirmTimer);
                    bulkBtn.classList.remove('btn-bulk-confirming');
                    bulkBtn.dataset.saving = 'true';
                    bulkBtn.innerHTML = '⏳ ...';
                    bulkBtn.disabled = true;

                    const cleanDate = th.innerText.replace(/AZI/g, '').replace(/⚡ a/g, '').replace(/Sigur\?\s*⚡?/g, '').trim().split('\n')[0];
                    try {
                        await fillAbsencesForColumn(colIdx, cleanDate);
                    } finally {
                        bulkBtn.dataset.saving = 'false';
                        bulkBtn.disabled = false;
                        bulkBtn.innerHTML = '⚡ a';
                        bulkBtn.title = "Click: Pune absență ('a') tuturor celor fără notă din această coloană.";
                    }
                });

                th.appendChild(bulkBtn);
            }
        }
    }

    // Resetare stare buton confirmare la click în afara lui
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.btn-bulk-abs-col.btn-bulk-confirming')) {
            document.querySelectorAll('.btn-bulk-abs-col.btn-bulk-confirming').forEach(b => {
                b.classList.remove('btn-bulk-confirming');
                b.innerHTML = '⚡ a';
                b.title = "Click: Pune absență ('a') tuturor celor fără notă din această coloană.";
            });
        }
    }, true);

    function runAllDecorations() {
        applyHeatmap();
        reformatTopicDates();
        highlightDateColumns();
        initColumnBulkButtons();
    }

    let decorationTimeout = null;
    const observer = new MutationObserver((mutations) => {
        // Ignorăm mutațiile din propriile elemente de UI ale extensiei
        const isSelfUI = mutations.every(m => {
            const t = m.target;
            return t && (
                t.id === 'upsc-toast-msg' ||
                (t.closest && t.closest('#upsc-settings-panel, #upsc-stats-modal, #upsc-import-modal, #upsc-controls-bar, #upsc-toast-msg'))
            );
        });
        if (isSelfUI) return;

        if (decorationTimeout) clearTimeout(decorationTimeout);
        decorationTimeout = setTimeout(() => {
            observer.disconnect();
            try {
                runAllDecorations();
            } finally {
                const targetEl = document.getElementById('eregister') || document.body;
                observer.observe(targetEl, { childList: true, subtree: true });
            }
        }, 100);
    });

    runAllDecorations();
    const initialObsTarget = document.getElementById('eregister') || document.body;
    observer.observe(initialObsTarget, { childList: true, subtree: true });

    document.addEventListener('dblclick', async function(e) {
        let th = e.target.closest('th');
        if (th && th.closest('thead')) {
            const isDateCol = th.innerText.match(/\d{1,2}\s+[a-z]{3}/i) || th.querySelector('span[style*="color"]');
            if (!isDateCol) return;

            const rowCells = Array.from(th.parentNode.children);
            let visualColIndex = 0;
            for (let cell of rowCells) {
                if (cell === th) break;
                visualColIndex += parseInt(cell.getAttribute('colspan') || '1');
            }
            fillAbsencesForColumn(visualColIndex, '');
        }
    });
    // ==========================================
    // 5. FOCUS PERSISTENT ȘI NOTE TASTAURĂ
    // ==========================================
    let focusInterval = null;
    function enforcePersistentFocus(selector) {
        if (focusInterval) clearInterval(focusInterval);
        let attempts = 0;
        focusInterval = setInterval(() => {
            attempts++;
            const isBlocked = !!document.querySelector('.blockUI');
            const targetEl = document.querySelector(selector);
            if (!isBlocked && targetEl && !targetEl.disabled) {
                if (document.activeElement !== targetEl) { targetEl.focus(); targetEl.select(); }
            }
            if (attempts >= 40) clearInterval(focusInterval);
        }, 100);
    }

    const inputsSelector = 'input.student-note, input.student-evaluation';
    const topicSelector = 'input[wire\\:model="topic"]';

    function triggerAutoSaveNote(input, valueToSave) {
        if (!window.saveEvaluationButton || !window.saveEvaluationButton.isPatched) {
            patchSaveFunction();
        }
        if (window.jQuery) {
            window.activeEvaluationInputField = window.jQuery(input);
        }
        input.value = valueToSave;
        applyHeatmap();

        // Try to click the matching button in the popup (for student-note inputs where the new site requires choosing from the popup)
        const popup = document.getElementById('keyboardEvaluationsPopup');
        if (popup) {
            const buttons = Array.from(popup.querySelectorAll('button'));
            const targetBtn = buttons.find(b => b.innerText.trim().toLowerCase() === valueToSave.toLowerCase());
            if (targetBtn) {
                targetBtn.click();
            }
        }

        const currentTd = input.closest('td');
        const tdIndex = Array.from(currentTd.closest('tr').children).indexOf(currentTd);
        const nextRow = currentTd.closest('tr').nextElementSibling;
        
        if (nextRow) {
            const targetTd = nextRow.children[tdIndex];
            if (targetTd) {
                const targetInput = targetTd.querySelector(inputsSelector);
                if (targetInput && !targetInput.disabled) {
                    let selector = null;
                    if (targetInput.hasAttribute('data-event-id')) selector = `input[data-student-id="${targetInput.getAttribute('data-student-id')}"][data-event-id="${targetInput.getAttribute('data-event-id')}"]`;
                    else if (targetInput.hasAttribute('data-type')) selector = `input[data-student-id="${targetInput.getAttribute('data-student-id')}"][data-type="${targetInput.getAttribute('data-type')}"]`;
                    if (selector) enforcePersistentFocus(selector);
                }
            }
        }
        
        const saveBtn = document.querySelector('#saveEvaluationButton');
        if (saveBtn) saveBtn.click();
    }


    // ==========================================
    // EXCEL / GOOGLE SHEETS MULTI-CELL CLIPBOARD PASTE
    // ==========================================
    async function handleExcelPaste(e) {
        const active = document.activeElement;
        if (!active || !active.matches('input.student-note, input.student-evaluation')) return;

        const clipboardData = (e.clipboardData || window.clipboardData);
        if (!clipboardData) return;

        const rawText = clipboardData.getData('text') || '';
        if (!rawText) return;

        const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(l => l !== '');
        if (lines.length <= 1 && !lines[0]?.includes('\t')) {
            // Este o singură valoare simplă, lăsăm fluxul standard
            return;
        }

        // Avem date multi-celulă din Excel / Sheets!
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        const currentTd = active.closest('td');
        const currentTr = currentTd ? currentTd.closest('tr') : null;
        if (!currentTd || !currentTr) return;

        const currentTbody = currentTr.closest('tbody');
        const allRows = Array.from(currentTbody.querySelectorAll('tr:not(.register-notes-header)'));
        const startRowIndex = allRows.indexOf(currentTr);
        if (startRowIndex === -1) return;

        const tdIndex = Array.from(currentTr.children).indexOf(currentTd);
        const registerId = getRegisterId();
        const csrfToken = (window.jQuery && window.jQuery('meta[name="csrf-token"]').attr('content')) || document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

        const validGradeRegex = /^(10|[1-9]|a)$/i;
        let savedCount = 0;
        showToast(`📋 Se lipesc ${lines.length} valori din Excel...`, 2000);

        for (let i = 0; i < lines.length; i++) {
            const targetRow = allRows[startRowIndex + i];
            if (!targetRow) break;

            const targetTd = targetRow.children[tdIndex];
            const targetInput = targetTd ? targetTd.querySelector('input.student-note, input.student-evaluation') : null;
            if (!targetInput || targetInput.disabled) continue;

            let val = lines[i].split('\t')[0].trim();
            if (val === '-' || val === '/' || val.toLowerCase() === 'abs') val = 'a';

            if (validGradeRegex.test(val)) {
                val = val.toLowerCase();
                targetInput.value = val;
                applyHeatmap();

                try {
                    await saveNoteDirectAJAX(targetInput, val, registerId, csrfToken);
                    savedCount++;
                } catch (err) {
                    console.warn('[Excel Paste] Eroare:', val, err);
                }
                await new Promise(r => setTimeout(r, 100));
            }
        }

        if (savedCount > 0) {
            if (window.toastr) {
                toastr.success(`S-au lipit și salvat ${savedCount} note din Excel!`, "UPSC Plus", { progressBar: true });
            } else {
                showToast(`✅ S-au lipit și salvat ${savedCount} note din Excel!`);
            }
            const baseUrl = getRegisterBaseUrl();
            $('#eregister').load(`${baseUrl}/${registerId} #eregister > table`, function() {
                runAllDecorations();
                if ($('.card-body').unblock) $('.card-body').unblock();
            });
        } else {
            showToast("⚠️ Nicio notă validă (1-10 sau 'a') nu a putut fi extrasă.", 4000);
        }
    }

    document.addEventListener('paste', handleExcelPaste, true);
    document.addEventListener('keydown', function(e) {
        const key = e.key.toLowerCase();
        if (key.startsWith('arrow') || key === 'tab') { if (focusInterval) clearInterval(focusInterval); }

        if (e.target.matches(topicSelector)) {
            const currentTopicInput = e.target; const currentRow = currentTopicInput.closest('tr');
            if (key === 'tab' || key === 'arrowdown') {
                e.preventDefault(); const nextRow = currentRow.nextElementSibling;
                const saveBtn = currentRow.querySelector('input[type="submit"][value="Salvare"]');
                if (saveBtn) saveBtn.click();
                if (nextRow) {
                    const wireId = nextRow.getAttribute('wire:id');
                    if (wireId) enforcePersistentFocus(`tr[wire\\:id="${wireId}"] input[wire\\:model="topic"]`);
                    else { const nextInput = nextRow.querySelector(topicSelector); if (nextInput) setTimeout(() => nextInput.focus(), 100); }
                }
            } else if (key === 'arrowup' || (key === 'tab' && e.shiftKey)) {
                e.preventDefault(); const prevRow = currentRow.previousElementSibling;
                if (prevRow) { const prevInput = prevRow.querySelector(topicSelector); if (prevInput) { prevInput.focus(); prevInput.select(); } }
            }
            return;
        }

        if (!e.target.matches(inputsSelector)) return;
        const input = e.target;
        const currentTd = input.closest('td'); const currentRow = currentTd.closest('tr');
        const rowInputs = Array.from(currentRow.querySelectorAll(inputsSelector));
        const currentInputIndex = rowInputs.indexOf(input); const tdIndex = Array.from(currentRow.children).indexOf(currentTd);

        let targetInput = null;
        if (key === 'arrowright' && currentInputIndex < rowInputs.length - 1) targetInput = rowInputs[currentInputIndex + 1];
        else if (key === 'arrowleft' && currentInputIndex > 0) targetInput = rowInputs[currentInputIndex - 1];
        else if (key === 'arrowdown') { const nextRow = currentRow.nextElementSibling; if (nextRow) targetInput = nextRow.children[tdIndex]?.querySelector(inputsSelector); }
        else if (key === 'arrowup') { const prevRow = currentRow.previousElementSibling; if (prevRow) targetInput = prevRow.children[tdIndex]?.querySelector(inputsSelector); }

        if (targetInput && !targetInput.disabled) { e.preventDefault(); targetInput.focus(); targetInput.select(); return; }

        if (key === 'enter') {
            e.preventDefault(); e.stopPropagation();
            const saveBtn = document.querySelector('#saveEvaluationButton');
            if (saveBtn) saveBtn.click();
            return;
        }

        if (key === 'backspace' || key === 'delete') {
            e.preventDefault(); e.stopPropagation();
            input.value = '';
            
            if (typeof window.deleteEvaluationButton === 'function') {
                const $input = window.jQuery ? window.jQuery(input) : input;
                window.deleteEvaluationButton($input);
            } else {
                // Fallback to DOM buttons if JS function is not available
                if (input.classList.contains('student-evaluation')) {
                    const deleteBtn = document.querySelector('#deleteEvaluationButton');
                    if (deleteBtn) deleteBtn.click();
                } else {
                    const popup = document.getElementById('keyboardEvaluationsPopup');
                    if (popup) {
                        popup.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
                    }
                    const saveBtn = document.querySelector('#saveEvaluationButton');
                    if (saveBtn) {
                        saveBtn.disabled = false;
                        saveBtn.click();
                    }
                }
            }
            return;
        }

        const validKeys = ['a', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        if (validKeys.includes(key)) {
            e.preventDefault(); e.stopPropagation();
            if (key === 'a' || (key >= '2' && key <= '9')) triggerAutoSaveNote(input, key);
            else if (key === '1') {
                input.value = '1';
                // Click the button "1" in the popup to set it as active preview
                const popup = document.getElementById('keyboardEvaluationsPopup');
                if (popup) {
                    const buttons = Array.from(popup.querySelectorAll('button'));
                    const targetBtn = buttons.find(b => b.innerText.trim() === '1');
                    if (targetBtn) targetBtn.click();
                }
            }
            else if (key === '0') { if (input.value === '1') triggerAutoSaveNote(input, '10'); else input.value = ''; }
        } else if (key !== 'backspace' && key !== 'delete' && key !== 'tab') { e.preventDefault(); }
    }, true);

    function patchDeleteFunction() {
        if (typeof window.deleteEvaluationButton === 'function' && !window.deleteEvaluationButton.isPatched) {
            const originalDelete = window.deleteEvaluationButton;
            window.deleteEvaluationButton = function(noteData) {
                if (noteData && !noteData.hasClass('student-evaluation')) {
                    $('#keyboardEvaluationsPopup').addClass('d-none');

                    let note = noteData.val();
                    let data = {
                        student_id: noteData.attr('data-student-id'),
                        note: note,
                        date: noteData.attr('data-date'),
                        event_id: noteData.attr('data-event-id')
                    };

                    let registerId = getRegisterId();
                    const baseUrl = getRegisterBaseUrl();
                    let url = `${baseUrl}/deleteNote/${registerId}`;

                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: url,
                        type: 'POST',
                        data: data,
                        beforeSend: function () {
                            $('.card-body').block({
                                message: '<div class="custom-loader"></div>',
                                overlayCSS: {backgroundColor: "#fff"},
                                css: {backgroundColor: "transparent", border: "none"},
                            });
                        },
                        success: function(response) {
                            console.log(response);
                            if (response.type == 'success') {
                                toastr.success(response.message, 'Success', {progressBar: true});
                                $('#eregister').load(`${baseUrl}/${registerId} #eregister > table`, function () {
                                    noteData.removeClass('border-primary border-danger');
                                    $('.card-body').unblock();
                                });
                            } else {
                                toastr.warning(response.message, 'Warning', {progressBar: true});
                                $('.card-body').unblock();
                            }
                        },
                        error: function (e) {
                            if (e.status === 419 && window.toastr) {
                                toastr.error('Sesiunea SIMU a expirat! Te rugăm să reîmprospătezi pagina (F5).', 'Sesiune Expirată', {progressBar: true});
                                $('.card-body').unblock();
                                return;
                            }
                            if (e.status === 404 || e.status === 405) {
                                console.warn("[UPSC SIMU Plus] deleteNote endpoint not found. Falling back to setNote with empty value.");
                                if (typeof window.saveEvaluationButton === 'function') {
                                    window.saveEvaluationButton(noteData);
                                    return;
                                }
                            }
                            try {
                                toastr.error(JSON.parse(e.responseText).message, 'Error', {progressBar: true});
                            } catch(err) {
                                toastr.error('Eroare la ștergerea notei.', 'Error', {progressBar: true});
                            }
                            $('.card-body').unblock();
                        }
                    });
                } else {
                    originalDelete(noteData);
                }
            };
            window.deleteEvaluationButton.isPatched = true;
            console.log("[UPSC SIMU Plus] Successfully patched deleteEvaluationButton.");
        }
    }

    function patchSaveFunction() {
        if (typeof window.saveEvaluationButton === 'function' && !window.saveEvaluationButton.isPatched) {
            const originalSave = window.saveEvaluationButton;
            let isProcessingPairSave = false;

            window.saveEvaluationButton = function(noteData) {
                const autoPair = localStorage.getItem('upsc_auto_pair_absences') !== null 
                    ? localStorage.getItem('upsc_auto_pair_absences') === 'true' 
                    : true;
                const noteVal = (noteData && typeof noteData.val === 'function' ? noteData.val() : '').trim().toLowerCase();

                if (!isProcessingPairSave && autoPair && noteVal === 'a' && noteData && !noteData.hasClass('student-evaluation')) {
                    const currentEl = noteData.get(0);
                    const tr = currentEl ? currentEl.closest('tr') : null;
                    const currentDate = noteData.attr('data-date');
                    const studentId = noteData.attr('data-student-id');

                    if (tr && currentDate) {
                        const sameDateInputs = Array.from(tr.querySelectorAll(`input.student-note[data-date="${currentDate}"]`))
                            .filter(inp => !inp.disabled);

                        if (sameDateInputs.length > 1) {
                            const curIdx = sameDateInputs.indexOf(currentEl);
                            let pairEl = null;

                            // Căutăm celula alăturată din aceeași dată (dreapta sau stânga)
                            if (curIdx >= 0) {
                                if (curIdx + 1 < sameDateInputs.length) {
                                    pairEl = sameDateInputs[curIdx + 1];
                                } else if (curIdx - 1 >= 0) {
                                    pairEl = sameDateInputs[curIdx - 1];
                                }
                            }

                            // Duplicăm absența doar dacă celula pereche este liberă / goală
                            if (pairEl && pairEl.value.trim() === '') {
                                isProcessingPairSave = true;

                                // Feedback vizual instantaneu în tabel
                                pairEl.value = 'a';
                                pairEl.classList.remove('grade-excellent', 'grade-good', 'grade-ok', 'grade-bad');
                                pairEl.classList.add('grade-abs');

                                if (window.jQuery) {
                                    $('#keyboardEvaluationsPopup').addClass('d-none');
                                    if ($('.card-body').length) {
                                        $('.card-body').block({
                                            message: '<div class="custom-loader"></div>',
                                            overlayCSS: { backgroundColor: "#fff" },
                                            css: { backgroundColor: "transparent", border: "none" }
                                        });
                                    }
                                }

                                const registerId = getRegisterId();
                                const baseUrl = getRegisterBaseUrl();
                                const url = `${baseUrl}/setNote/${registerId}`;
                                const token = $('meta[name="csrf-token"]').attr('content') || document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

                                const pairData = {
                                    student_id: pairEl.getAttribute('data-student-id') || studentId,
                                    note: 'a',
                                    date: pairEl.getAttribute('data-date') || currentDate,
                                    event_id: pairEl.getAttribute('data-event-id')
                                };

                                $.ajax({
                                    headers: { 'X-CSRF-TOKEN': token },
                                    url: url,
                                    type: 'POST',
                                    data: pairData,
                                    success: function(resp) {
                                        console.log("[UPSC SIMU Plus] Absență duplicată pe pereche:", resp);
                                        if (window.toastr) {
                                            toastr.info("Absența a fost aplicată și la ora pereche din aceeași dată.", "UPSC Plus", { progressBar: true, timeOut: 3000 });
                                        }
                                    },
                                    error: function(err) {
                                        console.warn("[UPSC SIMU Plus] Eroare la duplicarea absenței:", err);
                                    },
                                    complete: function() {
                                        // Salvăm nota originală prin funcția SIMU (care reîncarcă tabelul)
                                        originalSave(noteData);
                                        isProcessingPairSave = false;
                                    }
                                });
                                return;
                            }
                        }
                    }
                }

                // Curs normal pentru orice alt caz
                originalSave(noteData);
            };

            window.saveEvaluationButton.isPatched = true;
            console.log("[UPSC SIMU Plus] Successfully patched saveEvaluationButton for pair absences.");
        }
    }

    // Optimizări pentru pagina de selectare a grupei (rânduri clicabile, abrevieri, ascundere coloane)
    function initSelectionPageOptimizations() {
        // Dacă suntem pe pagina catalogului propriu-zis (există #eregister), oprim optimizările de selectare
        if (document.getElementById('eregister')) return;

        // Căutăm dacă pe pagină există vreun tabel ce conține link-uri către registre
        const hasRegisterTable = Array.from(document.querySelectorAll('table tr')).some(tr => {
            const links = Array.from(tr.querySelectorAll('a[href]'));
            return links.some(a => {
                const href = a.href || a.getAttribute('href') || '';
                return href && /\/electronicRegister\/\d+(\/|$|\?)/.test(href);
            });
        });

        if (!hasRegisterTable) return;

        // Adăugăm clasa pe body pentru a activa regulile CSS specifice paginii de selectare
        if (!document.body.classList.contains('upsc-selection-page')) {
            document.body.classList.add('upsc-selection-page');
            console.log("[UPSC SIMU Plus] Detected register selection table. Added selection page optimizations.");
        }

        // 1. Optimizare rânduri selectabile/clicabile
        const rows = document.querySelectorAll('table tr');
        rows.forEach(tr => {
            if (tr.dataset.rowClickablePatched) return;

            const links = Array.from(tr.querySelectorAll('a[href]'));
            const registerLink = links.find(a => {
                const href = a.href || a.getAttribute('href') || '';
                return href && /\/electronicRegister\/\d+(\/|$|\?)/.test(href);
            });

            if (registerLink) {
                tr.dataset.rowClickablePatched = 'true';
                tr.classList.add('clickable-group-row');

                tr.addEventListener('click', (e) => {
                    // Dacă s-a dat click pe un buton/link interactiv din interior, lăsăm comportamentul normal
                    if (e.target.closest('a, button, input, select, textarea')) {
                        return;
                    }
                    // Navigăm către registrul corespunzător
                    if (e.ctrlKey || e.metaKey) {
                        window.open(registerLink.href, '_blank');
                    } else {
                        window.location.href = registerLink.href;
                    }
                });
            }
        });

        // 2. Optimizare text celule (Ciclul I/II, FMTI) - Căutare independentă de indexul coloanei
        const tbodyRows = document.querySelectorAll('table tbody tr, table tr');
        tbodyRows.forEach(tr => {
            if (tr.dataset.columnsOptimized) return;

            const cells = tr.querySelectorAll('td');
            if (cells.length > 0) {
                cells.forEach(cell => {
                    const text = cell.textContent || '';

                    // Ciclul
                    if (text.includes('Ciclul I') && !text.includes('Ciclul II')) {
                        cell.textContent = 'Ciclul I';
                    } else if (text.includes('Ciclul II')) {
                        cell.textContent = 'Ciclul II';
                    }

                    // Facultatea
                    if (text.includes('Fizică, Matematică și Tehnologii Informaționale') || 
                        text.includes('Fizică, Matematică') || 
                        text.includes('Fizica, Matematica') ||
                        text.includes('F.M.T.I.') ||
                        text.includes('FMTI')) {
                        cell.textContent = 'FMTI';
                    }
                });
                
                tr.dataset.columnsOptimized = 'true';
            }
        });
    }

    if (!document.getElementById('eregister')) {
        initSelectionPageOptimizations();
        const selectionPageObserver = new MutationObserver(initSelectionPageOptimizations);
        selectionPageObserver.observe(document.body, { childList: true, subtree: true });
    }

    patchDeleteFunction();
    setTimeout(patchDeleteFunction, 200);
    setTimeout(patchDeleteFunction, 1000);

    patchSaveFunction();
    setTimeout(patchSaveFunction, 200);
    setTimeout(patchSaveFunction, 1000);
    setTimeout(patchSaveFunction, 2500);

})();