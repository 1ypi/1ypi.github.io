const cursor = document.querySelector('.cursor');
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        const interactiveElements = document.querySelectorAll('button, .social-icon, .skill-card, .discord-container');

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });

            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });

        const particlesContainer = document.getElementById('particles-container');
        const particleCount = 80;

        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }

        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            resetParticle(particle);

            particlesContainer.appendChild(particle);

            animateParticle(particle);
        }

        function resetParticle(particle) {

            const posX = Math.random() * 100;
            const posY = Math.random() * 100;

            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = '0';

            return {
                x: posX,
                y: posY
            };
        }

        function animateParticle(particle) {

            const pos = resetParticle(particle);

            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;

            setTimeout(() => {
                particle.style.transition = `all ${duration}s linear`;
                particle.style.opacity = Math.random() * 0.3 + 0.1;

                const moveX = pos.x + (Math.random() * 20 - 10);
                const moveY = pos.y - Math.random() * 30; 

                particle.style.left = `${moveX}%`;
                particle.style.top = `${moveY}%`;

                setTimeout(() => {
                    animateParticle(particle);
                }, duration * 1000);
            }, delay * 1000);
        }

        const bootLogs = [
            '[    0.000000] Linux version 6.1.0-arch1-1 (linux@archlinux) (gcc (GCC) 12.2.0)',
            '[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz-linux root=UUID=12345678',
            '[    0.000000] KERNEL supported cpus: Intel Genuine Intel AMD AuthenticAMD',
            '[    0.000000] x86/fpu: Supporting XSAVE feature 0x001: \'x87 floating point registers\'',
            '[    0.000000] x86/fpu: Supporting XSAVE feature 0x002: \'SSE registers\'',
            '[    0.000000] x86/fpu: Supporting XSAVE feature 0x004: \'AVX registers\'',
            '[    0.000000] signal: max_threads: 32768',
            '[    0.001000] BIOS-provided physical RAM map:',
            '[    0.001000] BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable',
            '[    0.001000] BIOS-e820: [mem 0x000000000009fc00-0x000000000009ffff] reserved',
            '[    0.002000] NX (Execute Disable) protection: active',
            '[    0.002000] SMBIOS 3.0 present.',
            '[    0.002000] DMI: 1ypi/CyberSec-Machine, BIOS 1.0 08/10/2025',
            '[    0.003000] tsc: Fast TSC calibration using PIT',
            '[    0.003000] tsc: Detected 3400.000 MHz processor',
            '[    0.004000] e820: update [mem 0x00000000-0x00000fff] usable ==> reserved',
            '[    0.004000] e820: remove [mem 0x000a0000-0x000fffff] usable',
            '[    0.005000] last_pfn = 0x430000 max_arch_pfn = 0x400000000',
            '[    0.005000] x86/PAT: Configuration [0-7]: WB WC UC- UC WB WP UC- WT',
            '[    0.006000] total RAM available: 16777216 pages (65GB)',
            '[    0.007000] RAMDISK: [mem 0x36d65000-0x37799fff]',
            '[    0.008000] ACPI: Early table checksum verification disabled',
            '[    0.008000] ACPI: RSDP 0x00000000000F0490 000024 (v02 1YPI  )',
            '[    0.009000] ACPI: XSDT 0x00000000BF79E0E8 00005C (v01 1YPI   CYBERSEC 00000001)',
            '[    0.010000] ACPI: FACP 0x00000000BF79C000 000114 (v06 1YPI   CYBERSEC 00000001)',
            '[    0.011000] ACPI BIOS Warning: 32/64-bit length mismatch in FADT/Pm1aEventLength',
            '[    0.012000] IOAPIC[0]: apic_id 2, version 32, address 0xfec00000, GSI 0-119',
            '[    0.013000] ACPI: INT_SRC_OVR (bus 0 bus_irq 0 global_irq 2 dfl dfl)',
            '[    0.014000] ACPI: INT_SRC_OVR (bus 0 bus_irq 9 global_irq 9 high level)',
            '[    0.015000] Using ACPI (MADT) for SMP configuration information',
            '[    0.016000] smpboot: Allowing 12 CPUs, 0 hotplug CPUs',
            '[    0.017000] PM: hibernation: Registered nosave memory',
            '[    0.018000] [mem 0xc0000000-0xffffffff] available for PCI devices',
            '[    0.019000] clocksource: refined-jiffies: mask: 0xffffffff max_cycles',
            '[    0.020000] setup_percpu: NR_CPUS:320 nr_cpumask_bits:320 nr_cpu_ids:12',
            '[    0.021000] percpu: Embedded 56 pages/cpu s192512 r8192 d28672 u262144',
            '[    0.022000] Built 1 zonelists, mobility grouping on. Total pages: 16515011',
            '[    0.023000] Policy zone: Normal',
            '[    0.024000] Kernel command line: BOOT_IMAGE=/boot/vmlinuz-linux quiet',
            '[    0.025000] printk: log_buf_len individual max contribution: 4096 bytes',
            '[    0.026000] printk: log_buf_len total cpu_extra contributions: 45056 bytes',
            '[    0.027000] Memory: 65865844K/67108044K available',
            '[    0.028000] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=12, Nodes=1',
            '[    0.029000] ftrace: allocating 45123 entries in 177 pages',
            '[    0.030000] ftrace: allocated 177 pages with 4 groups',
            '[    0.031000] rcu: Hierarchical RCU implementation.',
            '[    0.032000] rcu: RCU restricting CPUs from NR_CPUS=320 to nr_cpu_ids=12',
            '[    0.033000] rcu: RCU calculated value of scheduler-enlistment delay is 30 jiffies',
            '[    0.034000] rcu: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=12',
            '[    0.035000] NR_IRQS: 20736, nr_irqs: 2152, preallocated irqs: 16',
            '[    0.036000] Console: colour dummy device 80x25',
            '[    0.037000] printk: console [tty0] enabled',
            '[    0.038000] ACPI: Core revision 20220331',
            '[    0.039000] clocksource: hpet: mask: 0xffffffff max_cycles: 0xffffffff',
            '[    0.040000] APIC: Switch to symmetric I/O mode setup',
            '[    0.041000] x2apic: IRQ remapping doesn\'t support X2APIC mode',
            '[    0.042000] Switched APIC routing to physical flat',
            '[    0.043000] ..TIMER: vector=0x30 apic1=0 pin1=2 apic2=-1 pin2=-1',
            '[    0.044000] clocksource: tsc-early: mask: 0xffffffffffffffff max_cycles',
            '[    0.045000] Calibrating delay loop (skipped), value calculated using timer frequency.. 6800.00 BogoMIPS',
            '[    0.046000] pid_max: default: 32768 minimum: 301',
            '[    0.047000] LSM: Security Framework initializing',
            '[    0.048000] landlock: Up and running.',
            '[    0.049000] Yama: becoming mindful.',
            '[    0.050000] AppArmor: AppArmor initialized',
            '[    0.051000] Mount-cache hash table entries: 262144 (order: 9, 2097152 bytes, linear)',
            '[    0.052000] Mountpoint-cache hash table entries: 262144 (order: 9, 2097152 bytes, linear)',
            '[    0.053000] CPU0: Thermal monitoring enabled (TM1)',
            '[    0.054000] process: using mwait in idle threads',
            '[    0.055000] Last level iTLB entries: 4KB 512, 2MB 7, 4MB 7',
            '[    0.056000] Last level dTLB entries: 4KB 512, 2MB 32, 4MB 32, 1GB 0',
            '[    0.057000] Spectre V1 : Mitigation: usercopy/swapgs barriers and __user pointer sanitization',
            '[    0.058000] Spectre V2 : Mitigation: Retpolines',
            '[    0.059000] Spectre V2 : Spectre v2 / SpectreRSB mitigation: Filling RSB on context switch',
            '[    0.060000] Speculative Store Bypass: Mitigation: Speculative Store Bypass disabled',
            '[    0.061000] SRBDS: Mitigation: Microcode',
            '[    0.062000] MDS: Mitigation: Clear CPU buffers',
            '[    0.063000] x86/fpu: Supporting XSAVE feature 0x001: \'x87 floating point registers\'',
            '[    0.064000] x86/fpu: Supporting XSAVE feature 0x002: \'SSE registers\'',
            '[    0.065000] x86/fpu: Supporting XSAVE feature 0x004: \'AVX registers\'',
            '[    0.066000] x86/fpu: xstate_offset[2]:  576, xstate_sizes[2]:  256',
            '[    0.067000] x86/fpu: Enabled xstate features 0x7, context size is 832 bytes',
            '[    0.068000] Freeing SMP alternatives memory: 36K',
            '[    0.069000] smpboot: CPU0: Intel(R) Core(TM) i7-12700K CPU @ 3.40GHz (family: 0x6, model: 0x97, stepping: 0x2)',
            '[    0.070000] cblist_init_generic: Setting adjustable number of callback queues.',
            '[    0.071000] cblist_init_generic: Setting shift to 4 and lim to 1.',
            '[    0.072000] Performance Events: PEBS fmt4+, Alderlake events, 32-deep LBR, full-width counters',
            '[    0.073000] ... version:                5',
            '[    0.074000] ... bit width:              48',
            '[    0.075000] ... generic registers:      8',
            '[    0.076000] ... value mask:             0000ffffffffffff',
            '[    0.077000] ... max period:             00007fffffffffff',
            '[    0.078000] ... fixed-purpose events:   4',
            '[    0.079000] ... event mask:             00000007000000ff',
            '[    0.080000] rcu: Hierarchical SRCU implementation.',
            '[    0.081000] NMI watchdog: Enabled. Permanently consumes one hw-PMU counter.',
            '[    0.082000] smp: Bringing up secondary CPUs ...',
            '[    0.083000] x86: Booting SMP configuration:',
            '[    0.084000] .... node  #0, CPUs:        #1  #2  #3  #4  #5  #6  #7  #8  #9 #10 #11',
            '[    0.085000] smp: Brought up 1 node, 12 CPUs',
            '[    0.086000] smpboot: Max logical packages: 1',
            '[    0.087000] smpboot: Total of 12 processors activated (81600.00 BogoMIPS)',
            '[    0.088000] devtmpfs: initialized',
            '[    0.089000] x86/mm: Memory block size: 128MB',
            '[    0.090000] PM: Registering ACPI NVS region [mem 0xbf79e000-0xbf7cffff] (204800 bytes)',
            '[    0.091000] clocksource: jiffies: mask: 0xffffffff max_cycles: 0xffffffff',
            '[    0.092000] futex hash table entries: 4096 (order: 6, 262144 bytes, linear)',
            '[    0.093000] pinctrl core: initialized pinctrl subsystem',
            '[    0.094000] PM: RTC time: 20:30:15, date: 2025-08-10',
            '[    0.095000] NET: Registered PF_NETLINK/PF_ROUTE protocol family',
            '[    0.096000] DMA: preallocated 4096 debug entries',
            '[    0.097000] DMA: debugging enabled by kernel config',
            '[    0.098000] audit: initializing netlink subsys (disabled)',
            '[    0.099000] audit: type=2000 audit(1691699415.099:1): state=initialized',
            '[    0.100000] thermal_sys: Registered thermal governor \'fair_share\'',
            '[    0.101000] thermal_sys: Registered thermal governor \'bang_bang\'',
            '[    0.102000] thermal_sys: Registered thermal governor \'step_wise\'',
            '[    0.103000] thermal_sys: Registered thermal governor \'user_space\'',
            '[    0.104000] cpuidle: using governor ladder',
            '[    0.105000] cpuidle: using governor menu',
            '[    0.200000] 1ypi CyberSec System initialized successfully',
            '[    0.201000] Loading security modules...',
            '[    0.202000] Forensics toolkit ready',
            '[    0.203000] Penetration testing framework loaded',
            '[    0.204000] Network security protocols active',
            '[    0.205000] Welcome, 1ypi'
        ];

        function createBeepSound() {
            const audio = new Audio('beep.wav');

            const audioClone = audio.cloneNode();

            audioClone.volume = 0.5;

            audioClone.play().catch(error => {
                console.error('Error playing beep sound:', error);
            });

            return audioClone;
        }

function showBootPrompt() {
    const bootScreen = document.getElementById('bootScreen');
    const bootLogsContainer = document.getElementById('bootLogs');
    const bootProgress = document.querySelector('.boot-progress');

    bootProgress.style.display = 'none';

    const promptLine = document.createElement('div');
    promptLine.className = 'boot-line info';
    promptLine.innerHTML = 'Boot system? (Y/n): <span class="cursor">_</span>';
    bootLogsContainer.appendChild(promptLine);
    bootScreen.style.display = 'flex';

    // Add virtual keyboard handlers
    document.querySelectorAll('.virtual-key').forEach(key => {
        key.addEventListener('click', function() {
            const keyValue = this.getAttribute('data-key');
            promptLine.innerHTML = `Boot system? (Y/n): ${keyValue}`;
            
            // Start boot sequence immediately for Y
            if(keyValue.toLowerCase() === 'y') {
                const confirmLine = document.createElement('div');
                confirmLine.className = 'boot-line ok';
                confirmLine.textContent = 'Starting boot sequence...';
                bootLogsContainer.appendChild(confirmLine);
                
                setTimeout(() => {
                    startBootSequence();
                }, 500);
            } 
            // Redirect for N
            else if(keyValue.toLowerCase() === 'n') {
                const redirectLine = document.createElement('div');
                redirectLine.className = 'boot-line info';
                redirectLine.textContent = 'Redirecting to Google...';
                bootLogsContainer.appendChild(redirectLine);
                
                setTimeout(() => {
                    window.location.href = 'https://google.com';
                }, 1000);
            }
        });
    });

    // Keep existing keyboard handler for desktop
    function handleKeyPress(e) {
        const cursor = promptLine.querySelector('.cursor');

        if (e.key === 'Enter') {

            cursor.remove();

            if (userInput.toLowerCase() === 'n') {

                promptLine.innerHTML = 'Boot system? (Y/n): n';

                const redirectLine = document.createElement('div');
                redirectLine.className = 'boot-line info';
                redirectLine.textContent = 'Redirecting to Google...';
                bootLogsContainer.appendChild(redirectLine);

                setTimeout(() => {
                    window.location.href = 'https://google.com';
                }, 1000);
            } else {

                promptLine.innerHTML = 'Boot system? (Y/n): ' + (userInput || 'y');

                const confirmLine = document.createElement('div');
                confirmLine.className = 'boot-line ok';
                confirmLine.textContent = 'Starting boot sequence...';
                bootLogsContainer.appendChild(confirmLine);

                document.removeEventListener('keydown', handleKeyPress);

                setTimeout(() => {
                    startBootSequence();
                }, 800);
            }
        } else if (e.key.length === 1 && userInput.length === 0) {

            userInput = e.key;
            promptLine.innerHTML = `Boot system? (Y/n): ${userInput}<span class="cursor">_</span>`;
        } else if (e.key === 'Backspace' && userInput.length > 0) {

            userInput = '';
            promptLine.innerHTML = 'Boot system? (Y/n): <span class="cursor">_</span>';
        }
    }

    document.addEventListener('keydown', handleKeyPress);
}

        function startBootSequence() {
            const bootLogsContainer = document.getElementById('bootLogs');
            const enterScreen = document.getElementById('enterScreen');
            const bootProgress = document.querySelector('.boot-progress');

            bootProgress.style.display = 'block';

            let currentLine = 0;

            function addBootLine() {
                if (currentLine >= bootLogs.length) {

                    setTimeout(() => {
                        document.getElementById('bootScreen').style.opacity = '0';
                        setTimeout(() => {
                            document.getElementById('bootScreen').style.display = 'none';
                            enterScreen.style.display = 'flex';
                            showCursor();

                            const startSound = new Audio('start.mp3');
                            startSound.volume = 0.5; 
                            startSound.play().catch(err => console.log('Audio play failed:', err));
                        }, 0);
                    }, 0);
                    return;
                }

                const line = document.createElement('div');
                line.className = 'boot-line info';
                line.textContent = bootLogs[currentLine];

                if (bootLogs[currentLine].includes('OK') || bootLogs[currentLine].includes('successful')) {
                    line.className = 'boot-line ok';
                } else if (bootLogs[currentLine].includes('Warning')) {
                    line.className = 'boot-line warning';
                } else if (bootLogs[currentLine].includes('Error')) {
                    line.className = 'boot-line error';
                } else if (bootLogs[currentLine].includes('[')) {
                    line.className = 'boot-line timestamp';
                }

                bootLogsContainer.appendChild(line);

                try {
                    createBeepSound();
                } catch (e) {
                    console.log('Audio not available');
                }

                bootLogsContainer.scrollTop = bootLogsContainer.scrollHeight;

                currentLine++;

                const delay = Math.random() * 30 + 10;
                setTimeout(addBootLine, delay);
            }

            setTimeout(addBootLine, 500);
        }

        document.addEventListener('DOMContentLoaded', () => {
            showBootPrompt();
        });

        document.addEventListener('click', (e) => {
            if (e.target.id === 'enterButton') {

                window.scrollTo(0, 0);

                const enterScreen = document.getElementById('enterScreen');
                const mainContent = document.getElementById('mainContent');
                const ambientSound = document.getElementById('ambientSound');

                ambientSound.play().catch(e => console.log('Audio play failed:', e));

                createSystemBoot();

                enterScreen.style.opacity = '0';
                setTimeout(() => {
                    enterScreen.style.display = 'none';
                    mainContent.style.opacity = '1';

                    setTimeout(() => animateElements(), 1000);
                }, 1000);
            }
        });

        function createSystemBoot() {
            const bootMessages = [
                'Initializing secure connection...',
                'Loading encryption protocols...',
                'Scanning for vulnerabilities...',
                'System ready. Welcome, 1ypi.'
            ];

            let index = 0;
            const bootInterval = setInterval(() => {
                if (index < bootMessages.length) {
                    console.log(bootMessages[index]);
                    index++;
                } else {
                    clearInterval(bootInterval);
                }
            }, 300);
        }

        function animateElements() {
            const elements = [
                document.querySelector('.username'),
                document.querySelector('.bio'),
                document.querySelector('.terminal'),
                ...document.querySelectorAll('.skill-card'),
                ...document.querySelectorAll('.stat-item'),
                ...document.querySelectorAll('.social-icon'),
                document.querySelector('.footer')
            ];

            elements.forEach((el, index) => {
                if (el) {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    }, index * 150);
                }
            });

            setTimeout(() => {
                animateTerminalText();
            }, 1500);
        }

        function animateTerminalText() {
            const commands = document.querySelectorAll('.command');
            const outputs = document.querySelectorAll('.output');

            commands.forEach((cmd, index) => {
                setTimeout(() => {
                    typeText(cmd, cmd.textContent, 50);
                    setTimeout(() => {
                        outputs[index].style.opacity = '1';
                    }, cmd.textContent.length * 50 + 200);
                }, index * 2000);
            });
        }

        function typeText(element, text, speed = 100) {
            element.textContent = '';
            element.style.borderRight = '1px solid #00ff00';
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                    element.style.borderRight = 'none';
                }
            }, speed);
        }

        function createMatrix() {
            const matrix = document.querySelector('.matrix');
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]<>?/\\|~`';

            for (let i = 0; i < 100; i++) {
                const char = document.createElement('div');
                char.className = 'matrix-char';
                char.textContent = chars[Math.floor(Math.random() * chars.length)];
                char.style.left = Math.random() * window.innerWidth + 'px';
                char.style.animationDelay = Math.random() * 12 + 's';
                char.style.animationDuration = (Math.random() * 8 + 8) + 's';
                char.style.fontSize = (Math.random() * 8 + 10) + 'px';
                matrix.appendChild(char);
            }
        }

        createMatrix();

        setInterval(() => {
            const matrixChars = document.querySelectorAll('.matrix-char');
            matrixChars.forEach(char => {
                const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]<>?/\\|~`';
                if (Math.random() < 0.1) {
                    char.textContent = chars[Math.floor(Math.random() * chars.length)];
                }
            });
        }, 200);

        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const finalValue = target.textContent;
                        const isNumeric = !isNaN(finalValue.charAt(0));

                        if (isNumeric) {
                            const numericValue = parseInt(finalValue);
                            animateValue(target, 0, numericValue, 2000);
                        }

                        observer.unobserve(target);
                    }
                });
            });

            counters.forEach(counter => observer.observe(counter));
        }

        function animateValue(element, start, end, duration) {
            const startTime = performance.now();
            const suffix = element.textContent.replace(/[0-9]/g, '');

            function updateValue(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(start + (end - start) * progress);

                element.textContent = current + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateValue);
                }
            }

            requestAnimationFrame(updateValue);
        }

        setTimeout(() => {
            animateCounters();
        }, 3000);

        setInterval(() => {
            if (Math.random() < 0.05) {
                screenGlitch();
            }
        }, 15000);

        function screenGlitch() {
            const originalFilter = document.body.style.filter;
            document.body.style.filter = 'hue-rotate(180deg) invert(0.1)';
            document.body.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;

            setTimeout(() => {
                document.body.style.filter = originalFilter;
                document.body.style.transform = 'translate(0, 0)';
            }, 100);
        }

        let ticking = false;
        function optimizedScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {

                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener('scroll', optimizedScroll);

        console.log(`
        ██╗██╗   ██╗██████╗ ██╗
        ██║╚██╗ ██╔╝██╔══██╗██║
        ██║ ╚████╔╝ ██████╔╝██║
        ██║  ╚██╔╝  ██╔═══╝ ██║
        ██║   ██║   ██║     ██║
        ╚═╝   ╚═╝   ╚═╝     ╚═╝

    Welcome to 1ypi's portfolio!
    Type 'help' for available commands.
        `);

        window.help = function() {
            console.log(`
Available commands:
- glitch() - Trigger screen glitch effect
- matrix() - Toggle matrix effect
- stats() - Show performance stats
- about() - About this site
            `);
        };

        window.glitch = screenGlitch;
        window.matrix = function() {
            const matrix = document.querySelector('.matrix');
            matrix.style.opacity = matrix.style.opacity === '0' ? '0.05' : '0';
        };
        window.stats = function() {
            console.log('Performance: ' + Math.round(performance.now()) + 'ms');
            console.log('DOM elements: ' + document.querySelectorAll('*').length);
        };
        window.about = function() {
            console.log('1ypi Cybersecurity Portfolio v1.0 - Built with pure HTML/CSS/JS');
        };

        const preloadImages = () => {

        };

        document.addEventListener('DOMContentLoaded', () => {
            preloadImages();
        });

function showCursor() {
    const cursor = document.querySelector('.cursor');
    cursor.style.display = 'block';
    setTimeout(() => {
        cursor.style.opacity = '1';
    }, 100);
}

function startBootSequence() {
    const bootLogsContainer = document.getElementById('bootLogs');
    const enterScreen = document.getElementById('enterScreen');

    let currentLine = 0;

    function addBootLine() {
        if (currentLine >= bootLogs.length) {

            setTimeout(() => {
                document.getElementById('bootScreen').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('bootScreen').style.display = 'none';
                    enterScreen.style.display = 'flex';
                    showCursor();

                    const startSound = new Audio('start.mp3');
                    startSound.volume = 0.5; 
                    startSound.play().catch(err => console.log('Audio play failed:', err));
                }, 0);
            }, 0);
            return;
        }

        const line = document.createElement('div');
        line.className = 'boot-line info';
        line.textContent = bootLogs[currentLine];

        if (bootLogs[currentLine].includes('OK') || bootLogs[currentLine].includes('successful')) {
            line.className = 'boot-line ok';
        } else if (bootLogs[currentLine].includes('Warning')) {
            line.className = 'boot-line warning';
        } else if (bootLogs[currentLine].includes('Error')) {
            line.className = 'boot-line error';
        } else if (bootLogs[currentLine].includes('[')) {
            line.className = 'boot-line timestamp';
        }

        bootLogsContainer.appendChild(line);

        try {
            createBeepSound();
        } catch (e) {
            console.log('Audio not available');
        }

        bootLogsContainer.scrollTop = bootLogsContainer.scrollHeight;

        currentLine++;

        const delay = Math.random() * 30 + 10;
        setTimeout(addBootLine, delay);
    }

    setTimeout(addBootLine, 500);
}

document.querySelectorAll('.virtual-key').forEach(key => {
    key.addEventListener('click', function() {
        const keyValue = this.getAttribute('data-key');
        
        // First simulate the letter key press
        const keyEvent = new KeyboardEvent('keydown', {
            key: keyValue
        });
        document.dispatchEvent(keyEvent);
        
        // Then automatically simulate Enter key press after a short delay
        setTimeout(() => {
            const enterEvent = new KeyboardEvent('keydown', {
                key: 'Enter'
            });
            document.dispatchEvent(enterEvent);
        }, 100);
    });
});
