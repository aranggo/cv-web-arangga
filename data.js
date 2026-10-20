window.CV_DATA = {
  profile: {
    name: 'Abdurachman Ranggana',
    initials: 'AR',
    role: 'IT Infrastructure & Cloud Engineer',
    shortRole: 'System Engineer',
    location: 'Jakarta, Indonesia',
    email: 'abdur.ranggo@gmail.com',
    experience: '8+ years',
    availability: { label: 'Open to new opportunities', active: true },
    tagline: 'Designing Reliable Infrastructure. Automating Operations. Enabling Scalable Cloud Solutions.',
    description: 'System Engineer with experience across enterprise infrastructure, cloud operations, system administration, messaging services, virtualization, and operational automation.',
    summary: [
      'I am a System Engineer focused on building, operating, and improving Windows/Linux Server environments, enterprise services, virtualization platforms, and public cloud infrastructure.',
      'My professional experience covers AWS, Microsoft Azure, Active Directory, Exchange, Linux Zimbra, Fortimail, VMware, networking, and scripting. I work comfortably both independently and across teams, with a focus on reliability, security, and operational excellence.'
    ],
    strengths: [
      { number: '01', title: 'Reliability mindset', text: 'Keeping services stable through structured operations and careful response.' },
      { number: '02', title: 'Cloud & systems', text: 'Connecting business needs with AWS, Azure, server, and virtualization environments.' },
      { number: '03', title: 'Continuous learning', text: 'Eager to learn new technologies and turn them into useful practices.' }
    ]
  },
  stack: ['AWS', 'Microsoft Azure', 'Windows Server', 'Linux', 'VMware', 'PowerShell'],
  skills: [
    { category: 'Cloud', label: 'Cloud Platforms', icon: '◈', description: 'Public cloud operations and enterprise environment implementation.', items: ['AWS', 'Microsoft Azure', 'EC2', 'S3', 'VPC', 'VPN', 'RDS'] },
    { category: 'Windows', label: 'Windows Infrastructure', icon: '⊞', description: 'Server administration and directory services.', items: ['Windows Server', 'Active Directory', 'Group Policy', 'Exchange Server', 'PowerShell'] },
    { category: 'Linux', label: 'Linux & Messaging', icon: '⌁', description: 'Linux servers and enterprise email services.', items: ['Linux Server', 'SMTP Services', 'Zimbra Server', 'Fortimail Gateway', 'Shell Scripting Linux'] },
    { category: 'Virtualization', label: 'Virtualization', icon: '▣', description: 'Monitoring and operations for virtual environments.', items: ['VMware', 'Virtual Machines', 'Infrastructure Monitoring'] },
    { category: 'Networking', label: 'Networking', icon: '⌘', description: 'Compute networking and cloud connectivity.', items: ['Compute Networking', 'VPN', 'VPC', 'DNS', 'Web Hosting'] },
    { category: 'Delivery', label: 'Delivery & Documentation', icon: '↗', description: 'Technical planning, documentation, and reporting.', items: ['Scope of Work', 'Timeline Reporting', 'Operational Recommendation', 'Security Considerations'] }
  ],
  experience: [
    {
      period: '2019 — PRESENT', company: 'PT. Berca Hardayaperkasa', title: 'Cloud L2 System Engineer', location: 'Jakarta · Managed Services',
      summary: 'Handling server operations, messaging services, and cloud operations within a managed services environment.',
      details: ['Windows Server operations: Active Directory, GPO, tuning, and PowerShell scripts.', 'E-mail / SMTP services: Exchange, Linux Zimbra Server, and Fortimail Gateway.', 'AWS project operations: EC2, S3, VPN, VPC, RDS, and recommendations based on security and operational excellence.'],
      technologies: ['AWS', 'Windows Server', 'Active Directory', 'Exchange', 'Zimbra', 'Fortimail', 'PowerShell']
    },
    {
      period: '2018 — 2019 · 1 YEAR', company: 'PT. Asaba Computer Centre', title: 'System Engineer', location: 'Jakarta · Microsoft Projects',
      summary: 'Delivered Microsoft projects involving hybrid messaging, directory services, and disaster recovery.',
      details: ['Set up a hybrid Exchange On-Premise and Office 365 configuration.', 'Migrated Active Directory.', 'Implemented a Disaster Recovery Center on Microsoft Azure.', 'Created and supported reports, scopes of work, and timeline reporting.'],
      technologies: ['Exchange', 'Office 365', 'Active Directory', 'Microsoft Azure', 'Disaster Recovery']
    },
    {
      period: '2018 · 6 MONTHS', company: 'PT. Lintasarta', title: 'Cloud Engineer', location: 'Jakarta · Infrastructure Operations',
      summary: 'Monitored virtualized environments and supported cloud infrastructure operations.',
      details: ['Monitored VMware-based virtualization.', 'Supported visibility and day-to-day operations for the virtual environment.'],
      technologies: ['VMware', 'Virtualization', 'Monitoring']
    },
    {
      period: '2017 · 6 MONTHS', company: 'Vodien Internet Solution Pte. Ltd.', title: 'Helpdesk Support', location: 'Jakarta · Customer Support Service',
      summary: 'Provided customer support for DNS and web hosting needs.',
      details: ['Provided customer support for DNS and web hosting services.', 'Helped troubleshoot customer hosting requirements.'],
      technologies: ['DNS', 'Web Hosting', 'Customer Support']
    }
  ],
  projects: [
    {
      id: 'aws-managed-services', category: 'Cloud', type: 'CLOUD OPERATIONS', period: '2019 — PRESENT', title: 'AWS Managed Services',
      overview: 'Cloud operations for enterprise workloads within a managed services environment.',
      problem: 'Keeping cloud services managed, secure, and ready to support business needs.',
      solution: 'Handled EC2, S3, VPN, VPC, and RDS operations while providing recommendations based on security and operational excellence.',
      outcome: 'Quantitative contribution and impact are not listed because no verified metrics were provided in the CV.',
      stack: ['AWS', 'EC2', 'S3', 'VPN', 'VPC', 'RDS'],
      accent: 'cyan'
    },
    {
      id: 'hybrid-messaging-azure-dr', category: 'Microsoft', type: 'MICROSOFT INFRASTRUCTURE', period: '2018 — 2019', title: 'Hybrid Messaging & Azure DR',
      overview: 'Modernizing a Microsoft environment for hybrid messaging and disaster recovery.',
      problem: 'Connecting Exchange On-Premise, Office 365, Active Directory, and disaster recovery requirements.',
      solution: 'Set up hybrid Exchange, migrated Active Directory, and implemented a Disaster Recovery Center on Microsoft Azure.',
      outcome: 'Measured results are not listed because no verified metrics were provided in the CV.',
      stack: ['Exchange', 'Office 365', 'Active Directory', 'Azure', 'DRC'],
      accent: 'violet'
    },
    {
      id: 'messaging-hosting-operations', category: 'Systems', type: 'ENTERPRISE SYSTEMS', period: '2017 — PRESENT', title: 'Messaging & Hosting Operations',
      overview: 'Email, gateway, DNS, and web hosting operations across enterprise environments.',
      problem: 'Keeping communication and hosting services accessible and operationally supported.',
      solution: 'Managed Exchange, Linux Zimbra Server, Fortimail Gateway, DNS, and web hosting across the documented roles and projects.',
      outcome: 'Measured results are not listed because no verified metrics were provided in the CV.',
      stack: ['Exchange', 'Zimbra', 'Fortimail', 'SMTP', 'DNS'],
      accent: 'amber'
    }
  ],
  architectures: {
    aws: {
      icon: 'aws', tab: 'AWS Operations', title: 'Managed AWS environment', description: 'Simplified view of the AWS services referenced in the managed services experience.',
      nodes: [
        { id: 'users', label: 'Users / Apps', icon: 'users', x: 8, y: 50, tone: 'muted', detail: 'Business workloads and users consuming hosted services.' },
        { id: 'vpc', label: 'VPC / VPN', icon: 'aws', x: 35, y: 50, tone: 'cyan', detail: 'Network boundary and connectivity layer for the cloud environment.' },
        { id: 'compute', label: 'EC2', icon: 'ec2', x: 64, y: 27, tone: 'cyan', detail: 'Compute layer for workloads managed in AWS.' },
        { id: 'storage', label: 'S3', icon: 's3', x: 64, y: 73, tone: 'violet', detail: 'Object storage service included in the AWS operations scope.' },
        { id: 'data', label: 'RDS', icon: 'rds', x: 91, y: 50, tone: 'amber', detail: 'Managed database service represented in the project scope.' }
      ],
      edges: [['users', 'vpc'], ['vpc', 'compute'], ['vpc', 'storage'], ['compute', 'data']]
    },
    hybrid: {
      icon: 'azure', tab: 'Microsoft Hybrid', title: 'Exchange hybrid & Azure DR', description: 'Simplified view of the Microsoft environment and disaster recovery relationship.',
      nodes: [
        { id: 'ad', label: 'Active Directory', icon: 'microsoft', x: 10, y: 50, tone: 'violet', detail: 'Directory foundation migrated and managed in Microsoft projects.' },
        { id: 'exchange', label: 'Exchange On-Prem', icon: 'microsoft', x: 38, y: 28, tone: 'cyan', detail: 'On-premise messaging environment connected through hybrid configuration.' },
        { id: 'o365', label: 'Office 365', icon: 'microsoft365', x: 38, y: 73, tone: 'cyan', detail: 'Cloud messaging destination in the documented hybrid setup.' },
        { id: 'azure', label: 'Azure DRC', icon: 'azure', x: 70, y: 50, tone: 'amber', detail: 'Disaster Recovery Center implemented to Microsoft Azure.' },
        { id: 'recovery', label: 'Recovery flow', icon: 'azure', x: 92, y: 50, tone: 'muted', detail: 'Recovery path for continuity planning.' }
      ],
      edges: [['ad', 'exchange'], ['ad', 'o365'], ['exchange', 'azure'], ['o365', 'azure'], ['azure', 'recovery']]
    },
    messaging: {
      icon: 'microsoft', tab: 'Messaging Flow', title: 'Enterprise messaging services', description: 'A simplified operational flow for the messaging and gateway services in the CV.',
      nodes: [
        { id: 'sender', label: 'Sender', icon: 'users', x: 8, y: 50, tone: 'muted', detail: 'Mail sender or client entering the service flow.' },
        { id: 'gateway', label: 'Fortimail', icon: 'fortinet', x: 33, y: 50, tone: 'amber', detail: 'Mail gateway included in the service operations scope.' },
        { id: 'exchange', label: 'Exchange', icon: 'microsoft', x: 59, y: 27, tone: 'cyan', detail: 'Microsoft messaging service.' },
        { id: 'zimbra', label: 'Linux Zimbra', icon: 'zimbra', x: 59, y: 73, tone: 'violet', detail: 'Linux-based email service referenced in the CV.' },
        { id: 'dns', label: 'DNS / Hosting', icon: 'azure', x: 91, y: 50, tone: 'muted', detail: 'DNS and web hosting support layer.' }
      ],
      edges: [['sender', 'gateway'], ['gateway', 'exchange'], ['gateway', 'zimbra'], ['exchange', 'dns'], ['zimbra', 'dns']]
    }
  },
  education: [{ title: 'Computer System (Bachelor\'s Degree)', organization: 'Gunadarma University', period: '2014 — 2017', detail: 'Formal education in computer systems.' }],
  certifications: [
    { title: 'AWS Certified CloudOps Engineer – Associate', organization: 'Amazon Web Services Training and Certification', issued: 'March 29, 2026', issuedId: '29 Maret 2026', expires: 'March 29, 2029', expiresId: '29 Maret 2029', status: 'Active', image: 'assets/certificates/aws%20cloud%20ops.jpg', imageAlt: 'AWS Certified CloudOps Engineer - Associate certificate for Abdurachman Ranggana', url: 'https://www.credly.com/badges/b0671cfd-3cfa-4dac-8b22-6845f7971d74/linked_in_profile' },
    { title: 'AWS Certified Solutions Architect – Associate', organization: 'Amazon Web Services Training and Certification', issued: 'May 10, 2025', issuedId: '10 Mei 2025', expires: 'May 10, 2028', expiresId: '10 Mei 2028', status: 'Active', image: 'assets/certificates/aws%20sa.png', imageAlt: 'AWS Certified Solutions Architect - Associate certificate for Abdurachman Ranggana', url: 'https://www.credly.com/badges/a5199fb5-0fd3-4621-91c1-df19c7caebcd/linked_in_profile' },
    { title: 'Exam 740: Installation, Storage and Compute with Windows Server 2016', organization: 'Microsoft', issued: 'August 9, 2019', issuedId: '9 Agustus 2019', expires: '', expiresId: '', status: 'Legacy exam', url: 'https://www.credly.com/badges/a274d826-c182-45ea-b91a-df5931d6b75f/linked_in_profile' },
    { title: 'AZ-101 Microsoft Azure Integration and Security', organization: 'Microsoft', issued: 'April 22, 2019', issuedId: '22 April 2019', expires: '', expiresId: '', status: 'Legacy exam', url: 'https://www.credly.com/badges/dfc07d02-48b8-4e4d-b95c-ad64ecde415f/linked_in_profile' },
    { title: 'AZ-100 Microsoft Azure Infrastructure and Deployment', organization: 'Microsoft', issued: 'April 16, 2019', issuedId: '16 April 2019', expires: '', expiresId: '', status: 'Legacy exam', url: 'https://www.credly.com/badges/392dc403-a492-454f-ae8c-626bbb917811/linked_in_profile' },
    { title: 'Exam 742: Identity with Windows Server 2016', organization: 'Microsoft', issued: 'February 6, 2019', issuedId: '6 Februari 2019', expires: '', expiresId: '', status: 'Legacy exam', url: '' },
    { title: 'Microsoft Certified: Azure Administrator Associate (Legacy)', organization: 'Microsoft', issued: 'April 16, 2019', issuedId: '16 April 2019', expires: 'October 16, 2021', expiresId: '16 Oktober 2021', status: 'Expired / Legacy', url: 'https://www.credly.com/badges/3710c499-daf6-45a2-abdf-f872d2cbc5af/linked_in' },
    { title: 'Microsoft Certified: Azure Fundamentals', organization: 'Microsoft', issued: 'June 30, 2022', issuedId: '30 Juni 2022', expires: '', expiresId: '', status: 'Active', url: 'https://www.credly.com/badges/2c50dda0-cc72-4ba8-b62d-ac02605062e4?source=linked_in_profile' }
  ],
  achievements: [],
  links: { linkedin: '', github: '', whatsapp: '' },
  translations: {
    en: {
      nav: { about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', architecture: 'Architecture', certifications: 'Certifications', contact: 'Contact', contactMe: 'Contact me' },
      hero: {
        availability: 'Open to new opportunities',
        kicker: 'IT INFRASTRUCTURE <span>/</span> CLOUD ENGINEERING',
        title: 'Engineering reliable infrastructure for a <em>scalable future.</em>',
        tagline: 'Engineering Reliable Infrastructure. Building Secure Cloud Environments. Automating at Scale.',
        description: 'I design, operate, and improve enterprise IT infrastructure across cloud platforms, Windows and Linux systems, virtualization, automation, monitoring, and security.',
        explore: 'Explore my work <span>↓</span>', download: 'Download CV <span>↓</span>', downloadFooter: 'Download CV', contact: 'Contact me <span>↗</span>', stack: 'WORKING WITH', profile: 'PROFILE / 01', experience: 'EXPERIENCE', experienceValue: '8+ years', focus: 'FOCUS', focusValue: 'Cloud & Systems'
      },
      about: {
        label: '01 / ABOUT ME', title: 'Building the invisible systems that keep business <em>moving.</em>',
        summary: ['I am a System Engineer focused on building, operating, and improving Windows/Linux Server environments, enterprise services, virtualization platforms, and public cloud infrastructure.', 'My professional experience covers AWS, Microsoft Azure, Active Directory, Exchange, Linux Zimbra, Fortimail, VMware, networking, and scripting. I work comfortably both independently and across teams, with a focus on reliability, security, and operational excellence.'],
        strengths: [{ title: 'Reliability mindset', text: 'Keeping services stable through structured operations and careful response.' }, { title: 'Cloud & systems', text: 'Connecting business needs with AWS, Azure, server, and virtualization environments.' }, { title: 'Continuous learning', text: 'Eager to learn new technologies and turn them into useful practices.' }]
      },
      skills: {
        label: '02 / TECHNICAL SKILLS', title: 'A practical toolkit for <em>reliable operations.</em>', aside: 'Filter the areas that matter to you. Proficiency levels are intentionally not scored without verified assessment data.', all: 'All skills', categories: { Cloud: 'Cloud', Windows: 'Windows', Linux: 'Linux', Virtualization: 'Virtualization', Networking: 'Networking', Delivery: 'Delivery' },
        cards: [{ label: 'Cloud Platforms', description: 'Public cloud operations and enterprise environment implementation.' }, { label: 'Windows Infrastructure', description: 'Server administration and directory services.' }, { label: 'Linux & Messaging', description: 'Linux servers and enterprise email services.' }, { label: 'Virtualization', description: 'Monitoring and operations for virtual environments.' }, { label: 'Networking', description: 'Compute networking and cloud connectivity.' }, { label: 'Delivery & Documentation', description: 'Technical planning, documentation, and reporting.' }]
      },
      experience: {
        label: '03 / EXPERIENCE', title: 'A career shaped by <em>operational excellence.</em>', view: 'View responsibilities',
        items: [
          { period: '2019 — PRESENT', summary: 'Handling server operations, messaging services, and cloud operations within a managed services environment.', details: ['Windows Server operations: Active Directory, GPO, tuning, and PowerShell scripts.', 'E-mail / SMTP services: Exchange, Linux Zimbra Server, and Fortimail Gateway.', 'AWS project operations: EC2, S3, VPN, VPC, RDS, and recommendations based on security and operational excellence.'] },
          { period: '2018 — 2019 · 1 YEAR', summary: 'Delivered Microsoft projects involving hybrid messaging, directory services, and disaster recovery.', details: ['Set up a hybrid Exchange On-Premise and Office 365 configuration.', 'Migrated Active Directory.', 'Implemented a Disaster Recovery Center on Microsoft Azure.', 'Created and supported reports, scopes of work, and timeline reporting.'] },
          { period: '2018 · 6 MONTHS', summary: 'Monitored virtualized environments and supported cloud infrastructure operations.', details: ['Monitored VMware-based virtualization.', 'Supported visibility and day-to-day operations for the virtual environment.'] },
          { period: '2017 · 6 MONTHS', summary: 'Provided customer support for DNS and web hosting needs.', details: ['Provided customer support for DNS and web hosting services.', 'Helped troubleshoot customer hosting requirements.'] }
        ]
      },
      projects: {
        label: '04 / SELECTED WORK', title: 'Systems, platforms, and <em>outcomes.</em>', search: 'Search projects...', all: 'All projects', open: 'Open project details ↗', noMatch: 'No matching projects.', tryAgain: 'Try another keyword or category.',
        items: [
          { overview: 'Cloud operations for enterprise workloads within a managed services environment.', problem: 'Keeping cloud services managed, secure, and ready to support business needs.', solution: 'Handled EC2, S3, VPN, VPC, and RDS operations while providing recommendations based on security and operational excellence.', outcome: 'Quantitative contribution and impact are not listed because no verified metrics were provided in the CV.' },
          { overview: 'Modernizing a Microsoft environment for hybrid messaging and disaster recovery.', problem: 'Connecting Exchange On-Premise, Office 365, Active Directory, and disaster recovery requirements.', solution: 'Set up hybrid Exchange, migrated Active Directory, and implemented a Disaster Recovery Center on Microsoft Azure.', outcome: 'Measured results are not listed because no verified metrics were provided in the CV.' },
          { overview: 'Email, gateway, DNS, and web hosting operations across enterprise environments.', problem: 'Keeping communication and hosting services accessible and operationally supported.', solution: 'Managed Exchange, Linux Zimbra Server, Fortimail Gateway, DNS, and web hosting across the documented roles and projects.', outcome: 'Measured results are not listed because no verified metrics were provided in the CV.' }
        ]
      },
      architecture: {
        label: '05 / ARCHITECTURE LAB', title: 'How the pieces connect to keep systems <em>resilient.</em>', aside: 'Explore a simplified view of architectures based on the environments documented in my experience.', tabs: { aws: 'AWS Operations', hybrid: 'Microsoft Hybrid', messaging: 'Messaging Flow' }, map: 'INTERACTIVE MAP', selectNode: 'Select a component to inspect its role and operational context.',
        items: {
          aws: { title: 'Managed AWS environment', description: 'Simplified view of the AWS services referenced in the managed services experience.', nodes: { users: { label: 'Users / Apps', detail: 'Business workloads and users consuming hosted services.' }, vpc: { label: 'VPC / VPN', detail: 'Network boundary and connectivity layer for the cloud environment.' }, compute: { label: 'EC2', detail: 'Compute layer for workloads managed in AWS.' }, storage: { label: 'S3', detail: 'Object storage service included in the AWS operations scope.' }, data: { label: 'RDS', detail: 'Managed database service represented in the project scope.' } } },
          hybrid: { title: 'Exchange hybrid & Azure DR', description: 'Simplified view of the Microsoft environment and disaster recovery relationship.', nodes: { ad: { label: 'Active Directory', detail: 'Directory foundation migrated and managed in Microsoft projects.' }, exchange: { label: 'Exchange On-Prem', detail: 'On-premise messaging environment connected through hybrid configuration.' }, o365: { label: 'Office 365', detail: 'Cloud messaging destination in the documented hybrid setup.' }, azure: { label: 'Azure DRC', detail: 'Disaster Recovery Center implemented to Microsoft Azure.' }, recovery: { label: 'Recovery flow', detail: 'Recovery path for continuity planning.' } } },
          messaging: { title: 'Enterprise messaging services', description: 'A simplified operational flow for the messaging and gateway services in the CV.', nodes: { sender: { label: 'Sender', detail: 'Mail sender or client entering the service flow.' }, gateway: { label: 'Fortimail', detail: 'Mail gateway included in the service operations scope.' }, exchange: { label: 'Exchange', detail: 'Microsoft messaging service.' }, zimbra: { label: 'Linux Zimbra', detail: 'Linux-based email service referenced in the CV.' }, dns: { label: 'DNS / Hosting', detail: 'DNS and web hosting support layer.' } } }
        }
      },
      credentials: { label: '06 / EDUCATION & CREDENTIALS', title: 'The foundations behind the <em>practice.</em>', education: 'Education', certifications: 'Certifications', issued: 'Issued', expires: 'Expires', verify: 'Verify credential ↗', pending: 'Verification link pending', noCert: 'No certifications added yet.', addCert: 'Only add credentials that are genuinely held in data.js.' },
      achievements: { label: '07 / VERIFIED IMPACT', title: 'Proof over promises.', aside: 'Metrics are shown only when verified. Add measured outcomes in <code>data.js</code> when ready.', noMetrics: 'No verified metrics added yet.', addMetrics: 'Add availability, server, automation, monitoring, or cost-optimization figures only when they are available and verifiable.' },
      contact: { label: '08 / LET\'S CONNECT', title: 'Ready to make infrastructure <em>work harder?</em>', description: 'Have an infrastructure challenge or an opportunity to discuss? Let\'s connect.', formTitle: 'CONTACT FORM', formNote: 'mailto fallback · no backend', name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', submit: 'Open email client <span>↗</span>', disclaimer: 'This form opens your email application; messages are not stored by this website.', invalid: 'Please complete your name, email, and message with a valid format.', opening: 'Opening your email application.', linkedInMissing: 'LinkedIn — not configured', githubMissing: 'GitHub — not configured', backTop: 'Back to top ↑' },
      ui: { viewResponsibilities: 'View responsibilities', all: 'All', noProjects: 'No matching projects.', tryAgain: 'Try another keyword or category.', overview: 'Overview', problem: 'Business problem', solution: 'Technical solution', outcome: 'Verified outcome', stack: 'Technology stack', notConfigured: 'Not configured' }
    },
    id: {
      nav: { about: 'Tentang', skills: 'Keahlian', experience: 'Pengalaman', projects: 'Proyek', architecture: 'Arsitektur', certifications: 'Sertifikasi', contact: 'Kontak', contactMe: 'Hubungi saya' },
      hero: {
        availability: 'Terbuka untuk peluang baru',
        kicker: 'INFRASTRUKTUR TI <span>/</span> CLOUD ENGINEERING',
        title: 'Membangun infrastruktur andal untuk masa depan yang <em>skalabel.</em>',
        tagline: 'Membangun Infrastruktur Andal. Merancang Lingkungan Cloud yang Aman. Mengotomasi dalam Skala Besar.',
        description: 'Saya merancang, mengoperasikan, dan meningkatkan infrastruktur TI enterprise yang mencakup platform cloud, sistem Windows dan Linux, virtualisasi, otomasi, monitoring, dan keamanan.',
        explore: 'Lihat karya saya <span>↓</span>', download: 'Unduh CV <span>↓</span>', downloadFooter: 'Unduh CV', contact: 'Hubungi saya <span>↗</span>', stack: 'TEKNOLOGI', profile: 'PROFIL / 01', experience: 'PENGALAMAN', experienceValue: '8+ tahun', focus: 'FOKUS', focusValue: 'Cloud & Sistem'
      },
      about: {
        label: '01 / TENTANG SAYA', title: 'Membangun sistem tak terlihat yang membuat bisnis terus <em>berjalan.</em>',
        summary: ['Saya adalah System Engineer yang berfokus pada membangun, mengoperasikan, dan meningkatkan lingkungan Windows/Linux Server, layanan enterprise, platform virtualisasi, serta infrastruktur public cloud.', 'Pengalaman profesional saya mencakup AWS, Microsoft Azure, Active Directory, Exchange, Linux Zimbra, Fortimail, VMware, networking, dan scripting. Saya nyaman bekerja secara mandiri maupun lintas tim dengan perhatian pada reliability, security, dan operational excellence.'],
        strengths: [{ title: 'Mindset reliability', text: 'Menjaga layanan tetap stabil melalui operasi yang terstruktur dan respons yang teliti.' }, { title: 'Cloud & systems', text: 'Menghubungkan kebutuhan bisnis dengan lingkungan AWS, Azure, server, dan virtualisasi.' }, { title: 'Pembelajaran berkelanjutan', text: 'Antusias mempelajari teknologi baru dan mengubahnya menjadi praktik yang berguna.' }]
      },
      skills: {
        label: '02 / KEAHLIAN TEKNIS', title: 'Toolkit praktis untuk <em>operasi yang andal.</em>', aside: 'Filter area yang ingin Anda lihat. Tingkat kemahiran sengaja tidak diberi skor tanpa data penilaian yang terverifikasi.', all: 'Semua keahlian', categories: { Cloud: 'Cloud', Windows: 'Windows', Linux: 'Linux', Virtualization: 'Virtualisasi', Networking: 'Networking', Delivery: 'Delivery' },
        cards: [{ label: 'Cloud Platforms', description: 'Operasi public cloud dan implementasi lingkungan enterprise.' }, { label: 'Windows Infrastructure', description: 'Administrasi server dan directory services.' }, { label: 'Linux & Messaging', description: 'Linux server dan layanan email enterprise.' }, { label: 'Virtualisasi', description: 'Monitoring dan operasi lingkungan virtual.' }, { label: 'Networking', description: 'Compute networking dan konektivitas cloud.' }, { label: 'Delivery & Dokumentasi', description: 'Perencanaan, dokumentasi, dan pelaporan teknis.' }]
      },
      experience: {
        label: '03 / PENGALAMAN', title: 'Perjalanan karier yang dibentuk oleh <em>operational excellence.</em>', view: 'Lihat tanggung jawab',
        items: [
          { period: '2019 — SEKARANG', summary: 'Menangani operasi server, layanan messaging, serta operasi cloud dalam lingkungan managed services.', details: ['Operasi Windows Server: Active Directory, GPO, tuning, dan PowerShell script.', 'Layanan E-mail / SMTP: Exchange, Linux Zimbra Server, dan Fortimail Gateway.', 'Operasi project AWS: EC2, S3, VPN, VPC, RDS, serta rekomendasi berdasarkan security dan operational excellence.'] },
          { period: '2018 — 2019 · 1 TAHUN', summary: 'Mengerjakan proyek Microsoft untuk hybrid messaging, directory services, dan disaster recovery.', details: ['Setup konfigurasi hybrid Exchange On-Premise dan Office 365.', 'Migrasi Active Directory.', 'Implementasi Disaster Recovery Center ke Microsoft Azure.', 'Membuat dan membantu report, scope of work, serta timeline reporting.'] },
          { period: '2018 · 6 BULAN', summary: 'Melakukan monitoring lingkungan virtualisasi dan mendukung operasi infrastruktur cloud.', details: ['Monitoring virtualization berbasis VMware.', 'Mendukung visibilitas dan operasional lingkungan virtual.'] },
          { period: '2017 · 6 BULAN', summary: 'Memberikan dukungan pelanggan untuk kebutuhan DNS dan web hosting.', details: ['Customer support service untuk DNS dan web hosting.', 'Membantu troubleshooting kebutuhan hosting pelanggan.'] }
        ]
      },
      projects: {
        label: '04 / KARYA PILIHAN', title: 'Sistem, platform, dan <em>hasil kerja.</em>', search: 'Cari proyek...', all: 'Semua proyek', open: 'Buka detail proyek ↗', noMatch: 'Tidak ada proyek yang cocok.', tryAgain: 'Coba kata kunci atau kategori lain.',
        items: [
          { overview: 'Operasi cloud untuk workload enterprise dalam lingkungan managed services.', problem: 'Menjaga operasi layanan cloud tetap terkelola, aman, dan siap mendukung kebutuhan bisnis.', solution: 'Menangani operasi EC2, S3, VPN, VPC, dan RDS serta menyusun rekomendasi berdasarkan security dan operational excellence.', outcome: 'Kontribusi dan dampak kuantitatif belum dicantumkan karena belum ada metrik terverifikasi di CV.' },
          { overview: 'Modernisasi environment Microsoft untuk hybrid messaging dan disaster recovery.', problem: 'Menghubungkan kebutuhan Exchange On-Premise, Office 365, Active Directory, dan pemulihan bencana.', solution: 'Setup hybrid Exchange, migrasi Active Directory, dan implementasi Disaster Recovery Center ke Microsoft Azure.', outcome: 'Rincian hasil terukur belum dicantumkan karena belum ada metrik terverifikasi di CV.' },
          { overview: 'Operasi layanan email, gateway, DNS, dan web hosting pada lingkungan enterprise.', problem: 'Menjaga layanan komunikasi dan hosting dapat diakses serta ditangani secara operasional.', solution: 'Mengelola Exchange, Linux Zimbra Server, Fortimail Gateway, DNS, dan web hosting sesuai peran di berbagai project.', outcome: 'Rincian hasil terukur belum dicantumkan karena belum ada metrik terverifikasi di CV.' }
        ]
      },
      architecture: {
        label: '05 / LAB ARSITEKTUR', title: 'Bagaimana setiap bagian terhubung agar sistem tetap <em>tangguh.</em>', aside: 'Jelajahi gambaran sederhana berdasarkan lingkungan yang terdokumentasi dalam pengalaman saya.', tabs: { aws: 'Operasi AWS', hybrid: 'Microsoft Hybrid', messaging: 'Alur Messaging' }, map: 'PETA INTERAKTIF', selectNode: 'Pilih komponen untuk melihat peran dan konteks operasionalnya.',
        items: {
          aws: { title: 'Lingkungan AWS managed services', description: 'Gambaran sederhana layanan AWS yang disebutkan dalam pengalaman managed services.', nodes: { users: { label: 'User / Aplikasi', detail: 'Workload bisnis dan user yang menggunakan layanan hosted.' }, vpc: { label: 'VPC / VPN', detail: 'Batas jaringan dan lapisan konektivitas lingkungan cloud.' }, compute: { label: 'EC2', detail: 'Lapisan komputasi untuk workload yang dikelola di AWS.' }, storage: { label: 'S3', detail: 'Layanan object storage yang termasuk dalam scope operasi AWS.' }, data: { label: 'RDS', detail: 'Layanan database managed yang termasuk dalam scope project.' } } },
          hybrid: { title: 'Exchange hybrid & Azure DR', description: 'Gambaran sederhana hubungan environment Microsoft dan disaster recovery.', nodes: { ad: { label: 'Active Directory', detail: 'Fondasi directory yang dimigrasikan dan dikelola dalam project Microsoft.' }, exchange: { label: 'Exchange On-Prem', detail: 'Environment messaging on-premise yang terhubung melalui konfigurasi hybrid.' }, o365: { label: 'Office 365', detail: 'Tujuan messaging cloud dalam konfigurasi hybrid yang terdokumentasi.' }, azure: { label: 'Azure DRC', detail: 'Disaster Recovery Center yang diimplementasikan ke Microsoft Azure.' }, recovery: { label: 'Alur recovery', detail: 'Jalur recovery untuk perencanaan continuity.' } } },
          messaging: { title: 'Layanan messaging enterprise', description: 'Alur operasional sederhana untuk layanan messaging dan gateway dalam CV.', nodes: { sender: { label: 'Pengirim', detail: 'Pengirim email atau client yang masuk ke alur layanan.' }, gateway: { label: 'Fortimail', detail: 'Mail gateway yang termasuk dalam scope operasi layanan.' }, exchange: { label: 'Exchange', detail: 'Layanan messaging Microsoft.' }, zimbra: { label: 'Linux Zimbra', detail: 'Layanan email berbasis Linux yang disebutkan dalam CV.' }, dns: { label: 'DNS / Hosting', detail: 'Lapisan support DNS dan web hosting.' } } }
        }
      },
      credentials: { label: '06 / PENDIDIKAN & SERTIFIKASI', title: 'Fondasi di balik <em>praktik.</em>', education: 'Pendidikan', certifications: 'Sertifikasi', issued: 'Diterbitkan', expires: 'Berlaku hingga', verify: 'Verifikasi credential ↗', pending: 'Link verifikasi belum tersedia', noCert: 'Belum ada sertifikasi yang ditambahkan.', addCert: 'Tambahkan hanya credential yang benar-benar dimiliki di data.js.' },
      achievements: { label: '07 / DAMPAK TERVERIFIKASI', title: 'Bukti, bukan sekadar janji.', aside: 'Metrik hanya ditampilkan jika terverifikasi. Tambahkan hasil terukur di <code>data.js</code> jika sudah tersedia.', noMetrics: 'Belum ada metrik terverifikasi yang ditambahkan.', addMetrics: 'Tambahkan angka availability, server, otomasi, monitoring, atau optimasi biaya hanya jika tersedia dan dapat diverifikasi.' },
      contact: { label: '08 / MARI TERHUBUNG', title: 'Siap membuat infrastruktur <em>bekerja lebih baik?</em>', description: 'Punya tantangan infrastruktur atau peluang untuk didiskusikan? Mari terhubung.', formTitle: 'FORM KONTAK', formNote: 'fallback mailto · tanpa backend', name: 'Nama', email: 'Email', subject: 'Subjek', message: 'Pesan', submit: 'Buka aplikasi email <span>↗</span>', disclaimer: 'Form ini akan membuka aplikasi email Anda; pesan tidak disimpan oleh website.', invalid: 'Mohon lengkapi nama, email, dan pesan dengan format yang benar.', opening: 'Membuka aplikasi email Anda.', linkedInMissing: 'LinkedIn — belum dikonfigurasi', githubMissing: 'GitHub — belum dikonfigurasi', backTop: 'Kembali ke atas ↑' },
      ui: { viewResponsibilities: 'Lihat tanggung jawab', all: 'Semua', noProjects: 'Tidak ada proyek yang cocok.', tryAgain: 'Coba kata kunci atau kategori lain.', overview: 'Ringkasan', problem: 'Masalah bisnis', solution: 'Solusi teknis', outcome: 'Hasil terverifikasi', stack: 'Technology stack', notConfigured: 'Belum dikonfigurasi' }
    }
  }
};
