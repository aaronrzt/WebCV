document.addEventListener('DOMContentLoaded', () =>
    {
    
        //                                                                              TODO
        // Drag the terminal
        /*
        const terminal = document.getElementById('terminal-container');
        const titleBar = document.getElementById('title-bar');
    
        let isDragging = false;
        let startX, startY, startLeft, startTop;
    
        let offsetX, offsetY;
    
        titleBar.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            const rect = terminal.getBoundingClientRect();
            startLeft = rect.left;
            startTop = rect.top;
            offsetX = startX - startLeft; // Calcula el offset en X
            offsetY = startY - startTop;   // Calcula el offset en Y
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    
        function onMouseMove(e) {
            if (isDragging) {
                const deltaX = e.clientX - startX;
                const deltaY = e.clientY - startY;
                terminal.style.left = `${startLeft + deltaX}px`;
                terminal.style.top = `${startTop + deltaY}px`;
            }
        }
    
        function onMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    
        */
        // Input/Output management
        const output = document.getElementById('output');
        const input = document.getElementById('input');
        const promptElement = document.getElementById('prompt');
        const titleBar = document.getElementById('title-bar');
    
        const normalPrompt = 'user@cv-aaronrzt:~$ ';
        const selectionPrompt = 'Selection: ';
        let isInSelectionMode = false;
    
        function displayPrompt(promptText = normalPrompt) {
            promptElement.textContent = promptText;
            input.focus();
            output.scrollTop = output.scrollHeight;
        }
    
        terminal.addEventListener('click', () => {
            input.focus();
        });
    
        titleBar.addEventListener('click', () => {
            input.focus();
        });
    
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                const command = input.value.trim();
                input.value = '';
    
                if (isInSelectionMode) {
                    if (command === '9') {
                        isInSelectionMode = false;
                        output.innerHTML += `<div>${selectionPrompt}${command}</div>`;
                        output.innerHTML += `<div>Exiting project selection.</div>`;
                        displayPrompt();
                    } else if (['0', '1', '2', '3'].includes(command)) {
                        output.innerHTML += `<div>${selectionPrompt}${command}</div>`;
                        switch(command) {
                            case '0':
                                output.innerHTML += `<div>
Navigation with Obstacle Avoidance for Manchester Robotics
February – June 2023
Developed Intelligent Robotics for Navigation with Obstacle Avoidance using Python in ROS.
    <ul class="padded-list">
        <li>Developed with Python in ROS an intelligent navigation system, which used obstacle avoidance.</li>
        <li>Tuned a Kalman Filter for precise state estimations, being aware of noise and uncertainties.</li>
        <li>Implemented Bug Algorithms for precision in obstacle avoidance.</li>
        <li>Validated through Gazebo simulations and deployed on the Jetson Nano.</li>
    </ul>
                        </div>`;
                                break;
                            case '1':
                                output.innerHTML += `<div>
Industrial Internet of Things (IIoT) Project for Laser & Manufacturing
September – December 2023
Developed a Python-based platform for monitoring an industrial manufacturing process.
    <ul class="padded-list">
        <li>Implemented a system using Node-RED and Python in a Raspberry Pi to monitor physical variables.</li>
        <li>Analyzed the data and used it to display relevant information in a user-friendly dashboard to aid decision-making.</li>
    </ul>
                        </div>`;
                                break;
                            case '2':
                                output.innerHTML += `<div>
Autonomous Vehicle Navigation for Manchester Robotics and NVIDIA
March – June 2022
Developed Intelligent Robotics for Autonomous Vehicle Navigation using Python in ROS.
    <ul class="padded-list">
        <li>Developed and fine-tuned a neural network model for accurate traffic sign recognition and decision-making.</li>
        <li>Applied advanced Computer Vision methods for high-precision line detection using OpenCV.</li>
        <li>Validated through Gazebo simulations and deployed on the Jetson Nano.</li>
    </ul>
                        </div>`;
                                break;
                            case '3':
                                output.innerHTML += `<div>
Audio Player in ATMega2560
January – June 2021
Developed a .wav file player, writing C code directly into an ATMega2560 chip.
    <ul class="padded-list">
        <li>Designed and tested hardware through simulations in Proteus 8 before assembling it.</li>
        <li>Thoroughly tested the code to validate the system’s performance using files of varying size.</li>
        <li>Utilized the chip’s internal clock to ensure precise timing for each instruction.</li>
    </ul>
                        </div>`;
                                break;
                            default:
                                output.innerHTML += `<div>${selectionPrompt}${command}</div>`;
                                output.innerHTML += `<div>Retard Invalid selection. Type [0...3] to select a project or 9 to cancel.</div>`;
                                break;
                        }
                    } else {
                        output.innerHTML += `<div>${selectionPrompt}${command}</div>`;
                        output.innerHTML += `<div>Invalid selection. Type [0...3] to select a project or 9 to cancel.</div>`;
                    }
                } else {
                    output.innerHTML += `<div>${normalPrompt}${command}</div>`;
                    if (command === '') {
                        output.innerHTML += '';
                    } else if (command.toLowerCase() === 'clear') {
                        output.innerHTML = '';
                    } else if (command.toLowerCase() === 'help') {
                        output.innerHTML += `<div>
Aarón Gonzalo Ramírez Tafolla | CV as of August 2024

These commands are defined internally.  Type 'help' to see this list.

clear
education
help
leadership
merits
projects
skills
work
                        </div>`;
                    } else if (command.toLowerCase() === 'education'){
                        output.innerHTML += `<div>
ITESM, Campus Querétaro, México
August 2019 – June 2023
B.S., Major in Digital Systems and Robotics Engineering
    <ul class="padded-list">
        <li>Minor in 4.0 Systems and Technologies</li>
        <li>Grade: 92/100, GPA: 3.7</li>
        <li><a href="https://certificados.tec.mx/certificate/828e105a490957388d37b5d6009525f6" target="_blank" style="color: #fff;">Certificate</a></li>
    </ul>
                        </div>`;
                    } else if (command.toLowerCase() === 'leadership'){
                        output.innerHTML += `<div>
Vortex, 2023 VEX Robotics World Championship
August 2022 – April 2023
Development of two robots to compete in the Spin Up VEX Challenge.
    <ul class="padded-list">
        <li>Engineered and constructed robots with a focus on speed and functionality for competition settings.</li>
        <li>Implemented algorithms in C++ for autonomous and control-driven programs, used control systems and input data collected from sensors.</li>
    </ul>
                        </div>`;
                    } else if (command.toLowerCase() === 'merits'){
                        output.innerHTML += `<div>
2023 – 1st place in Expo Ingenierías with IIoT project
2022 – Judges Champions in National VEX Robotics Competition
2022 – Participation in Expo Ingenierías with a vehicle with autonomous navigation
                        </div>`;
                    } else if (command.toLowerCase() === 'projects') {
                        isInSelectionMode = true;
                        output.innerHTML += `<div>
Type [0...3] to select a project and read its details or type 9 to cancel.

0. Navigation with Obstacle Avoidance for Manchester Robotics
1. Industrial Internet of Things (IIoT) Project for Laser & Manufacturing
2. Autonomous Vehicle Navigation for Manchester Robotics and NVIDIA
3. Audio Player in ATMega2560

    </div>`;
                        displayPrompt(selectionPrompt);
                        return;
                    } else if (command.toLowerCase() === 'skills'){
                        output.innerHTML += `<div>
Python, C++, SQL, C, VHDL, JavaScript, CSS, HTML, Structured Text, Ladder Logic

Git, Linux, ROS, Gazebo, OpenCV, CUDA, TensorFlow, PyTorch, Keras, Pandas, Excel, AWS, MATLAB, Node-RED, Autodesk Suite, Selenium
                        </div>`;
                    } else if (command.toLowerCase() === 'work'){
                        output.innerHTML += `<div>
B&R (ABB Group), Application Engineer
July 2023 – January 2024
Software development for industrial manufacturing applications (contract work).
    <ul class="padded-list">
        <li>Planned and developed the logic behind manufacturing processes using Structured Text and Ladder Logic.</li>
        <li>Planned and taught courses on proprietary technologies.</li>
        <li>Communicated directly with clients to work out project requirements and provided customer support (hardware and software).</li>
    </ul>
General Electric Aerospace, Software Verification Intern
August 2022 – January 2023
Unit Testing for software modules destined for aerospace engines.
    <ul class="padded-list">
        <li>Designed and implemented unit test scripts in VBA and Python to automate verification tasks.</li>
    </ul>
                        </div>`;
                    } else {
                        output.innerHTML += `<div>${command}: command not found. Type 'help' for a list of commands.</div>`;
                    }
                }
                output.scrollTop = output.scrollHeight;
                if (!isInSelectionMode) {
                    displayPrompt();
                }
            }
        });
    
        displayPrompt();
    });