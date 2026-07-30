import type { SiteText } from './translations';

export const zhCN: SiteText = {
  lang: 'zh-CN',
  pageTitle: 'MapStacker',
  description: 'MapStacker 是用于叠合月球与行星单色或彩色 SER 影像序列的桌面应用程序。',
  languageLabel: '语言',
  nav: { features: '功能', download: '下载', support: '支持' },
  intro: {
    summary: 'MapStacker 是用于叠合月球与行星单色或彩色 SER 影像序列的桌面应用程序。',
    details: '程序提供帧品质分析、全局稳定化、多重对齐点、局部选帧、网格叠合、Drizzle、色彩对齐与 16 位 TIFF 输出。',
    download: '下载 MapStacker',
    latestRelease: '查看最新版本',
    availability: '支持 Windows、macOS 与 Linux，内置英文及繁体中文界面。',
  },
  screenshot: {
    title: '程序界面',
    alt: 'MapStacker 主窗口显示月面影像与对齐点',
    caption: '主窗口包含处理控制、帧浏览、对齐点及影像预览。',
  },
  features: {
    title: '功能',
    groups: [
      { title: '输入与选帧', items: ['支持单色、RGB 与 Bayer CFA 的 SER 输入', '在影像重采样前进行帧品质排序', '手动排除帧及选择参考帧', '各对齐点独立进行局部选帧'] },
      { title: '对齐', items: ['使用相位相关或亮度重心进行全局帧稳定化', '使用质心 Voronoi 网格自动配置对齐点', '具离群值处理的亚像素局部对齐'] },
      { title: '叠合与色彩', items: ['分段仿射网格叠合', '单色、RGB 与 Bayer 数据的 Drizzle 处理', '多种全局与局部 RGB 对齐方式', '批量处理文件夹中的 SER 文件'] },
      { title: '输出', items: ['自动裁切与可选的输出居中', '16 位 TIFF 输出', '包含设置、来源元数据、选帧及对齐点的文本附属文件'] },
    ],
  },
  workflow: {
    title: '基本操作流程',
    steps: [
      { title: '打开 SER 文件。', text: 'MapStacker 会读取影像序列及其元数据。' },
      { title: '分析帧品质。', text: '查看品质排序，并视需要排除不适合的帧。' },
      { title: '稳定影像序列。', text: '估算并校正全局移动。' },
      { title: '配置对齐点。', text: '使用自动配置，或手动调整对齐点。' },
      { title: '执行叠合。', text: '选择帧比例、叠合方式及色彩选项。' },
      { title: '导出结果。', text: '将影像保存为 16 位 TIFF，并保留处理记录。' },
    ],
  },
  download: {
    title: '下载',
    intro: '预构建版本无需另行安装 Python。',
    releaseNotes: '版本说明与校验码',
    columns: { platform: '平台', requirements: '系统需求', package: '下载文件', notes: '说明' },
    platforms: [
      { platform: 'Windows', requirements: 'Windows 10 或 11（64 位）', file: 'MapStacker-windows-x64.zip', notes: '解压后运行 MapStacker.exe。' },
      { platform: 'macOS', requirements: 'Apple Silicon（arm64）', file: 'MapStacker-macos-arm64.zip', notes: '应用程序未经签名；首次启动时请右键单击并选择“打开”。' },
      { platform: 'Linux', requirements: 'x64、glibc 2.31 或更新版本', file: 'MapStacker-linux-x64.zip', notes: '需要支持 Qt xcb 的 X11 图形环境。' },
    ],
    archiveNoteBefore: '程序以 ZIP 压缩包发布。如需验证文件，请从版本页面下载对应的',
    archiveNoteChecksum: '.sha256',
    archiveNoteAfter: '文件。',
  },
  support: {
    title: '支持与问题反馈',
    paragraph1: '错误报告与功能建议均通过 GitHub Issues 管理。提交报告前，请先确认是否已有相同问题。',
    paragraph2: '有效的错误报告应包含 MapStacker 版本、操作系统、复现步骤，以及相关截图或日志。',
    newIssue: '提交新问题',
    browseIssues: '浏览现有问题',
  },
  footer: { releases: '版本发布', issues: '问题反馈' },
};

export const ja: SiteText = {
  lang: 'ja',
  pageTitle: 'MapStacker',
  description: 'MapStacker は月面・惑星の SER 動画からフレームをスタック処理するデスクトップアプリケーションです。',
  languageLabel: '言語',
  nav: { features: '機能', download: 'ダウンロード', support: 'サポート' },
  intro: {
    summary: 'MapStacker は SER ファイルに格納された月面・惑星のモノクロおよびカラー動画をスタック処理するデスクトップアプリケーションです。',
    details: 'フレーム品質解析、グローバル安定化、複数のアライメントポイント、局所フレーム選択、メッシュスタッキング、Drizzle、カラーアライメント、16 ビット TIFF 出力を備えています。',
    download: 'MapStacker をダウンロード',
    latestRelease: '最新リリースを確認',
    availability: 'Windows・macOS・Linux に対応。英語および繁体字中国語インターフェースを収録。',
  },
  screenshot: {
    title: 'アプリケーションウィンドウ',
    alt: '月面画像とアライメントポイントを表示した MapStacker のメインウィンドウ',
    caption: 'メインウィンドウには処理コントロール、フレームナビゲーション、アライメントポイント、画像プレビューが含まれます。',
  },
  features: {
    title: '機能',
    groups: [
      { title: '入力とフレーム選択', items: ['モノクロ・RGB・Bayer CFA の SER 入力に対応', 'リサンプリング前のフレーム品質ランキング', 'フレームの手動除外および基準フレームの選択', 'アライメントポイントごとに独立した局所フレーム選択'] },
      { title: 'アライメント', items: ['位相相関または重心を用いたグローバルフレーム安定化', '重心ボロノイグリッドによるアライメントポイントの自動配置', '外れ値処理を備えたサブピクセル局所アライメント'] },
      { title: 'スタッキングとカラー', items: ['区分的アフィンメッシュスタッキング', 'モノクロ・RGB・Bayer データへの Drizzle 処理', '複数のグローバルおよびローカル RGB アライメント手法', 'フォルダ内の SER ファイルのバッチ処理'] },
      { title: '出力', items: ['自動トリミングとオプションの出力センタリング', '16 ビット TIFF 出力', '設定・ソースメタデータ・フレーム選択・アライメントポイントを記録したテキストサイドカー'] },
    ],
  },
  workflow: {
    title: '基本的なワークフロー',
    steps: [
      { title: 'SER ファイルを開く。', text: 'MapStacker が動画とそのメタデータを読み込みます。' },
      { title: 'フレーム品質を解析する。', text: 'ランキングを確認し、不適切なフレームを必要に応じて除外します。' },
      { title: 'シーケンスを安定化する。', text: 'グローバルな動きを推定して補正します。' },
      { title: 'アライメントポイントを配置する。', text: '自動配置を使用するか、手動でポイントを調整します。' },
      { title: 'スタックを実行する。', text: 'フレーム割合、スタッキング手法、カラーオプションを選択します。' },
      { title: '結果をエクスポートする。', text: '処理記録とともに画像を 16 ビット TIFF として保存します。' },
    ],
  },
  download: {
    title: 'ダウンロード',
    intro: 'ビルド済みパッケージは Python のインストールを必要としません。',
    releaseNotes: 'リリースノートとチェックサム',
    columns: { platform: 'プラットフォーム', requirements: '動作環境', package: 'パッケージ', notes: '備考' },
    platforms: [
      { platform: 'Windows', requirements: 'Windows 10 または 11（64 ビット）', file: 'MapStacker-windows-x64.zip', notes: 'アーカイブを展開して MapStacker.exe を実行してください。' },
      { platform: 'macOS', requirements: 'Apple Silicon（arm64）', file: 'MapStacker-macos-arm64.zip', notes: '署名なしアプリケーションです。初回起動時は右クリックして「開く」を選択してください。' },
      { platform: 'Linux', requirements: 'x64、glibc 2.31 以降', file: 'MapStacker-linux-x64.zip', notes: 'Qt xcb をサポートする X11 グラフィック環境が必要です。' },
    ],
    archiveNoteBefore: 'パッケージは ZIP アーカイブとして配布されています。アーカイブを検証する場合は、リリースページから対応する',
    archiveNoteChecksum: '.sha256',
    archiveNoteAfter: 'ファイルをダウンロードしてください。',
  },
  support: {
    title: 'サポートと不具合報告',
    paragraph1: 'バグ報告や機能要望は GitHub Issues で管理しています。報告を作成する前に、同じ問題がすでに報告されていないか確認してください。',
    paragraph2: '有用なバグ報告には、MapStacker のバージョン、オペレーティングシステム、問題の再現手順、関連するスクリーンショットまたはログを含めてください。',
    newIssue: '新しい Issue を開く',
    browseIssues: '既存の Issue を確認',
  },
  footer: { releases: 'リリース', issues: 'Issues' },
};

export const es: SiteText = {
  lang: 'es',
  pageTitle: 'MapStacker',
  description: 'MapStacker es una aplicación de escritorio para apilar secuencias de imágenes SER lunares y planetarias.',
  languageLabel: 'Idioma',
  nav: { features: 'Funciones', download: 'Descargar', support: 'Soporte' },
  intro: {
    summary: 'MapStacker es una aplicación de escritorio para apilar secuencias de imágenes lunares o planetarias en monocromo y color almacenadas en archivos SER.',
    details: 'Ofrece análisis de calidad de fotogramas, estabilización global, múltiples puntos de alineación, selección local de fotogramas, apilado por malla, Drizzle, alineación de color y salida en TIFF de 16 bits.',
    download: 'Descargar MapStacker',
    latestRelease: 'Ver la última versión',
    availability: 'Disponible para Windows, macOS y Linux. Se incluyen interfaces en inglés y chino tradicional.',
  },
  screenshot: {
    title: 'Ventana de la aplicación',
    alt: 'Ventana principal de MapStacker con una imagen lunar y sus puntos de alineación',
    caption: 'La ventana principal incluye controles de procesado, navegación de fotogramas, puntos de alineación y vista previa de imagen.',
  },
  features: {
    title: 'Funciones',
    groups: [
      { title: 'Entrada y selección de fotogramas', items: ['Entrada SER en monocromo, RGB y Bayer CFA', 'Clasificación de calidad de fotogramas antes del remuestreo', 'Exclusión manual de fotogramas y selección del fotograma de referencia', 'Selección local de fotogramas independiente por punto de alineación'] },
      { title: 'Alineación', items: ['Estabilización global mediante correlación de fase o centro de gravedad', 'Colocación automática de puntos de alineación con una cuadrícula de Voronoi centroidal', 'Alineación local sub-píxel con gestión de valores atípicos'] },
      { title: 'Apilado y color', items: ['Apilado por malla afín por partes', 'Procesado Drizzle para datos en monocromo, RGB y Bayer', 'Varios métodos de alineación RGB globales y locales', 'Procesado por lotes de archivos SER en una carpeta'] },
      { title: 'Salida', items: ['Recorte automático y centrado de salida opcional', 'Salida en TIFF de 16 bits', 'Archivo sidecar de texto con ajustes, metadatos fuente, selección de fotogramas y puntos de alineación'] },
    ],
  },
  workflow: {
    title: 'Flujo de trabajo habitual',
    steps: [
      { title: 'Abrir un archivo SER.', text: 'MapStacker lee la captura y sus metadatos.' },
      { title: 'Analizar la calidad de los fotogramas.', text: 'Revisar la clasificación y excluir fotogramas inadecuados si es necesario.' },
      { title: 'Estabilizar la secuencia.', text: 'Estimar y corregir el movimiento global.' },
      { title: 'Colocar los puntos de alineación.', text: 'Usar la colocación automática o ajustar los puntos manualmente.' },
      { title: 'Ejecutar el apilado.', text: 'Elegir los porcentajes de fotogramas, el método de apilado y las opciones de color.' },
      { title: 'Exportar el resultado.', text: 'Guardar la imagen como TIFF de 16 bits con su registro de procesado.' },
    ],
  },
  download: {
    title: 'Descargar',
    intro: 'Los paquetes precompilados no requieren una instalación de Python.',
    releaseNotes: 'Notas de versión y sumas de verificación',
    columns: { platform: 'Plataforma', requirements: 'Requisitos', package: 'Paquete', notes: 'Notas' },
    platforms: [
      { platform: 'Windows', requirements: 'Windows 10 u 11 (64 bits)', file: 'MapStacker-windows-x64.zip', notes: 'Descomprimir el archivo y ejecutar MapStacker.exe.' },
      { platform: 'macOS', requirements: 'Apple Silicon (arm64)', file: 'MapStacker-macos-arm64.zip', notes: 'Aplicación sin firmar. En el primer inicio, haga clic derecho y elija Abrir.' },
      { platform: 'Linux', requirements: 'x64, glibc 2.31 o posterior', file: 'MapStacker-linux-x64.zip', notes: 'Requiere un entorno gráfico X11 con soporte para Qt xcb.' },
    ],
    archiveNoteBefore: 'Los paquetes se distribuyen como archivos ZIP. Descargue el archivo',
    archiveNoteChecksum: '.sha256',
    archiveNoteAfter: 'correspondiente desde la página de versiones para verificar el archivo.',
  },
  support: {
    title: 'Soporte e informes de problemas',
    paragraph1: 'Los informes de errores y las solicitudes de funciones se gestionan a través de GitHub Issues. Antes de abrir un informe, compruebe si el mismo problema ya ha sido reportado.',
    paragraph2: 'Un informe de error útil debe incluir la versión de MapStacker, el sistema operativo, los pasos necesarios para reproducir el problema y cualquier captura de pantalla o registro relevante.',
    newIssue: 'Abrir un nuevo issue',
    browseIssues: 'Ver issues existentes',
  },
  footer: { releases: 'Versiones', issues: 'Issues' },
};

export const it: SiteText = {
  lang: 'it',
  pageTitle: 'MapStacker',
  description: "MapStacker è un'applicazione desktop per lo stacking di sequenze di immagini SER lunari e planetarie.",
  languageLabel: 'Lingua',
  nav: { features: 'Funzionalità', download: 'Scarica', support: 'Supporto' },
  intro: {
    summary: "MapStacker è un'applicazione desktop per lo stacking di sequenze di immagini lunari o planetarie in monocromo e colore memorizzate in file SER.",
    details: 'Offre analisi della qualità dei fotogrammi, stabilizzazione globale, punti di allineamento multipli, selezione locale dei fotogrammi, stacking a griglia, Drizzle, allineamento del colore e output in TIFF a 16 bit.',
    download: 'Scarica MapStacker',
    latestRelease: "Visualizza l'ultima versione",
    availability: 'Disponibile per Windows, macOS e Linux. Sono incluse le interfacce in inglese e cinese tradizionale.',
  },
  screenshot: {
    title: "Finestra dell'applicazione",
    alt: "Finestra principale di MapStacker con un'immagine lunare e i relativi punti di allineamento",
    caption: "La finestra principale comprende i controlli di elaborazione, la navigazione dei fotogrammi, i punti di allineamento e un'anteprima dell'immagine.",
  },
  features: {
    title: 'Funzionalità',
    groups: [
      { title: 'Input e selezione dei fotogrammi', items: ['Input SER in monocromo, RGB e Bayer CFA', 'Classificazione della qualità dei fotogrammi prima del ricampionamento', 'Esclusione manuale dei fotogrammi e selezione del fotogramma di riferimento', 'Selezione locale dei fotogrammi indipendente per ogni punto di allineamento'] },
      { title: 'Allineamento', items: ['Stabilizzazione globale dei fotogrammi tramite correlazione di fase o centro di gravità', 'Posizionamento automatico dei punti di allineamento con una griglia di Voronoi centroidale', 'Allineamento locale sub-pixel con gestione dei valori anomali'] },
      { title: 'Stacking e colore', items: ['Stacking a griglia affine a tratti', 'Elaborazione Drizzle per dati in monocromo, RGB e Bayer', 'Diversi metodi di allineamento RGB globali e locali', 'Elaborazione in batch di file SER in una cartella'] },
      { title: 'Output', items: ["Ritaglio automatico e centratura dell'output opzionale", 'Output in TIFF a 16 bit', 'File sidecar testuale con impostazioni, metadati sorgente, selezione dei fotogrammi e punti di allineamento'] },
    ],
  },
  workflow: {
    title: 'Flusso di lavoro tipico',
    steps: [
      { title: 'Aprire un file SER.', text: 'MapStacker legge la ripresa e i relativi metadati.' },
      { title: 'Analizzare la qualità dei fotogrammi.', text: 'Controllare la classifica ed escludere i fotogrammi non idonei se necessario.' },
      { title: 'Stabilizzare la sequenza.', text: 'Stimare e correggere il movimento globale.' },
      { title: 'Posizionare i punti di allineamento.', text: 'Utilizzare il posizionamento automatico o regolare i punti manualmente.' },
      { title: 'Eseguire lo stacking.', text: 'Scegliere le percentuali di fotogrammi, il metodo di stacking e le opzioni di colore.' },
      { title: 'Esportare il risultato.', text: "Salvare l'immagine come TIFF a 16 bit con il relativo registro di elaborazione." },
    ],
  },
  download: {
    title: 'Scarica',
    intro: "I pacchetti precompilati non richiedono l'installazione di Python.",
    releaseNotes: 'Note di rilascio e checksum',
    columns: { platform: 'Piattaforma', requirements: 'Requisiti', package: 'Pacchetto', notes: 'Note' },
    platforms: [
      { platform: 'Windows', requirements: 'Windows 10 o 11 (64 bit)', file: 'MapStacker-windows-x64.zip', notes: "Estrarre l'archivio ed eseguire MapStacker.exe." },
      { platform: 'macOS', requirements: 'Apple Silicon (arm64)', file: 'MapStacker-macos-arm64.zip', notes: 'Applicazione non firmata. Al primo avvio, fare clic con il tasto destro e scegliere Apri.' },
      { platform: 'Linux', requirements: 'x64, glibc 2.31 o versione successiva', file: 'MapStacker-linux-x64.zip', notes: 'Richiede un ambiente grafico X11 con supporto Qt xcb.' },
    ],
    archiveNoteBefore: 'I pacchetti sono distribuiti come archivi ZIP. Scarica il file',
    archiveNoteChecksum: '.sha256',
    archiveNoteAfter: "corrispondente dalla pagina di rilascio per verificare l'archivio.",
  },
  support: {
    title: 'Supporto e segnalazione di problemi',
    paragraph1: 'I report di bug e le richieste di funzionalità sono gestiti tramite GitHub Issues. Prima di aprire una segnalazione, verificare se lo stesso problema è già stato riportato.',
    paragraph2: 'Una segnalazione di bug utile deve includere la versione di MapStacker, il sistema operativo, i passaggi per riprodurre il problema e qualsiasi screenshot o log pertinente.',
    newIssue: 'Apri una nuova issue',
    browseIssues: 'Sfoglia le issue esistenti',
  },
  footer: { releases: 'Rilasci', issues: 'Issue' },
};
