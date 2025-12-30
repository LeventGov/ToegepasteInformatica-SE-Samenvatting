const oscQuizData = {
    title: "Operating System Concepts - Lectures 1–4",
    questions: [
        {
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
            question: "Hoe geeft UTF-8 aan hoeveel bytes een karakter gebruikt?",
            options: [
                "Door de kleur van de tekst",
                "Via de eerste byte: het patroon geeft het aantal bytes aan",
                "UTF-8 gebruikt altijd 2 bytes",
                "Via een aparte header"
            ],
            correctAnswer: 1,
            explanationCorrect: "De eerste byte geeft de lengte aan; vervolgbytes beginnen met 10xxxxxx.",
            explanationIncorrect: "UTF-8 is variabel; ASCII is 1 byte, andere tekens 2–4 bytes."
        },
        {
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
            question: "Wat is ACL (Access Control List)?",
            options: [
                "Omgewijs van UGO permissies",
                "Fijnmazige permissies buiten UGO; herkenbaar aan +",
                "Een soort firewall",
                "Een bestandstype"
            ],
            correctAnswer: 1,
            explanationCorrect: "ACL geeft granulairere controle met getfacl/setfacl.",
            explanationIncorrect: "ACL buiten standaard UGO; gebruik getfacl en setfacl."
        },
        {
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
            question: "Wat bevat /dev in Linux?",
            options: [
                "Applicaties",
                "Apparaatbestanden (karakterserve, blok-apparaten)",
                "Gedeelde libraries",
                "Databestanden"
            ],
            correctAnswer: 1,
            explanationCorrect: "/dev bevat device files voor hardware-interactie.",
            explanationIncorrect: "/dev = device files; /lib = libraries."
        },
        {
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
            question: "Wat is HA (High Availability) in VMware?",
            options: [
                "Geen downtime",
                "Fysieke server-crash? Andere server start VM's opnieuw (korte reboot)",
                "Real-time backup",
                "Automatische schijf-vervanging"
            ],
            correctAnswer: 1,
            explanationCorrect: "HA: server down? Cluster start VM's opnieuw (korte downtime voor reboot).",
            explanationIncorrect: "HA ≠ FT; HA heeft reboot-downtime; FT geen."
        },
        {
            question: "Wat is FT (Fault Tolerance) in VMware?",
            options: [
                "Hetzelfde als HA",
                "Schaduw-VM draait mee; indien crash, direct failover (0 downtime)",
                "Backup naar externe harde schijf",
                "Alleen voor databases"
            ],
            correctAnswer: 1,
            explanationCorrect: "FT: Shadow VM sync; zero downtime maar 2x resources.",
            explanationIncorrect: "FT ≠ HA; FT = continuous protection, zeer duur."
        },
        {
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
            question: "Wat is Nested Virtualization?",
            options: [
                "Twee VM's in één",
                "VMware Workstation → ESXi → test-VMs (Type 2 → Type 1 → Type 2)",
                "VM's op het internet",
                "Oude virtualisatie-techniek"
            ],
            correctAnswer: 1,
            explanationCorrect: "Nested: laptop (Host OS) → Workstation → ESXi → VM's.",
            explanationIncorrect: "Nested gebruikt voor labs; vereist VT-x/AMD-V in BIOS."
        },
        {
            question: "Wat is POSIX?",
            options: [
                "Een OS",
                "Standaard voor API-compatibiliteit tussen Unix-achtige OS'en",
                "Een programmeertaal",
                "Een versie van Linux"
            ],
            correctAnswer: 1,
            explanationCorrect: "POSIX = Portable Operating System Interface; gestandaardiseerde APIs.",
            explanationIncorrect: "POSIX is een standaard, niet een OS of taal."
        },
        {
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
        }
    ]
};

function shuffleQuestions(questions) {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

document.addEventListener('DOMContentLoaded', function(){
    oscQuizData.questions = shuffleQuestions(oscQuizData.questions);
    initQuiz(oscQuizData);
});
