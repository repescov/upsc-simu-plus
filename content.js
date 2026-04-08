(function() {
    'use strict';

    // Schimbare titlu pagină
    document.title = 'SIMU UPSC';

    // ==========================================
    // 1. INJECTAREA STILIZĂRII (CSS Universal)
    // ==========================================
    const style = document.createElement('style');
    style.textContent = `
        .content > .row:first-of-type > .col-lg-12 { display: flex; gap: 20px; margin-bottom: 5px; }
        @media (max-width: 1200px) { .content > .row:first-of-type > .col-lg-12 { flex-direction: column; } }
        .card { flex: 1; border: none !important; border-radius: 12px !important; box-shadow: 0 4px 15px rgba(0,0,0,0.04) !important; margin-bottom: 15px !important; }
        .card-header { background: transparent !important; border-bottom: none !important; padding: 1.5rem 1.5rem 0.5rem !important; }
        .list-group-item { padding: 0.4rem 1rem !important; border: none !important; background-color: transparent !important; }

        th[style*="background-color: #008000"], th[style*="background-color: #004080"],
        th[style*="background-color: #008000!important;"], th[style*="background-color: #004080!important;"] {
            background-color: transparent !important; color: #4e73df !important; font-size: 1.1rem !important;
            font-weight: bold !important; border-bottom: 2px solid #e3e6f0 !important; text-transform: uppercase; letter-spacing: 1px;
        }
        #eregister span[style*="color: #008000"] { color: #1cc88a !important; font-weight: 900 !important; font-size: 1.1rem; } 
        #eregister span[style*="color: #004080"] { color: #36b9cc !important; font-weight: 900 !important; font-size: 1.1rem; } 

        .tab-pane.scrollable-content { height: calc(100vh - 280px) !important; overflow: auto !important; border-radius: 8px; border: 1px solid #edf2f9; }
        #eregister thead.sticky-thead th { position: sticky; top: 0; z-index: 11; background-color: #2c3e50 !important; color: #ffffff !important; border-top: none !important; }
        
        /* OPTIMIZARE COLOANA 1 */
        #eregister th.text-left { 
            position: sticky; left: 0; background-color: #ffffff; z-index: 12 !important; border-right: 2px solid #e3e6f0 !important; 
            width: 11rem !important; min-width: 11rem !important; padding-left: 8px !important;
        }
        #eregister tbody th.text-left span.text-dark { 
            display: inline-block; transition: all 0.2s ease-in-out; transform-origin: left center;
            font-size: 15.5px !important; font-weight: 700 !important; white-space: normal !important; line-height: 1.2;
        }
        
        /* Crosshair: Hover (Mouse) + Focus (Tastatură) */
        #eregister:not(.disable-hover) tbody tr:hover td, #eregister:not(.disable-hover) tbody tr:hover th,
        #eregister tbody tr.focused-row td, #eregister tbody tr.focused-row th { background-color: #f1f4f9 !important; }
        
        #eregister:not(.disable-hover) tbody tr:hover th.text-left span.text-dark,
        #eregister tbody tr.focused-row th.text-left span.text-dark { 
            color: #1a4b8c !important; transform: scale(1.08) translateX(3px); font-weight: 800 !important; 
        }
        
        .hovered-col, .focused-col { background-color: #e8ecf4 !important; transition: background-color 0.1s; }
        #eregister thead.sticky-thead th.hovered-col,
        #eregister thead.sticky-thead th.focused-col { background-color: #3b526b !important; } 
        #eregister thead.sticky-thead th[class*="border-0"] { cursor: pointer; transition: all 0.2s; }
        #eregister thead.sticky-thead th[class*="border-0"]:hover { background-color: #4e73df !important; }

        /* Zebra Striping (vertical) */
        #eregister tbody td:nth-child(even) { background-color: rgba(241, 245, 249, 0.4); }

        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 4px; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

        input.student-note, input.student-evaluation {
            height: 40px !important; width: 40px !important; font-size: 16px !important; font-weight: 700;
            background-color: #f8f9fa !important; border: 1px solid #d1d3e2 !important; border-radius: 6px !important; color: #3a3b45 !important; transition: all 0.2s;
        }
        input.student-note:focus, input.student-evaluation:focus {
            background-color: #ffffff !important; border: 3px solid #2e59d9 !important; 
            box-shadow: 0 4px 12px rgba(78, 115, 223, 0.4) !important; transform: scale(1.2); z-index: 999;
        }
        
        /* HEATMAP COLORS - Specificity & Dark Mode Fix */
        input.grade-excellent { background-color: #e6f4ea !important; border-color: #bce4c8 !important; color: #0f8b5a !important; } 
        input.grade-good { background-color: #e2f0fb !important; border-color: #b6d4fe !important; color: #215eab !important; } 
        input.grade-ok { background-color: #fef4c7 !important; border-color: #fde08b !important; color: #b7790a !important; } 
        input.grade-bad { background-color: #fdf3f2 !important; border-color: #f8c9c4 !important; color: #e74a3b !important; } 
        input.grade-abs { background-color: #fff0f0 !important; border-color: #ffcccc !important; color: #e74a3b !important; font-weight: 900 !important; } 

        body.upsc-dark-mode input.grade-excellent { background-color: #1e4620 !important; color: #a2f3a2 !important; border-color: #2d5a30 !important; }
        body.upsc-dark-mode input.grade-good { background-color: #1a335a !important; color: #a5c5ed !important; border-color: #2e4a7d !important; }
        body.upsc-dark-mode input.grade-ok { background-color: #4d3a07 !important; color: #fde08b !important; border-color: #634d0a !important; }
        body.upsc-dark-mode input.grade-bad { background-color: #4d1a17 !important; color: #f8c9c4 !important; border-color: #632521 !important; }
        body.upsc-dark-mode input.grade-abs { background-color: #3d1515 !important; color: #ff8a80 !important; border-color: #5a1a1a !important; }

        #eregister th:nth-last-child(7), #eregister td:nth-last-child(7) { border-left: 3px solid #e74a3b !important; }
        #eregister td:nth-last-child(7) input { color: #e74a3b !important; font-weight: 900 !important; background-color: #fdf3f2 !important; border-color: #f8c9c4 !important; }

        body.hide-extra-cols #eregister th:nth-last-child(-n+6), body.hide-extra-cols #eregister td:nth-last-child(-n+6) { display: none !important; }
        #toggle-extra-cols-btn { margin-bottom: 10px; font-weight: 600; cursor: pointer; border-radius: 20px; padding: 6px 15px; background-color: #eaecf4; color: #5a5c69; border: none; transition: all 0.2s;}
        #toggle-extra-cols-btn:hover { background-color: #dde2f1; color: #2e59d9; }

        .tab-pane .table thead.thead-dark.sticky-thead th { background-color: #ffffff !important; border-bottom: 2px solid #e3e6f0 !important; color: #5a5c69 !important; }
        .tab-pane .table thead.thead-dark.sticky-thead th[style*="#008000"] { color: #1cc88a !important; border-bottom: 3px solid #1cc88a !important; }
        .tab-pane .table thead.thead-dark.sticky-thead th[style*="#004080"] { color: #36b9cc !important; border-bottom: 3px solid #36b9cc !important; }
        tr[wire\\:id] td:nth-child(4), tr[wire\\:id] td:nth-child(5) { display: none !important; }
        input[wire\\:model="topic"] { width: 100% !important; height: 42px !important; border-radius: 6px !important; border: 1px solid #d1d3e2 !important; padding: 8px 15px !important; font-size: 1rem !important; color: #5a5c69 !important; transition: all 0.2s; }
        input[wire\\:model="topic"]:focus { border-color: #4e73df !important; background-color: #fff !important; box-shadow: 0 0 0 0.2rem rgba(78,115,223,0.25) !important; outline: none; }
        #eregister thead th button.btn-danger { display: none !important; }

        /* Setări Flotante & QR */
        #upsc-settings-fab { position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; border-radius: 50%; background-color: #4e73df; color: white; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.2); z-index: 9999; transition: transform 0.2s; }
        #upsc-settings-fab:hover { transform: scale(1.1) rotate(45deg); }
        
        #upsc-settings-panel { position: fixed; bottom: 80px; right: 20px; width: 380px; background: white; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); z-index: 9998; padding: 20px; display: none; border: 1px solid #e3e6f0; max-height: 80vh; overflow-y: auto; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; }
        #upsc-settings-panel.active { display: block; animation: slideUp 0.3s ease; }
        #upsc-settings-panel h5 { margin-top: 0; font-size: 18px; font-weight: bold; color: #4e73df; border-bottom: 2px solid #edf2f9; padding-bottom: 12px; margin-bottom: 15px;}
        
        #upsc-settings-panel label { font-size: 14px; font-weight: 700; color: #3a3b45; margin-bottom: 6px; display: block; margin-top: 15px;}
        #upsc-settings-panel input, #upsc-settings-panel select { width: 100%; padding: 10px 12px; border: 1px solid #d1d3e2; border-radius: 6px; font-size: 15px; color: #3a3b45; background-color: #f8f9fa; transition: all 0.2s; box-sizing: border-box; }
        #upsc-settings-panel input:focus, #upsc-settings-panel select:focus { background-color: #fff; border-color: #4e73df; outline: none; box-shadow: 0 0 0 0.2rem rgba(78, 115, 223, 0.25);}
        
        .help-tip { background-color: #e2f0fb; border-left: 4px solid #4e73df; padding: 15px; border-radius: 6px; margin-top: 20px; font-size: 13.5px; color: #215eab; line-height: 1.6; }
        .help-tip b { color: #1a4b8c; font-weight: 800; }
        
        #mia-qr-container { max-height: 0; opacity: 0; overflow: hidden; transition: max-height 0.3s ease-in-out, opacity 0.2s ease-in-out; text-align: center; }
        #mia-qr-container.show-qr { max-height: 250px; opacity: 1; margin-top: 8px; }
        .donation { text-align: center; margin-top: 25px; padding-top: 15px; border-top: 1px dashed #d1d3e2; font-size: 14px; font-weight: 600; color: #5a5c69; }

        /* TOGGLE SWITCH STYLE */
        .upsc-switch-wrapper { display: flex; align-items: center; justify-content: space-between; margin-top: 20px; padding: 10px 0; border-top: 1px solid #edf2f9; }
        .upsc-switch-label { font-size: 15px; font-weight: 700; color: #3a3b45; }
        .upsc-switch { position: relative; display: inline-block; width: 46px; height: 24px; }
        .upsc-switch input { opacity: 0; width: 0; height: 0; }
        .upsc-slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; transition: .4s; border-radius: 24px; }
        .upsc-slider:before { position: absolute; content: ""; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; }
        input:checked + .upsc-slider { background-color: #4e73df; }
        input:checked + .upsc-slider:before { transform: translateX(22px); }

        /* Panou Acțiuni Teme, Statistici, Export */
        .upsc-controls-wrapper { display: flex; align-items: center; gap: 10px; margin-bottom: 15px; flex-wrap: wrap;}
        .upsc-btn { padding: 6px 16px; border-radius: 20px; font-weight: bold; cursor: pointer; border: none; box-shadow: 0 2px 5px rgba(0,0,0,0.1); transition: all 0.2s; font-size: 13.5px; display: inline-flex; align-items: center; gap: 5px;}
        .upsc-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.15); }
        .btn-stats { background-color: #6f42c1; color: white; border: 1px solid #59339d;}
        .btn-export { background-color: #1cc88a; color: white; border: 1px solid #13855c; margin-left: 5px; }
        
        #upsc-topics-toolbar-wrapper { margin: 25px 0 10px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e3e6f0; display: flex; flex-direction: column; align-items: flex-start; }
        #toggle-topics-btn { border: 1px solid #36b9cc; color: #36b9cc; background: transparent; }
        #toggle-topics-btn.active { background-color: #36b9cc; color: #fff; }
        #toggle-topics-btn:hover { background-color: #2c9faf; color: #fff; }
        #upsc-topics-toolbar { display: flex; gap: 10px; margin-top: 12px; overflow: hidden; transition: all 0.3s ease; flex-wrap: wrap;}
        .upsc-btn-copy { background-color: #f6c23e; color: #fff; border-radius: 6px;}
        .upsc-btn-paste { background-color: #1cc88a; color: #fff; border-radius: 6px;}

        /* CSS MODAL STATISTICI */
        #upsc-stats-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 10000; display: none; align-items: center; justify-content: center; backdrop-filter: blur(4px); }
        #upsc-stats-overlay.active { display: flex; animation: fadeIn 0.2s ease; }
        #upsc-stats-modal { background: #fff; border-radius: 12px; width: 450px; max-width: 90%; padding: 25px; box-shadow: 0 15px 35px rgba(0,0,0,0.2); position: relative;}
        #upsc-stats-modal h3 { margin: 0 0 20px 0; color: #4e73df; font-weight: 800; border-bottom: 2px solid #eaecf4; padding-bottom: 10px; font-size: 20px;}
        .stats-top-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 20px; }
        .stat-card { background: #f8f9fa; border: 1px solid #e3e6f0; border-radius: 8px; padding: 15px 5px; text-align: center; }
        .stat-val { font-size: 26px; font-weight: 900; color: #3a3b45; line-height: 1; }
        .stat-desc { font-size: 11px; font-weight: 700; color: #858796; text-transform: uppercase; margin-top: 5px; letter-spacing: 0.5px;}
        .stat-card.primary .stat-val { color: #4e73df; }
        .stat-card.success .stat-val { color: #1cc88a; }
        .stat-card.danger .stat-val { color: #e74a3b; }
        .stat-card.info .stat-val { color: #36b9cc; }
        .stat-missing { font-size: 11px; color: #e74a3b; margin-top: 8px; font-weight: 800; background: #fdf3f2; padding: 3px 8px; border-radius: 6px; border: 1px solid #f8c9c4; display: inline-block;}
        
        .chart-wrap { margin-top: 10px; }
        .chart-title { font-size: 13px; font-weight: bold; color: #5a5c69; margin-bottom: 10px; text-align: center; text-transform: uppercase;}
        .bar-row { display: flex; align-items: center; margin-bottom: 6px; }
        .bar-label { width: 35px; font-size: 13px; font-weight: 800; color: #5a5c69; text-align: right; padding-right: 8px;}
        .bar-track { flex: 1; background: #eaecf4; height: 14px; border-radius: 7px; overflow: hidden; position: relative; }
        .bar-fill { height: 100%; border-radius: 7px; transition: width 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); width: 0%; display: flex; align-items: center; justify-content: flex-end; padding-right: 5px; font-size: 10px; font-weight: bold; color: white;}
        .bar-count { width: 30px; font-size: 13px; font-weight: bold; color: #3a3b45; text-align: left; padding-left: 8px;}
        
        #btn-close-stats { margin-top: 25px; width: 100%; padding: 12px; background: #eaecf4; color: #5a5c69; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 14px;}
        #btn-close-stats:hover { background: #d1d3e2; color: #3a3b45; }

        /* CSS MODAL IMPORT (CORRECTED) */
        #upsc-import-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7) !important; z-index: 10001 !important; display: none; align-items: center; justify-content: center; backdrop-filter: blur(5px); }
        #upsc-import-overlay.active { display: flex !important; animation: fadeIn 0.3s ease; }
        #upsc-import-modal { background: #fff; border-radius: 16px; width: 580px; max-width: 95%; padding: 30px; box-shadow: 0 20px 50px rgba(0,0,0,0.3); position: relative; max-height: 90vh; overflow-y: auto; border: 1px solid rgba(255,255,255,0.2); }
        #upsc-import-modal h3 { margin: 0 0 15px 0; color: #1cc88a; font-weight: 800; border-bottom: 2px solid #e3e6f0; padding-bottom: 15px; font-size: 22px; text-align: center;}
        
        .prompt-box { background: #f0f4ff; border: 1px dashed #4e73df; padding: 18px; border-radius: 10px; margin-bottom: 25px; position: relative; margin-top: 15px;}
        .prompt-text { font-family: 'Courier New', monospace; font-size: 13px; color: #2e59d9; white-space: pre-wrap; margin: 0; line-height: 1.5; font-weight: 600; }
        .btn-copy-prompt { position: absolute; top: -12px; right: 15px; padding: 6px 12px; font-size: 11px; background: #4e73df; color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 10px rgba(78, 115, 223, 0.3); transition: all 0.2s; }
        .btn-copy-prompt:hover { background: #2e59d9; transform: scale(1.05); }
        
        .import-upload-zone { border: 3px dashed #1cc88a; background: #f6fffb; padding: 40px 20px; text-align: center; border-radius: 12px; cursor: pointer; transition: all 0.2s; margin-bottom: 10px; margin-top: 15px;}
        .import-upload-zone:hover { background: #e8fdf5; border-color: #13855c; transform: translateY(-2px); }
        .import-upload-zone i { font-size: 40px; color: #1cc88a; display: block; margin-bottom: 15px; }
        .import-upload-zone span { font-size: 15px; font-weight: 700; color: #13855c; }
        
        #btn-close-import { margin-top: 20px; width: 100%; padding: 12px; background: #f8f9fa; color: #858796; border: 1px solid #e3e6f0; border-radius: 8px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 14px;}
        #btn-close-import:hover { background: #eaecf4; color: #5a5c69; }

        /* DARK MODE - MODAL IMPORT FORCE */
        body.upsc-dark-mode #upsc-import-modal { background-color: #22252f !important; color: #d1d3e2 !important; border: 1px solid #3a3b45 !important; }
        body.upsc-dark-mode #upsc-import-modal h3 { color: #1cc88a !important; border-bottom-color: #3a3b45 !important; }
        body.upsc-dark-mode .prompt-box { background-color: #1a2436 !important; border-color: #2e59d9 !important; }
        body.upsc-dark-mode .prompt-text { color: #a5c5ed !important; }
        body.upsc-dark-mode .import-upload-zone { background-color: rgba(28, 200, 138, 0.05) !important; border-color: #1cc88a !important; }
        body.upsc-dark-mode .import-upload-zone span { color: #1cc88a !important; }
        body.upsc-dark-mode #btn-close-import { background-color: #2e323f !important; border-color: #3a3b45 !important; color: #d1d3e2 !important; }
        body.upsc-dark-mode #upsc-import-modal p { color: #a5a5a5 !important; }

        .btn-open-import { background-color: #f6c23e !important; color: white !important; }

        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* DARK MODE STYLES */
        body.upsc-dark-mode { background-color: #1a1c24 !important; color: #d1d3e2 !important; }
        body.upsc-dark-mode .card, body.upsc-dark-mode #upsc-settings-panel, body.upsc-dark-mode #upsc-stats-modal { background-color: #22252f !important; color: #d1d3e2 !important; border: 1px solid #2e323f !important; box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important; }
        body.upsc-dark-mode #eregister th.text-left { background-color: #22252f !important; color: #d1d3e2 !important; border-right: 2px solid #2e323f !important; }
        body.upsc-dark-mode #eregister tbody th.text-left span.text-dark { color: #d1d3e2 !important; }
        body.upsc-dark-mode #eregister:not(.disable-hover) tbody tr:hover td, 
        body.upsc-dark-mode #eregister:not(.disable-hover) tbody tr:hover th,
        body.upsc-dark-mode #eregister tbody tr.focused-row td, 
        body.upsc-dark-mode #eregister tbody tr.focused-row th { background-color: #2a2e3d !important; }
        body.upsc-dark-mode .hovered-col, body.upsc-dark-mode .focused-col { background-color: #2d3243 !important; }
        body.upsc-dark-mode input.student-note, body.upsc-dark-mode input.student-evaluation, 
        body.upsc-dark-mode input[wire\\:model="topic"], body.upsc-dark-mode #upsc-settings-panel input, 
        body.upsc-dark-mode #upsc-settings-panel select { background-color: #1a1c24 !important; border: 1px solid #3a3b45 !important; color: #fff !important; }
        body.upsc-dark-mode .help-tip { background-color: #1a2436 !important; border-left-color: #4e73df !important; color: #a5c5ed !important; }
        body.upsc-dark-mode #upsc-topics-toolbar-wrapper { background-color: #22252f !important; border-color: #2e323f !important; }
        body.upsc-dark-mode .stat-card { background: #1a1c24 !important; border-color: #2e323f !important; }
        body.upsc-dark-mode .stat-val { color: #fff !important; }
        body.upsc-dark-mode .bar-track { background: #2e323f !important; }
        body.upsc-dark-mode #toggle-extra-cols-btn, body.upsc-dark-mode #btn-close-stats { background-color: #2e323f !important; color: #d1d3e2 !important; }
        body.upsc-dark-mode #eregister tbody td:nth-child(even) { background-color: rgba(255, 255, 255, 0.03); }
        body.upsc-dark-mode .list-group-item { color: #d1d3e2 !important; }
        body.upsc-dark-mode .breadcrumb { background-color: #22252f !important; }
        body.upsc-dark-mode .breadcrumb-item.active { color: #858796 !important; }
        body.upsc-dark-mode .main-header { background-color: #22252f !important; border-bottom: 1px solid #2e323f !important; }
        body.upsc-dark-mode .nav-link { color: #d1d3e2 !important; }
        body.upsc-dark-mode #eregister thead.sticky-thead th.hovered-col, body.upsc-dark-mode #eregister thead.sticky-thead th.focused-col { background-color: #4e73df !important; }

        /* DARK MODE - CARD HEADER & SUMMARY TABLE */
        body.upsc-dark-mode .card-header { background-color: #22252f !important; border-bottom: 1px solid #2e323f !important; }
        body.upsc-dark-mode .card-header .bg-light, body.upsc-dark-mode .card-header .table th, body.upsc-dark-mode .card-header .table td { background-color: #2a2e3d !important; color: #d1d3e2 !important; border-color: #3a3b45 !important; }
        body.upsc-dark-mode .card-header .text-dark { color: #d1d3e2 !important; }
        body.upsc-dark-mode .card-header .table thead th[style*="background-color: #008000"] { background-color: rgba(28, 200, 138, 0.2) !important; color: #1cc88a !important; border-bottom: 2px solid #1cc88a !important; }
        body.upsc-dark-mode .card-header .table thead th[style*="background-color: #004080"] { background-color: rgba(54, 185, 204, 0.2) !important; color: #36b9cc !important; border-bottom: 2px solid #36b9cc !important; }

        .btn-dark-mode { background-color: #5a5c69; color: white; border: 1px solid #3a3b45; }
        body.upsc-dark-mode .btn-dark-mode { background-color: #f6c23e; color: #1a1c24; border-color: #f4b619; }
    `;
    document.head.appendChild(style);

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

    const fab = document.createElement('div'); fab.id = 'upsc-settings-fab'; fab.innerHTML = '⚙️';
    const panel = document.createElement('div'); panel.id = 'upsc-settings-panel';
    panel.innerHTML = `
        <h5>Setări UPSC SIMU Plus</h5>
        
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

        <div class="help-tip">
            💡 <b>Nu știi ID-ul Blocului/Auditoriului?</b><br><br>
            Deschide <b>Inspectare (Ctrl+Shift+I)</b>, dă click pe iconița "săgeată" și selectează lista dorită. Copiază cifra din <code>value="..."</code>.
        </div>

        <div class="donation">
            Îți este utilă această extensie?<br>
            <a href="#" id="toggle-qr-btn" style="color: #f6c23e; font-weight: bold; text-decoration: none; display: inline-block; padding: 5px 12px; background: #fff8e1; border-radius: 6px; margin-top: 8px; border: 1px solid #fce8b2; transition: all 0.2s; font-size: 11px;">☕ Oferă o cafea autorului (MIA)</a>
            <div id="mia-qr-container">
                <img src="https://i.imgur.com/ss0xMzu.jpeg" width="192" height="192" style="border-radius: 8px; border: 1px solid #e3e6f0; padding: 5px; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-top: 5px;">
                <div style="font-size: 10px; color: #858796; margin-top: 5px; font-weight: normal;">Scanează cu orice aplicație bancară din MD</div>
            </div>
        </div>
    `;
    document.body.appendChild(fab); document.body.appendChild(panel);
    document.getElementById('set-teacher').value = s_teacher;

    fab.addEventListener('click', () => panel.classList.toggle('active'));
    panel.addEventListener('input', (e) => {
        if(e.target.id === 'set-teacher') { localStorage.setItem('upsc_set_teacher', e.target.value); s_teacher = e.target.value; }
        if(e.target.id === 'set-block') { localStorage.setItem('upsc_set_block', e.target.value); s_block = e.target.value; }
        if(e.target.id === 'set-auditory') { localStorage.setItem('upsc_set_auditory', e.target.value); s_auditory = e.target.value; }
        if(e.target.id === 'set-dark-mode') {
            const isDark = e.target.checked;
            localStorage.setItem('upsc_dark_mode', isDark);
            document.body.classList.toggle('upsc-dark-mode', isDark);
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

        controlsBar.appendChild(tBtn);
        controlsBar.appendChild(statsBtn);
        controlsBar.appendChild(exportBtn);
        controlsBar.appendChild(openImportBtn);
        
        eregisterDivDom.parentNode.insertBefore(controlsBar, eregisterDivDom);

        // Injectăm modalul pentru import în body
        const importOverlay = document.createElement('div');
        importOverlay.id = 'upsc-import-overlay';
        importOverlay.innerHTML = `
            <div id="upsc-import-modal">
                <h3>📤 Import Date din Registru Fizic</h3>
                <p style="font-size: 13px; color: #5a5c69; margin-bottom: 15px;">
                    Urmează pașii de mai jos pentru a completa automat registrul digital folosind inteligența artificială (GPT).
                </p>
                
                <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px; color: #4e73df;">Pasul 1: Copiază textul de mai jos și trimite-l către GPT împreună cu poza registrului:</div>
                <div class="prompt-box">
                    <button class="btn-copy-prompt" id="btn-copy-import-prompt">Copiază prompt</button>
                    <p class="prompt-text" id="import-prompt-text">Te rog să extragi datele din această fotografie a registrului universitar fizic. 
Generază un fișier de tip text în format CSV folosind ";" (punct și virgulă) ca separator. 
Coloanele trebuie să fie: "Nume Student" și apoi datele calendaristice identificate (ex: 15.09, 22.10). 
IMPORTANT: Dacă pentru o dată există două note, creează două coloane separate cu același nume de dată (ex: 15.09; 15.09; 22.10).
Notează absențele cu litera "a". 
Asigură-te că numele studenților sunt extrase complet și corect.</p>
                </div>

                <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px; color: #1cc88a;">Pasul 2: Încarcă fișierul CSV generat de GPT:</div>
                <div class="import-upload-zone" id="csv-drop-zone">
                    <i class="fas fa-file-csv"></i>
                    <span id="csv-file-name">Trage fișierul aici sau dă click pentru selectare</span>
                    <input type="file" id="csv-file-input" accept=".csv" style="display: none;">
                </div>

                <div id="import-progress-area" style="display: none; margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                    <div style="font-weight: bold; font-size: 13px; margin-bottom: 5px;" id="import-status-text">Se procesează...</div>
                    <div style="height: 10px; background: #e3e6f0; border-radius: 5px; overflow: hidden;">
                        <div id="import-progress-bar" style="height: 100%; background: #1cc88a; width: 0%; transition: width 0.3s;"></div>
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
                    if (!dateHeaderRow || matches > dateHeaderRow.matches) {
                        dateHeaderRow = { tr, matches, ths };
                    }
                });

                if (!dateHeaderRow || dateHeaderRow.matches === 0) {
                    alert("Nu am putut identifica nicio coloană cu date în antetul tabelului!");
                    progressArea.style.display = 'none';
                    return;
                }

                dateHeaderRow.ths.forEach((th, idx) => {
                    let txt = th.innerText.toLowerCase().trim();
                    let m = txt.match(/(\d{1,2})\s+([a-z]{3})/) || txt.match(/(\d{1,2})[\.\/](\d{1,2})/);
                    if (m) {
                        let d = m[1].padStart(2, '0');
                        let monthPart = m[2];
                        let mon = isNaN(monthPart) ? monthMap[monthPart.substring(0,3)] : monthPart.padStart(2, '0');
                        if (mon) simuDateSlots.push({ date: `${d}.${mon}`, index: idx });
                    }
                });

                let totalTasks = 0;
                let completedTasks = 0;
                csvRows.forEach(row => {
                    csvHeader.forEach((h, i) => { if (i > 0 && row[i] && row[i].trim() !== '') totalTasks++; });
                });

                for (let i = 0; i < csvRows.length; i++) {
                    const row = csvRows[i];
                    const studentNameCSV = row[0];
                    if (!studentNameCSV) continue;

                    const searchName = studentNameCSV.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
                    const searchWords = searchName.split(/\s+/).filter(w => w.length > 2);

                    const simuRows = document.querySelectorAll('#eregister tbody tr:not(.register-notes-header)');
                    let targetTr = null;

                    for (let tr of simuRows) {
                        const nameSpan = tr.querySelector('th.text-left span.text-dark');
                        if (nameSpan) {
                            const simuName = nameSpan.innerText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                            if (searchWords.every(word => simuName.includes(word))) { targetTr = tr; break; }
                        }
                    }

                    if (!targetTr) continue;

                    let usedSlots = [];
                    for (let j = 1; j < csvHeader.length; j++) {
                        const dateCSV = csvHeader[j].trim();
                        const valCSV = row[j] ? row[j].trim() : '';

                        // Găsim slotul corespunzător în SIMU chiar dacă valoarea din CSV este goală
                        const slot = simuDateSlots.find(s => s.date === dateCSV && !usedSlots.includes(s.index));
                        
                        if (slot) {
                            usedSlots.push(slot.index); // Marcăm slotul ca fiind „consumat” de această coloană din CSV

                            // Injectăm nota doar dacă avem o valoare validă în CSV
                            if (valCSV && valCSV !== '') {
                                const td = targetTr.children[slot.index];
                                const input = td?.querySelector('input.student-note');
                                
                                if (input && !input.disabled && input.value.trim() !== valCSV) {
                                    statusText.innerText = `Se completează: ${studentNameCSV} (${dateCSV})...`;
                                    
                                    input.click();
                                    input.focus();
                                    await new Promise(r => setTimeout(r, 250));

                                    const popup = document.getElementById('keyboardEvaluationsPopup');
                                    if (popup) {
                                        const buttons = Array.from(popup.querySelectorAll('button'));
                                        const targetBtn = buttons.find(b => b.innerText.trim().toLowerCase() === valCSV.toLowerCase());
                                        
                                        if (targetBtn) {
                                            targetBtn.click();
                                            await new Promise(r => setTimeout(r, 150));
                                            popup.querySelector('#saveEvaluationButton')?.click();
                                        } else {
                                            input.value = valCSV;
                                            input.dispatchEvent(new Event('input', { bubbles: true }));
                                            input.dispatchEvent(new Event('change', { bubbles: true }));
                                            document.querySelector('#saveEvaluationButton')?.click();
                                        }
                                    }

                                    completedTasks++;
                                    progressBar.style.width = `${(completedTasks / totalTasks) * 100}%`;
                                    
                                    await new Promise(r => setTimeout(r, 1200)); 
                                    let waitAttempts = 0;
                                    while (document.querySelector('.blockUI') && waitAttempts < 60) {
                                        await new Promise(r => setTimeout(r, 150));
                                        waitAttempts++;
                                    }
                                    await new Promise(r => setTimeout(r, 400));
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
                <h3>📊 Statistici Evaluare Curentă</h3>
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
                    let totalEval1 = eval1Grades.length + eval1Missing;
					missingBadge1.innerText = `⚠️ ${eval1Missing} din ${totalEval1} fără notă`;
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
                
                let barColor = '#e74a3b'; 
                if(i >= 9) barColor = '#1cc88a'; 
                else if(i >= 7) barColor = '#4e73df'; 
                else if(i >= 5) barColor = '#f6c23e'; 

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
        toggleBtn.innerHTML = '⚙️ Opțiuni Tematici (Copiere)';
        
        const buttonsToolbar = document.createElement('div');
        buttonsToolbar.id = 'upsc-topics-toolbar';
        buttonsToolbar.innerHTML = `
            <button class="upsc-btn upsc-btn-copy" id="btn-copy-topics">📄 Copiază Teme</button>
            <button class="upsc-btn upsc-btn-paste" id="btn-paste-topics">📋 Lipește Teme (din memorie)</button>
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
        document.querySelectorAll('input.student-note, input.student-evaluation').forEach(input => {
            let val = input.value.toLowerCase().trim();
            input.classList.remove('grade-excellent', 'grade-good', 'grade-ok', 'grade-bad', 'grade-abs');
            if (val === 'a') input.classList.add('grade-abs');
            else {
                let n = parseFloat(val);
                if (!isNaN(n)) {
                    if (n >= 9) input.classList.add('grade-excellent');
                    else if (n >= 7) input.classList.add('grade-good');
                    else if (n >= 5) input.classList.add('grade-ok');
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

    let lastHoveredCol = -1;
    document.addEventListener('mousemove', e => { 
        const eregister = document.getElementById('eregister');
        if (eregister && eregister.classList.contains('disable-hover')) {
            eregister.classList.remove('disable-hover');
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
        if (e.target.matches('input.student-note, input.student-evaluation, input[wire\\:model="topic"]')) {
            document.getElementById('eregister')?.classList.add('disable-hover');
            document.querySelectorAll('.hovered-col').forEach(el => el.classList.remove('hovered-col'));
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
        if (e.target.matches('input.student-note, input.student-evaluation, input[wire\\:model="topic"]')) {
            document.querySelectorAll('.focused-row').forEach(el => el.classList.remove('focused-row'));
            document.querySelectorAll('.focused-col').forEach(el => el.classList.remove('focused-col'));
        }
    });

    applyHeatmap(); reformatTopicDates();
    const observer = new MutationObserver(() => { applyHeatmap(); reformatTopicDates(); });
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('dblclick', async function(e) {
        let th = e.target.closest('th');
        if (th && th.closest('thead') && th.querySelector('span[style*="color"]')) {
            const colIndex = Array.from(th.parentNode.children).indexOf(th);
            if (confirm("Puneți absență ('a') tuturor studenților fără notă din această dată?")) {
                let foundEmpty = true;
                while(foundEmpty) {
                    foundEmpty = false;
                    let rows = document.querySelectorAll('#eregister tbody tr:not(.register-notes-header)');
                    for(let tr of rows) {
                        let td = tr.children[colIndex];
                        if (td) {
                            let input = td.querySelector('input.student-note');
                            if (input && !input.disabled && input.value.trim() === '') {
                                foundEmpty = true; input.value = 'a';
                                const saveBtn = document.querySelector('#saveEvaluationButton');
                                if (saveBtn) saveBtn.click();
                                await new Promise(r => setTimeout(r, 800)); break; 
                            }
                        }
                    }
                }
                alert("Absențele au fost completate cu succes!");
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
        input.value = valueToSave;
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

        const validKeys = ['a', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        if (validKeys.includes(key)) {
            e.preventDefault(); e.stopPropagation();
            if (key === 'a' || (key >= '2' && key <= '9')) triggerAutoSaveNote(input, key);
            else if (key === '1') input.value = '1';
            else if (key === '0') { if (input.value === '1') triggerAutoSaveNote(input, '10'); else input.value = ''; }
        } else if (key !== 'backspace' && key !== 'delete' && key !== 'tab') { e.preventDefault(); }
    }, true);

})();