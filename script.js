/* =====================================================
   LINUX BOOT PROCESS DATA
===================================================== */

const stages = [

    {
        name: "Power On",
        icon: "⚡",

        title: "1. Power On",

        description:
            "When the computer is powered on, the CPU receives power and begins executing instructions from the system firmware.",

        internal:
            "The CPU starts executing instructions from a predefined location. The initial instructions belong to the system firmware.",

        left: "🧠 CPU",
        right: "⚙️ Firmware",

        packet: "START",

        message:
            "CPU STARTING EXECUTION",

        logs: [
            "[    0.000 ] Power detected",
            "[    0.010 ] CPU initialized",
            "[    0.020 ] Beginning firmware execution"
        ],

        keywords: {

            "CPU":
                "The Central Processing Unit executes machine instructions and controls the execution of programs.",

            "Firmware":
                "Low-level software stored on the motherboard that initializes hardware and starts the boot process.",

            "Power On":
                "The moment electrical power is supplied and the computer begins its startup sequence."
        }
    },


    {
        name: "BIOS / UEFI",
        icon: "🔧",

        title: "2. BIOS / UEFI",

        description:
            "BIOS or UEFI initializes the computer's hardware and performs the Power-On Self-Test (POST).",

        internal:
            "Firmware checks important hardware such as memory and storage and determines which device should be used for booting.",

        left: "⚙️ BIOS / UEFI",
        right: "🧩 Hardware",

        packet: "POST",

        message:
            "CHECKING HARDWARE...",

        logs: [
            "[ OK ] Firmware started",
            "[ OK ] CPU check passed",
            "[ OK ] Memory check passed",
            "[ OK ] Storage detected",
            "[ OK ] POST completed"
        ],

        keywords: {

            "BIOS":
                "Basic Input/Output System. Traditional motherboard firmware used to initialize hardware and start the boot process.",

            "UEFI":
                "Unified Extensible Firmware Interface. A modern firmware interface that initializes hardware and provides boot services.",

            "POST":
                "Power-On Self-Test. A firmware diagnostic process that checks essential hardware during startup.",

            "Boot Order":
                "The order in which firmware searches devices for a bootable operating system."
        }
    },


    {
        name: "Boot Device",
        icon: "💾",

        title: "3. Boot Device",

        description:
            "The firmware searches for a bootable storage device such as an SSD, HDD or USB drive.",

        internal:
            "Once a bootable device is found, the firmware transfers control to the bootloader stored on that device.",

        left: "⚙️ Firmware",
        right: "💾 SSD",

        packet: "BOOT",

        message:
            "SEARCHING FOR BOOTABLE DEVICE...",

        logs: [
            "[ OK ] Scanning storage devices",
            "[ OK ] NVMe SSD detected",
            "[ OK ] Bootable device found",
            "[ OK ] Starting bootloader"
        ],

        keywords: {

            "SSD":
                "Solid State Drive. A storage device that can contain the Linux operating system.",

            "HDD":
                "Hard Disk Drive. A traditional magnetic storage device.",

            "Boot Device":
                "The storage device containing the boot information used to start an operating system."
        }
    },


    {
        name: "GRUB",
        icon: "🚀",

        title: "4. GRUB Bootloader",

        description:
            "GRUB is a commonly used Linux bootloader. It loads the Linux kernel and initramfs into memory.",

        internal:
            "GRUB locates the Linux kernel and initial RAM filesystem on storage, loads them into RAM and then transfers control to the kernel.",

        left: "💾 SSD",
        right: "🧠 RAM",

        packet: "KERNEL",

        message:
            "LOADING LINUX KERNEL INTO RAM...",

        logs: [
            "[ GRUB ] Bootloader started",
            "[ GRUB ] Loading kernel...",
            "[ GRUB ] Loading initramfs...",
            "[ GRUB ] Transferring control to kernel"
        ],

        keywords: {

            "GRUB":
                "GRand Unified Bootloader. A common bootloader used to load Linux kernels.",

            "Bootloader":
                "Software responsible for loading the operating system kernel.",

            "Kernel":
                "The core component of Linux that manages hardware and system resources.",

            "RAM":
                "Main memory where the Linux kernel and running programs are loaded."
        }
    },


    {
        name: "Kernel",
        icon: "🧠",

        title: "5. Linux Kernel",

        description:
            "The Linux kernel takes control of the system and initializes hardware, memory management, drivers and core operating-system facilities.",

        internal:
            "The kernel is now in control. It initializes CPU management, memory, device drivers and other facilities required to continue booting.",

        left: "🧠 Kernel",
        right: "🖥️ Hardware",

        packet: "DRIVERS",

        message:
            "KERNEL INITIALIZING HARDWARE...",

        logs: [
            "[ OK ] Kernel loaded",
            "[ OK ] Memory management initialized",
            "[ OK ] CPU management initialized",
            "[ OK ] Device drivers initialized",
            "[ OK ] Filesystem support initialized"
        ],

        keywords: {

            "Kernel":
                "The central component of Linux responsible for managing CPU, memory, devices, processes and other system resources.",

            "Drivers":
                "Software components that allow the kernel to communicate with hardware.",

            "Memory":
                "The kernel manages the computer's RAM and allocates memory to processes.",

            "Processes":
                "Running instances of programs managed by the operating system."
        }
    },


    {
        name: "initramfs",
        icon: "📦",

        title: "6. initramfs",

        description:
            "initramfs is a temporary filesystem loaded into RAM containing drivers, tools and scripts needed during early boot.",

        internal:
            "The early userspace environment helps the kernel discover and mount the real root filesystem.",

        left: "🧠 RAM",
        right: "📁 Root FS",

        packet: "ROOT FS",

        message:
            "LOCATING ROOT FILESYSTEM...",

        logs: [
            "[ OK ] initramfs loaded",
            "[ OK ] Storage drivers available",
            "[ OK ] Root filesystem detected",
            "[ OK ] Mounting root filesystem",
            "[ OK ] Switching to real root filesystem"
        ],

        keywords: {

            "initramfs":
                "Initial RAM filesystem used during early Linux boot.",

            "Root Filesystem":
                "The main filesystem containing the Linux operating system and its files.",

            "Drivers":
                "Hardware support required to access storage and other devices."
        }
    },


    {
        name: "systemd",
        icon: "⚙️",

        title: "7. systemd — PID 1",

        description:
            "On many modern Linux distributions, systemd starts as the first userspace process and receives Process ID 1.",

        internal:
            "systemd becomes the system and service manager and starts the services required to reach the configured system target.",

        left: "🧠 Kernel",
        right: "⚙️ systemd",

        packet: "PID 1",

        message:
            "STARTING USERSPACE...",

        logs: [
            "[ OK ] Switching to userspace",
            "[ OK ] Starting system manager",
            "[ OK ] systemd started",
            "[ OK ] systemd running as PID 1"
        ],

        keywords: {

            "systemd":
                "A system and service manager used by many modern Linux distributions.",

            "PID 1":
                "Process ID 1. On systems using systemd, systemd normally runs as PID 1.",

            "Userspace":
                "The part of the operating system where normal programs and services execute."
        }
    },


    {
        name: "Services",
        icon: "🔌",

        title: "8. System Services",

        description:
            "systemd starts the services required by the Linux system, such as networking, logging and other background services.",

        internal:
            "Services start in the appropriate order and the system moves toward its configured target.",

        left: "⚙️ systemd",
        right: "🔌 Services",

        packet: "START",

        message:
            "STARTING SYSTEM SERVICES...",

        logs: [
            "[ OK ] Started networking",
            "[ OK ] Started system logging",
            "[ OK ] Started device services",
            "[ OK ] Started background services",
            "[ OK ] Reached system target"
        ],

        keywords: {

            "Networking":
                "Services responsible for establishing and managing network connectivity.",

            "Logging":
                "Services that record important system events.",

            "Display Manager":
                "Software that can provide a graphical login screen."
        }
    },


    {
        name: "Login",
        icon: "🔐",

        title: "9. Login Prompt",

        description:
            "The system is now ready for the user. Depending on the configuration, the user may see a graphical login screen or a text-based terminal login prompt.",

        internal:
            "The login service waits for credentials. After successful authentication, the user's session begins.",

        left: "🐧 Linux",
        right: "👤 User",

        packet: "LOGIN",

        message:
            "SYSTEM READY — WAITING FOR USER",

        logs: [
            "[ OK ] Boot sequence completed",
            "[ OK ] Login service available",
            "",
            "Linux login: _"
        ],

        keywords: {

            "Authentication":
                "The process of verifying a user's identity.",

            "Username":
                "The identifier associated with a user account.",

            "Password":
                "A secret credential used to authenticate the user.",

            "User Session":
                "The environment created after a user successfully logs in."
        }
    }

];


/* =====================================================
   STATE
===================================================== */

let currentStage = 0;

let autoBoot = false;

let autoTimer = null;


/* =====================================================
   DOM ELEMENTS
===================================================== */

const bootFlow =
    document.getElementById("bootFlow");

const progressBar =
    document.getElementById("progressBar");

const stageLabel =
    document.getElementById("stageLabel");

const stageName =
    document.getElementById("stageName");

const stageTitle =
    document.getElementById("stageTitle");

const stageDescription =
    document.getElementById("stageDescription");

const internalExplanation =
    document.getElementById("internalExplanation");

const keywords =
    document.getElementById("keywords");

const machine1 =
    document.getElementById("machine1");

const machine2 =
    document.getElementById("machine2");

const machine1Name =
    machine1.querySelector(".machine-name");

const machine2Name =
    machine2.querySelector(".machine-name");

const dataPacket =
    document.getElementById("dataPacket");

const visualMessage =
    document.getElementById("visualMessage");

const visualTitle =
    document.getElementById("visualTitle");

const terminal =
    document.getElementById("terminal");

const animationStatus =
    document.getElementById("animationStatus");

const completeScreen =
    document.getElementById("completeScreen");


/* =====================================================
   DRAW BLOCK DIAGRAM
===================================================== */

function drawBootFlow() {

    bootFlow.innerHTML = "";

    stages.forEach((stage, index) => {

        const block =
            document.createElement("div");

        block.className =
            "boot-block";

        if (index === currentStage) {

            block.classList.add("active");

        }

        if (index < currentStage) {

            block.classList.add("completed");

        }

        block.innerHTML = `

            <div class="boot-icon">
                ${stage.icon}
            </div>

            <div class="boot-name">
                ${stage.name}
            </div>

        `;

        block.addEventListener(
            "click",
            () => {

                currentStage = index;

                updateInterface();

            }
        );

        bootFlow.appendChild(block);


        if (index < stages.length - 1) {

            const arrow =
                document.createElement("div");

            arrow.className =
                "flow-arrow";

            arrow.textContent =
                "→";

            bootFlow.appendChild(arrow);

        }

    });

}


/* =====================================================
   UPDATE INTERFACE
===================================================== */

function updateInterface() {

    const stage =
        stages[currentStage];


    /* -----------------------------------------------
       Stage information
    ------------------------------------------------ */

    stageLabel.textContent =
        `Stage ${currentStage + 1} of ${stages.length}`;

    stageName.textContent =
        stage.name;

    stageTitle.textContent =
        `${stage.icon} ${stage.title}`;

    stageDescription.textContent =
        stage.description;

    internalExplanation.textContent =
        stage.internal;


    /* -----------------------------------------------
       Progress
    ------------------------------------------------ */

    const percentage =
        ((currentStage + 1) / stages.length) * 100;

    progressBar.style.width =
        `${percentage}%`;


    /* -----------------------------------------------
       Visualization
    ------------------------------------------------ */

    visualTitle.textContent =
        stage.name;

    machine1Name.textContent =
        stage.left;

    machine2Name.textContent =
        stage.right;

    visualMessage.textContent =
        stage.message;


    /* -----------------------------------------------
       Keywords
    ------------------------------------------------ */

    keywords.innerHTML = "";

    Object.entries(stage.keywords)
        .forEach(([keyword, explanation]) => {

            const element =
                document.createElement("span");

            element.className =
                "keyword";

            element.textContent =
                keyword;

            element.addEventListener(
                "click",
                () => {

                    openModal(
                        keyword,
                        explanation
                    );

                }
            );

            keywords.appendChild(element);

        });


    /* -----------------------------------------------
       Terminal
    ------------------------------------------------ */

    terminal.innerHTML = "";

    stage.logs.forEach(
        (line, index) => {

            setTimeout(() => {

                const row =
                    document.createElement("div");

                row.textContent =
                    line;

                terminal.appendChild(row);

                terminal.scrollTop =
                    terminal.scrollHeight;

            }, index * 180);

        }
    );


    /* -----------------------------------------------
       Animation
    ------------------------------------------------ */

    runStageAnimation();


    /* -----------------------------------------------
       Block diagram
    ------------------------------------------------ */

    drawBootFlow();


    /* -----------------------------------------------
       Complete screen
    ------------------------------------------------ */

    if (
        currentStage ===
        stages.length - 1
    ) {

        completeScreen.classList.remove(
            "hidden"
        );

    }
    else {

        completeScreen.classList.add(
            "hidden"
        );

    }

}


/* =====================================================
   STAGE ANIMATION
===================================================== */

function runStageAnimation() {

    const stage =
        stages[currentStage];


    animationStatus.textContent =
        "ANIMATING";


    /* Reset */

    dataPacket.classList.remove(
        "animate"
    );

    machine1.classList.remove(
        "active"
    );

    machine2.classList.remove(
        "active"
    );


    /* Force animation restart */

    void dataPacket.offsetWidth;


    /* Activate machines */

    setTimeout(() => {

        machine1.classList.add(
            "active"
        );

    }, 100);


    setTimeout(() => {

        dataPacket.textContent =
            stage.packet;

        dataPacket.classList.add(
            "animate"
        );

    }, 300);


    setTimeout(() => {

        machine2.classList.add(
            "active"
        );

    }, 1500);


    setTimeout(() => {

        animationStatus.textContent =
            "COMPLETE";

    }, 2200);

}


/* =====================================================
   NEXT
===================================================== */

function nextStage() {

    if (
        currentStage <
        stages.length - 1
    ) {

        currentStage++;

        updateInterface();

    }

}


/* =====================================================
   PREVIOUS
===================================================== */

function previousStage() {

    if (
        currentStage > 0
    ) {

        currentStage--;

        updateInterface();

    }

}


/* =====================================================
   AUTO BOOT
===================================================== */

function startAutoBoot() {

    if (autoBoot) {

        stopAutoBoot();

        return;

    }


    autoBoot = true;

    document.getElementById(
        "autoBtn"
    ).textContent =
        "⏸ Pause Boot";


    autoTimer =
        setInterval(() => {

            if (
                currentStage <
                stages.length - 1
            ) {

                currentStage++;

                updateInterface();

            }
            else {

                stopAutoBoot();

            }

        }, 3500);

}


/* =====================================================
   STOP AUTO BOOT
===================================================== */

function stopAutoBoot() {

    autoBoot = false;

    clearInterval(
        autoTimer
    );

    document.getElementById(
        "autoBtn"
    ).textContent =
        "▶ Auto Boot";

}


/* =====================================================
   RESET
===================================================== */

function resetSimulation() {

    stopAutoBoot();

    currentStage = 0;

    updateInterface();

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =====================================================
   MODAL
===================================================== */

function openModal(
    title,
    text
) {

    document.getElementById(
        "modalTitle"
    ).textContent =
        title;

    document.getElementById(
        "modalText"
    ).textContent =
        text;

    document.getElementById(
        "keywordModal"
    ).classList.remove(
        "hidden"
    );

}


function closeModal() {

    document.getElementById(
        "keywordModal"
    ).classList.add(
        "hidden"
    );

}


/* =====================================================
   EVENT LISTENERS
===================================================== */

document.getElementById(
    "nextBtn"
).addEventListener(
    "click",
    nextStage
);


document.getElementById(
    "previousBtn"
).addEventListener(
    "click",
    previousStage
);


document.getElementById(
    "autoBtn"
).addEventListener(
    "click",
    startAutoBoot
);


document.getElementById(
    "startBtn"
).addEventListener(
    "click",
    () => {

        currentStage = 0;

        updateInterface();

        document.querySelector(
            ".boot-section"
        ).scrollIntoView({
            behavior: "smooth"
        });

    }
);


document.getElementById(
    "resetBtn"
).addEventListener(
    "click",
    resetSimulation
);


document.getElementById(
    "restartFinal"
).addEventListener(
    "click",
    resetSimulation
);


document.getElementById(
    "closeModal"
).addEventListener(
    "click",
    closeModal
);


document.querySelector(
    ".modal-overlay"
).addEventListener(
    "click",
    closeModal
);


/* =====================================================
   KEYBOARD CONTROLS
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "ArrowRight") {

            nextStage();

        }

        if (event.key === "ArrowLeft") {

            previousStage();

        }

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

updateInterface();