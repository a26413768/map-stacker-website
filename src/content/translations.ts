export type Locale = 'en' | 'zh-TW' | 'zh-CN' | 'ja' | 'de' | 'fr' | 'es' | 'it';

export interface SiteText {
  lang: Locale;
  pageTitle: string;
  description: string;
  languageLabel: string;
  nav: {
    features: string;
    download: string;
    support: string;
  };
  intro: {
    summary: string;
    details: string;
    download: string;
    latestRelease: string;
    beta: string;
    availability: string;
  };
  screenshot: {
    title: string;
    alt: string;
    caption: string;
  };
  features: {
    title: string;
    groups: Array<{ title: string; items: string[] }>;
  };
  workflow: {
    title: string;
    steps: Array<{ title: string; text: string }>;
  };
  download: {
    title: string;
    intro: string;
    releaseNotes: string;
    columns: {
      platform: string;
      requirements: string;
      package: string;
      notes: string;
    };
    platforms: Array<{
      platform: string;
      requirements: string;
      file: string;
      notes: string;
    }>;
    archiveNoteBefore: string;
    archiveNoteChecksum: string;
    archiveNoteAfter: string;
  };
  support: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    newIssue: string;
    browseIssues: string;
  };
  footer: {
    releases: string;
    issues: string;
  };
}

export const en: SiteText = {
  lang: 'en',
  pageTitle: 'MapStacker',
  description: 'MapStacker is a desktop application for stacking lunar and planetary SER image sequences.',
  languageLabel: 'Language',
  nav: {
    features: 'Features',
    download: 'Download',
    support: 'Support',
  },
  intro: {
    summary: 'MapStacker is a desktop application for stacking monochrome and colour lunar or planetary image sequences stored in SER files.',
    details: 'It provides frame quality analysis, global stabilization, multiple alignment points, local frame selection, mesh-based stacking, Drizzle, colour alignment, and 16-bit TIFF output.',
    download: 'Download MapStacker',
    latestRelease: 'View the latest release',
    beta: 'Try the latest beta',
    availability: 'Available for Windows, macOS, and Linux. English and Traditional Chinese interfaces are included.',
  },
  screenshot: {
    title: 'Application window',
    alt: 'MapStacker main window displaying a lunar image and its alignment points',
    caption: 'The main window contains processing controls, frame navigation, alignment points, and an image preview.',
  },
  features: {
    title: 'Features',
    groups: [
      {
        title: 'Input and frame selection',
        items: [
          'Monochrome, RGB, and Bayer CFA SER input',
          'Frame quality ranking before image resampling',
          'Manual frame exclusion and reference-frame selection',
          'Independent local frame selection for each alignment point',
        ],
      },
      {
        title: 'Alignment',
        items: [
          'Global frame stabilization using phase correlation or centre of gravity',
          'Automatic alignment-point placement using a centroidal Voronoi grid',
          'Sub-pixel local alignment with outlier handling',
        ],
      },
      {
        title: 'Stacking and colour',
        items: [
          'Piecewise affine mesh stacking',
          'Drizzle processing for monochrome, RGB, and Bayer data',
          'Several global and local RGB alignment methods',
          'Batch processing of SER files in a folder',
        ],
      },
      {
        title: 'Output',
        items: [
          'Automatic cropping and optional output centring',
          '16-bit TIFF output',
          'Text sidecar with settings, source metadata, frame selection, and alignment points',
        ],
      },
    ],
  },
  workflow: {
    title: 'Typical workflow',
    steps: [
      { title: 'Open a SER file.', text: 'MapStacker reads the capture and its metadata.' },
      { title: 'Analyse frame quality.', text: 'Review the ranking and exclude unsuitable frames if needed.' },
      { title: 'Stabilize the sequence.', text: 'Estimate and correct global movement.' },
      { title: 'Place alignment points.', text: 'Use automatic placement or adjust the points manually.' },
      { title: 'Run the stack.', text: 'Choose the frame percentages, stacking method, and colour options.' },
      { title: 'Export the result.', text: 'Save the image as a 16-bit TIFF with its processing record.' },
    ],
  },
  download: {
    title: 'Download',
    intro: 'Pre-built packages do not require a Python installation.',
    releaseNotes: 'Release notes and checksums',
    columns: {
      platform: 'Platform',
      requirements: 'Requirements',
      package: 'Package',
      notes: 'Notes',
    },
    platforms: [
      {
        platform: 'Windows',
        requirements: 'Windows 10 or 11 (64-bit)',
        file: 'MapStacker-windows-x64.zip',
        notes: 'Unzip the archive and run MapStacker.exe.',
      },
      {
        platform: 'macOS',
        requirements: 'Apple Silicon (arm64)',
        file: 'MapStacker-macos-arm64.zip',
        notes: 'Unsigned application. On first launch, right-click and choose Open.',
      },
      {
        platform: 'Linux',
        requirements: 'x64, glibc 2.31 or newer',
        file: 'MapStacker-linux-x64.zip',
        notes: 'Requires a graphical X11 environment with Qt xcb support.',
      },
    ],
    archiveNoteBefore: 'The packages are distributed as ZIP archives. Download the corresponding',
    archiveNoteChecksum: '.sha256',
    archiveNoteAfter: 'file from the release page if you want to verify the archive.',
  },
  support: {
    title: 'Support and issue reports',
    paragraph1: 'Bug reports and feature requests are managed through GitHub Issues. Before opening a report, please check whether the same problem has already been reported.',
    paragraph2: 'A useful bug report should include the MapStacker version, operating system, steps needed to reproduce the problem, and any relevant screenshot or log.',
    newIssue: 'Open a new issue',
    browseIssues: 'Browse existing issues',
  },
  footer: {
    releases: 'Releases',
    issues: 'Issues',
  },
};

export const de: SiteText = {
  lang: 'de',
  pageTitle: 'MapStacker',
  description: 'MapStacker ist eine Desktop-Anwendung zum Stacken von Mond- und Planetenbildsequenzen im SER-Format.',
  languageLabel: 'Sprache',
  nav: { features: 'Funktionen', download: 'Herunterladen', support: 'Support' },
  intro: {
    summary: 'MapStacker ist eine Desktop-Anwendung zum Stacken monochromer und farbiger Mond- oder Planetenbildsequenzen, die in SER-Dateien gespeichert sind.',
    details: 'Die Anwendung bietet Bildqualitätsanalyse, globale Stabilisierung, mehrere Ausrichtungspunkte, lokale Bildauswahl, netzbasiertes Stacken, Drizzle, Farbausrichtung und 16-Bit-TIFF-Ausgabe.',
    download: 'MapStacker herunterladen',
    latestRelease: 'Neueste Version ansehen',
    beta: 'Neueste Beta ausprobieren',
    availability: 'Verfügbar für Windows, macOS und Linux. Benutzeroberflächen auf Englisch und Traditionellem Chinesisch sind enthalten.',
  },
  screenshot: {
    title: 'Programmfenster',
    alt: 'MapStacker-Hauptfenster mit einem Mondbild und seinen Ausrichtungspunkten',
    caption: 'Das Hauptfenster enthält Verarbeitungseinstellungen, Bildnavigation, Ausrichtungspunkte und eine Bildvorschau.',
  },
  features: {
    title: 'Funktionen',
    groups: [
      { title: 'Eingabe und Bildauswahl', items: ['Monochrome, RGB- und Bayer-CFA-SER-Eingabe', 'Bildqualitätsbewertung vor dem Resampling', 'Manuelle Bildausschlüsse und Referenzbildauswahl', 'Unabhängige lokale Bildauswahl für jeden Ausrichtungspunkt'] },
      { title: 'Ausrichtung', items: ['Globale Bildstabilisierung mittels Phasenkorrelation oder Schwerpunkt', 'Automatische Ausrichtungspunkt-Platzierung auf Basis eines zentroiden Voronoi-Gitters', 'Subpixelgenaue lokale Ausrichtung mit Ausreißerbehandlung'] },
      { title: 'Stacken und Farbe', items: ['Stückweise affines Netz-Stacken', 'Drizzle-Verarbeitung für monochrome, RGB- und Bayer-Daten', 'Mehrere globale und lokale RGB-Ausrichtungsverfahren', 'Stapelverarbeitung von SER-Dateien in einem Ordner'] },
      { title: 'Ausgabe', items: ['Automatisches Zuschneiden und optionale Ausgabezentrierung', '16-Bit-TIFF-Ausgabe', 'Text-Sidecar mit Einstellungen, Quellmetadaten, Bildauswahl und Ausrichtungspunkten'] },
    ],
  },
  workflow: {
    title: 'Typischer Arbeitsablauf',
    steps: [
      { title: 'SER-Datei öffnen.', text: 'MapStacker liest die Aufnahme und ihre Metadaten.' },
      { title: 'Bildqualität analysieren.', text: 'Die Bewertung prüfen und ungeeignete Bilder bei Bedarf ausschließen.' },
      { title: 'Sequenz stabilisieren.', text: 'Globale Bewegung schätzen und korrigieren.' },
      { title: 'Ausrichtungspunkte setzen.', text: 'Automatische Platzierung verwenden oder die Punkte manuell anpassen.' },
      { title: 'Stacken ausführen.', text: 'Bildanteile, Stackingmethode und Farboptionen auswählen.' },
      { title: 'Ergebnis exportieren.', text: 'Bild als 16-Bit-TIFF mit Verarbeitungsprotokoll speichern.' },
    ],
  },
  download: {
    title: 'Herunterladen', intro: 'Die vorgefertigten Pakete erfordern keine Python-Installation.', releaseNotes: 'Versionshinweise und Prüfsummen',
    columns: { platform: 'Plattform', requirements: 'Systemvoraussetzungen', package: 'Paket', notes: 'Hinweise' },
    platforms: [
      { platform: 'Windows', requirements: 'Windows 10 oder 11 (64-Bit)', file: 'MapStacker-windows-x64.zip', notes: 'Archiv entpacken und MapStacker.exe ausführen.' },
      { platform: 'macOS', requirements: 'Apple Silicon (arm64)', file: 'MapStacker-macos-arm64.zip', notes: 'Unsignierte Anwendung. Beim ersten Start mit der rechten Maustaste klicken und „Öffnen“ wählen.' },
      { platform: 'Linux', requirements: 'x64, glibc 2.31 oder neuer', file: 'MapStacker-linux-x64.zip', notes: 'Erfordert eine grafische X11-Umgebung mit Qt xcb-Unterstützung.' },
    ],
    archiveNoteBefore: 'Die Pakete werden als ZIP-Archive verteilt. Laden Sie die entsprechende', archiveNoteChecksum: '.sha256', archiveNoteAfter: '-Datei von der Release-Seite herunter, um das Archiv zu überprüfen.',
  },
  support: {
    title: 'Support und Fehlermeldungen',
    paragraph1: 'Fehlermeldungen und Funktionsanfragen werden über GitHub Issues verwaltet. Bevor Sie einen Bericht erstellen, prüfen Sie bitte, ob das Problem bereits gemeldet wurde.',
    paragraph2: 'Ein hilfreicher Fehlerbericht sollte die MapStacker-Version, das Betriebssystem, die Schritte zur Reproduktion des Problems sowie relevante Screenshots oder Protokolldateien enthalten.',
    newIssue: 'Neues Issue erstellen', browseIssues: 'Vorhandene Issues durchsuchen',
  },
  footer: { releases: 'Versionen', issues: 'Issues' },
};

export const fr: SiteText = {
  lang: 'fr',
  pageTitle: 'MapStacker',
  description: "MapStacker est une application de bureau pour l'empilement de séquences d'images SER lunaires et planétaires.",
  languageLabel: 'Langue',
  nav: { features: 'Fonctionnalités', download: 'Téléchargement', support: 'Assistance' },
  intro: {
    summary: "MapStacker est une application de bureau pour l'empilement de séquences d'images lunaires ou planétaires, monochromes ou en couleur, stockées dans des fichiers SER.",
    details: "Elle propose l'analyse de la qualité des images, la stabilisation globale, plusieurs points d'alignement, la sélection locale d'images, l'empilement par maillage, le Drizzle, l'alignement des couleurs et l'exportation en TIFF 16 bits.",
    download: 'Télécharger MapStacker', latestRelease: 'Voir la dernière version', beta: 'Essayer la dernière bêta',
    availability: 'Disponible pour Windows, macOS et Linux. Les interfaces en anglais et en chinois traditionnel sont incluses.',
  },
  screenshot: {
    title: "Fenêtre de l'application", alt: "Fenêtre principale de MapStacker affichant une image lunaire et ses points d'alignement", caption: "La fenêtre principale comprend les commandes de traitement, la navigation entre les images, les points d'alignement et un aperçu de l'image.",
  },
  features: {
    title: 'Fonctionnalités',
    groups: [
      { title: 'Entrée et sélection des images', items: ['Entrée SER monochromatique, RGB et Bayer CFA', 'Classement de la qualité des images avant le rééchantillonnage', "Exclusion manuelle des images et sélection de l'image de référence", "Sélection locale d'images indépendante pour chaque point d'alignement"] },
      { title: 'Alignement', items: ['Stabilisation globale par corrélation de phase ou centre de gravité', "Placement automatique des points d'alignement par grille de Voronoï centroïdale", 'Alignement local sous-pixel avec gestion des valeurs aberrantes'] },
      { title: 'Empilement et couleur', items: ['Empilement par maillage affine par morceaux', 'Traitement Drizzle pour données monochromes, RGB et Bayer', "Plusieurs méthodes d'alignement RGB globales et locales", "Traitement par lots des fichiers SER d'un dossier"] },
      { title: 'Sortie', items: ['Recadrage automatique et centrage optionnel de la sortie', 'Exportation en TIFF 16 bits', "Fichier sidecar texte contenant les paramètres, les métadonnées sources, la sélection des images et les points d'alignement"] },
    ],
  },
  workflow: {
    title: 'Flux de travail typique',
    steps: [
      { title: 'Ouvrir un fichier SER.', text: 'MapStacker lit la capture et ses métadonnées.' },
      { title: 'Analyser la qualité des images.', text: 'Consulter le classement et exclure les images inadaptées si nécessaire.' },
      { title: 'Stabiliser la séquence.', text: 'Estimer et corriger le mouvement global.' },
      { title: "Placer les points d'alignement.", text: 'Utiliser le placement automatique ou ajuster les points manuellement.' },
      { title: "Lancer l'empilement.", text: "Choisir les pourcentages d'images, la méthode d'empilement et les options de couleur." },
      { title: 'Exporter le résultat.', text: "Enregistrer l'image en TIFF 16 bits avec son enregistrement de traitement." },
    ],
  },
  download: {
    title: 'Téléchargement', intro: "Les paquets précompilés ne nécessitent pas d'installation de Python.", releaseNotes: 'Notes de version et sommes de contrôle',
    columns: { platform: 'Plateforme', requirements: 'Configuration requise', package: 'Paquet', notes: 'Remarques' },
    platforms: [
      { platform: 'Windows', requirements: 'Windows 10 ou 11 (64 bits)', file: 'MapStacker-windows-x64.zip', notes: "Décompresser l'archive et exécuter MapStacker.exe." },
      { platform: 'macOS', requirements: 'Apple Silicon (arm64)', file: 'MapStacker-macos-arm64.zip', notes: 'Application non signée. Au premier lancement, cliquez avec le bouton droit et choisissez Ouvrir.' },
      { platform: 'Linux', requirements: 'x64, glibc 2.31 ou version ultérieure', file: 'MapStacker-linux-x64.zip', notes: 'Nécessite un environnement graphique X11 avec prise en charge de Qt xcb.' },
    ],
    archiveNoteBefore: 'Les paquets sont distribués sous forme d’archives ZIP. Téléchargez le fichier', archiveNoteChecksum: '.sha256', archiveNoteAfter: 'correspondant depuis la page de la version pour vérifier l’archive.',
  },
  support: {
    title: 'Assistance et signalement de problèmes',
    paragraph1: "Les rapports de bogues et les demandes de fonctionnalités sont gérés via GitHub Issues. Avant d'ouvrir un rapport, vérifiez si le même problème a déjà été signalé.",
    paragraph2: "Un rapport de bogue utile doit inclure la version de MapStacker, le système d'exploitation, les étapes pour reproduire le problème, ainsi que toute capture d'écran ou journal pertinent.",
    newIssue: 'Ouvrir un nouveau problème', browseIssues: 'Parcourir les problèmes existants',
  },
  footer: { releases: 'Versions', issues: 'Problèmes' },
};

export const zhTW: SiteText = {
  lang: 'zh-TW',
  pageTitle: 'MapStacker',
  description: 'MapStacker 是用於疊合月球與行星彩色或單色 SER 影像序列的桌面應用程式。',
  languageLabel: '語言',
  nav: {
    features: '功能',
    download: '下載',
    support: '支援',
  },
  intro: {
    summary: 'MapStacker 是用於疊合月球與行星單色或彩色 SER 影像序列的桌面應用程式。',
    details: '程式提供幀品質分析、全域穩定化、多重對齊點、局部選幀、網格疊合、Drizzle、色彩對齊與 16 位元 TIFF 輸出。',
    download: '下載 MapStacker',
    latestRelease: '查看最新版本',
    beta: '試用最新 Beta 版',
    availability: '支援 Windows、macOS 與 Linux，內建英文及繁體中文介面。',
  },
  screenshot: {
    title: '程式介面',
    alt: 'MapStacker 主視窗顯示月面影像與對齊點',
    caption: '主視窗包含處理控制、幀瀏覽、對齊點及影像預覽。',
  },
  features: {
    title: '功能',
    groups: [
      {
        title: '輸入與選幀',
        items: [
          '支援單色、RGB 與 Bayer CFA 的 SER 輸入',
          '在影像重採樣前進行幀品質排序',
          '手動排除幀及選擇參考幀',
          '各對齊點獨立進行局部選幀',
        ],
      },
      {
        title: '對齊',
        items: [
          '使用相位相關或亮度重心進行全域幀穩定化',
          '使用重心 Voronoi 網格自動配置對齊點',
          '具離群值處理的次像素局部對齊',
        ],
      },
      {
        title: '疊合與色彩',
        items: [
          '分段仿射網格疊合',
          '單色、RGB 與 Bayer 資料的 Drizzle 處理',
          '多種全域與局部 RGB 對齊方式',
          '批次處理資料夾中的 SER 檔案',
        ],
      },
      {
        title: '輸出',
        items: [
          '自動裁切與選用的輸出置中',
          '16 位元 TIFF 輸出',
          '以文字 sidecar 記錄設定、來源資訊、選幀及對齊點',
        ],
      },
    ],
  },
  workflow: {
    title: '基本操作流程',
    steps: [
      { title: '開啟 SER 檔案。', text: 'MapStacker 會讀取影像序列及其 metadata。' },
      { title: '分析幀品質。', text: '查看品質排序，並視需要排除不適合的幀。' },
      { title: '穩定影像序列。', text: '估算並校正全域移動。' },
      { title: '配置對齊點。', text: '使用自動配置，或自行調整對齊點。' },
      { title: '執行疊合。', text: '選擇幀比例、疊合方式及色彩選項。' },
      { title: '匯出結果。', text: '將影像儲存為 16 位元 TIFF，並保留處理記錄。' },
    ],
  },
  download: {
    title: '下載',
    intro: '預先建置的版本不需要另外安裝 Python。',
    releaseNotes: '版本說明與校驗碼',
    columns: {
      platform: '平台',
      requirements: '系統需求',
      package: '下載檔案',
      notes: '注意事項',
    },
    platforms: [
      {
        platform: 'Windows',
        requirements: 'Windows 10 或 11（64 位元）',
        file: 'MapStacker-windows-x64.zip',
        notes: '解壓縮後執行 MapStacker.exe。',
      },
      {
        platform: 'macOS',
        requirements: 'Apple Silicon（arm64）',
        file: 'MapStacker-macos-arm64.zip',
        notes: '應用程式未簽章；首次啟動時請按右鍵並選擇「打開」。',
      },
      {
        platform: 'Linux',
        requirements: 'x64、glibc 2.31 或更新版本',
        file: 'MapStacker-linux-x64.zip',
        notes: '需要具備 Qt xcb 支援的 X11 圖形環境。',
      },
    ],
    archiveNoteBefore: '程式以 ZIP 壓縮檔提供。如需驗證檔案，請從版本頁面下載對應的',
    archiveNoteChecksum: '.sha256',
    archiveNoteAfter: '檔案。',
  },
  support: {
    title: '支援與問題回報',
    paragraph1: '錯誤回報與功能建議皆透過 GitHub Issues 管理。建立回報前，請先確認是否已有相同問題。',
    paragraph2: '回報錯誤時，請提供 MapStacker 版本、作業系統、重現步驟，以及相關的畫面截圖或 log。',
    newIssue: '建立問題回報',
    browseIssues: '查看現有問題',
  },
  footer: {
    releases: '版本發布',
    issues: '問題回報',
  },
};
