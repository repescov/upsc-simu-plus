(function() {
    'use strict';

    // Schimbare titlu pagină
    document.title = 'SIMU UPSC';
    console.log('%c[UPSC SIMU Plus v15.0]%c Modern SaaS Design Activat! 🚀', 'background: #4f46e5; color: #fff; padding: 4px 8px; border-radius: 4px; font-weight: bold;', 'color: #4f46e5; font-weight: bold;');

    // ==========================================
    // 1. INJECTAREA STILIZĂRII (CSS Universal)
    // ==========================================
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --upsc-primary: #4f46e5;
            --upsc-primary-hover: #4338ca;
            --upsc-primary-light: #eef2ff;
            --upsc-border-subtle: #e2e8f0;
            --upsc-shadow-sm: 0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03);
            --upsc-shadow-md: 0 4px 14px -2px rgba(15,23,42,0.08), 0 2px 6px -2px rgba(15,23,42,0.04);
            --upsc-shadow-xl: 0 20px 45px -10px rgba(15,23,42,0.25);
        }

        .container-fluid > .row:first-of-type > .col-lg-12,
        .content > .row:first-of-type > .col-lg-12 { display: flex; gap: 20px; margin-bottom: 12px; }
        @media (max-width: 1200px) { 
            .container-fluid > .row:first-of-type > .col-lg-12,
            .content > .row:first-of-type > .col-lg-12 { flex-direction: column; } 
        }
        .card { 
            flex: 1; border: 1px solid #e2e8f0 !important; border-radius: 16px !important; 
            box-shadow: 0 4px 16px -2px rgba(15,23,42,0.06) !important; margin-bottom: 16px !important; 
            background: #ffffff !important; transition: box-shadow 0.2s ease; overflow: hidden !important;
        }
        .card-header { background: #f8fafc !important; border-bottom: 1px solid #f1f5f9 !important; padding: 1.25rem 1.5rem !important; }
        .list-group-item { padding: 0.45rem 1rem !important; border: none !important; background-color: transparent !important; color: #334155; }

        /* TABEL DISCIPLINA SUS (Sumar Unitate Curs) */
        .panel.panel-default {
            border: 1px solid #e2e8f0 !important; border-radius: 12px !important; overflow: hidden !important; 
            box-shadow: 0 4px 12px -2px rgba(15,23,42,0.04) !important; margin-bottom: 0 !important; background: #ffffff !important;
        }
        .panel.panel-default table { margin-bottom: 0 !important; border: none !important; width: 100% !important; }
        .panel.panel-default table th, .panel.panel-default table td { 
            border: 1px solid #f1f5f9 !important; padding: 10px 14px !important; font-size: 13.5px !important; vertical-align: middle !important; 
        }
        .panel.panel-default table thead th { 
            background: #f8fafc !important; color: #475569 !important; font-weight: 800 !important; font-size: 12px !important; 
            text-transform: uppercase; letter-spacing: 0.6px; 
        }
        .panel.panel-default table thead th[style*="background-color: #008000"],
        .panel.panel-default table thead th[style*="background-color: rgb(0, 128, 0)"] { 
            background: #ecfdf5 !important; color: #047857 !important; border-bottom: 2.5px solid #10b981 !important; font-weight: 800 !important; 
        }
        .panel.panel-default table thead th[style*="background-color: #004080"],
        .panel.panel-default table thead th[style*="background-color: rgb(0, 64, 128)"] { 
            background: #eff6ff !important; color: #1d4ed8 !important; border-bottom: 2.5px solid #3b82f6 !important; font-weight: 800 !important; 
        }
        .panel.panel-default table thead th[style*="background-color: #e30d0d"],
        .panel.panel-default table thead th[style*="background-color: rgb(227, 13, 13)"] { 
            background: #fef2f2 !important; color: #b91c1c !important; border-bottom: 2.5px solid #ef4444 !important; font-weight: 800 !important; 
        }

        /* CONTAINER REGISTRU PRINCIPAL */
        .tab-pane.scrollable-content { 
            height: calc(100vh - 250px) !important; overflow: auto !important; border-radius: 16px !important; 
            border: 1.5px solid #e2e8f0 !important; background: #ffffff !important; box-shadow: 0 10px 30px -5px rgba(15,23,42,0.08) !important;
        }
        #eregister { background: #ffffff !important; }
        #eregister table.table, #eregister table.table-sm { 
            border-collapse: separate !important; border-spacing: 0 !important; 
            font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif !important; 
            width: 100% !important; border: none !important; margin-bottom: 0 !important;
        }

        /* 1. Antet Semestru (Rândul 1 Thead) */
        #eregister thead tr:first-child th,
        #eregister table.table-sm thead tr:first-child th { 
            position: sticky !important; top: 0 !important; z-index: 25 !important;
            background: linear-gradient(90deg, #0f172a 0%, #1e293b 100%) !important; color: #f8fafc !important; 
            border: none !important; font-size: 13px !important; font-weight: 800 !important; 
            letter-spacing: 2px !important; text-transform: uppercase !important; 
            padding: 10px 20px !important; text-align: left !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12) !important;
        }

        /* 2. Antet Date & Grupa (Rândul 2 Thead - .register-notes-header) */
        #eregister .register-notes-header th,
        #eregister table.table-sm thead tr.register-notes-header th { 
            position: sticky !important; top: 38px !important; z-index: 15 !important; 
            background: #f8fafc !important; color: #334155 !important; 
            border-bottom: 2px solid #cbd5e1 !important; border-right: 1px solid #e2e8f0 !important; 
            border-top: none !important; vertical-align: middle !important; 
            padding: 8px 6px !important; transition: all 0.15s ease !important;
        }
        #eregister table.table-sm thead tr.register-notes-header th.p-2 { 
            position: sticky !important; top: 38px !important; left: 0 !important; z-index: 30 !important;
            background: #f8fafc !important; border-right: 2px solid #cbd5e1 !important; border-bottom: 2px solid #cbd5e1 !important;
            padding: 10px 16px !important; text-align: left !important; min-width: 16rem !important; width: 16rem !important;
            box-shadow: 4px 0 12px rgba(0,0,0,0.04) !important;
        }
        #eregister table.table-sm thead tr.register-notes-header th.p-2 > div[style*="width"] { 
            font-weight: 800 !important; font-size: 13.5px !important; color: #4f46e5 !important; line-height: 1.35 !important; 
        }

        /* Buton Adăugare Eveniment / Oră */
        div[data-target="#addEventModal"] {
            background: linear-gradient(135deg, #4f46e5, #3b82f6) !important; width: 34px !important; height: 34px !important; 
            border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; 
            box-shadow: 0 3px 10px rgba(79, 70, 229, 0.4) !important; transition: all 0.2s ease !important; cursor: pointer !important;
        }
        div[data-target="#addEventModal"]:hover { transform: scale(1.12); box-shadow: 0 5px 14px rgba(79, 70, 229, 0.5) !important; }
        div[data-target="#addEventModal"] img { filter: brightness(0) invert(1) !important; width: 16px !important; height: 16px !important; }

        /* Coloanele de Date din Antet */
        #eregister table.table-sm thead tr.register-notes-header th:not(.p-2):not(:nth-last-child(-n+7)) { 
            min-width: 52px !important; font-size: 12.5px !important; font-weight: 700 !important; 
            line-height: 1.35 !important; cursor: pointer !important; text-align: center !important;
        }
        #eregister table.table-sm thead tr.register-notes-header th:not(.p-2):not(:nth-last-child(-n+7)):hover,
        #eregister table.table-sm thead tr.register-notes-header th.hovered-col,
        #eregister table.table-sm thead tr.register-notes-header th.focused-col { 
            background: #eef2ff !important; color: #4f46e5 !important; border-bottom-color: #4f46e5 !important; 
        }

        /* Badge-uri Tip Oră: Curs (C), Seminar (S), Examen (E) */
        #eregister .register-notes-header th span[style*="color: #008000"],
        #eregister .register-notes-header th span[style*="color: rgb(0, 128, 0)"] { 
            display: inline-block !important; background: #ecfdf5 !important; color: #047857 !important; 
            border: 1px solid #a7f3d0 !important; border-radius: 6px !important; padding: 2px 7px !important; 
            font-size: 11px !important; font-weight: 800 !important; margin-top: 4px !important; 
            box-shadow: 0 1px 2px rgba(16,185,129,0.12) !important;
        }
        #eregister .register-notes-header th span[style*="color: #004080"],
        #eregister .register-notes-header th span[style*="color: rgb(0, 64, 128)"] { 
            display: inline-block !important; background: #eff6ff !important; color: #1d4ed8 !important; 
            border: 1px solid #bfdbfe !important; border-radius: 6px !important; padding: 2px 7px !important; 
            font-size: 11px !important; font-weight: 800 !important; margin-top: 4px !important; 
            box-shadow: 0 1px 2px rgba(37,99,235,0.12) !important;
        }
        #eregister .register-notes-header th span[style*="color: #e30d0d"],
        #eregister .register-notes-header th span[style*="color: rgb(227, 13, 13)"] { 
            display: inline-block !important; background: #fef2f2 !important; color: #b91c1c !important; 
            border: 1px solid #fecaca !important; border-radius: 6px !important; padding: 2px 7px !important; 
            font-size: 11px !important; font-weight: 800 !important; margin-top: 4px !important; 
            box-shadow: 0 1px 2px rgba(239,68,68,0.12) !important;
        }
        #eregister .register-notes-header th span[style*="color: #7c3aed"],
        #eregister .register-notes-header th span[style*="color: rgb(124, 58, 237)"] { 
            display: inline-block !important; background: #f5f3ff !important; color: #6d28d9 !important; 
            border: 1px solid #ddd6fe !important; border-radius: 6px !important; padding: 2px 7px !important; 
            font-size: 11px !important; font-weight: 800 !important; margin-top: 4px !important; 
        }

        /* 3. COLOANA 1: NUMELE STUDENTULUI (Sticky Left) */
        #eregister table.table-sm tbody th.text-left { 
            position: sticky !important; left: 0 !important; background-color: #ffffff !important; z-index: 10 !important; 
            border-right: 2px solid #cbd5e1 !important; border-bottom: 1px solid #f1f5f9 !important; 
            width: 16rem !important; min-width: 16rem !important; padding: 8px 16px !important; 
            box-shadow: 4px 0 10px rgba(0,0,0,0.03) !important; vertical-align: middle !important;
            text-align: left !important; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        #eregister table.table-sm tbody th.text-left .user-avatar { 
            width: 36px !important; height: 36px !important; border-radius: 10px !important; object-fit: cover !important; 
            border: 2px solid #e2e8f0 !important; margin-right: 12px !important; vertical-align: middle !important; 
            box-shadow: 0 2px 4px rgba(0,0,0,0.05) !important; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important; display: inline-block !important;
        }
        #eregister table.table-sm tbody th.text-left span.text-dark { 
            display: inline-block !important; font-size: 14px !important; font-weight: 700 !important; 
            color: #1e293b !important; vertical-align: middle !important; line-height: 1.35 !important; 
            white-space: normal !important; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
            transform-origin: left center !important;
        }
        #eregister table.table-sm tbody tr:hover th.text-left { background-color: #f8fafc !important; }
        #eregister table.table-sm tbody tr:hover th.text-left .user-avatar { border-color: #4f46e5 !important; transform: scale(1.08); }
        #eregister table.table-sm tbody tr:hover th.text-left span.text-dark { color: #4f46e5 !important; }

        /* Evidențiere puternică la Focus pe rând + mărire nume student */
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr.focused-row th.text-left { 
            background-color: #e0e7ff !important; 
            border-left: 5px solid #4f46e5 !important; 
            box-shadow: 4px 0 14px rgba(79, 70, 229, 0.18) !important; 
        }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr.focused-row th.text-left .user-avatar { 
            border-color: #4f46e5 !important; 
            transform: scale(1.18); 
            box-shadow: 0 4px 12px rgba(79, 70, 229, 0.35) !important; 
        }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr.focused-row th.text-left span.text-dark { 
            color: #3730a3 !important; 
            font-size: 15.5px !important; 
            font-weight: 800 !important; 
            transform: scale(1.06) translateX(4px); 
        }

        /* 4. RÂNDURI ȘI CELULE TABEL */
        #eregister table.table-sm tbody tr { border-bottom: 1px solid #f1f5f9 !important; transition: background-color 0.15s ease !important; }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr:hover { background-color: #f8fafc !important; }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr.focused-row { background-color: #e0e7ff !important; }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr.focused-row td { background-color: #eef2ff !important; }

        #eregister table.table-sm tbody td { 
            padding: 4px 2px !important; vertical-align: middle !important; border: none !important; 
            border-bottom: 1px solid #f1f5f9 !important; border-right: 1px solid rgba(241, 245, 249, 0.9) !important; 
            text-align: center !important;
        }
        body:not(.upsc-dark-mode) .hovered-col, 
        body:not(.upsc-dark-mode) .focused-col, 
        body:not(.upsc-dark-mode) .col-hover { background-color: #f8fafc !important; transition: background-color 0.1s; }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td.hovered-col,
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td.col-hover { background-color: #f1f5f9 !important; }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td.focused-col { background-color: #eef2ff !important; }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr.focused-row td.focused-col { background-color: #dbeafe !important; }

        /* 5. CĂSUȚE NOTE ȘI EVALUĂRI (Toate input-urile din tabel) */
        /* 5. CĂSUȚE NOTE ȘI EVALUĂRI (Toate input-urile din tabel) */
        #eregister table.table-sm tbody td input,
        #eregister .student-note, 
        #eregister .student-evaluation {
            height: 36px !important; width: 36px !important; font-size: 14.5px !important; font-weight: 700 !important;
            padding: 0 !important; text-align: center !important; line-height: 36px !important;
            border-radius: 8px !important; 
            transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;
            box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important; outline: none !important; margin: 0 auto !important; display: inline-block !important;
        }

        /* Culori de bază doar pentru celule fără notă/absență (Light Mode) */
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs) {
            background-color: #ffffff !important; 
            border: 1.5px solid #cbd5e1 !important; 
            color: #1e293b !important;
        }

        #eregister table.table-sm tbody td input:hover {
            box-shadow: 0 2px 6px rgba(0,0,0,0.08) !important; transform: translateY(-1px);
        }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs):hover {
            border-color: #94a3b8 !important; 
        }

        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td input:focus {
            background-color: #ffffff !important; border: 2.5px solid #4f46e5 !important; 
            box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.22), 0 4px 12px rgba(79, 70, 229, 0.18) !important; 
            transform: scale(1.18); z-index: 100 !important; position: relative;
        }

        /* Suprimare bug SIMU: prevenire transparență completă pe hover/focus în Light Mode */
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr:hover input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs),
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td.col-hover input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs),
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr.focused-row input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs),
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td.focused-col input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs) {
            background-color: #ffffff !important;
        }

        #eregister table.table-sm tbody td input:disabled {
            opacity: 1 !important; font-weight: 800 !important; background: #f8fafc !important; 
            border: 1.5px solid #e2e8f0 !important; color: #475569 !important; cursor: default !important;
        }
        
        /* HEATMAP REFINAT - Culori vii și clare pentru note și absențe (Light Mode) */
        #eregister input.grade-excellent,
        #eregister table.table-sm tbody td input.grade-excellent,
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td input.grade-excellent { 
            background-color: #d1fae5 !important; 
            border: 1.5px solid #10b981 !important; 
            color: #065f46 !important; 
            font-weight: 800 !important; 
            box-shadow: 0 2px 5px rgba(16, 185, 129, 0.22) !important; 
        } 
        #eregister input.grade-good,
        #eregister table.table-sm tbody td input.grade-good,
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td input.grade-good { 
            background-color: #dbeafe !important; 
            border: 1.5px solid #3b82f6 !important; 
            color: #1e40af !important; 
            font-weight: 800 !important; 
            box-shadow: 0 2px 5px rgba(59, 130, 246, 0.22) !important; 
        } 
        #eregister input.grade-ok,
        #eregister table.table-sm tbody td input.grade-ok,
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td input.grade-ok { 
            background-color: #fef3c7 !important; 
            border: 1.5px solid #f59e0b !important; 
            color: #92400e !important; 
            font-weight: 800 !important; 
            box-shadow: 0 2px 5px rgba(245, 158, 11, 0.22) !important; 
        } 
        #eregister input.grade-bad,
        #eregister table.table-sm tbody td input.grade-bad,
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td input.grade-bad { 
            background-color: #fee2e2 !important; 
            border: 1.5px solid #ef4444 !important; 
            color: #991b1b !important; 
            font-weight: 800 !important; 
            box-shadow: 0 2px 5px rgba(239, 68, 68, 0.22) !important; 
        } 
        #eregister input.grade-abs,
        #eregister table.table-sm tbody td input.grade-abs,
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td input.grade-abs { 
            background-color: #ffe4e6 !important; 
            border: 1.5px solid #f43f5e !important; 
            color: #be123c !important; 
            font-weight: 900 !important; 
            box-shadow: 0 2px 5px rgba(244, 63, 94, 0.28) !important; 
        } 

        /* 6. COLOANE TOTALIZARE ȘI EVALUĂRI PERIODICE (Ultimele 7 coloane) */
        #eregister table.table-sm thead tr.register-notes-header th:nth-last-child(-n+7) {
            position: sticky !important; top: 38px !important; z-index: 18 !important;
            background: #f1f5f9 !important; color: #475569 !important;
            font-size: 11px !important; font-weight: 800 !important; text-transform: uppercase !important; letter-spacing: 0.5px !important;
            border-bottom: 2px solid #cbd5e1 !important; border-left: 1px solid #e2e8f0 !important; border-top: none !important;
            padding: 8px 3px !important; vertical-align: middle !important;
        }
        #eregister table.table-sm thead tr.register-notes-header th:nth-last-child(7) {
            border-left: 2.5px solid #6366f1 !important;
            box-shadow: -6px 0 10px -4px rgba(15, 23, 42, 0.08) !important;
        }
        #eregister table.table-sm thead tr.register-notes-header th:nth-last-child(1) {
            background: #eef2ff !important; color: #4338ca !important; border-left: 2px solid #6366f1 !important;
        }

        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td:nth-last-child(-n+7) {
            background-color: #ffffff !important; border-left: 1px solid #f1f5f9 !important;
        }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td:nth-last-child(7) { 
            border-left: 2.5px solid #6366f1 !important; 
            box-shadow: -6px 0 10px -4px rgba(15, 23, 42, 0.08) !important;
        }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td:nth-last-child(7) input { 
            background-color: #f8fafc !important; border-color: #e2e8f0 !important; color: #64748b !important; font-weight: 700 !important;
        }

        /* Nota Semestrială Finală (Ultima Coloană) */
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td:nth-last-child(1) { 
            background-color: #f8faff !important; border-left: 2px solid #6366f1 !important; 
        }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td:nth-last-child(1) input { 
            background-color: #eef2ff !important; border: 2px solid #818cf8 !important; color: #4338ca !important; 
            font-size: 15px !important; font-weight: 900 !important; box-shadow: 0 2px 6px rgba(99, 102, 241, 0.2) !important; 
        }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td:nth-last-child(1) input[style*="color:red"],
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td:nth-last-child(1) input[style*="color: red"] { 
            background-color: #fff1f2 !important; border: 2px solid #f43f5e !important; color: #e11d48 !important; 
            box-shadow: 0 2px 6px rgba(244, 63, 94, 0.2) !important; 
        }

        body.hide-extra-cols #eregister th:nth-last-child(-n+7), 
        body.hide-extra-cols #eregister td:nth-last-child(-n+7) { display: none !important; }

        /* 6.1 COLOANE ORE TRECUTE (PÂNĂ LA ZIUA DE AZI) ȘI ZIUA CURENTĂ (LIGHT MODE) */
        body:not(.upsc-dark-mode) #eregister table.table-sm thead tr.register-notes-header th.col-past {
            background: #eef2f6 !important;
            color: #475569 !important;
            border-bottom: 2.5px solid #94a3b8 !important;
        }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td.col-past {
            background-color: #f1f5f9 !important;
            border-right: 1px solid #e2e8f0 !important;
        }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td.col-past input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs) {
            background-color: #f8fafc !important;
            border-color: #cbd5e1 !important;
        }

        /* Semnalizare căsuțe uitate/necompletate din trecut */
        #eregister table.table-sm tbody td.col-past input.input-missing-past {
            border: 1.5px dashed #f59e0b !important;
            box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.15) !important;
        }

        /* Coloana lecției de AZI */
        body:not(.upsc-dark-mode) #eregister table.table-sm thead tr.register-notes-header th.col-today {
            background: #eff6ff !important;
            color: #1d4ed8 !important;
            border-bottom: 3px solid #3b82f6 !important;
        }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td.col-today {
            background-color: #f0f7ff !important;
            border-right: 1px solid #bfdbfe !important;
        }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody td.col-today input:focus {
            border-color: #2563eb !important;
        }

        /* Badge "AZI" */
        .badge-today {
            display: inline-block !important;
            background: linear-gradient(135deg, #4f46e5, #3b82f6) !important;
            color: #ffffff !important;
            font-size: 10px !important;
            font-weight: 800 !important;
            padding: 1px 6px !important;
            border-radius: 9999px !important;
            margin-top: 3px !important;
            letter-spacing: 0.5px !important;
            box-shadow: 0 1px 4px rgba(79, 70, 229, 0.3) !important;
        }

        /* Linia de separare cronologică între trecut și viitor */
        #eregister table.table-sm thead tr.register-notes-header th.col-last-past,
        #eregister table.table-sm tbody td.col-last-past {
            border-right: 2.5px solid #6366f1 !important;
            box-shadow: 4px 0 8px -3px rgba(99, 102, 241, 0.18) !important;
        }

        /* Interacțiune Hover și Focus pentru celulele din orele trecute și de azi (Light Mode) */
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr:hover td.col-past { background-color: #e2e8f0 !important; }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr.focused-row td.col-past { background-color: #e0e7ff !important; }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr.focused-row td.col-past.focused-col { background-color: #c7d2fe !important; }

        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr:hover td.col-today { background-color: #e0f2fe !important; }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr.focused-row td.col-today { background-color: #dbeafe !important; }
        body:not(.upsc-dark-mode) #eregister table.table-sm tbody tr.focused-row td.col-today.focused-col { background-color: #bfdbfe !important; }


        tr[wire\\:id] td:nth-child(4), tr[wire\\:id] td:nth-child(5) { display: none !important; }
        input[wire\\:model="topic"] { width: 100% !important; height: 40px !important; border-radius: 8px !important; border: 1.5px solid #cbd5e1 !important; padding: 8px 14px !important; font-size: 0.95rem !important; color: #334155 !important; transition: all 0.2s; }
        input[wire\\:model="topic"]:focus { border-color: #4f46e5 !important; background-color: #fff !important; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.18) !important; outline: none; }
        #eregister thead th button.btn-danger { display: none !important; }


        /* BARA DE CONTROL (TOOLBAR) */
        .upsc-controls-wrapper { 
            display: flex; align-items: center; gap: 10px; margin-bottom: 14px; flex-wrap: wrap;
            padding: 8px 14px; background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(10px);
            border: 1px solid #e2e8f0; border-radius: 30px; box-shadow: 0 2px 6px rgba(0,0,0,0.04);
            width: fit-content;
        }
        .upsc-brand-badge {
            background: linear-gradient(135deg, #4f46e5, #6366f1);
            color: #ffffff;
            font-size: 12.5px;
            font-weight: 700;
            padding: 6px 14px;
            border-radius: 9999px;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            box-shadow: 0 2px 8px rgba(79, 70, 229, 0.3);
            letter-spacing: 0.3px;
        }
        .upsc-brand-badge b { font-weight: 900; background: rgba(255,255,255,0.22); padding: 1px 7px; border-radius: 6px; }

        .upsc-btn { 
            padding: 7px 16px; border-radius: 9999px; font-weight: 600; cursor: pointer; border: none; 
            box-shadow: 0 2px 4px rgba(0,0,0,0.06); transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); 
            font-size: 13.5px; display: inline-flex; align-items: center; gap: 7px; text-decoration: none;
        }
        .upsc-btn:hover { transform: translateY(-1.5px); box-shadow: 0 5px 12px rgba(0,0,0,0.12); }
        .upsc-btn:active { transform: translateY(0); }

        #toggle-extra-cols-btn, #toggle-pair-absences-btn, #toggle-highlight-past-btn { background-color: #f1f5f9; color: #475569; border: 1px solid #e2e8f0; }
        #toggle-extra-cols-btn:hover, #toggle-pair-absences-btn:hover, #toggle-highlight-past-btn:hover { background-color: #e2e8f0; color: #0f172a; }
        #toggle-pair-absences-btn.active {
            background: linear-gradient(135deg, #0284c7, #0369a1) !important;
            color: #ffffff !important;
            border-color: #0284c7 !important;
            box-shadow: 0 2px 8px rgba(2, 132, 199, 0.35) !important;
        }
        #toggle-pair-absences-btn.active b {
            background: rgba(255, 255, 255, 0.22);
            padding: 1px 6px;
            border-radius: 6px;
        }
        #toggle-highlight-past-btn.active {
            background: linear-gradient(135deg, #4f46e5, #6366f1) !important;
            color: #ffffff !important;
            border-color: #4f46e5 !important;
            box-shadow: 0 2px 8px rgba(79, 70, 229, 0.35) !important;
        }
        #toggle-highlight-past-btn.active b {
            background: rgba(255, 255, 255, 0.22);
            padding: 1px 6px;
            border-radius: 6px;
        }

        .btn-stats { 
            background: linear-gradient(135deg, #7c3aed, #6d28d9); color: white; 
            box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3); 
        }
        .btn-stats:hover { box-shadow: 0 6px 16px rgba(124, 58, 237, 0.4); }

        .btn-export { 
            background: linear-gradient(135deg, #10b981, #059669); color: white; 
            box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3); 
        }
        .btn-export:hover { box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4); }

        .btn-open-import { 
            background: linear-gradient(135deg, #f59e0b, #d97706); color: white; 
            box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3); 
        }
        .btn-open-import:hover { box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4); }

        /* FLOATING SETTINGS FAB & PANEL */
        #upsc-settings-fab { 
            position: fixed; bottom: 24px; right: 24px; width: 52px; height: 52px; border-radius: 50%; 
            background: linear-gradient(135deg, #4f46e5, #3b82f6); color: white; display: flex; 
            align-items: center; justify-content: center; cursor: pointer; 
            box-shadow: 0 8px 24px rgba(79, 70, 229, 0.35); z-index: 9999; 
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); border: 2px solid rgba(255,255,255,0.25);
        }
        #upsc-settings-fab:hover { transform: scale(1.1) rotate(60deg); box-shadow: 0 12px 30px rgba(79, 70, 229, 0.45); }
        #upsc-settings-fab svg { width: 24px; height: 24px; }
        
        #upsc-settings-panel { 
            position: fixed; bottom: 88px; right: 24px; width: 390px; background: rgba(255, 255, 255, 0.97); 
            backdrop-filter: blur(16px); border-radius: 16px; box-shadow: 0 20px 45px -10px rgba(15,23,42,0.22); 
            z-index: 9998; padding: 22px; display: none; border: 1px solid #e2e8f0; 
            max-height: 82vh; overflow-y: auto; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; 
        }
        #upsc-settings-panel.active { display: block; animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
        
        .upsc-panel-header { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; margin-bottom: 16px; }
        .upsc-panel-title { display: flex; align-items: center; gap: 8px; font-size: 17px; font-weight: 700; color: #1e293b; }
        .upsc-btn-icon-close { 
            background: #f1f5f9; border: none; border-radius: 50%; width: 28px; height: 28px; 
            display: flex; align-items: center; justify-content: center; cursor: pointer; color: #64748b; 
            font-size: 13px; font-weight: bold; transition: all 0.15s ease;
        }
        .upsc-btn-icon-close:hover { background: #e2e8f0; color: #0f172a; }
        
        #upsc-settings-panel label { font-size: 13.5px; font-weight: 700; color: #334155; margin-bottom: 6px; display: block; margin-top: 14px; }
        #upsc-settings-panel input, #upsc-settings-panel select { 
            width: 100%; padding: 10px 14px; border: 1.5px solid #cbd5e1; border-radius: 10px; 
            font-size: 14px; color: #1e293b; background-color: #f8fafc; transition: all 0.2s ease; box-sizing: border-box; 
        }
        #upsc-settings-panel input:focus, #upsc-settings-panel select:focus { 
            background-color: #ffffff; border-color: #4f46e5; outline: none; 
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15); 
        }
        
        .help-tip { 
            background-color: #eef2ff; border-left: 4px solid #4f46e5; padding: 14px; border-radius: 10px; 
            margin-top: 18px; font-size: 13px; color: #3730a3; line-height: 1.55; 
        }
        .help-tip b { color: #1e1b4b; font-weight: 800; }
        
        #mia-qr-container { max-height: 0; opacity: 0; overflow: hidden; transition: max-height 0.3s ease-in-out, opacity 0.2s ease-in-out; text-align: center; }
        #mia-qr-container.show-qr { max-height: 260px; opacity: 1; margin-top: 10px; }
        .donation { text-align: center; margin-top: 22px; padding-top: 14px; border-top: 1px dashed #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b; }

        /* COMUTATOR MODERN iOS SWITCH */
        .upsc-switch-wrapper { display: flex; align-items: center; justify-content: space-between; margin-top: 18px; padding: 12px 0; border-top: 1px solid #f1f5f9; }
        .upsc-switch-label { font-size: 14px; font-weight: 700; color: #334155; }
        .upsc-switch { position: relative; display: inline-block; width: 44px; height: 24px; }
        .upsc-switch input { opacity: 0; width: 0; height: 0; }
        .upsc-slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #cbd5e1; transition: .3s cubic-bezier(0.4, 0, 0.2, 1); border-radius: 9999px; }
        .upsc-slider:before { position: absolute; content: ""; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .3s cubic-bezier(0.4, 0, 0.2, 1); border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
        input:checked + .upsc-slider { background-color: #4f46e5; }
        input:checked + .upsc-slider:before { transform: translateX(20px); }

        /* SECTIUNE TEMATICI */
        #upsc-topics-toolbar-wrapper { 
            margin: 22px 0 10px 0; padding: 16px; background-color: #ffffff; border-radius: 14px; 
            border: 1px solid #e2e8f0; display: flex; flex-direction: column; align-items: flex-start; 
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        #toggle-topics-btn { 
            border: 1.5px solid #06b6d4; color: #0891b2; background: #ecfeff; font-weight: 700;
        }
        #toggle-topics-btn.active { background-color: #06b6d4; color: #ffffff; }
        #toggle-topics-btn:hover { background-color: #0891b2; color: #ffffff; }
        #upsc-topics-toolbar { display: flex; gap: 10px; margin-top: 14px; overflow: hidden; transition: all 0.3s ease; flex-wrap: wrap; width: 100%; }
        .upsc-btn-apply { background: linear-gradient(135deg, #4f46e5, #4338ca); color: #fff; border-radius: 8px;}
        .upsc-btn-copy { background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff; border-radius: 8px;}
        .upsc-btn-paste { background: linear-gradient(135deg, #10b981, #059669); color: #fff; border-radius: 8px;}

        /* CSS MODAL STATISTICI */
        #upsc-stats-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.65) !important; z-index: 10000 !important; display: none; align-items: center; justify-content: center; backdrop-filter: blur(8px); }
        #upsc-stats-overlay.active { display: flex !important; animation: fadeIn 0.2s ease; }
        #upsc-stats-modal { background: #ffffff; border-radius: 18px; width: 480px; max-width: 92%; padding: 26px; box-shadow: 0 20px 45px -10px rgba(15,23,42,0.25); position: relative; border: 1px solid rgba(255,255,255,0.8); }
        #upsc-stats-modal h3 { color: #4f46e5; margin: 0; font-size: 20px; font-weight: 800; }
        
        .upsc-modal-header { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #f1f5f9; padding-bottom: 14px; margin-bottom: 18px; }
        .upsc-modal-close { 
            background: #f1f5f9; border: none; border-radius: 50%; width: 30px; height: 30px; 
            display: flex; align-items: center; justify-content: center; cursor: pointer; color: #64748b; 
            font-size: 14px; font-weight: bold; transition: all 0.15s ease;
        }
        .upsc-modal-close:hover { background: #e2e8f0; color: #0f172a; }

        .stats-top-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 18px; }
        .stat-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px 6px; text-align: center; transition: all 0.2s ease; }
        .stat-card:hover { transform: translateY(-2px); box-shadow: 0 2px 6px rgba(0,0,0,0.05); }
        .stat-val { font-size: 26px; font-weight: 900; line-height: 1; letter-spacing: -0.5px; }
        .stat-desc { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-top: 6px; letter-spacing: 0.5px;}
        .stat-card.primary .stat-val { color: #4f46e5; }
        .stat-card.success .stat-val { color: #10b981; }
        .stat-card.danger .stat-val { color: #f43f5e; }
        .stat-card.info .stat-val { color: #06b6d4; }
        .stat-missing { font-size: 11px; color: #e11d48; margin-top: 6px; font-weight: 700; background: #fff1f2; padding: 3px 8px; border-radius: 6px; border: 1px solid #fecdd3; display: inline-block;}
        
        .chart-wrap { margin-top: 14px; background: #f8fafc; padding: 14px; border-radius: 12px; border: 1px solid #e2e8f0; }
        .chart-title { font-size: 12.5px; font-weight: 800; color: #475569; margin-bottom: 12px; text-align: center; text-transform: uppercase; letter-spacing: 0.5px;}
        .bar-row { display: flex; align-items: center; margin-bottom: 6px; }
        .bar-label { width: 32px; font-size: 13px; font-weight: 800; color: #475569; text-align: right; padding-right: 8px;}
        .bar-track { flex: 1; background: #e2e8f0; height: 12px; border-radius: 9999px; overflow: hidden; position: relative; }
        .bar-fill { height: 100%; border-radius: 9999px; transition: width 0.7s cubic-bezier(0.16, 1, 0.3, 1); width: 0%; display: flex; align-items: center; justify-content: flex-end; padding-right: 5px; font-size: 9px; font-weight: 800; color: white;}
        .bar-count { width: 28px; font-size: 12px; font-weight: 700; color: #334155; text-align: left; padding-left: 8px;}
        
        #btn-close-stats { margin-top: 20px; width: 100%; padding: 11px; background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.2s; font-size: 14px;}
        #btn-close-stats:hover { background: #e2e8f0; color: #0f172a; }

        /* CSS MODAL IMPORT */
        #upsc-import-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.65) !important; z-index: 10001 !important; display: none; align-items: center; justify-content: center; backdrop-filter: blur(8px); }
        #upsc-import-overlay.active { display: flex !important; animation: fadeIn 0.3s ease; }
        #upsc-import-modal { background: #ffffff; border-radius: 20px; width: 600px; max-width: 95%; padding: 28px; box-shadow: 0 20px 45px -10px rgba(15,23,42,0.25); position: relative; max-height: 90vh; overflow-y: auto; border: 1px solid rgba(255,255,255,0.8); }
        #upsc-import-modal h3 { margin: 0; color: #10b981; font-weight: 800; font-size: 20px; }
        
        .prompt-box { background: #f8fafc; border: 1.5px dashed #cbd5e1; padding: 18px; border-radius: 12px; margin-bottom: 22px; position: relative; margin-top: 12px;}
        .prompt-text { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 12.5px; color: #334155; white-space: pre-wrap; margin: 0; line-height: 1.6; font-weight: 500; }
        .btn-copy-prompt { position: absolute; top: -12px; right: 14px; padding: 5px 14px; font-size: 11.5px; background: #4f46e5; color: white; border: none; border-radius: 9999px; cursor: pointer; font-weight: 700; box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3); transition: all 0.2s; }
        .btn-copy-prompt:hover { background: #4338ca; transform: scale(1.04); }
        
        .import-upload-zone { border: 2.5px dashed #10b981; background: #ecfdf5; padding: 36px 20px; text-align: center; border-radius: 14px; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); margin-bottom: 10px; margin-top: 12px;}
        .import-upload-zone:hover { background: #d1fae5; border-color: #059669; transform: translateY(-2px); }
        .import-zone-icon { font-size: 38px; margin-bottom: 10px; }
        .import-upload-zone span { font-size: 14.5px; font-weight: 700; color: #047857; }
        
        #btn-close-import { margin-top: 22px; width: 100%; padding: 11px; background: #f1f5f9; color: #64748b; border: 1px solid #e2e8f0; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.2s; font-size: 14px;}
        #btn-close-import:hover { background: #e2e8f0; color: #0f172a; }

        @keyframes slideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* DARK MODE 2.0 (SLATE / ZINC HIGH-END THEME) */
        body.upsc-dark-mode { background-color: #0b0f19 !important; color: #cbd5e1 !important; }
        body.upsc-dark-mode .card, 
        body.upsc-dark-mode #upsc-settings-panel, 
        body.upsc-dark-mode #upsc-stats-modal,
        body.upsc-dark-mode #upsc-import-modal,
        body.upsc-dark-mode #upsc-topics-toolbar-wrapper { 
            background-color: #131b2e !important; color: #cbd5e1 !important; 
            border-color: rgba(255, 255, 255, 0.08) !important; box-shadow: 0 16px 36px rgba(0,0,0,0.4) !important; 
        }
        body.upsc-dark-mode .upsc-controls-wrapper {
            background: rgba(19, 27, 46, 0.9) !important; border-color: rgba(255, 255, 255, 0.1) !important;
        }
        body.upsc-dark-mode .upsc-panel-title,
        body.upsc-dark-mode #upsc-stats-modal h3,
        body.upsc-dark-mode #upsc-import-modal h3 { color: #f8fafc !important; }
        body.upsc-dark-mode .upsc-panel-header,
        body.upsc-dark-mode .upsc-modal-header { border-bottom-color: rgba(255, 255, 255, 0.08) !important; }
        body.upsc-dark-mode .upsc-btn-icon-close,
        body.upsc-dark-mode .upsc-modal-close { background: #1e293b !important; color: #94a3b8 !important; }
        body.upsc-dark-mode .upsc-btn-icon-close:hover,
        body.upsc-dark-mode .upsc-modal-close:hover { background: #334155 !important; color: #fff !important; }

        body.upsc-dark-mode .panel.panel-default { background-color: #131b2e !important; border-color: rgba(255, 255, 255, 0.08) !important; }
        body.upsc-dark-mode .panel.panel-default table th, body.upsc-dark-mode .panel.panel-default table td { background-color: #131b2e !important; color: #cbd5e1 !important; border-color: rgba(255, 255, 255, 0.06) !important; }
        body.upsc-dark-mode .panel.panel-default table thead th { background-color: #0f172a !important; color: #94a3b8 !important; }

        body.upsc-dark-mode .tab-pane.scrollable-content { background-color: #0b0f19 !important; border-color: #1e293b !important; }
        body.upsc-dark-mode #eregister { background-color: #0b0f19 !important; }
        body.upsc-dark-mode #eregister table.table,
        body.upsc-dark-mode #eregister table.table-sm { background-color: #0b0f19 !important; }

        body.upsc-dark-mode #eregister thead.sticky-thead tr:first-child th,
        body.upsc-dark-mode #eregister table.table-sm thead tr:first-child th {
            background: #090d16 !important; color: #f8fafc !important; border-bottom: 2px solid #1e293b !important;
        }
        body.upsc-dark-mode #eregister table.table-sm thead tr.register-notes-header th.p-2 {
            background: #131b2e !important; border-right: 2px solid #1e293b !important; border-bottom: 2px solid #1e293b !important;
        }
        body.upsc-dark-mode #eregister table.table-sm thead tr.register-notes-header th:not(.p-2):not(:nth-last-child(-n+7)) {
            background: #131b2e !important; color: #cbd5e1 !important; border-bottom: 2px solid #1e293b !important; border-right: 1px solid rgba(255, 255, 255, 0.06) !important;
        }
        body.upsc-dark-mode #eregister table.table-sm thead tr.register-notes-header th:not(.p-2):hover,
        body.upsc-dark-mode #eregister table.table-sm thead tr.register-notes-header th.hovered-col,
        body.upsc-dark-mode #eregister table.table-sm thead tr.register-notes-header th.focused-col {
            background: #1e293b !important; color: #818cf8 !important; border-bottom-color: #6366f1 !important;
        }
        body.upsc-dark-mode #eregister table.table-sm thead tr.register-notes-header th:nth-last-child(-n+7) {
            background: #162033 !important; color: #94a3b8 !important; border-left: 1px solid rgba(255, 255, 255, 0.06) !important; border-bottom: 2px solid #1e293b !important;
        }
        body.upsc-dark-mode #eregister table.table-sm thead tr.register-notes-header th:nth-last-child(1) {
            background: #1e1b4b !important; color: #a5b4fc !important; border-left: 2px solid #6366f1 !important;
        }

        body.upsc-dark-mode #eregister table.table-sm tbody th.text-left { 
            background-color: #131b2e !important; color: #f1f5f9 !important; 
            border-right: 2px solid rgba(255, 255, 255, 0.08) !important; border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        body.upsc-dark-mode #eregister table.table-sm tbody th.text-left span.text-dark { color: #f1f5f9 !important; }
        body.upsc-dark-mode #eregister table.table-sm tbody th.text-left .user-avatar { border-color: #334155 !important; }

        /* Evidențiere Hover în Dark Mode */
        body.upsc-dark-mode #eregister:not(.disable-hover) tbody tr:hover td, 
        body.upsc-dark-mode #eregister:not(.disable-hover) tbody tr:hover th,
        body.upsc-dark-mode #eregister table.table-sm tbody tr:hover,
        body.upsc-dark-mode #eregister table.table-sm tbody tr:hover > td,
        body.upsc-dark-mode #eregister table.table-sm tbody tr:hover > th { background-color: #162033 !important; }
        body.upsc-dark-mode #eregister table.table-sm tbody tr:hover th.text-left span.text-dark { color: #818cf8 !important; }

        /* Evidențiere Puternică la Focus în Dark Mode */
        body.upsc-dark-mode #eregister table.table-sm tbody tr.focused-row { background-color: #1e294d !important; }
        body.upsc-dark-mode #eregister table.table-sm tbody tr.focused-row td { background-color: #1a233e !important; }
        body.upsc-dark-mode #eregister table.table-sm tbody tr.focused-row th.text-left {
            background-color: #1e294d !important;
            border-left: 5px solid #818cf8 !important;
            box-shadow: 4px 0 14px rgba(0, 0, 0, 0.5) !important;
        }
        body.upsc-dark-mode #eregister table.table-sm tbody tr.focused-row th.text-left span.text-dark {
            color: #ffffff !important;
            font-size: 15.5px !important;
            font-weight: 800 !important;
            transform: scale(1.06) translateX(4px);
        }
        body.upsc-dark-mode #eregister table.table-sm tbody tr.focused-row th.text-left .user-avatar {
            border-color: #818cf8 !important;
            transform: scale(1.18);
            box-shadow: 0 4px 12px rgba(129, 140, 248, 0.4) !important;
        }

        /* Coloane evidențiate în Dark Mode */
        body.upsc-dark-mode .hovered-col, 
        body.upsc-dark-mode .col-hover,
        body.upsc-dark-mode #eregister table.table-sm tbody td.hovered-col,
        body.upsc-dark-mode #eregister table.table-sm tbody td.col-hover,
        body.upsc-dark-mode #eregister table.table-sm tbody th.col-hover,
        body.upsc-dark-mode #eregister table.table-sm tbody td.col-hover:nth-last-child(-n+7),
        body.upsc-dark-mode #eregister table.table-sm tbody td.hovered-col:nth-last-child(-n+7) { 
            background-color: #162033 !important; 
        }
        body.upsc-dark-mode #eregister table.table-sm thead tr.register-notes-header th.focused-col {
            background: #1e294d !important;
            color: #c7d2fe !important;
            border-bottom: 3px solid #818cf8 !important;
        }
        body.upsc-dark-mode #eregister table.table-sm tbody td.focused-col { background-color: #182038 !important; }
        body.upsc-dark-mode #eregister table.table-sm tbody tr.focused-row td.focused-col { background-color: #243054 !important; }

        /* Toate celulele și input-urile din tabel în Dark Mode - NICIUN ELEMENT ALB */
        body.upsc-dark-mode #eregister table.table-sm tbody td,
        body.upsc-dark-mode #eregister table.table-sm tbody th {
            border-bottom-color: rgba(255, 255, 255, 0.05) !important;
            border-right-color: rgba(255, 255, 255, 0.04) !important;
        }

        body.upsc-dark-mode #eregister table.table-sm tbody td input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs),
        body.upsc-dark-mode #eregister table.table-sm tbody tr:hover input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs),
        body.upsc-dark-mode #eregister table.table-sm tbody td.col-hover input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs),
        body.upsc-dark-mode #eregister table.table-sm tbody td.hovered-col input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs),
        body.upsc-dark-mode #eregister table.table-sm tbody tr.focused-row input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs),
        body.upsc-dark-mode #eregister table.table-sm tbody td.focused-col input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs),
        body.upsc-dark-mode input[wire\:model="topic"], 
        body.upsc-dark-mode #upsc-settings-panel input, 
        body.upsc-dark-mode #upsc-settings-panel select,
        body.upsc-dark-mode #upsc-topics-toolbar textarea { 
            background-color: #0b0f19 !important; border: 1.5px solid #334155 !important; color: #f8fafc !important; 
        }
        body.upsc-dark-mode #eregister table.table-sm tbody td input:hover { border-color: #64748b !important; }
        body.upsc-dark-mode #eregister table.table-sm tbody td input:focus { 
            border-color: #818cf8 !important; background-color: #0f172a !important; 
            box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.25) !important;
        }
        body.upsc-dark-mode #eregister table.table-sm tbody td input:disabled { background-color: #111827 !important; border-color: #1f2937 !important; color: #9ca3af !important; }

        /* Coloanele de totalizare în Dark Mode */
        body.upsc-dark-mode #eregister table.table-sm tbody td:nth-last-child(-n+7) {
            background-color: #131b2e !important; border-left: 1px solid rgba(255, 255, 255, 0.06) !important;
        }
        body.upsc-dark-mode #eregister table.table-sm tbody tr:hover td:nth-last-child(-n+7) {
            background-color: #162033 !important;
        }
        body.upsc-dark-mode #eregister table.table-sm tbody tr.focused-row td:nth-last-child(-n+7) {
            background-color: #1a233e !important;
        }
        body.upsc-dark-mode #eregister table.table-sm tbody td:nth-last-child(7) input { 
            background-color: #111827 !important; border-color: #334155 !important; color: #94a3b8 !important; 
        }
        body.upsc-dark-mode #eregister table.table-sm tbody td:nth-last-child(1) {
            background-color: #161c36 !important; border-left: 2px solid #6366f1 !important;
        }
        body.upsc-dark-mode #eregister table.table-sm tbody tr.focused-row td:nth-last-child(1) {
            background-color: #1e2448 !important;
        }
        body.upsc-dark-mode #eregister table.table-sm tbody td:nth-last-child(1) input {
            background-color: #1e1b4b !important; border-color: #6366f1 !important; color: #c7d2fe !important;
        }

        /* HEATMAP în Dark Mode cu specificitate maximă */
        #eregister input.grade-excellent,
        body.upsc-dark-mode #eregister input.grade-excellent,
        body.upsc-dark-mode #eregister table.table-sm tbody td input.grade-excellent { 
            background-color: rgba(16, 185, 129, 0.3) !important; 
            color: #6ee7b7 !important; 
            border: 1.5px solid rgba(52, 211, 153, 0.6) !important; 
            font-weight: 800 !important;
            box-shadow: 0 2px 6px rgba(16, 185, 129, 0.15) !important;
        }
        #eregister input.grade-good,
        body.upsc-dark-mode #eregister input.grade-good,
        body.upsc-dark-mode #eregister table.table-sm tbody td input.grade-good { 
            background-color: rgba(59, 130, 246, 0.3) !important; 
            color: #93c5fd !important; 
            border: 1.5px solid rgba(96, 165, 250, 0.6) !important; 
            font-weight: 800 !important;
            box-shadow: 0 2px 6px rgba(59, 130, 246, 0.15) !important;
        }
        #eregister input.grade-ok,
        body.upsc-dark-mode #eregister input.grade-ok,
        body.upsc-dark-mode #eregister table.table-sm tbody td input.grade-ok { 
            background-color: rgba(245, 158, 11, 0.3) !important; 
            color: #fde68a !important; 
            border: 1.5px solid rgba(251, 191, 36, 0.6) !important; 
            font-weight: 800 !important;
            box-shadow: 0 2px 6px rgba(245, 158, 11, 0.15) !important;
        }
        #eregister input.grade-bad,
        body.upsc-dark-mode #eregister input.grade-bad,
        body.upsc-dark-mode #eregister table.table-sm tbody td input.grade-bad { 
            background-color: rgba(239, 68, 68, 0.3) !important; 
            color: #fca5a5 !important; 
            border: 1.5px solid rgba(248, 113, 113, 0.6) !important; 
            font-weight: 800 !important;
            box-shadow: 0 2px 6px rgba(239, 68, 68, 0.15) !important;
        }
        #eregister input.grade-abs,
        body.upsc-dark-mode #eregister input.grade-abs,
        body.upsc-dark-mode #eregister table.table-sm tbody td input.grade-abs { 
            background-color: rgba(225, 29, 72, 0.35) !important; 
            color: #fda4af !important; 
            border: 1.5px solid rgba(251, 113, 133, 0.7) !important; 
            font-weight: 900 !important; 
            box-shadow: 0 2px 6px rgba(225, 29, 72, 0.2) !important; 
        }

        /* 6.2 COLOANE ORE TRECUTE ȘI ZIUA CURENTĂ (DARK MODE) */
        body.upsc-dark-mode #eregister table.table-sm thead tr.register-notes-header th.col-past {
            background: #0f1626 !important;
            color: #94a3b8 !important;
            border-bottom: 2.5px solid #334155 !important;
        }
        body.upsc-dark-mode #eregister table.table-sm tbody td.col-past {
            background-color: #101726 !important;
            border-right: 1px solid rgba(255, 255, 255, 0.05) !important;
        }
        body.upsc-dark-mode #eregister table.table-sm tbody td.col-past input:not(.grade-excellent):not(.grade-good):not(.grade-ok):not(.grade-bad):not(.grade-abs) {
            background-color: #0b101b !important;
            border-color: #1e293b !important;
        }
        body.upsc-dark-mode #eregister table.table-sm tbody td.col-past input.input-missing-past {
            border: 1.5px dashed #f59e0b !important;
            box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2) !important;
        }

        /* Coloana de azi în Dark Mode */
        body.upsc-dark-mode #eregister table.table-sm thead tr.register-notes-header th.col-today {
            background: #17223b !important;
            color: #93c5fd !important;
            border-bottom: 3px solid #60a5fa !important;
        }
        body.upsc-dark-mode #eregister table.table-sm tbody td.col-today {
            background-color: #131c31 !important;
            border-right: 1px solid #2563eb !important;
        }
        body.upsc-dark-mode .badge-today {
            background: linear-gradient(135deg, #6366f1, #818cf8) !important;
            color: #ffffff !important;
            box-shadow: 0 1px 6px rgba(129, 140, 248, 0.4) !important;
        }
        body.upsc-dark-mode #eregister table.table-sm thead tr.register-notes-header th.col-last-past,
        body.upsc-dark-mode #eregister table.table-sm tbody td.col-last-past {
            border-right: 2.5px solid #818cf8 !important;
            box-shadow: 4px 0 8px -3px rgba(129, 140, 248, 0.3) !important;
        }

        /* Interacțiune Hover și Focus pentru celulele din orele trecute și de azi (Dark Mode) */
        body.upsc-dark-mode #eregister table.table-sm tbody tr:hover td.col-past { background-color: #162033 !important; }
        body.upsc-dark-mode #eregister table.table-sm tbody tr.focused-row td.col-past { background-color: #1a233e !important; }
        body.upsc-dark-mode #eregister table.table-sm tbody tr.focused-row td.col-past.focused-col { background-color: #243054 !important; }

        body.upsc-dark-mode #eregister table.table-sm tbody tr:hover td.col-today { background-color: #192642 !important; }
        body.upsc-dark-mode #eregister table.table-sm tbody tr.focused-row td.col-today { background-color: #1e2e50 !important; }
        body.upsc-dark-mode #eregister table.table-sm tbody tr.focused-row td.col-today.focused-col { background-color: #2b3e6b !important; }

        body.upsc-dark-mode .stat-card,
        body.upsc-dark-mode .chart-wrap { background: #0b0f19 !important; border-color: #1e293b !important; }
        body.upsc-dark-mode .stat-val { color: #f8fafc !important; }
        body.upsc-dark-mode .bar-track { background: #1e293b !important; }
        body.upsc-dark-mode .prompt-box { background-color: #0b0f19 !important; border-color: #334155 !important; }
        body.upsc-dark-mode .prompt-text { color: #93c5fd !important; }
        body.upsc-dark-mode .import-upload-zone { background-color: rgba(16, 185, 129, 0.08) !important; border-color: #10b981 !important; }
        body.upsc-dark-mode .import-upload-zone span { color: #34d399 !important; }
        body.upsc-dark-mode #toggle-extra-cols-btn,
        body.upsc-dark-mode #toggle-pair-absences-btn,
        body.upsc-dark-mode #toggle-highlight-past-btn,
        body.upsc-dark-mode #btn-close-stats,
        body.upsc-dark-mode #btn-close-import { background-color: #1e293b !important; border-color: #334155 !important; color: #cbd5e1 !important; }
        body.upsc-dark-mode #toggle-extra-cols-btn:hover,
        body.upsc-dark-mode #toggle-pair-absences-btn:hover,
        body.upsc-dark-mode #toggle-highlight-past-btn:hover,
        body.upsc-dark-mode #btn-close-stats:hover,
        body.upsc-dark-mode #btn-close-import:hover { background-color: #334155 !important; color: #fff !important; }
        body.upsc-dark-mode #toggle-pair-absences-btn.active { 
            background: linear-gradient(135deg, #0284c7, #0369a1) !important; 
            color: #ffffff !important; 
            border-color: #38bdf8 !important; 
            box-shadow: 0 2px 8px rgba(2, 132, 199, 0.45) !important; 
        }
        body.upsc-dark-mode #toggle-pair-absences-btn.active b { 
            background: rgba(255, 255, 255, 0.22); padding: 1px 6px; border-radius: 6px; 
        }
        body.upsc-dark-mode #toggle-highlight-past-btn.active { 
            background: linear-gradient(135deg, #4338ca, #4f46e5) !important; 
            color: #ffffff !important; 
            border-color: #818cf8 !important; 
            box-shadow: 0 2px 8px rgba(129, 140, 248, 0.45) !important; 
        }
        body.upsc-dark-mode #toggle-highlight-past-btn.active b { 
            background: rgba(255, 255, 255, 0.22); padding: 1px 6px; border-radius: 6px; 
        }
        body.upsc-dark-mode .help-tip { background-color: #162033 !important; border-left-color: #4f46e5 !important; color: #93c5fd !important; }
        body.upsc-dark-mode .help-tip b { color: #e2e8f0 !important; }
        body.upsc-dark-mode .list-group-item { color: #cbd5e1 !important; }
        body.upsc-dark-mode .breadcrumb { background-color: #131b2e !important; }
        body.upsc-dark-mode .breadcrumb-item.active { color: #94a3b8 !important; }
        body.upsc-dark-mode .main-header { background-color: #131b2e !important; border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important; }
        body.upsc-dark-mode .nav-link { color: #cbd5e1 !important; }

        body.upsc-dark-mode .card-header { background-color: #131b2e !important; border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important; }
        body.upsc-dark-mode .card-header .bg-light, body.upsc-dark-mode .card-header .table th, body.upsc-dark-mode .card-header .table td { background-color: #1e293b !important; color: #cbd5e1 !important; border-color: #334155 !important; }
        body.upsc-dark-mode .card-header .text-dark { color: #cbd5e1 !important; }
        body.upsc-dark-mode .card-header .table thead th[style*="background-color: #008000"] { background-color: rgba(16, 185, 129, 0.2) !important; color: #34d399 !important; border-bottom: 2px solid #10b981 !important; }
        body.upsc-dark-mode .card-header .table thead th[style*="background-color: #004080"] { background-color: rgba(6, 182, 212, 0.2) !important; color: #22d3ee !important; border-bottom: 2px solid #06b6d4 !important; }
        body.upsc-dark-mode .card-header .table thead th[style*="background-color: #e30d0d"] { background-color: rgba(239, 68, 68, 0.2) !important; color: #f87171 !important; border-bottom: 2px solid #ef4444 !important; }


        /* Toast Notification */
        .upsc-toast {
            position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%) translateY(20px);
            background: rgba(15, 23, 42, 0.92); backdrop-filter: blur(12px); color: #ffffff; 
            padding: 10px 24px; border-radius: 9999px; box-shadow: 0 20px 30px -5px rgba(0,0,0,0.3); 
            z-index: 10005; font-weight: 600; font-size: 14px; pointer-events: none; opacity: 0; 
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); border: 1px solid rgba(255,255,255,0.15);
        }
        .upsc-toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

        /* Rânduri selectabile pentru selectarea grupei */
        .clickable-group-row {
            cursor: pointer;
            transition: background-color 0.15s ease, transform 0.1s ease;
        }
        .clickable-group-row:hover {
            background-color: rgba(79, 70, 229, 0.08) !important;
        }
        body.upsc-dark-mode .clickable-group-row:hover {
            background-color: rgba(79, 70, 229, 0.18) !important;
        }

        /* Ascundere ultima coloană pe pagina de selectare a grupei */
        body.upsc-selection-page table th:last-child,
        body.upsc-selection-page table td:last-child {
            display: none !important;
        }
    `;
    document.head.appendChild(style);

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

    const teacherOptionsHtml = `
        <option disabled="" selected="">Alege Profesorul...</option>
        <option value="614">-  -</option>
        <option value="591">Mohamad Mohamad Abu</option>
        <option value="584">Ludmila Adamciuc</option>
        <option value="1">Viorica Adăscăliţa</option>
        <option value="2">Paulus Adelsgruber</option>
        <option value="571">Aliona Afanas</option>
        <option value="429">Dorin Afanas</option>
        <option value="651">Victoria Afonin</option>
        <option value="3">Ecaterina Ajder</option>
        <option value="4">Alexandru Alavaţchi</option>
        <option value="5">Mariana Albu-Oprea</option>
        <option value="421">Nicolae Aluchi</option>
        <option value="6">Alexandru Anghel</option>
        <option value="428">Diana Antoci</option>
        <option value="7">Natalia Antonevici</option>
        <option value="8">Olimpiada Arbuz-Spatari</option>
        <option value="412">Tatiana Arpentii</option>
        <option value="388">Ion Arsene</option>
        <option value="10">Natalia Avornicesă</option>
        <option value="12">Eugenia Babîră</option>
        <option value="11">Stanislav Babiuc</option>
        <option value="570">Sergiu Baciu</option>
        <option value="628">Vasile Balaban</option>
        <option value="589">Rodica Balan</option>
        <option value="15">Nicolae Balmuş</option>
        <option value="595">Olga Balmuș</option>
        <option value="16">Veronica Baltag</option>
        <option value="644">Elena Bannaia</option>
        <option value="541">Felicia Banu</option>
        <option value="18">Victoria Baraga</option>
        <option value="473">Nadejda Baraliuc</option>
        <option value="400">Alic Barbă</option>
        <option value="357">Alexandra Barbăneagră</option>
        <option value="553">Lucia Bayrleitner</option>
        <option value="21">Iurii Bejan</option>
        <option value="22">Ludmila Bejenaru</option>
        <option value="558">Victoria Belous</option>
        <option value="23">Ion Bencheci</option>
        <option value="24">Virginia Bernic</option>
        <option value="25">Elena Bîceva</option>
        <option value="582">Claudia Bîrgăoanu</option>
        <option value="399">Elena Bîrsan</option>
        <option value="509">Svetlana Bîrsan</option>
        <option value="505">Nicolae Boboc</option>
        <option value="26">Iuliana Bobrova</option>
        <option value="404">Viorel Bocancea</option>
        <option value="28">Cornelia Bodorin</option>
        <option value="504">Violeta Bogdanova</option>
        <option value="30">Veronica Bolduma</option>
        <option value="29">Viorel Bolduma</option>
        <option value="31">Anna Bolucencova</option>
        <option value="430">Valeriu Bordan</option>
        <option value="32">Irina Bordei</option>
        <option value="34">Maia Borozan</option>
        <option value="35">Marina Bostan</option>
        <option value="409">Angela Botezatu</option>
        <option value="478">Ion Botezatu</option>
        <option value="36">Nina Botezatu</option>
        <option value="403">Valentina Botnari</option>
        <option value="494">Paulina Bouroș</option>
        <option value="38">Olga Boz</option>
        <option value="436">Andrei Braicov</option>
        <option value="39">Eleonora Brigalda</option>
        <option value="375">Lilia Brînză</option>
        <option value="40">Olesea Bucuci</option>
        <option value="42">Ana Budnic</option>
        <option value="43">Ana Bulat</option>
        <option value="642">Ion Bulicanu</option>
        <option value="413">Radu Burdujan</option>
        <option value="519">Svetlana Burea</option>
        <option value="47">Alexandru Burlacu</option>
        <option value="46">Valentin Burlacu</option>
        <option value="48">Eugenia Bușmachiu</option>
        <option value="451">Natalia Butmalai</option>
        <option value="359">Aurica Buzenco</option>
        <option value="50">Elena Buzinschi</option>
        <option value="596">Lenuța Buzu</option>
        <option value="432">Mihai Calalb</option>
        <option value="620">Angela Calancea</option>
        <option value="51">Carolina Calaraș</option>
        <option value="561">Victoria Calistru</option>
        <option value="632">Tatiana Callo</option>
        <option value="463">Laurențiu Calmuțchi</option>
        <option value="640">Angela Candu</option>
        <option value="346">Teodor Candu</option>
        <option value="52">Ludmila Canțîr</option>
        <option value="468">Lucia Căpățină</option>
        <option value="54">Natalia Carabet</option>
        <option value="55">Olimpiada Caracaș</option>
        <option value="168">Elena Carachentseva</option>
        <option value="56">Vlad Caraman</option>
        <option value="57">Dumitru Carata</option>
        <option value="634">Liuba Carnet</option>
        <option value="58">Ivan Carp</option>
        <option value="223">Mihaela Cașcaval</option>
        <option value="652">Victoria Casminina</option>
        <option value="59">Andrei Castravăț</option>
        <option value="443">Tudor Castraveț</option>
        <option value="60">Sergiu Cataraga</option>
        <option value="392">Nadejda Cazacioc</option>
        <option value="535">Veronica Ceban</option>
        <option value="62">Lilia Cebanu</option>
        <option value="578">Stanislav Cebotari</option>
        <option value="63">Natalia Celpan-Patic</option>
        <option value="64">Lucia Cepraga</option>
        <option value="501">Olga Cerbu</option>
        <option value="27">Galina Cereteu</option>
        <option value="65">Viorica Cerneavschi</option>
        <option value="67">Silvia Chicu</option>
        <option value="68">Nicolae Chicuș</option>
        <option value="452">Grigore Chiperi</option>
        <option value="586">Nadejda Chiperi</option>
        <option value="542">Oxana Chira</option>
        <option value="69">Larisa Chirev</option>
        <option value="383">Eugenia Chiriac</option>
        <option value="532">Ghenadie Chiriac</option>
        <option value="464">Liubomir Chiriac</option>
        <option value="70">Tatiana Chiriac</option>
        <option value="540">Lilia Chirilov</option>
        <option value="71">Vasile Chirilov</option>
        <option value="72">Sebastian Chirimbu</option>
        <option value="525">Olga Chirvas</option>
        <option value="389">Diana Chișca</option>
        <option value="74">Victor Chiseliov</option>
        <option value="75">Lucia Chitoroga</option>
        <option value="76">Liubovi Cibotaru</option>
        <option value="77">Iurie Cibric</option>
        <option value="79">Adriana Ciobanu</option>
        <option value="479">Eugeniu Ciobanu</option>
        <option value="78">Iraida Ciobanu</option>
        <option value="543">Mihaela Ciobanu</option>
        <option value="631">Nicoleta Ciobanu</option>
        <option value="80">Valentina Ciobanu</option>
        <option value="587">Ana-Maria Ciocoi</option>
        <option value="611">Ana-Maria Ciocoi</option>
        <option value="82">Constantin Ciorbă</option>
        <option value="352">Svetlana Ciorbă</option>
        <option value="391">Victor Ciornea</option>
        <option value="83">Lilia Cîrlan</option>
        <option value="416">Tatiana Cîrlig</option>
        <option value="85">Natalia Ciubotaru</option>
        <option value="84">Nicolae Ciubotaru</option>
        <option value="508">Ludmila Coadă</option>
        <option value="374">Viorica Coadă</option>
        <option value="397">Igor Codreanu</option>
        <option value="377">Sergiu Codreanu</option>
        <option value="86">Sergiu Cogut</option>
        <option value="87">Lidia Cojocari</option>
        <option value="461">Snejana Cojocari-Luchian</option>
        <option value="338">Aurelia Cojocaru</option>
        <option value="560">Svetlana Cojocaru</option>
        <option value="89">Valentina Cojocaru</option>
        <option value="90">Vasile Cojocaru</option>
        <option value="405">Victoria Cojocaru</option>
        <option value="406">Violeta Cojocaru</option>
        <option value="92">Liubov Colesnic</option>
        <option value="483">Lilia Constantinov</option>
        <option value="500">Valentin Constantinov</option>
        <option value="93">Angela Copacinschi</option>
        <option value="347">Nina Corcinschi</option>
        <option value="576">Cristian Corolenco</option>
        <option value="387">Eduard Coropceanu</option>
        <option value="384">Diana Coșcodan</option>
        <option value="549">Valeria Covalenco</option>
        <option value="95">Elena Covaliova</option>
        <option value="96">Olga Covaliova</option>
        <option value="381">Tudor Cozari</option>
        <option value="368">Dumitru Cozma</option>
        <option value="97">Tatiana Cozman</option>
        <option value="98">Valeria Crasov</option>
        <option value="99">Tatiana Cravcenco</option>
        <option value="590">Maria Crețu</option>
        <option value="419">Vasile Crețu</option>
        <option value="534">Aurelia Crivoi</option>
        <option value="101">Ion Croitoru</option>
        <option value="536">Angela Cucer</option>
        <option value="102">Adrian Cucereavîi</option>
        <option value="348">Lucia Cucu</option>
        <option value="469">Vadim Cujbă</option>
        <option value="103">Stelian Culea</option>
        <option value="104">Uliana Culea</option>
        <option value="105">Angela Curacițchi</option>
        <option value="106">Valentin Cușcă</option>
        <option value="353">Angela Cutasevici</option>
        <option value="495">Olesea Cuzan</option>
        <option value="108">Larisa Cuznețov</option>
        <option value="633">Anatolie Daicu</option>
        <option value="109">Nadejda Damian</option>
        <option value="607">Daniel Dandeș</option>
        <option value="528">Malai Daniela</option>
        <option value="531">Aureliu Danilov</option>
        <option value="111">Gabriela Darii</option>
        <option value="113">Emilia Denisov</option>
        <option value="114">Svetlana Dermenji</option>
        <option value="480">Vitalie Dilan</option>
        <option value="115">Maria Diţa</option>
        <option value="552">Liuba Dobîndă</option>
        <option value="601">Carolina Dodu-Savca</option>
        <option value="116">Liubovi Donic</option>
        <option value="118">Diana Donoagă</option>
        <option value="627">Vadim Druță</option>
        <option value="120">Tatiana Dubineanschi</option>
        <option value="393">Gheorghe Duca</option>
        <option value="621">Ina Dumbravă</option>
        <option value="121">Roza Dumbraveanu</option>
        <option value="573">Robert Eckhart</option>
        <option value="597">Adelina Efros</option>
        <option value="124">Valentina Enachi</option>
        <option value="125">Alexandru Ermurache</option>
        <option value="126">Irina Ețco</option>
        <option value="128">Veaceslav Fisticanu</option>
        <option value="489">Valentina Fluierar</option>
        <option value="130">Olesea Frunze</option>
        <option value="564">Valentina Gaiciuc</option>
        <option value="619">Daniela Galațanu</option>
        <option value="131">Lilia Gălușcă</option>
        <option value="132">Olesea Gangan</option>
        <option value="133">Nina Garștea</option>
        <option value="437">Ala Gasnaș</option>
        <option value="134">Olesea Ghedrovici</option>
        <option value="135">Cezara Gheorghiță</option>
        <option value="385">Elena Gherasim</option>
        <option value="136">Olga Gherlovan</option>
        <option value="606">Natalia Ghetmanenco</option>
        <option value="139">Adrian Ghicov</option>
        <option value="140">Zinaida Ghilan</option>
        <option value="142">Gheorghe Gînju</option>
        <option value="141">Stela Gînju</option>
        <option value="143">Aurelia Glavan</option>
        <option value="438">Angela Globa</option>
        <option value="144">Ana Gobjila</option>
        <option value="593">Ecaterina Godoroja</option>
        <option value="145">Tamara Gogu</option>
        <option value="476">Sergiu Golub</option>
        <option value="146">Silvia Golubițchi</option>
        <option value="147">Oxana Golubovschi</option>
        <option value="521">Victoria Gonța</option>
        <option value="420">Elena Gorincioi</option>
        <option value="580">Elena Gozun</option>
        <option value="152">Petru Gozun</option>
        <option value="153">Svetlana Gozun</option>
        <option value="154">Vasile Grama</option>
        <option value="155">Aliona Grati</option>
        <option value="156">Jana Grecu</option>
        <option value="376">Sofia Grigorcea</option>
        <option value="158">Olga Grosu</option>
        <option value="599">Vladimir Grozdov</option>
        <option value="160">Adela Guțu</option>
        <option value="433">Leonid Guțuleac</option>
        <option value="161">Maria Guzun</option>
        <option value="356">Ana Guzun-Bulat</option>
        <option value="583">Olesea Haceatrean</option>
        <option value="162">Efrosinia Haheu-Munteanu</option>
        <option value="530">Mihaela Hajdeu</option>
        <option value="164">Lilia Herța</option>
        <option value="163">Valeriu Herța</option>
        <option value="608">Gabriel Ichim-Radu</option>
        <option value="165">Yurie Ilaşco</option>
        <option value="453">Anatolie Ionaș</option>
        <option value="166">Ina Isac</option>
        <option value="650">Cătălina Istrati</option>
        <option value="548">Adriana Istrati-Ștefănescu</option>
        <option value="457">Iulia Iurchevici</option>
        <option value="511">Constantin Ivanov</option>
        <option value="395">Anastasia Ivanova</option>
        <option value="481">Elena Jechiu</option>
        <option value="167">Petru Jelescu</option>
        <option value="585">Elena Jigău</option>
        <option value="490">Victor Jitari</option>
        <option value="523">Natalia Josu</option>
        <option value="556">Viorica Juc</option>
        <option value="579">Dumitru Juraveli</option>
        <option value="349">Tatiana Kononova</option>
        <option value="555">Mart Laanpere</option>
        <option value="170">Tatiana Lagaeva</option>
        <option value="171">Emilia Lapoşina</option>
        <option value="588">Tudor Lapp</option>
        <option value="474">Lilia Lașcu</option>
        <option value="484">Tatiana Lașcu</option>
        <option value="491">Vadim Lavric</option>
        <option value="172">Alexandru Leahu</option>
        <option value="173">Natalia Leu</option>
        <option value="518">Daria Levițchi</option>
        <option value="492">Nina Liogchi</option>
        <option value="577">Ala Lipceanu</option>
        <option value="174">Angela Lisnic</option>
        <option value="176">Elena Losîi</option>
        <option value="497">Vasile Lozovan</option>
        <option value="617">Ecaterina Lungu</option>
        <option value="533">Lidia Lungu</option>
        <option value="636">Marinela Lungu</option>
        <option value="517">Viorelia Lungu</option>
        <option value="439">Natalia Lupașco</option>
        <option value="177">Lilia Lupașcu</option>
        <option value="178">Ala Lupu</option>
        <option value="465">Ilie Lupu</option>
        <option value="645">Lucia Lupu</option>
        <option value="417">Rodica Maistru</option>
        <option value="180">Vitalie Malcoci</option>
        <option value="447">Vitalie Mamot</option>
        <option value="635">Iuliana Manoli</option>
        <option value="182">Alina Mardari</option>
        <option value="510">Angela Mardari</option>
        <option value="183">Mariana Marin</option>
        <option value="185">Tatiana Matran</option>
        <option value="186">Vasile Maxim</option>
        <option value="187">Victoria Maximciuc</option>
        <option value="390">Eugenia Melentiev</option>
        <option value="624">Maxim Melinte</option>
        <option value="188">Veronica Melinti</option>
        <option value="637">Natalia Melnic</option>
        <option value="189">Radu Melniciuc</option>
        <option value="351">Zinaida Micleuşanu</option>
        <option value="524">Tatiana Midrigan</option>
        <option value="488">Cristina Mihai</option>
        <option value="568">Veronica Mihailov</option>
        <option value="502">Lilia Mihalachi</option>
        <option value="444">Ion Mironov</option>
        <option value="190">Iulia Mîrza</option>
        <option value="458">Valentina Mîslițchi</option>
        <option value="191">Liuba Mocanu</option>
        <option value="623">Anatolii Mogîlda</option>
        <option value="192">Ludmila Moisei</option>
        <option value="193">Ludmila Mokan-Vozian</option>
        <option value="345">Iosif Moldovanu</option>
        <option value="194">Ion Morărescu</option>
        <option value="563">Ivan Morozan</option>
        <option value="496">Elena Moșanu</option>
        <option value="396">Lora Moșanu-Șupac</option>
        <option value="195">Andrei Munteanu</option>
        <option value="196">Octavian Munteanu</option>
        <option value="471">Tamara Munteanu</option>
        <option value="197">Ilie Mușinschi</option>
        <option value="199">Dumitru Musteață</option>
        <option value="477">Elena Musteață</option>
        <option value="198">Sergiu Musteață</option>
        <option value="641">Svetlana Nastas</option>
        <option value="547">Anca-Mihaela Nastasă</option>
        <option value="200">Cristina Nazaru</option>
        <option value="201">Liliana Neaga</option>
        <option value="499">Vasile Neaga</option>
        <option value="520">Natalia Neagu</option>
        <option value="203">Gina-Aurora Necula</option>
        <option value="378">Boris Nedbaliuc</option>
        <option value="653">Ecaterina Neer</option>
        <option value="559">Corina Negară</option>
        <option value="493">Angela Nevoia</option>
        <option value="394">Elena Nicolau</option>
        <option value="205">Gheorghe Niculiță</option>
        <option value="206">Larisa Noroc</option>
        <option value="514">Alexandra Nour</option>
        <option value="424">Ecaterina Novacovscaia</option>
        <option value="643">Alexandru Obadă</option>
        <option value="207">Veronica Oboroceanu</option>
        <option value="411">Viorica Oboroceanu</option>
        <option value="208">Diana Oganisean</option>
        <option value="209">Aliona Ohrimenco</option>
        <option value="210">Valentina Olărescu</option>
        <option value="211">Anastasia Oloieru</option>
        <option value="380">Nadejda Ovcerenco</option>
        <option value="516">Liuba Paiu</option>
        <option value="212">Eugen Palade</option>
        <option value="402">Vasile Panico</option>
        <option value="566">Aliona Paniș</option>
        <option value="213">Ludmila Papuc</option>
        <option value="184">Violeta Paraschiv</option>
        <option value="551">Cristina Pascalova</option>
        <option value="639">Valentina Pascari</option>
        <option value="214">Dumitru Patrașcu</option>
        <option value="554">Cebotaru Paula</option>
        <option value="440">Dorin Pavel</option>
        <option value="441">Maria Pavel</option>
        <option value="215">Mihaela Pavlenco</option>
        <option value="459">Lilia Pavlenko</option>
        <option value="216">Carolina Perjan</option>
        <option value="355">Anatol Petrenco</option>
        <option value="217">Liuba Petrenco</option>
        <option value="219">Lilia Petriciuc</option>
        <option value="512">Elena Petrov</option>
        <option value="538">Nina Petrovschi</option>
        <option value="386">Pavel Pînzaru</option>
        <option value="220">Mariana Pîrvan</option>
        <option value="221">Stela Pîslari</option>
        <option value="418">Daniela Placinta</option>
        <option value="222">Victoria Plămădeală</option>
        <option value="350">Inga Platon</option>
        <option value="224">Maria Pleşca</option>
        <option value="225">Galina Pleșcenco</option>
        <option value="226">Elena Ploșniță</option>
        <option value="227">Dorina Ponomari</option>
        <option value="647">Lilia Popa</option>
        <option value="370">Mihail Popa</option>
        <option value="229">Natalia Popa</option>
        <option value="613">Oxana Popa</option>
        <option value="228">Pavel Popa</option>
        <option value="232">Cristina Popescu</option>
        <option value="231">Maria Popescu</option>
        <option value="602">Angela Popovici</option>
        <option value="233">Sergiu Port</option>
        <option value="407">Liliana Posțan</option>
        <option value="234">Ana-Maria Postolache</option>
        <option value="434">Igor Postolachi</option>
        <option value="435">Valentina Postolachi</option>
        <option value="235">Liuba Prangache</option>
        <option value="482">Afanasie Prepeliță</option>
        <option value="467">Natalia Procop</option>
        <option value="238">Irina Prosii</option>
        <option value="448">Petru Prunici</option>
        <option value="239">Elena Prus</option>
        <option value="240">Elizabeta Puică</option>
        <option value="594">Viorica Purcel</option>
        <option value="610">Viorica Purcel</option>
        <option value="445">Anatolie Puțuntică</option>
        <option value="369">Vitalie Puțuntică</option>
        <option value="242">Iurie Puzdrovski</option>
        <option value="569">Elena Puzur</option>
        <option value="246">Aurelia Racu</option>
        <option value="243">Igor Racu</option>
        <option value="244">Iulia Racu</option>
        <option value="245">Jana Racu</option>
        <option value="485">Mario Radermacher</option>
        <option value="648">Mihaela Railean</option>
        <option value="544">Stela Railean</option>
        <option value="247">Olga Raileanu</option>
        <option value="248">Veronica Răileanu</option>
        <option value="626">Elena Rațeeva</option>
        <option value="249">Eugen Reabenchi</option>
        <option value="371">Vadim Repeșco</option>
        <option value="575">Aurelian Roman</option>
        <option value="507">Nicolae Roman</option>
        <option value="253">Daniela Roșca</option>
        <option value="251">Ruslan Roșca</option>
        <option value="398">Andrei Rotaru</option>
        <option value="255">Elena Rotaru</option>
        <option value="254">Maria Rotaru</option>
        <option value="557">Ljudmilla Rozhdestvenskaja</option>
        <option value="529">Elena Rozovel</option>
        <option value="486">Taisa Rudeanu</option>
        <option value="342">Călin Rus</option>
        <option value="401">Elena Rusu</option>
        <option value="513">Nina Rusu</option>
        <option value="256">Valentin Rusu</option>
        <option value="258">Larisa Sadovei</option>
        <option value="259">Eraneac Sagoian</option>
        <option value="260">Natalia Sajin</option>
        <option value="431">Larisa Sali</option>
        <option value="261">Josef Sallanz</option>
        <option value="515">Ludmila Samanati</option>
        <option value="262">Elena Samburic</option>
        <option value="263">Sergiu Sanduleac</option>
        <option value="622">Victoria Saracuța</option>
        <option value="150">Liliana Saranciuc-Gordea</option>
        <option value="545">Constantin Șarcov</option>
        <option value="422">Viorica Șargarovschi</option>
        <option value="264">Anastasia Sava</option>
        <option value="265">Igor Sava</option>
        <option value="266">Lucia Sava</option>
        <option value="267">Corina Savițchi</option>
        <option value="498">Victor Șcerbacov</option>
        <option value="269">Constantin Șchiopu</option>
        <option value="268">Lucia Șchiopu</option>
        <option value="270">Kathrin Schoberl</option>
        <option value="581">Olga Scoric</option>
        <option value="654">Viorica Sculea</option>
        <option value="487">Albina Scutaru</option>
        <option value="656">Daniela Șerban</option>
        <option value="630">Nicoleta Sergentu</option>
        <option value="466">Nicolae Silistraru</option>
        <option value="273">Ana Simac</option>
        <option value="274">Irina Simcenco</option>
        <option value="275">Larisa Sinițaru</option>
        <option value="522">Rodica Sîrbu</option>
        <option value="276">Olesea Sîrghi</option>
        <option value="277">Olga Smochin</option>
        <option value="278">Dumitrița Smolnițchi</option>
        <option value="449">Elena Sochircă</option>
        <option value="279">Natalia Socolova</option>
        <option value="460">Larisa Șofron</option>
        <option value="280">Angela Solcan</option>
        <option value="539">Rodica Solovei</option>
        <option value="281">Rodica Spătaru</option>
        <option value="612">Diana Spulber</option>
        <option value="423">Elena Stamati</option>
        <option value="282">Ion Ștefăniță</option>
        <option value="283">Elena Stempovschi</option>
        <option value="655">Cristina Stîrcu</option>
        <option value="475">Cristina Straistari-Lungu</option>
        <option value="454">Natalia Străjescu</option>
        <option value="285">Valentina Stratan</option>
        <option value="472">Victoria Stratan</option>
        <option value="450">Maria Strechii</option>
        <option value="372">Alexandru Șuba</option>
        <option value="286">Svetlana Șugjda</option>
        <option value="646">Vera Surățel</option>
        <option value="287">Dorina Surugiu</option>
        <option value="625">Sergiu Suvac</option>
        <option value="546">Silvia Suvac</option>
        <option value="408">Elena Taban</option>
        <option value="609">Liliana Tăbîrța</option>
        <option value="455">Polina Taburceanu</option>
        <option value="289">Svetlana Talpă</option>
        <option value="175">Cristina Tamazlîcari</option>
        <option value="290">Elena Țap</option>
        <option value="291">Ion Țapu</option>
        <option value="292">Boris Țarălungă</option>
        <option value="294">Ecaterina Țărnă</option>
        <option value="296">Angela Tataru</option>
        <option value="295">Nina Tataru</option>
        <option value="297">Angela Teleman</option>
        <option value="572">Ana Țîbuleac</option>
        <option value="373">Ana Ticaciuc</option>
        <option value="298">Lucia Țîcu</option>
        <option value="415">Ana Țîganaș</option>
        <option value="638">Ion Țîgulea</option>
        <option value="299">Elena Țîmbaliuc</option>
        <option value="300">Olga Timuș</option>
        <option value="301">Iuliana Tiosa</option>
        <option value="302">Olga Tiron</option>
        <option value="503">Inga Țîțchiev</option>
        <option value="592">Anatolie Tomoianu</option>
        <option value="550">Natalia Topal</option>
        <option value="303">Gabriella Topor</option>
        <option value="629">Viorica Trifăuțan</option>
        <option value="425">Alina Trofim</option>
        <option value="306">Alexei Țulea</option>
        <option value="379">Lilia Țurcan</option>
        <option value="657">Alina-Maria Țurcanu</option>
        <option value="343">Aurelii Tverdohleb</option>
        <option value="309">Igor Tverdohleb</option>
        <option value="310">Irina Țvic</option>
        <option value="562">Profesor UPSC</option>
        <option value="313">Rodica Ursachi</option>
        <option value="605">Ion Ursu</option>
        <option value="456">Lucia Ursu</option>
        <option value="315">Ludmila Ursu</option>
        <option value="314">Valentina Ursu</option>
        <option value="317">Doina Usaci</option>
        <option value="318">Larisa Usatîi</option>
        <option value="319">Mariana Vacarciuc</option>
        <option value="442">Teodora Vascan</option>
        <option value="470">Tatiana Vasian</option>
        <option value="321">Andrei Vasilache</option>
        <option value="649">Ana Vasina</option>
        <option value="322">Alexandru Vatavu</option>
        <option value="600">Tatiana Verdeș</option>
        <option value="323">Vasile Versteac</option>
        <option value="410">Tatiana Veveriță</option>
        <option value="324">Marcela Vîlcu</option>
        <option value="462">Elena Vinnicenco</option>
        <option value="325">Maria Vîrlan</option>
        <option value="326">Ala Vitcovschii</option>
        <option value="598">Irina Vlas</option>
        <option value="446">Nina Volontir</option>
        <option value="327">Vasile Vozian</option>
        <option value="567">Violeta Vrabii</option>
        <option value="328">Tatiana Yavuz</option>
        <option value="329">Corina Zagaievschi</option>
        <option value="330">Viorica Zaharia</option>
        <option value="331">Simion Zamșa</option>
        <option value="332">Ion Zderciuc</option>
        <option value="414">Vera Zdraguș</option>
        <option value="333">Aliona Zgardan-Crudu</option>
        <option value="334">Ecaterina Zubenschi</option>
        <option value="616">Mariana Zubenschi</option>
    `;

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
            ${teacherOptionsHtml}
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
                <img src="https://i.imgur.com/ss0xMzu.jpeg" width="192" height="192" style="border-radius: 12px; border: 1px solid #e2e8f0; padding: 6px; background: #fff; box-shadow: 0 4px 14px rgba(0,0,0,0.08); margin-top: 8px;">
                <div style="font-size: 11px; color: #64748b; margin-top: 6px; font-weight: 500;">Scanează cu orice aplicație bancară din MD</div>
            </div>
        </div>
    `;
    document.body.appendChild(fab); document.body.appendChild(panel);
    document.getElementById('set-teacher').value = s_teacher;

    fab.addEventListener('click', () => panel.classList.toggle('active'));
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
        brandBadge.innerHTML = '⚡ UPSC Plus <b>v15.0.1</b>';

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

                console.log("Harta sloturilor SIMU (Visual Index):", simuDateSlots);

                let totalTasks = 0;
                let completedTasks = 0;
                csvRows.forEach(row => { csvHeader.forEach((h, i) => { if (i > 0) totalTasks++; }); });

                for (let i = 0; i < csvRows.length; i++) {
                    const row = csvRows[i];
                    const studentNameCSV = row[0];
                    if (!studentNameCSV) continue;

                    let usedSlots = [];
                    for (let j = 1; j < csvHeader.length; j++) {
                        const dateCSV = csvHeader[j] ? csvHeader[j].trim() : '';
                        const valCSV = row[j] ? row[j].trim() : '';

                        const slot = simuDateSlots.find(s => s.date === dateCSV && !usedSlots.includes(s.index));
                        if (slot) {
                            usedSlots.push(slot.index); 

                            if (valCSV && valCSV !== '') {
                                // RE-CĂUTĂM STUDENTUL ÎN DOM LA FIECARE PAS (pentru a evita erorile de re-randare Livewire)
                                const simuRows = document.querySelectorAll('#eregister tbody tr:not(.register-notes-header)');
                                let targetTr = null;
                                const searchName = studentNameCSV.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
                                const searchWords = searchName.split(/\s+/).filter(w => w.length > 1);

                                for (let tr of simuRows) {
                                    const nameSpan = tr.querySelector('th.text-left span.text-dark');
                                    if (nameSpan) {
                                        const simuName = nameSpan.innerText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                                        if (searchWords.every(word => simuName.includes(word))) { targetTr = tr; break; }
                                    }
                                }

                                if (!targetTr) {
                                    console.warn(`[Import] Studentul "${studentNameCSV}" nu a mai fost găsit după refresh.`);
                                    continue;
                                }

                                const cell = targetTr.children[slot.index];
                                const input = cell?.querySelector('input');
                                
                                if (input && !input.disabled) {
                                    if (input.value.trim().toLowerCase() === valCSV.toLowerCase()) continue;

                                    statusText.innerText = `Se completează: ${studentNameCSV} (${dateCSV})...`;
                                    
                                    input.click();
                                    input.focus();
                                    await new Promise(r => setTimeout(r, 500));

                                    const popup = document.getElementById('keyboardEvaluationsPopup');
                                    if (popup) {
                                        const buttons = Array.from(popup.querySelectorAll('button'));
                                        const targetBtn = buttons.find(b => b.innerText.trim().toLowerCase() === valCSV.toLowerCase());
                                        if (targetBtn) {
                                            targetBtn.click();
                                            await new Promise(r => setTimeout(r, 400));
                                            popup.querySelector('#saveEvaluationButton')?.click();
                                        } else {
                                            input.value = valCSV;
                                            if (input.classList.contains('student-evaluation')) {
                                                input.dispatchEvent(new Event('input', { bubbles: true }));
                                            }
                                            input.dispatchEvent(new Event('change', { bubbles: true }));
                                            document.querySelector('#saveEvaluationButton')?.click();
                                        }
                                    } else {
                                        input.value = valCSV;
                                        if (input.classList.contains('student-evaluation')) {
                                            input.dispatchEvent(new Event('input', { bubbles: true }));
                                        }
                                        input.dispatchEvent(new Event('change', { bubbles: true }));
                                        document.querySelector('#saveEvaluationButton')?.click();
                                    }

                                    completedTasks++;
                                    progressBar.style.width = `${(completedTasks / totalTasks) * 100}%`;
                                    
                                    // Așteptăm procesarea serverului
                                    await new Promise(r => setTimeout(r, 1800)); 
                                    let waitAttempts = 0;
                                    while (document.querySelector('.blockUI') && waitAttempts < 100) {
                                        await new Promise(r => setTimeout(r, 200));
                                        waitAttempts++;
                                    }
                                    await new Promise(r => setTimeout(r, 800)); 
                                }
                            }
                        }
                    }
                }

                statusText.innerText = `✅ Import finalizat! ${completedTasks} note actualizate.`;
                setTimeout(() => {
                    alert(`Gata! S-au actualizat ${completedTasks} note.`);
                    importOverlay.classList.remove('active');
                    progressArea.style.display = 'none';
                }, 1500);
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
            let avg = grades.length > 0 ? (grades.reduce((a,b)=>a+b,0) / grades.length).toFixed(2) : '0.00';
            document.getElementById('stat-avg').innerText = avg;

            let card1 = document.getElementById('card-eval1');
            if (eval1Grades.length > 0) {
                document.getElementById('stat-eval1').innerText = (eval1Grades.reduce((a,b)=>a+b,0) / eval1Grades.length).toFixed(2);
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
                document.getElementById('stat-eval2').innerText = (eval2Grades.reduce((a,b)=>a+b,0) / eval2Grades.length).toFixed(2);
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
    document.addEventListener('mousemove', e => { 
        const eregister = document.getElementById('eregister');
        if (eregister && eregister.classList.contains('disable-hover')) {
            if (!document.activeElement || !document.activeElement.closest('#eregister')) {
                eregister.classList.remove('disable-hover');
            }
        }
        
        let cell = e.target.closest('td, th');
        if (cell && cell.closest('#eregister')) {
            let tr = cell.closest('tr'); let index = Array.from(tr.children).indexOf(cell);
            if (index !== lastHoveredCol) {
                document.querySelectorAll('.hovered-col').forEach(el => el.classList.remove('hovered-col'));
                document.querySelectorAll('#eregister tr').forEach(row => { if (row.children[index]) row.children[index].classList.add('hovered-col'); });
                lastHoveredCol = index;
            }
        }
    });

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

    function runAllDecorations() {
        applyHeatmap();
        reformatTopicDates();
        highlightDateColumns();
    }

    let decorationTimeout = null;
    const observer = new MutationObserver(() => {
        if (decorationTimeout) clearTimeout(decorationTimeout);
        decorationTimeout = setTimeout(() => {
            observer.disconnect();
            try {
                runAllDecorations();
            } finally {
                observer.observe(document.body, { childList: true, subtree: true });
            }
        }, 80);
    });

    runAllDecorations();
    observer.observe(document.body, { childList: true, subtree: true });

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
            
            if (confirm("Puneți absență ('a') tuturor studenților fără notă din această coloană?")) {
                let processedCount = 0;
                let maxToProcess = 100; // Limită de siguranță

                // Obținem rândurile inițiale
                let rows = Array.from(document.querySelectorAll('#eregister tbody tr:not(.register-notes-header)'));
                
                for (let i = 0; i < rows.length && processedCount < maxToProcess; i++) {
                    // Re-scanăm rândurile la fiecare iterație pentru a evita elementele detașate (DOM stale)
                    const currentRows = document.querySelectorAll('#eregister tbody tr:not(.register-notes-header)');
                    const tr = currentRows[i];
                    if (!tr) continue;

                    const cell = tr.children[visualColIndex];
                    const input = cell?.querySelector('input');

                    if (input && !input.disabled && input.value.trim() === '') {
                        processedCount++;
                        console.log(`[Bulk] Procesare rând ${i}, index vizual ${visualColIndex}`);
                        
                        // Încercăm să deschidem pop-up-ul
                        input.click();
                        input.focus();
                        await new Promise(r => setTimeout(r, 500));

                        const popup = document.getElementById('keyboardEvaluationsPopup');
                        let success = false;

                        if (popup && popup.offsetParent !== null) { // Verificăm dacă e vizibil
                            const buttons = Array.from(popup.querySelectorAll('button'));
                            const absBtn = buttons.find(b => b.innerText.trim().toLowerCase() === 'a');
                            
                            if (absBtn) {
                                absBtn.click();
                                await new Promise(r => setTimeout(r, 250));
                                popup.querySelector('#saveEvaluationButton')?.click();
                                success = true;
                            }
                        }

                        if (!success) {
                            console.log(`[Bulk] Fallback pentru rândul ${i}`);
                            input.value = 'a';
                            if (input.classList.contains('student-evaluation')) {
                                input.dispatchEvent(new Event('input', { bubbles: true }));
                            }
                            input.dispatchEvent(new Event('change', { bubbles: true }));
                            document.querySelector('#saveEvaluationButton')?.click();
                        }
                        
                        // Așteptăm salvarea serverului indiferent de metodă
                        await new Promise(r => setTimeout(r, 1500));
                        let wait = 0;
                        while (document.querySelector('.blockUI') && wait < 60) {
                            await new Promise(r => setTimeout(r, 150)); wait++;
                        }
                        await new Promise(r => setTimeout(r, 400));
                    }
                }
                alert(`Gata! S-au procesat ${processedCount} rânduri.`);
            }
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

                    let registerId = window.location.pathname.split('/').filter(Boolean).pop();
                    let url = `https://simu.upsc.md/ro/teacher/electronicRegister/deleteNote/${registerId}`;

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
                                $('#eregister').load(`https://simu.upsc.md/ro/teacher/electronicRegister/${registerId} #eregister > table`, function () {
                                    noteData.removeClass('border-primary border-danger');
                                    $('.card-body').unblock();
                                });
                            } else {
                                toastr.warning(response.message, 'Warning', {progressBar: true});
                                $('.card-body').unblock();
                            }
                        },
                        error: function (e) {
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

                                const registerId = window.location.pathname.split('/').filter(Boolean).pop();
                                const url = `https://simu.upsc.md/ro/teacher/electronicRegister/setNote/${registerId}`;
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

    initSelectionPageOptimizations();
    const selectionPageObserver = new MutationObserver(initSelectionPageOptimizations);
    selectionPageObserver.observe(document.body, { childList: true, subtree: true });

    patchDeleteFunction();
    setTimeout(patchDeleteFunction, 200);
    setTimeout(patchDeleteFunction, 1000);

    patchSaveFunction();
    setTimeout(patchSaveFunction, 200);
    setTimeout(patchSaveFunction, 1000);
    setTimeout(patchSaveFunction, 2500);

})();