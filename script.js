document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // 1. CONFIGURAÇÃO INICIAL E VARIÁVEIS
    // =================================================================
    const canvas = document.getElementById('planner-canvas');
    const ctx = canvas.getContext('2d');
    const mapSelector = document.getElementById('map-selector');
    const lancersList = document.getElementById('lancers-list');
    const utilitiesList = document.getElementById('utilities-list');
    const penToolBtn = document.getElementById('pen-tool');
    const eraserToolBtn = document.getElementById('eraser-tool');
    const eraserSizeSlider = document.getElementById('eraser-size-slider');
    const colorPicker = document.getElementById('color-picker');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const mapContainer = document.getElementById('map-container');

    // --- MUDANÇA AQUI ---
    // Criamos uma constante para controlar o tamanho dos ícones no canvas.
    // Se quiser mudar o tamanho de novo, basta alterar este valor!
    const ICON_SIZE_ON_CANVAS = 60; // O valor anterior era 70

    let currentTool = 'pen';
    let isDrawing = false;
    let isDragging = false;
    let currentColor = colorPicker.value;
    let objectsOnCanvas = [];
    let selectedObject = null;
    let startX, startY;
    let eraserSize = parseInt(eraserSizeSlider.value); // Tamanho inicial da borracha
    const backgroundImage = new Image();

    const LANCERS = ['Aranha', 'Axônio', 'Broker', 'Chum', 'Corona', 'Dex', 'Hollowpoint', 'Jaguar', 'Kismet', 'Nitro', 'Pathojen', 'Serket', 'Sonar', 'Zéfiro'];
    const UTILITIES = ['Smoke', 'Incendiary', 'Flash'];

    // Estrutura de dados para as habilidades dos Lancers
    const LANCER_ABILITIES = {
        'Aranha': [
            { name: 'Teia Imobilizadora', imagePath: 'assets/lancers/habilidades/aranha_teia.png' },
            { name: 'Veneno Paralisante', imagePath: 'assets/lancers/habilidades/aranha_veneno.png' },
            { name: 'Aracnofobia', imagePath: 'assets/lancers/habilidades/aranha_aracnofobia.png' }
        ],
        'Axônio': [
            { name: 'Pulso Elétrico', imagePath: 'assets/lancers/habilidades/axonio_pulso.png' },
            { name: 'Sobrecarga', imagePath: 'assets/lancers/habilidades/axonio_sobrecarga.png' },
            { name: 'Campo de Força', imagePath: 'assets/lancers/habilidades/axonio_campo.png' }
        ],
        'Broker': [
            { name: 'Suborno', imagePath: 'assets/lancers/habilidades/broker_suborno.png' },
            { name: 'Mercado Negro', imagePath: 'assets/lancers/habilidades/broker_mercado.png' },
            { name: 'Fuga', imagePath: 'assets/lancers/habilidades/broker_fuga.png' }
        ],
        'Chum': [
            { name: 'Mordida', imagePath: 'assets/lancers/habilidades/chum_mordida.png' },
            { name: 'Esgoto', imagePath: 'assets/lancers/habilidades/chum_esgoto.png' },
            { name: 'Vomito', imagePath: 'assets/lancers/habilidades/chum_vomito.png' }
        ],
        'Corona': [
            { name: 'Raio Solar', imagePath: 'assets/lancers/habilidades/corona_raio.png' },
            { name: 'Cura', imagePath: 'assets/lancers/habilidades/corona_cura.png' },
            { name: 'Escudo de Luz', imagePath: 'assets/lancers/habilidades/corona_escudo.png' }
        ],
        'Dex': [
            { name: 'Hackear', imagePath: 'assets/lancers/habilidades/dex_hackear.png' },
            { name: 'Invisibilidade', imagePath: 'assets/lancers/habilidades/dex_invisibilidade.png' },
            { name: 'Virus', imagePath: 'assets/lancers/habilidades/dex_virus.png' }
        ],
         'Hollowpoint': [
            { name: 'Tiro Perfurante', imagePath: 'assets/lancers/habilidades/hollowpoint_tiro.png' },
            { name: 'Visão Aguçada', imagePath: 'assets/lancers/habilidades/hollowpoint_visao.png' },
            { name: 'Camuflagem', imagePath: 'assets/lancers/habilidades/hollowpoint_camuflagem.png' }
        ],
         'Jaguar': [
            { name: 'Salto', imagePath: 'assets/lancers/habilidades/jaguar_salto.png' },
            { name: 'Garras', imagePath: 'assets/lancers/habilidades/jaguar_garras.png' },
            { name: 'Faro', imagePath: 'assets/lancers/habilidades/jaguar_faro.png' }
        ],
         'Kismet': [
            { name: 'Teletransporte', imagePath: 'assets/lancers/habilidades/kismet_teletransporte.png' },
            { name: 'Inversão', imagePath: 'assets/lancers/habilidades/kismet_inversao.png' },
            { name: 'Duplicar', imagePath: 'assets/lancers/habilidades/kismet_duplicar.png' }
        ],
         'Nitro': [
            { name: 'Bomba', imagePath: 'assets/lancers/habilidades/nitro_bomba.png' },
            { name: 'SuperVelocidade', imagePath: 'assets/lancers/habilidades/nitro_velocidade.png' },
            { name: 'Escudo', imagePath: 'assets/lancers/habilidades/nitro_escudo.png' }
        ],
         'Pathojen': [
            { name: 'Doença', imagePath: 'assets/lancers/habilidades/pathojen_doenca.png' },
            { name: 'Cura', imagePath: 'assets/lancers/habilidades/pathojen_cura.png' },
            { name: 'Infectar', imagePath: 'assets/lancers/habilidades/pathojen_infectar.png' }
        ],
         'Serket': [
            { name: 'Veneno', imagePath: 'assets/lancers/habilidades/serket_veneno.png' },
            { name: 'Furtividade', imagePath: 'assets/lancers/habilidades/serket_furtividade.png' },
            { name: 'Cura', imagePath: 'assets/lancers/habilidades/serket_cura.png' }
        ],
         'Sonar': [
            { name: 'Pulso Sonar', imagePath: 'assets/lancers/habilidades/sonar_pulso.png' },
            { name: 'Ondas Sonoras', imagePath: 'assets/lancers/habilidades/sonar_ondas.png' },
            { name: 'Invisibilidade', imagePath: 'assets/lancers/habilidades/sonar_invisibilidade.png' }
        ],
        'Zéfiro': [
            { name: 'Tornado', imagePath: 'assets/lancers/habilidades/zefiro_tornado.png' },
            { name: 'Rajada de Vento', imagePath: 'assets/lancers/habilidades/zefiro_rajada.png' },
            { name: 'Planar', imagePath: 'assets/lancers/habilidades/zefiro_planar.png' }
        ],
    };

    let activeLancer = null; // Para controlar qual Lancer está ativo
    let abilityMenu = null;  // Para controlar o menu de habilidades

    function resizeCanvas() {
        const displayWidth = mapContainer.clientWidth;
        const displayHeight = mapContainer.clientHeight;
        canvas.width = displayWidth;
        canvas.height = displayHeight;

        redrawCanvas();
    }


    // =================================================================
    // 2. FUNÇÕES DE INICIALIZAÇÃO
    // =================================================================
    function populateLists() { /* ...código sem alteração... */
        LANCERS.forEach(name => {
            const icon = createDraggableIcon(name, 'lancer', `assets/lancers/${name}.PNG`);
            lancersList.appendChild(icon);
        });
        UTILITIES.forEach(name => {
            const icon = createDraggableIcon(name, 'utility', `assets/utils/${name}.PNG`);
            utilitiesList.appendChild(icon);
        });
    }
    function createDraggableIcon(name, type, imagePath) { /* ...código sem alteração... */
        const div = document.createElement('div');
        div.className = 'draggable-icon';
        div.draggable = true;
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = name;
        const span = document.createElement('span');
        span.textContent = name;
        div.appendChild(img);
        div.appendChild(span);
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', JSON.stringify({ name, type, imagePath }));
        });
        return div;
    }
    function loadMap() { /* ...código sem alteração... */ 
        const mapName = mapSelector.value;
        const imagePath = `assets/maps/${mapName}.PNG`;
        backgroundImage.src = imagePath;
        backgroundImage.onload = () => redrawCanvas();
        backgroundImage.onerror = () => {
            const errorMessage = `ERRO: Não foi possível carregar o mapa!\n\nVerifique se o arquivo existe em:\n${imagePath}`;
            console.error(errorMessage);
            alert(errorMessage);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
    }

    // =================================================================
    // 3. LÓGICA DO CANVAS E DESENHO
    // =================================================================
    function redrawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (backgroundImage.complete && backgroundImage.src) {
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        }
        objectsOnCanvas.forEach(obj => {
            if (obj.type === 'icon') {
                ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
                if (obj === selectedObject) {
                    ctx.strokeStyle = '#FFFF00';
                    ctx.lineWidth = 3;
                    ctx.strokeRect(obj.x, obj.y, obj.width, obj.height);
                }
            } else if (obj.type === 'path') { 
                drawPath(obj);
            }
            // Lógica de desenhar formas foi removida
        });
    }

    // Apenas a função de desenhar caminho livre permanece
    function drawPath(obj){
        ctx.beginPath();
        ctx.moveTo(obj.points[0].x, obj.points[0].y);
        obj.points.forEach(point => ctx.lineTo(point.x, point.y));
        ctx.strokeStyle = obj.color;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.stroke();
    }
    // Funções drawLine, drawRect, drawCircle foram removidas

    // =================================================================
    // 4. MANIPULAÇÃO DE EVENTOS
    // =================================================================
    canvas.addEventListener('dragover', (e) => e.preventDefault());
    
    canvas.addEventListener('drop', (e) => { 
        e.preventDefault(); 
        const data = JSON.parse(e.dataTransfer.getData('text/plain')); 
        const rect = canvas.getBoundingClientRect(); 
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top; 
        const iconImage = new Image(); 
        iconImage.src = data.imagePath; 
        iconImage.onload = () => { 
            const newIcon = {
                type: 'icon',
                name: data.name,
                img: iconImage,
                // --- MUDANÇA AQUI ---
                // Usamos a nossa nova constante para definir o tamanho e o centro do ícone
                x: x - (ICON_SIZE_ON_CANVAS / 2),
                y: y - (ICON_SIZE_ON_CANVAS / 2),
                width: ICON_SIZE_ON_CANVAS,
                height: ICON_SIZE_ON_CANVAS
            };
            objectsOnCanvas.push(newIcon);
            redrawCanvas();
        }; 
    });

    canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        selectedObject = getObjectAtPosition(mouseX, mouseY);

        if (selectedObject && selectedObject.type === 'icon') {
            isDragging = true;
            canvas.style.cursor = 'grabbing';
            startX = mouseX - selectedObject.x;
            startY = mouseY - selectedObject.y;
        } else {
            selectedObject = null;
            isDrawing = true;
            startX = mouseX;
            startY = mouseY;
            if (currentTool === 'pen') {
                objectsOnCanvas.push({ type: 'path', color: currentColor, points: [{ x: startX, y: startY }] });
            }
        }
        redrawCanvas();
    });
    
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Lógica do Menu de Habilidades (Hover)
        const objectUnderMouse = getObjectAtPosition(mouseX, mouseY);
        if (objectUnderMouse && objectUnderMouse.type === 'icon') {
            if (activeLancer !== objectUnderMouse) {
                activeLancer = objectUnderMouse;
                showAbilityMenu(activeLancer, mouseX, mouseY);
            }
            canvas.style.cursor = 'grab';
        } else {
            canvas.style.cursor = currentTool === 'eraser' ? 'cell' : 'crosshair';
            if (activeLancer) {
                hideAbilityMenu();
                activeLancer = null;
            }
        }
        if (!isDragging && !isDrawing) {
            return;
        }

        if (isDragging && selectedObject) {
            selectedObject.x = mouseX - startX;
            selectedObject.y = mouseY - startY;
        } else if (isDrawing) {
            if (currentTool === 'pen') {
                objectsOnCanvas[objectsOnCanvas.length - 1].points.push({ x: mouseX, y: mouseY });
            } else if (currentTool === 'eraser') {
                eraseAtPosition(mouseX, mouseY, eraserSize);
            }
        }
        redrawCanvas();
    });

    canvas.addEventListener('mouseup', (e) => {
        if (isDragging) {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const objectUnderMouse = getObjectAtPosition(mouseX, mouseY);
            canvas.style.cursor = objectUnderMouse ? 'grab' : 'crosshair';
        }
        isDrawing = false;
        isDragging = false;
        // Lógica de finalização de formas foi removida
        redrawCanvas();
    });

    window.addEventListener('keydown', (e) => { if (e.key === 'Delete' && selectedObject) { objectsOnCanvas = objectsOnCanvas.filter(obj => obj !== selectedObject); selectedObject = null; redrawCanvas(); } });
    function getObjectAtPosition(x, y) { for (let i = objectsOnCanvas.length - 1; i >= 0; i--) { const obj = objectsOnCanvas[i]; if (obj.type === 'icon') { if (x >= obj.x && x <= obj.x + obj.width && y >= obj.y && y <= obj.y + obj.height) { return obj; } } } return null; }
    function eraseAtPosition(x, y, eraserSize) {
        objectsOnCanvas = objectsOnCanvas.filter(obj => {
            if (obj.type !== 'path') return true;
            const distanceThreshold = eraserSize;
            return !obj.points.some(p => Math.sqrt(Math.pow(p.x - x, 2) + Math.pow(p.y - y, 2)) < distanceThreshold);
        });
    }

    // =================================================================
    // 5. LÓGICA DO MENU DE HABILIDADES
    // =================================================================
    function showAbilityMenu(lancer, mouseX, mouseY) {
        hideAbilityMenu(); // Garante que qualquer menu existente seja removido

        abilityMenu = document.createElement('div');
        abilityMenu.className = 'ability-menu';
        abilityMenu.style.left = `${mouseX + 10}px`; // Posiciona o menu um pouco à direita do mouse
        abilityMenu.style.top = `${mouseY - 10}px`; // Posiciona o menu um pouco acima do mouse

        const abilities = LANCER_ABILITIES[lancer.name];
        if (abilities) {
            abilities.forEach(ability => {
                const img = document.createElement('img');
                img.src = ability.imagePath;
                img.alt = ability.name;
                img.title = ability.name;
                img.className = 'ability-icon';
                img.addEventListener('click', () => {
                    placeAbility(ability, lancer);
                });
                abilityMenu.appendChild(img);
            });
        } else {
            console.warn(`Habilidades não encontradas para ${lancer.name}`);
        }

        document.body.appendChild(abilityMenu);
    }

    function hideAbilityMenu() {
        if (abilityMenu) {
            document.body.removeChild(abilityMenu);
            abilityMenu = null;
        }
    }

    function placeAbility(ability, lancer) {
        // Lógica para posicionar a habilidade no mapa (ex: desenhar um ícone temporário)
        console.log(`Habilidade ${ability.name} selecionada para ${lancer.name}`);
        // Aqui você pode adicionar a lógica para desenhar um indicador visual
        // no canvas, mostrando onde a habilidade será aplicada.
    }

    // =================================================================
    // 6. EVENT LISTENERS DA UI
    // =================================================================
    const toolBtns = document.querySelectorAll('.tool-btn');
    toolBtns.forEach(btn => { btn.addEventListener('click', () => { toolBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); currentTool = btn.id.replace('-tool', ''); canvas.style.cursor = currentTool === 'eraser' ? 'cell' : 'crosshair'; selectedObject = null; redrawCanvas(); }); });
    colorPicker.addEventListener('input', (e) => { currentColor = e.target.value; });
    mapSelector.addEventListener('change', loadMap);
    clearAllBtn.addEventListener('click', () => { if (confirm('Você tem certeza que deseja limpar todo o planejamento?')) { objectsOnCanvas = []; selectedObject = null; redrawCanvas(); } });

    eraserSizeSlider.addEventListener('input', () => {
        eraserSize = parseInt(eraserSizeSlider.value);
    });

    //Modifica o estilo do botão da borracha quando ativo
    eraserToolBtn.addEventListener('click', () => {
        eraserToolBtn.classList.add('active');
    });


    // =================================================================
    // 7. EXECUÇÃO INICIAL
    // =================================================================
    window.addEventListener('resize', resizeCanvas);
    populateLists();
    loadMap();
    penToolBtn.click();
    resizeCanvas();
});