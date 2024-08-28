document.addEventListener('DOMContentLoaded', () =>
    {
    
        
        // Arrastre de la ventana
        const terminalContainer = document.getElementById('terminal-container');
        const titleBar = document.getElementById('title-bar');
        let isDragging = false;
        let offsetX, offsetY;

        titleBar.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - terminalContainer.offsetLeft;
            offsetY = e.clientY - terminalContainer.offsetTop;
            terminalContainer.style.position = 'absolute';
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                terminalContainer.style.left = `${e.clientX - offsetX}px`;
                terminalContainer.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Input/Output management
        const output = document.getElementById('output');
        const input = document.getElementById('input');
        const promptElement = document.getElementById('prompt');
    
        const normalPrompt = 'user@cv-aaronrzt:~$ ';
        const selectionPrompt = 'Select a project [0...3], 8 to see the list or 9 to cancel: ';
        let isInSelectionMode = false;
    
        function displayPrompt(promptText = normalPrompt) {
            promptElement.textContent = promptText;
            promptElement.style.color = '#46AF1D';
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
                    } else if (['0', '1', '2', '3', '8'].includes(command)) {
                        output.innerHTML += `<div>${selectionPrompt}${command}</div>`;
                        switch(command) {
                            case '0':
                                output.innerHTML += `<div>
Navigation with Obstacle Avoidance for Manchester Robotics
<br>February – June 2023
<br>Developed Intelligent Robotics for Navigation with Obstacle Avoidance using Python in ROS.<div class="padded-list">
-Developed with Python in ROS an intelligent navigation system, which used obstacle avoidance.
<br>-Tuned a Kalman Filter for precise state estimations, being aware of noise and uncertainties.
<br>-Implemented Bug Algorithms for precision in obstacle avoidance.
<br>-Validated through Gazebo simulations and deployed on the Jetson Nano.
</div>
                        </div>`;
                                break;
                            case '1':
                                output.innerHTML += `<div>
Industrial Internet of Things (IIoT) Project for Laser & Manufacturing
<br>September – December 2023
<br>Developed a Python-based platform for monitoring an industrial manufacturing process.<div class="padded-list">
-Implemented a system using Node-RED and Python in a Raspberry Pi to monitor physical variables.
<br>-Analyzed the data and used it to display relevant information in a user-friendly dashboard to aid decision-making.
</div>
                        </div>`;
                                break;
                            case '2':
                                output.innerHTML += `<div>
Autonomous Vehicle Navigation for Manchester Robotics and NVIDIA
<br>March – June 2022
<br>Developed Intelligent Robotics for Autonomous Vehicle Navigation using Python in ROS.<div class="padded-list">
-Developed and fine-tuned a neural network model for accurate traffic sign recognition and decision-making.
<br>-Applied advanced Computer Vision methods for high-precision line detection using OpenCV.
<br>-Validated through Gazebo simulations and deployed on the Jetson Nano.
</div>
                        </div>`;
                                break;
                            case '3':
                                output.innerHTML += `<div>
Audio Player in ATMega2560
<br>January – June 2021
<br>Developed a .wav file player, writing C code directly into an ATMega2560 chip.<div class="padded-list">
-Designed and tested hardware through simulations in Proteus 8 before assembling it.
<br>-Thoroughly tested the code to validate the system’s performance using files of varying size.
<br>-Utilized the chip’s internal clock to ensure precise timing for each instruction.
</div>
                        </div>`;
                                break;
                                case '8':
                                    output.innerHTML += `<div>
Type [0...3] to select a project and read its details or type 9 to cancel.

0. Navigation with Obstacle Avoidance for Manchester Robotics
1. Industrial Internet of Things (IIoT) Project for Laser & Manufacturing
2. Autonomous Vehicle Navigation for Manchester Robotics and NVIDIA
3. Audio Player in ATMega2560

    </div>`;
                                    break;
                            default:
                                output.innerHTML += `<div>${selectionPrompt}${command}</div>`;
                                break;
                        }
                    } else {
                        output.innerHTML += `<div>${selectionPrompt}${command}</div>`;
                        output.innerHTML += `<div>Invalid selection. Type [0...3] to select a project or 9 to cancel.</div>`;
                    }
                } else {
                    //Change to #6A9752
                    output.innerHTML += `<span style="color: #46AF1D;">${normalPrompt}</span><span style="color: #FFF;">${command}</span>`;
                    if (command === '') {
                        output.innerHTML += '';
                    } else if (command.toLowerCase() === 'clear') {
                        output.innerHTML = '';
                    } else if (command.toLowerCase() === 'help') {
                        output.innerHTML += `<div>
Aarón Gonzalo Ramírez Tafolla | CV as of August 2024

These commands are defined internally.  Type 'help' to see this list.

clear
disclaimer
education
help
contact
leadership
merits
projects
skills
work
                        </div>`;
                    } else if (command.toLowerCase() === 'disclaimer'){
                        output.innerHTML += `<div>
                        
Background image: Mirror by Uday Nakade

Project under GNU GENERAL PUBLIC LICENSE Version 3
                        
                        </div>`;
                    } else if (command.toLowerCase() === 'education'){
                        output.innerHTML += `<div>
ITESM, Campus Querétaro, México
August 2019 – June 2023
    B.S., Major in Digital Systems and Robotics Engineering
    Minor in 4.0 Systems and Technologies
    Grade: 92/100, GPA: 3.7
    <a href="https://certificados.tec.mx/certificate/828e105a490957388d37b5d6009525f6" target="_blank" style="color: #fff;">Certificate</a>
                        </div>`;
                    } else if (command.toLowerCase() === 'contact'){
                        output.innerHTML += `<div>
Aarón Gonzalo Ramírez Tafolla
    +52 462 146 08 59
    aaronrzt@outlook.com
    <a href="https://github.com/aaronrzt/" target="_blank" style="color: #fff;">https://github.com/aaronrzt/</a>
    <a href="https://www.linkedin.com/in/aaronrzt/" target="_blank" style="color: #fff;">https://www.linkedin.com/in/aaronrzt/</a>
                        </div>`;
                    } else if (command.toLowerCase() === 'leadership'){
                        output.innerHTML += `<div>
Vortex, 2023 VEX Robotics World Championship
<br>August 2022 – April 2023
<br>Development of two robots to compete in the Spin Up VEX Challenge. <div class="padded-list">
- Engineered and constructed robots with a focus on speed and functionality for competition settings.
<br>- Implemented algorithms in C++ for autonomous and control-driven programs, used control systems and input data collected from sensors.
</div>
                        </div>`;
                    } else if (command.toLowerCase() === 'merits'){
                        output.innerHTML += `<div><div class="padded-list">
<br>2023 – 1st place in Expo Ingenierías with IIoT project.
<br>2023 – Judges Champions in National VEX Robotics Competition.
<br>2022 – Participation in Expo Ingenierías with a vehicle with autonomous navigation. </div>
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
<br>July 2023 – January 2024
<br>Software development for industrial manufacturing applications (contract work).<div class="padded-list">
-Planned and developed the logic behind manufacturing processes using Structured Text and Ladder Logic.
<br>-Planned and taught courses on proprietary technologies.
<br>-Communicated directly with clients to work out project requirements and provided customer support (hardware and software).
</div>
<br>General Electric Aerospace, Software Verification Intern
<br>August 2022 – January 2023
<br>Unit Testing for software modules destined for aerospace engines.<div class="padded-list">
-Designed and implemented unit test scripts in VBA and Python to automate verification tasks.
</div>
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
        output.innerHTML += `<div>Welcome! Type 'help' to get started.</div>`;
        displayPrompt();
    });