const oscQuizData = {

    title: "Operating System Concepts - Lectures 1-8",

    questions: [

        {

            lecture: "Lecture 1",

            question: "Wat is de rol van het besturingssysteem in de metafoor van een gezinssituatie?",

            options: [

                "Het besturingssysteem is de vader die het werk uitvoert",

                "Het besturingssysteem is de moeder die verzoeken beheert en prioriteiten bepaalt",

                "Het besturingssysteem is het kind dat verzoeken doet",

                "Het besturingssysteem is de hardware"

            ],

            correctAnswer: 1,

            explanationCorrect: "Correct! Het besturingssysteem wordt vergeleken met de moeder die de verzoeken van de kinderen (applicaties) beheert, prioriteiten bepaalt en de hardware (vader) aanstuurt.",

            explanationIncorrect: "In de metafoor is het besturingssysteem de moeder die de verzoeken beheert en beslissingen neemt over prioriteiten, niet de uitvoerende hardware (vader)."

        },

        {

            lecture: "Lecture 1",

            question: "Wat is het belangrijkste voordeel van een compiler ten opzichte van een interpreter?",

            options: [

                "Het analyseren van de broncode gaat sneller",

                "Het is geheugenefficiënter",

                "De uiteindelijke uitvoering van de code is sneller",

                "Er wordt geen objectcode gegenereerd"

            ],

            correctAnswer: 2,

            explanationCorrect: "Een compiler vertaalt het volledige programma naar machinecode, waardoor uitvoering sneller is dan bij een interpreter.",

            explanationIncorrect: "Het voordeel van een compiler is de snellere uitvoering; interpreters vertalen regel voor regel en zijn trager."

        },

        {

            lecture: "Lecture 1",

            question: "Welk geheugensegment groeit van een hoog adres naar beneden?",

            options: [

                "Heap",

                "Data Segment",

                "Stack",

                "Text/Code Segment"

            ],

            correctAnswer: 2,

            explanationCorrect: "De stack groeit van hoog naar laag en bevat aanroepframes en lokale variabelen.",

            explanationIncorrect: "De heap groeit omhoog; de stack groeit omlaag en bevat aanroepframes."

        },

        {

            lecture: "Lecture 1",

            question: "Wat is de 'Von Neumann bottleneck'?",

            options: [

                "Beperking in data-overdracht tussen CPU en geheugen",

                "Beperking in RAM-grootte",

                "Beperking in aantal cores",

                "Beperking in I/O-snelheid"

            ],

            correctAnswer: 0,

            explanationCorrect: "De bottleneck is de bandbreedte tussen CPU en geheugen in de Von Neumann-architectuur.",

            explanationIncorrect: "Het gaat om data-overdracht tussen CPU en geheugen, niet om RAM-grootte of core-aantal."

        },

        {

            lecture: "Lecture 1",

            question: "In welke 'ring' draait de kernel van het besturingssysteem?",

            options: [

                "Ring 1",

                "Ring 2",

                "Ring 3 (User Mode)",

                "Ring 0 (Kernel Mode)"

            ],

            correctAnswer: 3,

            explanationCorrect: "De kernel draait in Ring 0 met volledige hardwaretoegang.",

            explanationIncorrect: "De kernel draait in Ring 0; Ring 3 is voor gebruikersapplicaties."

        },

        {

            lecture: "Lecture 1",

            question: "Wat gebeurt er bij een System Call?",

            options: [

                "De processor blijft in User Mode",

                "De processor schakelt tijdelijk naar Kernel Mode via een 'trap'",

                "De applicatie krijgt direct toegang tot de hardware",

                "Het programma crasht"

            ],

            correctAnswer: 1,

            explanationCorrect: "Bij een System Call schakelt de CPU naar Kernel Mode om veilig een OS-taak uit te voeren en keert daarna terug.",

            explanationIncorrect: "System Calls geven geen directe hardwaretoegang vanuit User Mode; ze wisselen kort naar Kernel Mode."

        },

        {

            lecture: "Lecture 1",

            question: "Wat is het verschil tussen Full Virtualization en Paravirtualization?",

            options: [

                "Bij Paravirtualization weet het gast-OS dat het gevirtualiseerd is",

                "Bij Full Virtualization weet het gast-OS dat het gevirtualiseerd is",

                "Er is geen verschil",

                "Paravirtualization is langzamer"

            ],

            correctAnswer: 0,

            explanationCorrect: "Paravirtualization gebruikt aangepaste gasten en hypercalls; full virt emuleert hardware zodat het gast-OS niets weet.",

            explanationIncorrect: "Paravirtualization is aangepast en 'bewust'; full virt is onbewust en hardware-emulerend."

        },

        {

            lecture: "Lecture 1",

            question: "Wat is een belangrijk voordeel van containers t.o.v. virtuele machines?",

            options: [

                "Containers hebben elk een eigen kernel",

                "Containers zijn zwaarder en trager",

                "Containers delen de host-kernel en zijn lichter",

                "Containers draaien alleen op Linux"

            ],

            correctAnswer: 2,

            explanationCorrect: "Containers delen de host-kernel, bevatten alleen app+bibliotheken en zijn daardoor licht en snel.",

            explanationIncorrect: "VM's hebben elk een volledige kernel; containers delen de host-kernel en zijn lichter."

        },

        {

            lecture: "Lecture 1",

            question: "Wie wordt beschouwd als de eerste computerprogrammeur?",

            options: [

                "Charles Babbage",

                "Alan Turing",

                "Ada Lovelace",

                "Dennis Ritchie"

            ],

            correctAnswer: 2,

            explanationCorrect: "Ada Lovelace schreef programma's voor Babbage's machine en geldt als de eerste programmeur.",

            explanationIncorrect: "Babbage ontwierp de machine, Lovelace schreef de programma's."

        },

        {

            lecture: "Lecture 1",

            question: "Wat stelt Moore's Law?",

            options: [

                "Computers worden elke twee jaar twee keer zo groot",

                "Het aantal transistoren op een chip verdubbelt elke twee jaar",

                "De snelheid van RAM verdubbelt elk jaar",

                "Software wordt elk jaar complexer"

            ],

            correctAnswer: 1,

            explanationCorrect: "Het aantal transistoren op een chip verdubbelt ongeveer elke twee jaar.",

            explanationIncorrect: "Moore's Law gaat om transistorverdubbeling, niet om grootte of RAM-snelheid."

        },

        {

            lecture: "Lecture 1",

            question: "Welke programmeertaal werd ontwikkeld door Dennis Ritchie?",

            options: [

                "Python",

                "Java",

                "C",

                "Pascal"

            ],

            correctAnswer: 2,

            explanationCorrect: "Dennis Ritchie ontwikkelde C bij Bell Labs, waar ook Unix ontstond.",

            explanationIncorrect: "Ritchie is verantwoordelijk voor C, niet voor Python of Java."

        },

        {

            lecture: "Lecture 1",

            question: "Wat is een belangrijk principe van de Unix filosofie?",

            options: [

                "Elk programma moet alles kunnen doen",

                "Laat elk programma één ding heel goed doen",

                "Gebruik binaire data voor communicatie",

                "Maak programma's zo complex mogelijk"

            ],

            correctAnswer: 1,

            explanationCorrect: "Elk programma doet één ding heel goed; combineer via tekststromen.",

            explanationIncorrect: "Unix benadrukt eenvoud en modulariteit, niet all-in-one complexiteit."

        },

        {

            lecture: "Lecture 1",

            question: "Wat is POSIX?",

            options: [

                "Een nieuwe programmeertaal",

                "Een standaard voor compatibiliteit tussen verschillende OS'en",

                "Een type hardware",

                "Een Linux distributie"

            ],

            correctAnswer: 1,

            explanationCorrect: "POSIX definieert gestandaardiseerde API's voor compatibiliteit tussen OS'en.",

            explanationIncorrect: "POSIX is een standaard, geen taal of hardware."

        },

        {

            lecture: "Lecture 1",

            question: "Hoeveel tekens kan ASCII representeren?",

            options: [

                "256",

                "128",

                "1024",

                "64"

            ],

            correctAnswer: 1,

            explanationCorrect: "ASCII gebruikt 7 bits en representeert 128 tekens.",

            explanationIncorrect: "Extended ASCII gebruikt 8 bits (256); standaard ASCII is 7 bits (128)."

        },

        {

            lecture: "Lecture 2",

            question: "Hoe geeft UTF-8 aan hoeveel bytes een karakter gebruikt?",

            options: [

                "Door de kleur van de tekst",

                "Via de eerste byte: het patroon geeft het aantal bytes aan",

                "UTF-8 gebruikt altijd 2 bytes",

                "Via een aparte header"

            ],

            correctAnswer: 1,

            explanationCorrect: "De eerste byte geeft de lengte aan; vervolgbytes beginnen met 10xxxxxx.",

            explanationIncorrect: "UTF-8 is variabel; ASCII is 1 byte, andere tekens 2-4 bytes."

        },

        {

            lecture: "Lecture 1",

            question: "Wat is de PCB (Process Control Block)?",

            options: [

                "Een type hardware component",

                "Het 'paspoort' van een proces met alle beheerinformatie",

                "Een programmeer compiler",

                "Een type geheugen"

            ],

            correctAnswer: 1,

            explanationCorrect: "De PCB bevat alle info om een proces te beheren (open files, registers, geheugen, PID, scheduling).",

            explanationIncorrect: "De PCB is een datastructuur, geen hardware of tool; essentieel voor scheduling."

        },

        {

            lecture: "Lecture 1",

            question: "Wat is het verschil tussen Top Half en Bottom Half in de kernel?",

            options: [

                "Top Half synchroon (system calls), Bottom Half asynchroon (interrupts)",

                "Top Half is voor gebruikers, Bottom Half is voor admins",

                "Top Half draait in User Mode, Bottom Half in Kernel Mode",

                "Er is geen verschil"

            ],

            correctAnswer: 0,

            explanationCorrect: "Top Half handelt system calls synchroon af; Bottom Half reageert snel op interrupts en wacht niet.",

            explanationIncorrect: "Bottom Half is voor hardware-interrupts; Top Half voor software-verzoeken."

        },

        {

            lecture: "Lecture 1",

            question: "Wat is een belangrijk voordeel van een Monolithic Kernel?",

            options: [

                "Betere stabiliteit bij driver crashes",

                "Snelheid door directe communicatie tussen componenten",

                "Drivers draaien in User Mode",

                "Minder geheugengebruik"

            ],

            correctAnswer: 1,

            explanationCorrect: "In monolithic kernels draaien componenten in Ring 0 en communiceren direct (snel).",

            explanationIncorrect: "Monolithic is snel; nadeel is dat crashes systeemwijd kunnen zijn."

        },

        {

            lecture: "Lecture 1",

            question: "Waarom is een Microkernel stabieler maar trager dan een Monolithic Kernel?",

            options: [

                "Omdat het minder functies heeft",

                "Drivers in User Mode (stabiel) maar veel context switches (traag)",

                "Alleen op oude computers",

                "Kan geen interrupts afhandelen"

            ],

            correctAnswer: 1,

            explanationCorrect: "Microkernels isoleren crashes, maar communicatie vereist wisselen tussen User en Kernel Mode met overhead.",

            explanationIncorrect: "Stabiliteit komt door isolatie; traagheid door message passing en context switches."

        },

        {

            lecture: "Lecture 2",

            question: "Wat doet partitioneren van een schijf?",

            options: [

                "Het maakt bestanden kleiner",

                "Het verdeelt opslag in logische delen met eigen adrestabellen",

                "Het installeert automatisch een bestandssysteem",

                "Het schakelt journaling uit"

            ],

            correctAnswer: 1,

            explanationCorrect: "Partitioneren creëert logische delen met eigen adrestabellen voor veiligheid en flexibiliteit.",

            explanationIncorrect: "Formatteren plaatst het bestandssysteem; partitioneren verdeelt de schijf."

        },

        {

            lecture: "Lecture 2",

            question: "Welke combinatie is correct: BIOS/MBR versus UEFI/GPT?",

            options: [

                "BIOS hoort bij GPT",

                "UEFI hoort bij MBR",

                "BIOS hoort bij MBR, UEFI bij GPT",

                "BIOS en UEFI gebruiken geen partities"

            ],

            correctAnswer: 2,

            explanationCorrect: "BIOS gebruikt MBR; UEFI gebruikt GPT met meer partities en redundantie.",

            explanationIncorrect: "MBR/BIOS is klassiek; GPT/UEFI is modern en robuust."

        },

        {

            lecture: "Lecture 2",

            question: "Wat is journaling in bestandssystemen?",

            options: [

                "Compressie van bestanden",

                "Een log van geplande wijzigingen om herstel na crash te bieden",

                "Een index van bestandsnamen",

                "Een backupfunctie"

            ],

            correctAnswer: 1,

            explanationCorrect: "Journaling logt geplande wijzigingen zodat herstel na uitval mogelijk is.",

            explanationIncorrect: "Geen compressie of backup; het is een wijzigingslog voor betrouwbaarheid."

        },

        {

            lecture: "Lecture 2",

            question: "Wat is een inode?",

            options: [

                "De bestandsnaam",

                "Metadata+locaties zonder naam",

                "Een partitie bootrecord",

                "Een compressie-algoritme"

            ],

            correctAnswer: 1,

            explanationCorrect: "Inode bevat metadata en bloklocaties; de naam staat in directory entries.",

            explanationIncorrect: "De naam hoort niet bij de inode maar bij de directory."

        },

        {

            lecture: "Lecture 2",

            question: "Verschil hard link vs symlink?",

            options: [

                "Geen verschil",

                "Hard link naar inode; symlink naar pad",

                "Symlink naar inode; hard link naar pad",

                "Hard link breekt als origineel weg is; symlink niet"

            ],

            correctAnswer: 1,

            explanationCorrect: "Hard link deelt inode; symlink verwijst naar pad en kan breken.",

            explanationIncorrect: "Symlinks zijn padverwijzingen; hard links delen dezelfde inode."

        },

        {

            lecture: "Lecture 2",

            question: "Wat betekent umask 022 voor mappen?",

            options: [

                "777",

                "755",

                "700",

                "644"

            ],

            correctAnswer: 1,

            explanationCorrect: "777 minus 022 → 755 (rwxr-xr-x).",

            explanationIncorrect: "Umask trekt rechten af van de basis; voor directories 777 - 022 = 755."

        },

        {

            lecture: "Lecture 3",

            question: "Programma vs proces?",

            options: [

                "Geen verschil",

                "Programma is passief op schijf; proces is actieve uitvoering",

                "Proces is een bestand; programma draait in geheugen",

                "Programma heeft altijd meerdere threads"

            ],

            correctAnswer: 1,

            explanationCorrect: "Programma is passief; proces is actief met staat in geheugen.",

            explanationIncorrect: "Proces = uitvoering; programma = bestand."

        },

        {

            lecture: "Lecture 3",

            question: "Wat doet fork() in Unix?",

            options: [

                "Laadt een kernelmodule",

                "Dupliceert het proces; parent krijgt PID, child krijgt 0",

                "Verwijdert een proces",

                "Start een thread"

            ],

            correctAnswer: 1,

            explanationCorrect: "fork() maakt een child-proces; exec() vervangt daarna vaak het geheugen.",

            explanationIncorrect: "fork() creëert een child; parent krijgt PID, child krijgt 0."

        },

        {

            lecture: "Lecture 3",

            question: "Wat delen threads binnen één proces?",

            options: [

                "Eigen Code en Data",

                "Code, Data en Bestanden; eigen Stack/Registers",

                "Niets",

                "Alleen de Stack"

            ],

            correctAnswer: 1,

            explanationCorrect: "Threads delen resources en hebben eigen uitvoeringscontext.",

            explanationIncorrect: "Ze delen Code/Data/Bestanden en hebben eigen Stack/Registers."

        },

        {

            lecture: "Lecture 3",

            question: "Welke volgorde beschrijft het bootproces?",

            options: [

                "Kernel → BIOS → GRUB → Systemd",

                "BIOS/UEFI → MBR/GRUB → Kernel → initrd → PID 1 → services",

                "Systemd → Kernel → BIOS → GRUB",

                "GRUB → BIOS → initrd → services"

            ],

            correctAnswer: 1,

            explanationCorrect: "Firmware start, bootloader laadt kernel+initrd, systemd (PID 1) start services.",

            explanationIncorrect: "Eerst firmware, dan bootloader, dan kernel+initrd, daarna services via systemd."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is het primaire doel van virtualisatie?",

            options: [

                "Hardware sneller maken",

                "Meerdere besturingssystemen tegelijk laten draaien op één fysieke server (consolidatie)",

                "Het internet sneller maken",

                "Servers goedkoper maken"

            ],

            correctAnswer: 1,

            explanationCorrect: "Virtualisatie stelt je in staat meerdere VM's op één fysieke server te draaien, wat resources bespaard en flexibiliteit biedt.",

            explanationIncorrect: "Het doel is consolidatie en efficiënt gebruik van hardware, niet zozeer snelheid of kosten direct."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is het verschil tussen een Type 1 (Bare Metal) en Type 2 (Hosted) Hypervisor?",

            options: [

                "Type 1 draait op de hardware, Type 2 draait in een Host-OS (bv. VirtualBox op Windows)",

                "Type 2 is sneller dan Type 1",

                "Type 1 is alleen voor laptops, Type 2 voor servers",

                "Er is geen verschil"

            ],

            correctAnswer: 0,

            explanationCorrect: "Type 1 (vmware ESXi, Hyper-V) draait direct op hardware; Type 2 (VirtualBox, VMware Player) draait als applicatie in een Host-OS.",

            explanationIncorrect: "Type 1 is Bare Metal (direct op hardware); Type 2 is Hosted (in een Host-OS)."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is vMotion in VMware?",

            options: [

                "Een manier om VM-bestanden te comprimeren",

                "Het verplaatsen van een draaiende VM van één fysieke host naar een ander zonder downtime",

                "Een beveiligingsfeature",

                "Een manier om RAM-geheugen te vergroten"

            ],

            correctAnswer: 1,

            explanationCorrect: "vMotion stelt je in staat een live VM te verplaatsen tussen servers zonder onderbrekingen.",

            explanationIncorrect: "vMotion is live migratie van VM's, niet compressie, beveiliging of RAM-verandering."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is het doel van memory overcommitment in virtualisatie?",

            options: [

                "Meer RAM per VM",

                "Verspilling van RAM voorkomen door meer VM-geheugen toe te wijzen dan fysiek beschikbaar",

                "Snellere processoren",

                "Minder schijfruimte nodig"

            ],

            correctAnswer: 1,

            explanationCorrect: "Overcommitment maakt efficiënt gebruik van RAM mogelijk; de hypervisor beheerst beschikbare RAM tussen VM's.",

            explanationIncorrect: "Het gaat om efficiënt geheugenbeheer, niet om meer RAM direct toe te wijzen."

        },

        {

            lecture: "Lecture 1",

            question: "Wat is een logische poort in binaire logica?",

            options: [

                "Een netwerkpoort",

                "AND, OR, NOT - circuits die wiskundige bewerkingen uitvoeren",

                "Een soort RAM-geheugen",

                "Een type processor"

            ],

            correctAnswer: 1,

            explanationCorrect: "AND, OR, NOT zijn logische poorten die wiskundige operaties doen op binaire input.",

            explanationIncorrect: "Logische poorten zijn hardware-circuits, niet netwerk-gerelateerd."

        },

        {

            lecture: "Lecture 1",

            question: "Wat is het verschil tussen monolithic en microkernel architectuur?",

            options: [

                "Monolithic is kleiner",

                "Monolithic: alles in Ring 0 (snel maar minder stabiel); Microkernel: drivers in User Mode (stabieler maar trager)",

                "Microkernel kan geen hardware aansturen",

                "Geen verschil"

            ],

            correctAnswer: 1,

            explanationCorrect: "Monolithic is sneller; microkernel isstabieler door isolatie maar heeft meer context switches.",

            explanationIncorrect: "Stabiliteit vs snelheid tradeoff; monolithic draait alles in Ring 0."

        },

        {

            lecture: "Lecture 2",

            question: "Welke schijfpartitietabel hoort bij UEFI?",

            options: [

                "MBR",

                "FAT32",

                "GPT",

                "Ext4"

            ],

            correctAnswer: 2,

            explanationCorrect: "GPT ondersteunt UEFI, meer partities en grote schijven; MBR hoort bij BIOS.",

            explanationIncorrect: "GPT is modern (UEFI); MBR is klassiek (BIOS)."

        },

        {

            lecture: "Lecture 2",

            question: "Wat is FAT32?",

            options: [

                "Linux bestandssysteem",

                "Universeel bestandssysteem maar max 4GB bestandsgrootte",

                "Windows-only systeem met encryptie",

                "Type harde schijf"

            ],

            correctAnswer: 1,

            explanationCorrect: "FAT32 is universeel compatibel maar heeft 4GB bestandslimiet en geen permissies.",

            explanationIncorrect: "FAT32 werkt overal maar heeft beperkingen; NTFS is moderner."

        },

        {

            lecture: "Lecture 2",

            question: "Wat is Ext4?",

            options: [

                "Een Windows bestandssysteem",

                "Linux bestandssysteem met journaling",

                "Een type partitie",

                "Een compressie-algoritme"

            ],

            correctAnswer: 1,

            explanationCorrect: "Ext4 is snel, stabiel en ondersteunt journaling voor Linux.",

            explanationIncorrect: "Ext4 is Linux-native, niet voor Windows."

        },

        {

            lecture: "Lecture 2",

            question: "Wat is SUID (Set User ID)?",

            options: [

                "Een soort gebruikersgroep",

                "De mogelijkheid om zonder wachtwoord in te loggen",

                "Speciale permissie waarmee een programma als eigenaar draait",

                "Een beveiligingsrisico dat nooit gebruikt mag worden"

            ],

            correctAnswer: 2,

            explanationCorrect: "SUID laat een programma draaien met rechten van de eigenaar (bv. sudo).",

            explanationIncorrect: "SUID staat toe dat programma's hoger draaien dan de aanroeper."

        },

        {

            lecture: "Lecture 2",

            question: "Wat is de Sticky Bit?",

            options: [

                "Een versleuteling voor bestanden",

                "Speciale permissie waardoor alleen de eigenaar een bestand kan verwijderen",

                "Een backup-feature",

                "Een type link"

            ],

            correctAnswer: 1,

            explanationCorrect: "Sticky Bit (bijv. /tmp) zorgt dat alleen de eigenaar of root kan verwijderen.",

            explanationIncorrect: "Nuttig voor gedeelde directories; alleen de eigenaar mag verwijderen."

        },

        {

            lecture: "Lecture 2",

            question: "Wat is ACL (Access Control List)?",

            options: [

                "Een alternatief voor UGO permissies",

                "Fijnmazige permissies buiten UGO; herkenbaar aan +",

                "Een soort firewall",

                "Een bestandstype"

            ],

            correctAnswer: 1,

            explanationCorrect: "ACL geeft granulairere controle met getfacl/setfacl.",

            explanationIncorrect: "ACL buiten standaard UGO; gebruik getfacl en setfacl."

        },

        {

            lecture: "Lecture 2",

            question: "Wat bevat /etc in Linux?",

            options: [

                "Gebruikersbestanden",

                "Configuratiebestanden van het systeem",

                "Tijdelijke bestanden",

                "Apparaatbestanden"

            ],

            correctAnswer: 1,

            explanationCorrect: "/etc bevat config files; /home is voor gebruikers.",

            explanationIncorrect: "/etc is configuratie; /tmp is tijdelijk; /home is voor users."

        },

        {

            lecture: "Lecture 2",

            question: "Wat bevat /dev in Linux?",

            options: [

                "Applicaties",

                "Apparaatbestanden (karakter- en blok-apparaten)",

                "Gedeelde libraries",

                "Databestanden"

            ],

            correctAnswer: 1,

            explanationCorrect: "/dev bevat device files voor hardware-interactie.",

            explanationIncorrect: "/dev = device files; /lib = libraries."

        },

        {

            lecture: "Lecture 3",

            question: "Wat doet exec() in Unix?",

            options: [

                "Voert een bestand uit",

                "Vervangt het geheugen van het huidge proces met een nieuw programma",

                "Maakt een backup",

                "Compileert code"

            ],

            correctAnswer: 1,

            explanationCorrect: "exec() vervangt het proces (zelf PID) met nieuw programma; fork() maakt eerst child.",

            explanationIncorrect: "exec() transformeert het proces; fork() maakt child."

        },

        {

            lecture: "Lecture 3",

            question: "Wat doet wait() in Unix?",

            options: [

                "Pauzeert het systeem",

                "Parent wacht tot child-proces klaar is",

                "Wacht op I/O",

                "Vergrendelt een bestand"

            ],

            correctAnswer: 1,

            explanationCorrect: "wait() laat parent wachten en voorkomt zombie-processen.",

            explanationIncorrect: "wait() is kritiek voor parent-child synchronisatie."

        },

        {

            lecture: "Lecture 3",

            question: "Wat is een Zombie proces?",

            options: [

                "Een proces dat crasht",

                "Parent voerde geen wait() uit; kind blijft in PCB-tabel",

                "Een daemon dat nog draait",

                "Een proces in User Mode"

            ],

            correctAnswer: 1,

            explanationCorrect: "Zombie: child termineert maar parent roept wait() niet aan; entry blijft in tabel.",

            explanationIncorrect: "Zombie ontstaat zonder wait(); init/systemd kunnen orphans adopteren."

        },

        {

            lecture: "Lecture 3",

            question: "Wat is een Orphan proces?",

            options: [

                "Hetzelfde als zombie",

                "Parent is beëindigd; kind wordt geadopteerd door init/systemd",

                "Een proces zonder permissions",

                "Een thread"

            ],

            correctAnswer: 1,

            explanationCorrect: "Orphan: parent weg; init/systemd (PID 1) neemt het over.",

            explanationIncorrect: "Orphan ≠ Zombie; parent weg vs kind niet afgehaald."

        },

        {

            lecture: "Lecture 3",

            question: "Wat zijn procestoestanden?",

            options: [

                "New, Ready, Running, Waiting, Terminated",

                "Active en Inactive",

                "User en Kernel",

                "Parent en Child"

            ],

            correctAnswer: 0,

            explanationCorrect: "New → Ready → Running → Waiting → Terminated met Dispatch/Interrupt/I/O transities.",

            explanationIncorrect: "Vijf klassieke toestanden; transities via dispatcher en I/O.",

        },

        {

            lecture: "Lecture 3",

            question: "Wat is Context Switching?",

            options: [

                "Het veranderen van bestandspermissies",

                "CPU slaat staat van proces A (PCB) op, laadt proces B",

                "Een thread wisselen naar een ander",

                "Een netwerk-operatie"

            ],

            correctAnswer: 1,

            explanationCorrect: "CPU sparen/herstellen PCB's; overhead maar nodig voor multitasking.",

            explanationIncorrect: "Context switch is essential voor scheduling; kost CPU-tijd zonder werk."

        },

        {

            lecture: "Lecture 3",

            question: "Wat is een Daemon?",

            options: [

                "Een GUI-applicatie",

                "Een achtergrondproces (bijv. sshd, systemd)",

                "Een soort bestandssysteem",

                "Een kernelmodule"

            ],

            correctAnswer: 1,

            explanationCorrect: "Daemons draaien op de achtergrond zonder user-interactie.",

            explanationIncorrect: "Daemons zijn services; systemctl beheert ze."

        },

        {

            lecture: "Lecture 3",

            question: "Welke systemctl commando's zijn belangrijk?",

            options: [

                "start/stop/delete/remove",

                "start/stop/restart/enable/disable",

                "run/pause/resume/kill",

                "open/close/reload/reset"

            ],

            correctAnswer: 1,

            explanationCorrect: "start, stop, restart, enable, disable zijn de kerncommando's.",

            explanationIncorrect: "systemctl is de manager van systemd services."

        },

        {

            lecture: "Lecture 3",

            question: "Waar staan user services in Linux?",

            options: [

                "/etc/systemd/system/",

                "~/.config/systemd/user/",

                "/lib/systemd/",

                "/usr/local/"

            ],

            correctAnswer: 1,

            explanationCorrect: "User services in ~/.config/systemd/user/; system services in /etc/systemd/system/.",

            explanationIncorrect: "User services thuismap; system services in /etc."

        },

        {

            lecture: "Lecture 2",

            question: "Wat is tar in Linux archivering?",

            options: [

                "Een compressie-algoritme",

                "Een bestandstype",

                "Commando om mappen in te pakken/uit te pakken",

                "Een type schijf"

            ],

            correctAnswer: 2,

            explanationCorrect: "tar -czvf voor inpakken; -xzvf voor uitpakken.",

            explanationIncorrect: "tar is archiveringstool; gzip comprimeren."

        },

        {

            lecture: "Lecture 4",

            question: "Wat doet Binary Translation in CPU-virtualisatie?",

            options: [

                "Zet code naar hardware-niveau",

                "Hypervisor herschrijft 'gevaarlijke' guest-instructies op-the-fly",

                "Maakt code sneller",

                "Een soort compiler"

            ],

            correctAnswer: 1,

            explanationCorrect: "Binary Translation: on-the-fly rewrite van privileged instructies (traag).",

            explanationIncorrect: "Binary Translation is oud; Hardware Assisted is moderner (VT-x/AMD-V)."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is Hardware Assisted virtualisatie (VT-x / AMD-V)?",

            options: [

                "CPU-fabrikanten voegden Root Mode (Ring -1) toe",

                "Extra hardware-chips in VM's",

                "Hypervisor in firmware",

                "Geen verschil met Binary Translation"

            ],

            correctAnswer: 0,

            explanationCorrect: "Root Mode (hypervisor), Non-Root Mode (VMs) = moderne, snelle virtualisatie.",

            explanationIncorrect: "VT-x/AMD-V is hardware-gesteund; sneller dan Binary Translation."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is Transparent Page Sharing in geheugen-virtualisatie?",

            options: [

                "Alle VM's delen dezelfde RAM",

                "Dezelfde geheugenblokken (bijv. OS-libraries) wijzen naar 1 kopie",

                "Geheugen wordt automatisch gecomprimeerd",

                "RAM wordt virtual gemaakt"

            ],

            correctAnswer: 1,

            explanationCorrect: "Deduplicatie: identieke pages wijzen naar 1 exemplaar (bv. 5 Windows-VM's).",

            explanationIncorrect: "Page Sharing dedupliceren geheugen; Ballooning geeft ongebruikt RAM terug."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is Ballooning in geheugen-virtualisatie?",

            options: [

                "RAM opblazen",

                "Driver reserveert nep-geheugen om ongebruikt RAM terug te geven",

                "Geheugencompressie",

                "Een backup-techniek"

            ],

            correctAnswer: 1,

            explanationCorrect: "Ballooning: hypervisor vraagt driver om 'op te blazen' (reserveren), geeft RAM vrij.",

            explanationIncorrect: "Ballooning regelt geheugendruk zonder downtime."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is .vmx in VMware?",

            options: [

                "De virtuele harde schijf",

                "Het configuratiebestand (CPU, RAM, netwerkkaart)",

                "BIOS-instellingen",

                "Een logbestand"

            ],

            correctAnswer: 1,

            explanationCorrect: ".vmx is de blauwdruk; bepaalt CPU count, RAM, device types.",

            explanationIncorrect: ".vmx = config; .vmdk = schijf; .nvram = BIOS; .log = logs."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is .vmdk in VMware?",

            options: [

                "Het configuratiebestand",

                "De virtuele harde schijf (data)",

                "BIOS-settings",

                "Snapshot-informatie"

            ],

            correctAnswer: 1,

            explanationCorrect: ".vmdk bevat de data van de VM-schijf.",

            explanationIncorrect: ".vmdk is de disk; .vmx is de config."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is vSwitch?",

            options: [

                "Een fysieke netwerkkaart",

                "Virtuele switch in hypervisor; verbindt vNIC's en uplink naar fysieke NIC",

                "Een soort VPN",

                "Een firewall"

            ],

            correctAnswer: 1,

            explanationCorrect: "vSwitch: als fysieke switch; vNIC's zijn VM's, uplink naar fysieke network.",

            explanationIncorrect: "vSwitch verbindt VM's; uplink naar echte network."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is Port Group in vSwitch?",

            options: [

                "Een VM",

                "Groepen van poorten voor verkeerscheiding (VLAN-achtig)",

                "Een soort link",

                "Een partition"

            ],

            correctAnswer: 1,

            explanationCorrect: "Port Groups scheiden verkeer (bv. 'Students' vs 'Teachers').",

            explanationIncorrect: "Port Groups = logische groepen op vSwitch; zoals VLAN's."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is een LUN in gedeelde opslag?",

            options: [

                "Een VM",

                "Een stuk opslag op SAN zichtbaar voor alle servers",

                "Een soort netwerk",

                "Een partitie op lokale schijf"

            ],

            correctAnswer: 1,

            explanationCorrect: "LUN = deel van SAN toegankelijk voor meerdere ESXi-hosts.",

            explanationIncorrect: "LUN = shared storage; DAS = lokaal per server."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is Storage vMotion?",

            options: [

                "VM naar ander netwerk verplaatsen",

                "Schijf-data verplaatsen van ene opslag naar ander (terwijl VM draait)",

                "Nieuwe opslag-driver installeren",

                "Een backup-systeem"

            ],

            correctAnswer: 1,

            explanationCorrect: "Storage vMotion verplaatst VMDK terwijl VM actief blijft.",

            explanationIncorrect: "Storage vMotion = schijf migratie; vMotion = CPU migratie."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is HA (High Availability) in VMware?",

            options: [

                "Geen downtime",

                "Fysieke server-crash? Andere server start VM's opnieuw (korte reboot)",

                "Real-time backup",

                "Automatische schijf-vervanging"

            ],

            correctAnswer: 1,

            explanationCorrect: "HA: server down? Cluster start VM's opnieuw (korte downtime voor reboot).",

            explanationIncorrect: "HA Ôëá FT; HA heeft reboot-downtime; FT geen."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is FT (Fault Tolerance) in VMware?",

            options: [

                "Hetzelfde als HA",

                "Schaduw-VM draait mee; indien crash, direct failover (0 downtime)",

                "Backup naar externe harde schijf",

                "Alleen voor databases"

            ],

            correctAnswer: 1,

            explanationCorrect: "FT: Shadow VM sync; zero downtime maar 2x resources.",

            explanationIncorrect: "FT Ôëá HA; FT = continuous protection, zeer duur."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is DRS (Distributed Resource Scheduler)?",

            options: [

                "Schijf-herstelservice",

                "Load Balancing: automatische VM-verplaatsing via vMotion als server overbelast",

                "Backup-automatisatie",

                "Monitoring-systeem"

            ],

            correctAnswer: 1,

            explanationCorrect: "DRS balanceert belasting; verplaatst VM's naar minder druk servers.",

            explanationIncorrect: "DRS = automated load balancing; niet voor backups."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is Nested Virtualization?",

            options: [

                "Twee VM's in één",

                "VMware Workstation → ESXi → test-VMs (Type 2 → Type 1 → Type 2)",

                "VM's op het internet",

                "Oude virtualisatie-techniek"

            ],

            correctAnswer: 1,

            explanationCorrect: "Nested: laptop (Host OS) ÔåÆ Workstation ÔåÆ ESXi ÔåÆ VM's.",

            explanationIncorrect: "Nested gebruikt voor labs; vereist VT-x/AMD-V in BIOS."

        },

        {

            lecture: "Lecture 2",

            question: "Hoeveel bits gebruikt Extended ASCII?",

            options: [

                "7 bits",

                "8 bits (256 tekens)",

                "16 bits",

                "32 bits"

            ],

            correctAnswer: 1,

            explanationCorrect: "Extended ASCII = 8 bits = 256 mogelijke tekens.",

            explanationIncorrect: "Standaard ASCII = 7 bits (128); Extended = 8 bits (256)."

        },

        {

            lecture: "Lecture 2",

            question: "Wat is UTF-16?",

            options: [

                "ASCII alternatief",

                "Fixed-width encoding (2-4 bytes)",

                "Alleen voor emoji's",

                "Deprecated standaard"

            ],

            correctAnswer: 1,

            explanationCorrect: "UTF-16 gebruikt 2-4 bytes; compact voor veel talen.",

            explanationIncorrect: "UTF-16 is vaste breedte; UTF-8 variabel."

        },

        {

            lecture: "Lecture 1",

            question: "Wat doet een Scheduler in het OS?",

            options: [

                "Plant events",

                "Beslist welk proces next CPU-time krijgt (via PCB & prioriteit)",

                "Maakt backups",

                "Beheert bestanden"

            ],

            correctAnswer: 1,

            explanationCorrect: "Scheduler kiest proces based on PCB data en scheduling algoritmes.",

            explanationIncorrect: "Scheduler = dispatcher; gebruikt PCB-informatie."

        },

        {

            lecture: "Lecture 5",

            question: "Waar staat CALMS voor in DevOps?",

            options: [

                "Culture, Automation, Lean, Measurement, Sharing",

                "Cloud, Agile, Lean, Monitoring, Security",

                "Culture, Agile, Legacy, Metrics, Support",

                "Code, Automation, Logging, Metrics, Security"

            ],

            correctAnswer: 0,

            explanationCorrect: "CALMS beschrijft de DevOps-pijlers: cultuur, automatisering, lean werken, meten en kennis delen.",

            explanationIncorrect: "CALMS staat voor Culture, Automation, Lean, Measurement, Sharing; niet alleen tooling of security."

        },

        {

            lecture: "Lecture 5",

            question: "Wat is het hoofddoel van DevOps in deze context?",

            options: [

                "Langzamere releases met meer handwerk",

                "Sneller en betrouwbaarder releasen via gedeelde verantwoordelijkheid en automatisering",

                "Meer servers kopen zonder procesaanpassing",

                "Alleen operations automatiseren zonder developers te betrekken"

            ],

            correctAnswer: 1,

            explanationCorrect: "DevOps verbindt dev en ops om sneller en consistenter te releasen door automatisering en korte feedbackloops.",

            explanationIncorrect: "Het doel is snelheid en betrouwbaarheid via samenwerking en automatisering, niet meer handwerk of alleen hardware."

        },

        {

            lecture: "Lecture 5",

            question: "Waarom commit je het .env-bestand niet in Laravel?",

            options: [

                "Het breekt de tests",

                "Het bevat secrets en omgevingsspecifieke configuratie; gebruik een secret manager of CI/CD variabelen",

                "Het maakt de app trager",

                "Het is alleen nodig voor Windows"

            ],

            correctAnswer: 1,

            explanationCorrect: ".env bevat gevoelige keys (APP_KEY, DB, mail). Bewaar ze via secrets/CI-variabelen en commit ze niet.",

            explanationIncorrect: ".env hoort niet in git vanwege secrets en per-omgeving verschillen; gebruik een secret manager of pipeline-variabelen."

        },

        {

            lecture: "Lecture 5",

            question: "Wat is de document root bij een Laravel deploy?",

            options: [

                "./",

                "storage/",

                "resources/",

                "public/"

            ],

            correctAnswer: 3,

            explanationCorrect: "Webserver (Nginx/Apache) moet naar public/ wijzen; daar staan index.php en assets-entry.",

            explanationIncorrect: "Alleen public/ is de juiste webroot; storage/ of resources/ mogen niet direct publiek zijn."

        },

        {

            lecture: "Lecture 5",

            question: "Waarom check je composer.lock in en gebruik je die in CI/CD?",

            options: [

                "Het versnelt PHP-FPM",

                "Het fixeert dependency-versies voor reproduceerbare builds",

                "Het vervangt composer.json",

                "Het voegt caching toe aan routes"

            ],

            correctAnswer: 1,

            explanationCorrect: "composer.lock borgt exact dezelfde pakketversies in alle omgevingen, wat reproduceerbare builds geeft.",

            explanationIncorrect: "composer.lock fixeert versies; het vervangt composer.json niet en heeft niets met PHP-FPM routing te maken."

        },

        {

            lecture: "Lecture 5",

            question: "Hoe laat je Laravel geplande taken draaien?",

            options: [

                "Handmatig elke dag",

                "Cron job die elke minuut 'php artisan schedule:run' aanroept",

                "Eenmalig bij deploy",

                "Via php artisan migrate"

            ],

            correctAnswer: 1,

            explanationCorrect: "Een cron entry roept elke minuut schedule:run aan; Laravel voert dan due tasks uit.",

            explanationIncorrect: "Scheduler draait via cron elke minuut; het is geen migratie of eenmalige deploy-stap."

        },

        {

            lecture: "Lecture 5",

            question: "Wat moet de waarde van APP_DEBUG in productie zijn?",

            options: [

                "true, zodat fouten zichtbaar zijn",

                "false, zodat geen stacktraces/leakage naar gebruikers gaat",

                "Maakt niet uit",

                "true zolang logs aan staan"

            ],

            correctAnswer: 1,

            explanationCorrect: "In productie zet je APP_DEBUG=false om geen gevoelige info te tonen; log fouten intern.",

            explanationIncorrect: "APP_DEBUG moet uit in productie om geen stacktraces of secrets te tonen."

        },

        {

            lecture: "Lecture 5",

            question: "Hoe run je queue workers betrouwbaar in Laravel?",

            options: [

                "Handmatig php artisan queue:work in een losse shell",

                "Via supervisor/systemd die queue:work processen beheert",

                "Alleen via cron",

                "Queue workers zijn niet nodig"

            ],

            correctAnswer: 1,

            explanationCorrect: "Gebruik supervisor of systemd om queue:work als service te bewaken en te herstarten.",

            explanationIncorrect: "Losse shells zijn fragiel; een process manager (supervisor/systemd) hoort de workers draaiend te houden."

        },

        {

            lecture: "Lecture 5",

            question: "Hoe houd je file uploads stateless bij deployments?",

            options: [

                "Uploads lokaal in storage/app opslaan",

                "Uploads naar object storage (bv. S3) sturen zodat app-servers stateless blijven",

                "Uploads in git committen",

                "Uploads in /tmp bewaren"

            ],

            correctAnswer: 1,

            explanationCorrect: "Object storage (S3 e.d.) maakt web/worker nodes stateless en voorkomt verlies bij herdeploys.",

            explanationIncorrect: "Lokale opslag of git is niet stateless; gebruik object storage zodat servers uitwisselbaar zijn."

        },

        {

            lecture: "Lecture 5",

            question: "Welke stap hoort in de deployment checklist voor performance?",

            options: [

                "php artisan config:cache, route:cache en view:cache draaien",

                "Alle caches wissen",

                "APP_ENV=local zetten",

                "composer install --dev in productie"

            ],

            correctAnswer: 0,

            explanationCorrect: "Config/route/view cache versnellen bootstrap; combineer met --no-dev install en juiste permissies.",

            explanationIncorrect: "In productie cache je config/routes/views en installeer je zonder dev dependencies; APP_ENV blijft production."

        },

        {

            lecture: "Lecture 2",

            question: "Welke velden staan in /etc/fstab?",

            options: [

                "Alleen device en mountpoint",

                "Device, mountpoint, fstype, opties, dump, fsck-volgorde",

                "Alleen fstype en opties",

                "Alleen mountpoint en fsck-volgorde"

            ],

            correctAnswer: 1,

            explanationCorrect: "/etc/fstab specificeert device, mountpoint, type, opties (bv. defaults/noatime/users), dump en fsck-orde.",

            explanationIncorrect: "fstab bevat zes kolommen: device, mountpoint, type, opties, dump, fsck-volgorde; niet slechts twee."

        },

        {

            lecture: "Lecture 3",

            question: "Wat betekent 1:1 versus M:N thread mapping?",

            options: [

                "1:1 map elke user-thread op een kernel-thread; M:N multiplex user-threads op minder kernel-threads",

                "1:1 deelt één kernel-thread tussen alle user-threads",

                "M:N betekent precies één thread totaal",

                "Er is geen verschil, beide zijn hetzelfde"

            ],

            correctAnswer: 0,

            explanationCorrect: "1:1 koppelt elke user-thread direct aan een kernel-thread; M:N multiplexed meerdere user-threads over minder kernel-threads.",

            explanationIncorrect: "1:1 is directe mapping; M:N multiplexed meerdere user-threads op minder kernel-threads."

        },

        {

            lecture: "Lecture 4",

            question: "Wat is CPU of geheugen overcommitment op een hypervisor?",

            options: [

                "Nooit meer virtuele CPU/RAM toekennen dan fysiek",

                "Meer vCPU/RAM uitdelen dan fysiek aanwezig, met scheduling/ballooning/swap om dit op te vangen",

                "Alleen RAM delen zonder CPU",

                "VM's pauzeren tot resources vrijkomen"

            ],

            correctAnswer: 1,

            explanationCorrect: "Hypervisors (bv. ESXi) kunnen meer vCPU/RAM uitdelen dan fysiek en regelen dit met shares, ballooning of swap wanneer er druk is.",

            explanationIncorrect: "Overcommitment = oversubscriben en met scheduler/ballooning/swap opvangen; het is niet verboden of hetzelfde als pauzeren."

        },

        {

            lecture: "Lecture 5",

            question: "Welke stap hoort in een prod deploy van Laravel voor performance en veiligheid?",

            options: [

                "APP_DEBUG=true laten staan",

                "config:cache en route:cache draaien en APP_DEBUG=false zetten",

                "composer install --dev draaien",

                "Uploads lokaal in storage/app houden zonder backup"

            ],

            correctAnswer: 1,

            explanationCorrect: "In productie zet je APP_DEBUG=false en cache je config/routes voor snelle boot; install zonder --dev en regel storage/permissions.",

            explanationIncorrect: "Prod vraagt caching en debug uit; geen dev dependencies of onbeschermde lokale uploads zonder beleid."

        },

        {

            lecture: "Lecture 6",

            question: "Wat is het kernverschil tussen containers en VM's?",

            options: [

                "Containers virtualiseren hardware en draaien elk hun eigen kernel",

                "Containers delen de host-kernel en isoleren processen, VM's hebben een volledige eigen OS-stack",

                "VM's zijn lichter en starten sneller dan containers",

                "Er is geen verschil, beide delen altijd dezelfde kernel"

            ],

            correctAnswer: 1,

            explanationCorrect: "Containers delen de host-kernel en isoleren processen; VM's virtualiseren hardware en bevatten elk een volledige OS-kernel.",

            explanationIncorrect: "VM's virtualiseren hardware en hebben een eigen kernel; containers delen de host-kernel en zijn lichter."

        },

        {

            lecture: "Lecture 6",

            question: "Welke kernelfeatures maken LXC en Docker mogelijk?",

            options: [

                "iptables en selinux",

                "cgroups en namespaces",

                "swap en tmpfs",

                "cron en syslog"

            ],

            correctAnswer: 1,

            explanationCorrect: "Linux cgroups (resources) en namespaces (isolatie) vormen de basis voor LXC en dus Docker.",

            explanationIncorrect: "Containers steunen op cgroups en namespaces; iptables of cron zijn niet de kernbouwstenen."

        },

        {

            lecture: "Lecture 6",

            question: "Waarom installeer je Docker op Debian via Docker's eigen repository?",

            options: [

                "Omdat de Debian pakketten meestal nieuwer zijn dan upstream",

                "Omdat de Debian repo geen GPG-key vereist",

                "Omdat de distributiepakketten vaak verouderd of incompleet zijn",

                "Omdat Docker alleen werkt zonder updates"

            ],

            correctAnswer: 2,

            explanationCorrect: "Debian stable levert vaak oude/incomplete Docker-builds; de Docker repo geeft actuele componenten en updates.",

            explanationIncorrect: "De reden is dat distro pakketten verouderen of incompleet zijn; niet omdat Debian nieuwer of keyloos is."

        },

        {

            lecture: "Lecture 6",

            question: "Welke tagging-aanpak is veilig voor productie?",

            options: [

                "Altijd latest gebruiken",

                "Geen tag meegeven zodat latest pakt",

                "Semver versie en eventueel OS in de tag zetten (bv. 1.27.1-alpine)",

                "Alleen mainline gebruiken"

            ],

            correctAnswer: 2,

            explanationCorrect: "Pin versies met semver en evt. OS (bv. 1.27.1-alpine) om onverwachte updates te vermijden; vermijd latest/mainline in prod.",

            explanationIncorrect: "latest of mainline verbergt versiewijzigingen; pin een semver tag (evt. met OS) voor voorspelbare builds."

        },

        {

            lecture: "Lecture 6",

            question: "Wat doet docker run -p 8080:80 httpd?",

            options: [

                "Bindt containerpoort 8080 aan hostpoort 80",

                "Bindt hostpoort 8080 aan containerpoort 80 zodat de service op host:8080 bereikbaar is",

                "Opent alleen een shell in de container",

                "Voegt een extra netwerkinterface toe"

            ],

            correctAnswer: 1,

            explanationCorrect: "-p host:container publiceert containerpoort 80 op hostpoort 8080, zodat je via host:8080 de httpd container bereikt.",

            explanationIncorrect: "-p 8080:80 mapt hostpoort 8080 naar containerpoort 80; het opent geen shell en keert de mapping niet om."

        },

        {

            lecture: "Lecture 6",

            question: "Waar vind je standaard de Docker containerlogs terug op de host?",

            options: [

                "/var/log/syslog",

                "/etc/docker/daemon.json",

                "/var/lib/docker/containers/<id>/<id>-json.log",

                "/usr/local/bin/docker-logs"

            ],

            correctAnswer: 2,

            explanationCorrect: "Standaard logt Docker per container naar /var/lib/docker/containers/<id>/<id>-json.log.",

            explanationIncorrect: "De standaard json logs staan per container onder /var/lib/docker/containers/<id>/<id>-json.log; niet in syslog of daemon.json."

        },

        {

            lecture: "Lecture 7",

            question: "Wat is het fundamentale probleem met ephemeral storage in containers?",

            options: [

                "Containers gebruiken teveel geheugen",

                "Alle wijzigingen in het bestandssysteem gaan verloren bij herstart of stop",

                "Docker kan geen bestanden schrijven naar de host",

                "Volumes zijn te langzaam"

            ],

            correctAnswer: 1,

            explanationCorrect: "Correct! Containers zijn ephemeral: als ze stoppen, gaan alle wijzigingen verloren. Dit is waarom volumes en bind mounts nodig zijn.",

            explanationIncorrect: "Het kernprobleem is dat containers ephemeral zijn—alle gegevens gaan verloren bij stop/herstart, vandaar volumes."

        },

        {

            lecture: "Lecture 7",

            question: "Wat is het voornaamste voordeel van volumes boven bind mounts?",

            options: [

                "Volumes zijn sneller",

                "Volumes worden beheerd door Docker en zijn onafhankelijk van het host-bestandssysteem",

                "Bind mounts ondersteunen multi-container sharing niet",

                "Volumes vereisen geen schrijftoegang op de host"

            ],

            correctAnswer: 1,

            explanationCorrect: "Volumes worden beheerd door Docker, zijn onafhankelijk van host-bestandssysteem en zijn portabel—ideaal voor productie.",

            explanationIncorrect: "Het voordeel van volumes is dat ze Docker-managed zijn en onafhankelijk van het host-bestandssysteem; bind mounts zijn meer voor development."

        },

        {

            lecture: "Lecture 7",

            question: "Wat is het verschil tussen CMD en ENTRYPOINT in een Dockerfile?",

            options: [

                "CMD is sneller dan ENTRYPOINT",

                "CMD kan worden overschreven, ENTRYPOINT voert altijd uit",

                "ENTRYPOINT is verouderd",

                "CMD is alleen voor images, ENTRYPOINT voor containers"

            ],

            correctAnswer: 1,

            explanationCorrect: "CMD kan worden overschreven bij docker run, ENTRYPOINT voert altijd uit en is moeilijker om te overschrijven.",

            explanationIncorrect: "CMD is overschrijfbaar; ENTRYPOINT voert altijd uit en biedt meer controle over het uitvoeringsgedrag."

        },

        {

            lecture: "Lecture 7",

            question: "Welk commando start alle services gedefinieerd in docker-compose.yml?",

            options: [

                "docker-compose start",

                "docker-compose up",

                "docker-compose run",

                "docker-compose build"

            ],

            correctAnswer: 1,

            explanationCorrect: "docker-compose up start alle services. 'docker-compose start' start slechts bestaande (gestopte) services.",

            explanationIncorrect: "'docker-compose up' creëert en start alle services; 'start' is voor al bestaande containers."

        },

        {

            lecture: "Lecture 7",

            question: "Hoe bereiken services elkaar in een Docker Compose-netwerk?",

            options: [

                "Via IP-adressen uit een extern lookup-systeem",

                "Via poort-forwarding op de host",

                "Automatische DNS-resolutie op servicenaam (bv. db:5432)",

                "Ze kunnen elkaar niet bereiken zonder externe netwerkconfiguratie"

            ],

            correctAnswer: 2,

            explanationCorrect: "Docker Compose creëert een bridge-netwerk met automatische DNS; services bereiken elkaar via servicenaam.",

            explanationIncorrect: "Compose hanteert automatische service-discovery via DNS—services bereiken elkaar direct op servicenaam."

        },

        {

            lecture: "Lecture 7",

            question: "Welke restart-policy zorgt ervoor dat een container altijd opnieuw start, zelfs na Docker daemon herstart?",

            options: [

                "always",

                "on-failure",

                "unless-stopped",

                "no"

            ],

            correctAnswer: 0,

            explanationCorrect: "Met 'always' herstart Docker de container automatisch, ook na daemon-herstart.",

            explanationIncorrect: "'always' herstart onvoorwaardelijk; 'unless-stopped' is gelijaardig maar kan worden gestopt; 'on-failure' herstart alleen bij crashes."

        },

        {

            lecture: "Lecture 7",

            question: "Wat doet een HEALTHCHECK in Docker?",

            options: [

                "Controleert of er voldoende schijfruimte beschikbaar is",

                "Voert periodiek een commando uit om gezondheid van container te controleren",

                "Verwijdert automatisch beschadigde containers",

                "Monitor CPU en geheugengebruik"

            ],

            correctAnswer: 1,

            explanationCorrect: "HEALTHCHECK voert periodiek een commando uit (bv. HTTP-ping) en stelt de status in op healthy/unhealthy.",

            explanationIncorrect: "HEALTHCHECK is voor actieve gezondheidscontrole via periodieke commands, niet voor systeembronnen."

        },

        {

            lecture: "Lecture 7",

            question: "In de taarten-analogie, wat vertegenwoordigt Docker Compose?",

            options: [

                "Het recept (Dockerfile)",

                "De ingevroren taart (Image)",

                "Het taartstuk aan tafel (Container)",

                "Het restaurant-menu (meerdere gerechten samen)"

            ],

            correctAnswer: 3,

            explanationCorrect: "Docker Compose is het restaurant-menu—het orchestreert meerdere gerechtenten (services) tot een samenhangende maaltijd.",

            explanationIncorrect: "Compose orchestreert meerdere services net zoals een menu meerdere gerechtenten presenteert als samenhangend diner."

        },

        {

            lecture: "Lecture 7",

            question: "Wat is het voornaamste doel van RUN-instructies in een Dockerfile?",

            options: [

                "Het voert commando's uit terwijl de container draait",

                "Het voert commando's uit TIJDENS het bouwen van de image",

                "Het definieert de standaardcommando's bij container-start",

                "Het kopieert bestanden van host naar container"

            ],

            correctAnswer: 1,

            explanationCorrect: "RUN voert commando's uit tijdens build-tijd (bv. apt-get install); CMD en ENTRYPOINT gebeuren bij container-start.",

            explanationIncorrect: "RUN is build-time; CMD/ENTRYPOINT zijn runtime. RUN voert uit tijdens image-creatie, niet in lopende containers."

        },

        {

            lecture: "Lecture 2",

            question: "Wat bepalen permission bits (755, 644) op bestanden in Linux?",

            options: [

                "De grootte van het bestand in bytes",

                "Wie het bestand mag lezen, schrijven en uitvoeren (rwx voor user, group, others)",

                "De compressie-niveau van het bestand",

                "Wanneer het bestand voor het laatst is gewijzigd"

            ],

            correctAnswer: 1,

            explanationCorrect: "Permission bits bepalen toegang: rwx (read-write-execute) voor user-group-others. 755 = rwxr-xr-x, 644 = rw-r--r--.",

            explanationIncorrect: "Permissions bepalen lees/schrijf/uitvoer-rechten, niet bestandsgrootte of wijzigingsdatum."

        },

        {

            lecture: "Lecture 3",

            question: "Wat is het Process ID (PID) in Linux?",

            options: [

                "De prioriteit van een proces (0-139 schaal)",

                "De unieke nummeridentifier voor elk proces in het systeem",

                "Het percentage CPU-gebruik van het proces",

                "De geheugengrootte van het proces in MB"

            ],

            correctAnswer: 1,

            explanationCorrect: "PID is de unieke ID van elk proces; PID 1 is init/systemd. Je kan processen zoeken/beëindigen via PID.",

            explanationIncorrect: "PID is geen prioriteit of resource-gebruik; het is simpelweg de identificatiecode van het proces."

        },

        {

            lecture: "Lecture 3",

            question: "Welke rol speelt systemd in het Linux boot-proces?",

            options: [

                "systemd is de bootloader die de kernel laadt",

                "systemd is het eerste proces (PID 1) dat services en daemons beheert na kernel-start",

                "systemd is een filesystem waarin kernelmodules worden opgeslagen",

                "systemd is alleen voor bestandssystemen, niet voor procesmanagement"

            ],

            correctAnswer: 1,

            explanationCorrect: "systemd (PID 1) is de init-system die na kernel-start alle services opstart en beheert; vervangt oudere init.",

            explanationIncorrect: "systemd is geen bootloader; het is de proces-manager die na kernel-boot alle services aanstuurt."

        },

        {

            lecture: "Lecture 6",

            question: "Wat is een Docker image?",

            options: [

                "Een lopend proces dat een applicatie uitvoert",

                "Een blueprint/template met alle bestanden, dependencies en configuratie voor een container",

                "Een fysieke server waarop containers draaien",

                "Een netwerk-instellingen bestand"

            ],

            correctAnswer: 1,

            explanationCorrect: "Een image is een onveranderlijke template (gebouwd met Dockerfile) waarmee containers worden gestart.",

            explanationIncorrect: "Image is niet het lopende proces; het is de statische template. Containers zijn instances van images."

        },

        {

            lecture: "Lecture 6",

            question: "Wat zijn cgroups (control groups) in Docker/Linux?",

            options: [

                "Groepen van useraccounts in het systeem",

                "Mechanisme om processenresources (CPU, geheugen) te limiteren en isoleren",

                "Een mappenstructuur voor applicaties",

                "Protocol voor netwerkverbindingen"

            ],

            correctAnswer: 1,

            explanationCorrect: "cgroups limiteren en monitoren resources (CPU, RAM, I/O) per proces(groep); cruciaal voor containerisatie.",

            explanationIncorrect: "cgroups zijn geen user-groepen; het zijn kernel-features voor resource-controle op procesniveau."

        },

        {

            lecture: "Lecture 8",

            question: "Wat is het belangrijkste verschil tussen symmetrische en asymmetrische encryptie?",

            options: [

                "Symmetrische encryptie is veiliger dan asymmetrische",

                "Symmetrische gebruikt één sleutel, asymmetrische gebruikt een sleutelpaar (public/private)",

                "Asymmetrische encryptie is sneller dan symmetrische",

                "Symmetrische encryptie kan alleen gebruikt worden voor HTTPS"

            ],

            correctAnswer: 1,

            explanationCorrect: "Correct! Symmetrische encryptie gebruikt dezelfde sleutel voor encrypt en decrypt (snel maar distributieprobleem). Asymmetrische gebruikt een sleutelpaar waarbij wat met de ene wordt versleuteld alleen met de andere kan worden ontsleuteld.",

            explanationIncorrect: "Het verschil zit in het aantal sleutels: symmetrisch = 1 sleutel (snel), asymmetrisch = 2 sleutels/sleutelpaar (langzaam maar veiliger voor key-exchange)."

        },

        {

            lecture: "Lecture 8",

            question: "Wanneer gebruik je de Public Key van iemand anders voor encryptie?",

            options: [

                "Als je wilt bewijzen dat een bericht van jou komt (digitale handtekening)",

                "Als je een bericht wilt sturen dat alleen die persoon kan lezen (confidentiality)",

                "Als je een hash wilt maken van een document",

                "Als je symmetrische encryptie wilt gebruiken"

            ],

            correctAnswer: 1,

            explanationCorrect: "Juist! Voor confidentiality versleutel je met de Public Key van de ontvanger. Alleen hij kan het decrypten met zijn Private Key.",

            explanationIncorrect: "Public Key van de ontvanger = confidentiality (alleen hij kan lezen). Je eigen Private Key = authenticity/signing (bewijzen dat het van jou komt)."

        },

        {

            lecture: "Lecture 8",

            question: "Wat is de rol van het bestand 'authorized_keys' bij SSH?",

            options: [

                "Het bevat de Private Keys van de server",

                "Het bevat de Public Keys van alle gebruikers die mogen inloggen op de server",

                "Het bevat wachtwoorden van gebruikers in encrypted vorm",

                "Het bevat de fingerprints van servers die je eerder hebt bezocht"

            ],

            correctAnswer: 1,

            explanationCorrect: "Correct! authorized_keys (op de server) bevat Public Keys van gebruikers die passwordless mogen inloggen. De server gebruikt dit om te checken of jouw Private Key matcht.",

            explanationIncorrect: "authorized_keys staat op de server en bevat Public Keys van clients die binnen mogen. known_hosts (op je laptop) onthoudt server-fingerprints."

        },

        {

            lecture: "Lecture 8",

            question: "Hoe werkt passwordless SSH-login?",

            options: [

                "De server versleutelt een challenge met jouw Public Key; jij lost het op met je Private Key",

                "De server stuurt je wachtwoord encrypted via HTTPS",

                "Je Private Key wordt automatisch naar de server gestuurd",

                "De server genereert een nieuwe Public Key bij elke login"

            ],

            correctAnswer: 0,

            explanationCorrect: "Juist! De server maakt een random puzzel/challenge, versleutelt die met jouw Public Key (uit authorized_keys), jij lost hem op met je Private Key en stuurt het antwoord terug. Als het klopt, word je binnengelaten.",

            explanationIncorrect: "SSH-authenticatie: server versleutelt challenge met jouw Public Key → jij decrypteert met Private Key → antwoord bewijst dat je de juiste Private Key hebt."

        },

        {

            lecture: "Lecture 8",

            question: "Wat is een digitale handtekening (digital signature)?",

            options: [

                "Een hash van een document, versleuteld met je Public Key",

                "Een hash van een document, versleuteld met je Private Key",

                "Een wachtwoord dat in een database wordt opgeslagen",

                "Een certificaat uitgegeven door een CA"

            ],

            correctAnswer: 1,

            explanationCorrect: "Correct! Je maakt een hash (vingerafdruk) van het document en versleutelt die hash met je Private Key. Iedereen kan het verifiëren met jouw Public Key, wat bewijst dat het document van jou komt en niet is gewijzigd.",

            explanationIncorrect: "Digital signature = hash versleuteld met je PRIVATE key (niet public). Dit bewijst authenticity en integrity."

        },

        {

            lecture: "Lecture 8",

            question: "Wat is de rol van een Certificate Authority (CA)?",

            options: [

                "De CA maakt Public Keys voor alle websites",

                "De CA controleert de identiteit van een website en ondertekent hun certificaat met zijn eigen Private Key",

                "De CA slaat alle wachtwoorden van gebruikers op",

                "De CA host alle websites via HTTPS"

            ],

            correctAnswer: 1,

            explanationCorrect: "Juist! De CA is een vertrouwde derde partij die de identiteit van een website verifieert en hun certificaat digitaal ondertekent. Browsers vertrouwen de CA's waarvan de Root Certificates standaard zijn ingebakken.",

            explanationIncorrect: "Een CA is de 'paspoort-uitgever' van het web. Ze verifiëren identiteit en ondertekenen certificaten zodat browsers kunnen vertrouwen dat www.bank.be echt de bank is."

        },

        {

            lecture: "Lecture 8",

            question: "Wat staat er IN een X.509 certificaat?",

            options: [

                "De Private Key van de server",

                "De domeinnaam, Public Key, verloopdatum en handtekening van de CA",

                "Alle wachtwoorden van gebruikers",

                "De source code van de website"

            ],

            correctAnswer: 1,

            explanationCorrect: "Correct! Een certificaat bevat: domeinnaam (Subject), Public Key, geldigheidsperiode, en de digitale handtekening van de CA. De Private Key blijft geheim op de server!",

            explanationIncorrect: "Een certificaat is als een digitaal paspoort: het bevat identificatie (domeinnaam), Public Key, geldigheid en een stempel (handtekening) van de CA. De Private Key zit er NOOIT in."

        },

        {

            lecture: "Lecture 8",

            question: "Hoe werkt de SSL/TLS handshake bij HTTPS?",

            options: [

                "Client en server gebruiken alleen symmetrische encryptie voor het hele gesprek",

                "Asymmetrische encryptie wordt gebruikt om een symmetrische Session Key veilig uit te wisselen; daarna wordt die snelle symmetrische key gebruikt",

                "De server stuurt zijn Private Key naar de client",

                "Er wordt helemaal geen encryptie gebruikt, alleen certificaten"

            ],

            correctAnswer: 1,

            explanationCorrect: "Juist! TLS combineert het beste van beide: asymmetrisch (veilig) wordt gebruikt om een symmetrische Session Key uit te wisselen, daarna switchen beide naar symmetrisch (snel) voor de rest van de communicatie.",

            explanationIncorrect: "TLS handshake: asymmetrische crypto voor veilige key-exchange → daarna symmetrische crypto voor snelheid. Best of both worlds!"

        },

        {

            lecture: "Lecture 8",

            question: "Waarom krijg je de fout 'Your connection is not private' (NET::ERR_CERT_AUTHORITY_INVALID) bij een self-signed certificaat?",

            options: [

                "De server heeft helemaal geen certificaat",

                "Het certificaat is ondertekend door een CA die jouw browser niet vertrouwt (niet in de trusted root store)",

                "De server gebruikt HTTP in plaats van HTTPS",

                "Je wachtwoord is incorrect"

            ],

            correctAnswer: 1,

            explanationCorrect: "Correct! Bij self-signed certificaten (zoals in het labo) ben jijzelf de CA. Je browser kent jou niet als vertrouwde CA, dus moet je jouw Root CA Certificaat handmatig importeren in de trusted root store.",

            explanationIncorrect: "Self-signed certificaat = ondertekend door jezelf (niet door DigiCert/Let's Encrypt). Browsers vertrouwen alleen pre-installed CA's. Oplossing: importeer je eigen Root CA certificaat."

        },

        {

            lecture: "Lecture 8",

            question: "Wat is Mutual TLS (mTLS) en wanneer krijg je de fout 'SSL_ERROR_RX_CERTIFICATE_REQUIRED_ALERT'?",

            options: [

                "mTLS betekent dat alleen de server een certificaat heeft; de fout gebeurt als de server offline is",

                "mTLS betekent dat ZOWEL server als client een certificaat moeten hebben; de fout gebeurt als jouw browser geen client-certificaat heeft geladen",

                "mTLS is een oude versie van TLS die niet meer wordt gebruikt",

                "Deze fout gebeurt alleen bij HTTP, niet bij HTTPS"

            ],

            correctAnswer: 1,

            explanationCorrect: "Juist! Bij normale HTTPS heeft alleen de server een certificaat. Bij mTLS (SSLVerifyClient require) eist de server dat ook de client zich identificeert met een certificaat (PKCS#12 / .p12 bestand).",

            explanationIncorrect: "Mutual TLS = wederzijdse authenticatie. Niet alleen server bewijst identiteit, maar ook de client moet certificaat tonen. Als je dat niet hebt → SSL_ERROR_RX_CERTIFICATE_REQUIRED_ALERT."

        }

    ]

};



function shuffleQuestions(questions) {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Also shuffle answers for each question and track correct answer index
    return shuffled.map(q => shuffleQuestionAnswers(q));
}

function shuffleQuestionAnswers(question) {
    // Create array of {option, isCorrect} pairs
    const optionsWithFlags = question.options.map((opt, idx) => ({
        option: opt,
        isCorrect: idx === question.correctAnswer
    }));
    
    // Shuffle the pairs
    for (let i = optionsWithFlags.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsWithFlags[i], optionsWithFlags[j]] = [optionsWithFlags[j], optionsWithFlags[i]];
    }
    
    // Create new shuffled question
    const shuffledQuestion = { ...question };
    shuffledQuestion.options = optionsWithFlags.map(item => item.option);
    shuffledQuestion.correctAnswer = optionsWithFlags.findIndex(item => item.isCorrect);
    
    return shuffledQuestion;
}



document.addEventListener('DOMContentLoaded', function(){

    oscQuizData.questions = shuffleQuestions(oscQuizData.questions);

    initQuiz(oscQuizData);

});

