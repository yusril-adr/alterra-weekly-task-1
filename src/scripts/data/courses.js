const courses = [
  {
    name: 'Version Control and Branch Management (Git)',
    id: 'git',
    learnedPoints: [
      {
        title: 'Peran Penting Version Control',
        description: 'Version Control sangat berperan penting. Dengan adanya version control, kita dapat memberikan revisi source code dengan mudah. Tidak hanya itu, kita juga dapat kembali ke versi-versi sebelumnya secara otomatis melalui commit atau branch lain.',
      },
      {
        title: 'Penamaan yang baik terhadap commit message',
        description: 'Berikan commit message dengan jelas dan singkat. Saat kita ingin memberikan pesan pada commit kita, sebaiknya kita berikan pesan yang jelas dan singkat agar lebih mudah dimengerti.',
      },
      {
        title: 'Penggunaan repository online untuk mempermudah kolaborasi',
        description: 'Dengan adanya git dan repo online, mempermudah kolaborasi dengan developer lain. Dengan repo online seperti github, mempermudahkan kita bekerja sama membangun source code dengan developer lain. Tidak hanya itu, kita juga bisa berkontribusi pada project-project open source.',
      },
    ],
    tasks: [
      {
        title: 'Merge Branching',
        description: 'Pada task ini, membuat repository github dan membuat skenario melakukan merge pada branch yang berbeda.',
      },
    ],
    links: [
      {
        url: 'https://github.com/yusril-adr/alterra-task-git.git',
        name: 'Github Repo',
      },
    ],
    screenshots: [
      './images/git-network-graph.png',
    ],
  },
  {
    name: 'Introduction UI/UX',
    id: 'introduction-ui-ux',
    learnedPoints: [
      {
        title: 'Pengertian UX (User Experience)',
        description: 'UX (User Experience) merupakan segala sesuatu apa yang pengguna rasakan tentang produk yang digunakan. Dalam pengertian ini, UX mencangkup banyak field seperti Business, Business logic, Technology, Interaction Logic, Design, dan Computer Communication.',
      },
      {
        title: 'Pengertian UI (User Interface)',
        description: 'UI (User Interface) merupakan sebuah visual dari sebuah produk yang berinteraksi dengan pengguna. Dari pengertian tadi, dapat disimpulkan juga bahwa UI juga merupakan salah satu dari UX.',
      },
      {
        title: 'Peran Penting Protoype',
        description: 'Prototype juga berperan penting. Adanya prototype bertujuan agar kita dapat mensimulasikan produk sample ke pengguna agar mendapatkan feedback terlebih dahulu sebelum lanjut ke proses selanjutnya dalam pembuatan produk. Dengan demikian, maka pengeluaran uang dan tenaga dapat diminimalisir.',
      },
    ],
    tasks: [
      {
        title: 'Analisis Desain UI/UX Dari Website',
        description: 'Pada task ini, mencari desain UI/UX dari website seperti dribble dan semacamnya dan melakukan analisis terhadap desain tersebut.',
      },
    ],
    links: [
      {
        url: 'https://docs.google.com/document/d/18ftvBmTfQSQMMWKsDibfBLjn9iLwgQOk/edit?usp=sharing&ouid=110639198608011768126&rtpof=true&sd=true',
        name: 'Google Docs',
      },
    ],
    screenshots: [
      './images/ui-ux-samawa.png',
      './images/ui-ux-bluehouse.jpg',
      './images/ui-ux-moundaki.png',
    ],
  },
  {
    name: 'Figma',
    id: 'figma',
    learnedPoints: [
      {
        title: 'Apa itu Figma',
        description: 'Figma merupakan tools untuk membuat desain UI/UX berbasis web sehingga pengguna tidak perlu repot-repot melakukan proses instalisasi.',
      },
      {
        title: 'Kekurangan Figma',
        description: 'Salah satu kekurangan dari figma adalah kita harus bekerja secara online untuk membuka web tersebut.',
      },
      {
        title: 'Kelebihan Figma',
        description: 'Karena figma bisa diakses melalui web, maka memudahkan kita dapat bekerja pada device manapun.',
      },
    ],
    tasks: [
      {
        title: 'Redesain dari Tugas Introduction UI UX',
        description: 'Pada task ini, melakukan desain ulang ke figma. Desain yang digunakan adalah desain dari tugas Introduction UI UX sebelumnya.',
      },
    ],
    links: [
      {
        url: 'https://www.figma.com/file/3UxoKrwdU6b2UCCgEQklZX/Samawa-Redesign',
        name: 'Figma',
      },
    ],
    screenshots: [
      './images/figma-preview.png',
    ],
  },
  {
    name: 'HTML',
    id: 'html',
    learnedPoints: [
      {
        title: 'Apa itu FrontEnd',
        description: 'FrontEnd adalah sebuah sisi aplikasi yang berhubungan langsung pada sisi client/pengguna. Salah satunya adalah tampilan aplikasi website.',
      },
      {
        title: 'Apa itu HTML',
        description: 'HTML merupakan sebuah bahasa standar yang digunakan untuk menampilkan tampilan pada sebuah website.',
      },
      {
        title: 'Text Editor yang dapat digunakan untuk HTML',
        description: 'Beberapa text editor yang dapat digunakan untuk membuat html adalah Visual Studio Code, Atom, Sublime Text, Notepad++, Notepad, dan lain-lain.',
      },
    ],
    tasks: [
      {
        title: 'Membuat index.html, form.html, dan welcome.html',
        description: 'Pada task ini, membuat 3 halaman dengan skenario user login ke aplikasi sosial media MyBook.',
      },
    ],
    links: [
      {
        url: 'https://github.com/yusril-adr/alterra-task-html',
        name: 'Github Repo',
      },
    ],
    screenshots: [
      './images/html-index.png',
      './images/html-form.png',
      './images/html-welcome.png',
    ],
  },
  {
    name: 'CSS',
    id: 'css',
    learnedPoints: [
      {
        title: 'Apa itu CSS',
        description: 'CSS atau Cascading Style Sheets merupakan sebuah file yang berfungsi untuk menghias website yang sudah dibuat strukturnya dengan HTML.',
      },
      {
        title: 'Cara menambahkan CSS ke HTML',
        description: 'Terdapat 3 cara untuk menambahkan CSS ke HTML, yaitu : Inline CSS, Outline CSS, dan External CSS',
      },
      {
        title: 'Cara kerja CSS',
        description: 'Cara kerja CSS adalah dengan kita mengambil element yang ingin kita styling dengan cara melakakukan CSS Selector atau CSS grouping, setelah itu kita berikan kurung kurawal {}, didalamnya kita berikan syntax css untuk kita syling.',
      },
    ],
    tasks: [
      {
        title: 'Membuat file1.html',
        description: 'Pada task ini, membuat sebuah halaman dengan 3 box sesuai dengan gambar yang tertera pada task.',
      },
      {
        title: 'Membuat file2.html',
        description: 'Pada task ini, membuat sebuah halaman dengan navbar dan konten sesuai dengan gambar yang tertera pada task.',
      },
    ],
    links: [
      {
        url: 'https://github.com/yusril-adr/alterra-task-css',
        name: 'Github Repo',
      },
    ],
    screenshots: [
      './images/css-file1.png',
      './images/css-file2.png',
    ],
  },
  {
    name: 'Bootstrap',
    id: 'bootstrap',
    learnedPoints: [
      {
        title: 'Apa itu Bootstrap',
        description: 'Bootstrap merupakan salah satu framework css yang dapat mempermudah FrontEnd Dev untuk melakukan layouting.',
      },
      {
        title: 'Kelebihan Bootstrap',
        description: 'Dengan adanya bootstrap, pengerjaan layouting html dan css jadi lebih mudah karena terdapat banyak class-class dari bootstrap yang tinggal dipakai. Tidak hanya itu, dengan adanya bootstrap juga mempermudah meresponsivekan layout kita.',
      },
      {
        title: 'Cara Penggunaan Bootstrap',
        description: 'Kita hanya perlu menambahkan css dan js bootstrap ke HTML kita lalu, kita bisa memberikan class ke element HTML yang ingin kita salin.',
      },
    ],
    tasks: [
      {
        title: 'Membuat Halaman Sesuai dengan Desain dari Soal',
        description: 'Pada task ini, Membuat Halaman Sesuai dengan Desain dari Soal menggunakan bootstrap dalam penataan layoutingnya.',
      },
    ],
    links: [
      {
        url: 'https://github.com/yusril-adr/alterra-task-bootstrap',
        name: 'Github Repo',
      },
    ],
    screenshots: [
      './images/bootstrap-preview.png',
    ],
  },
  {
    name: 'Javascript Refreshment',
    id: 'javascript-refeshment',
    learnedPoints: [
      {
        title: 'Apa itu Javascript',
        description: 'Javascript adalah scripting languange yang berjalan pada browser web. Javascript biasa digunakan untuk memenipulasi object-object yang berada pada HTML, teknik ini biasa disebut Document Object Model(DOM) Manipulation.',
      },
      {
        title: 'Kelebihan Javascript',
        description: 'Javascript merupakan bahasa pemrograman tingkat tinggi, yang berarti bahasa ini semakin mudah dipahami manusia. Tidak hanya itu, sekarang banyak platform yang berjalan menggunakan bahasa Javascript, seperti react native untuk multi platform.',
      },
      {
        title: 'Penggunaan Javascript',
        description: 'Penggunaan javascript kurang lebih sama seperti bahasa pemrograman tingkat tinggi lainnya, salah satu perbedaannya adalah di javascript terdapat tipe data object dan juga javascript bisa berjalan dengan asynchronous.',
      },
    ],
    tasks: [
      {
        title: 'Membuat Kode seperti di soal',
        description: 'Pada task ini, membuat kode seperti pada gambar di soal.',
      },
      {
        title: 'Menjelaskan anomali kode pada soal nomor 1',
        description: 'Pada task ini, menjelaskan kenapa terjadi anomali pada kode nomor 1 yang menyebabkan error.',
      },
      {
        title: 'Melakukan destructing array',
        description: 'Pada task ini, melakukan destructing array pada variable yang sudah disiapkan.',
      },
      {
        title: 'Merubah nilai dalam array',
        description: 'Pada task ini, merubah format string yang berada pada array yang telah disiapkan.',
      },
      {
        title: 'Meng-kali-kan nilai dalam array',
        description: 'Pada task ini, merubah nilai yang berada pada array yang telah disiapkan kita kalikan 2.',
      },
      {
        title: 'Membulatkan keatas nilai dalam array',
        description: 'Pada task ini, membulatkan keatas nilai yang berada pada array yang telah disiapkan.',
      },
    ],
    links: [
      {
        url: 'https://github.com/yusril-adr/alterra-task-javascript-refreshment',
        name: 'Github Repo',
      },
      {
        url: 'https://docs.google.com/document/d/1fa7vNvekHAIy1SfwhX1xx5X43R9gkIDBOYylxBPD3CY/edit',
        name: 'Google Docs',
      },
    ],
    screenshots: [
      './images/javascript-preview.png',
    ],
  },
  {
    name: 'Clean Code',
    id: 'clean-code',
    learnedPoints: [
      {
        title: 'Pengertian Clean Code',
        description: 'Clean code merupakan sebuah kode yang bersih, atau lebih bisa dibaca oleh manusia. Sehingga algoritma dapat lebih mudah dipahami.',
      },
      {
        title: 'Pentingnya Clean Code',
        description: 'Dengan memiliki kode yang bersih, kita dapat lebih mudah memanage kode kita untuk kedepannya misalnya jika kita ingin menambahkan fitur baru maka implementasi penambahanya lebih mudah.',
      },
      {
        title: 'Prinsip-prinsip Clean Code',
        description: 'Beberapa prinsip-prinsip dari Clean code seperti DRY (Dont Repeat Yourself) dan juga KIS(Keep It Simple).',
      },
    ],
    tasks: [
      {
        title: 'Menganalisis Kode',
        description: 'Pada task ini, disediakan kode yang kurang bersih lalu tugas saya menganalisa bagian mana yang tidak/kurang clean.',
      },
      {
        title: 'Merubah kode menjadi lebih clean',
        description: 'Pada task ini, disediakan kode yang kurang bersih lalu tugas saya adalah memberbaiki kode tersebut agar menjadi lebih clean.',
      },
    ],
    links: [
      {
        url: 'https://github.com/yusril-adr/alterra-task-clean-code',
        name: 'Github Repo',
      },
      {
        url: 'https://docs.google.com/document/d/13XwRF7F0m2-9juqanY38DPLSmif68lc9dEMU-vUD_uA/edit?usp=sharing',
        name: 'Google Docs',
      },
    ],
    screenshots: [],
  },
];

export default courses;
