const oscQuizData = {
    title: "Operating System Concepts - Lectures 1–3",
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
        }
    ]
};

document.addEventListener('DOMContentLoaded', function(){
    initQuiz(oscQuizData);
});
