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
    const abilityDisplay = document.getElementById('ability-display');

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
            { name: 'Teia Imobilizadora', imagePath: 'assets/abilities/aranha_teia.png', description: 'Imobiliza o alvo por um curto período.' },
            { name: 'Veneno Paralisante', imagePath: 'assets/abilities/aranha_veneno.png', description: 'Envenena o alvo, reduzindo sua velocidade.' },
            { name: 'Aracnofobia', imagePath: 'assets/abilities/aranha_aracnofobia.png', description: 'Causa pânico nos inimigos próximos.' }
        ],
        'Axônio': [
            { name: 'Pulso Elétrico', imagePath: 'assets/abilities/axonio_pulso.png', description: 'Causa dano em área.' },
            { name: 'Sobrecarga', imagePath: 'assets/abilities/axonio_sobrecarga.png', description: 'Aumenta o dano do próximo ataque.' },
            { name: 'Campo de Força', imagePath: 'assets/abilities/axonio_campo.png', description: 'Protege contra dano.' }
        ],
        'Broker': [
            { name: 'Suborno', imagePath: 'assets/abilities/broker_suborno.png', description: 'Converte um inimigo em aliado temporariamente.' },
            { name: 'Mercado Negro', imagePath: 'assets/abilities/broker_mercado.png', description: 'Compra itens no mercado negro.' },
            { name: 'Fuga', imagePath: 'assets/abilities/broker_fuga.png', description: 'Teletransporta para um local seguro.' }
        ],
        'Chum': [
            { name: 'Mordida', imagePath: 'assets/abilities/chum_mordida.png', description: 'Causa dano massivo em um único alvo.' },
            { name: 'Esgoto', imagePath: 'assets/abilities/chum_esgoto.png', description: 'Entra no esgoto, ficando invisível.' },
            { name: 'Vomito', imagePath: 'assets/abilities/chum_vomito.png', description: 'Reduz a precisão dos inimigos.' }
        ],
        'Corona': [
            { name: 'Raio Solar', imagePath: 'assets/abilities/corona_raio.png', description: 'Causa dano contínuo em um alvo.' },
            { name: 'Cura', imagePath: 'assets/abilities/corona_cura.png', description: 'Cura aliados próximos.' },
            { name: 'Escudo de Luz', imagePath: 'assets/abilities/corona_escudo.png', description: 'Cria um escudo protetor.' }
        ],
        'Dex': [
            { name: 'Hackear', imagePath: 'assets/abilities/dex_hackear.png', description: 'Desabilita as habilidades do inimigo.' },
            { name: 'Invisibilidade', imagePath: 'assets/abilities/dex_invisibilidade.png', description: 'Fica invisível por um curto período.' },
            { name: 'Virus', imagePath: 'assets/abilities/dex_virus.png', description: 'Espalha um vírus que causa dano ao longo do tempo.' }
        ],
         'Hollowpoint': [
            { name: 'Tiro Perfurante', imagePath: 'assets/abilities/hollowpoint_tiro.png', description: 'O tiro atravessa múltiplos alvos.' },
            { name: 'Visão Aguçada', imagePath: 'assets/abilities/hollowpoint_visao.png', description: 'Aumenta o alcance da visão.' },
            { name: 'Camuflagem', imagePath: 'assets/abilities/hollowpoint_camuflagem.png', description: 'Torna o Lancer difícil de detectar.' }
        ],
         'Jaguar': [
            { name: 'Salto', imagePath: 'assets/abilities/jaguar_salto.png', description: 'Salta para um local distante.' },
            { name: 'Garras', imagePath: 'assets/abilities/jaguar_garras.png', description: 'Causa dano extra com ataques corpo a corpo.' },
            { name: 'Faro', imagePath: 'assets/abilities/jaguar_faro.png', description: 'Detecta inimigos escondidos.' }
        ],
         'Kismet': [
            { name: 'Teletransporte', imagePath: 'assets/abilities/kismet_teletransporte.png', description: 'Teletransporta para um local desejado.' },
            { name: 'Inversão', imagePath: 'assets/abilities/kismet_inversao.png', description: 'Inverte os controles do inimigo.' },
            { name: 'Duplicar', imagePath: 'assets/abilities/kismet_duplicar.png', description: 'Cria uma cópia do Lancer.' }
        ],
         'Nitro': [
            { name: 'Bomba', imagePath: 'assets/abilities/nitro_bomba.png', description: 'Planta uma bomba que causa dano em área.' },
            { name: 'SuperVelocidade', imagePath: 'assets/abilities/nitro_velocidade.png', description: 'Aumenta a velocidade de movimento.' },
            { name: 'Escudo', imagePath: 'assets/abilities/nitro_escudo.png', description: 'Cria um escudo temporário.' }
        ],
         'Pathojen': [
            { name: 'Doença', imagePath: 'assets/abilities/pathojen_doenca.png', description: 'Causa dano ao longo do tempo.' },
            { name: 'Cura', imagePath: 'assets/abilities/pathojen_cura.png', description: 'Cura um aliado.' },
            { name: 'Infectar', imagePath: 'assets/abilities/pathojen_infectar.png', description: 'Espalha a doença para outros inimigos.' }
        ],
         'Serket': [
            { name: 'Veneno', imagePath: 'assets/abilities/serket_veneno.png', description: 'Envenena o alvo.' },
            { name: 'Furtividade', imagePath: 'assets/abilities/serket_furtividade.png', description: 'Fica difícil de detectar.' },
            { name: 'Cura', imagePath: 'assets/abilities/serket_cura.png', description: 'Cura a si mesmo.' }
        ],
         'Sonar': [
            { name: 'Pulso Sonar', imagePath: 'assets/abilities/sonar_pulso.png', description: 'Revela inimigos próximos.' },
            { name: 'Ondas Sonoras', imagePath: 'assets/abilities/sonar_ondas.png', description: 'Causa dano em área.' },
            { name: 'Invisibilidade', imagePath: 'assets/abilities/sonar_invisibilidade.png', description: 'Fica invisível.' }
        ],
        'Zéfiro': [
            { name: 'Tornado', imagePath: 'assets/abilities/zefiro_tornado.png', description: 'Cria um tornado que causa dano.' },
            { name: 'Rajada de Vento', imagePath: 'assets/abilities/zefiro_rajada.png', description: 'Empurra os inimigos para longe.' },
            { name: 'Planar', imagePath: 'assets/abilities/zefiro_planar.png', description: 'Permite planar por um curto período.' }
        ],
    };

    const LANCER_ROLES = {
        'Aranha': 'Especialista em controle de área e imobilização.',
        'Axônio': 'Focado em dano em área e suporte defensivo.',
        'Broker': 'Utiliza táticas de distração e manipulação.',
        'Chum': 'Especialista em emboscadas e combate corpo a corpo.',
        'Corona': 'Suporte com habilidades de cura e dano solar.',
        'Dex': 'Infiltrador e especialista em desabilitar inimigos.',
        'Hollowpoint': 'Atirador de precisão com alta capacidade de dano.',
        'Jaguar': 'Rastreador ágil com ataques furtivos.',
        'Kismet': 'Mestre da ilusão e teletransporte estratégico.',
        'Nitro': 'Demolidor com habilidades explosivas.',
        'Pathojen': 'Suporte que enfraquece os inimigos com toxinas.',
        'Serket': 'Assassino furtivo com venenos debilitantes.',
        'Sonar': 'Especialista em detecção e suporte estratégico.',
        'Zéfiro': 'Controlador de área com habilidades de vento.'
    };

    let activeLancer = null; // Para controlar qual Lancer está ativo
    let abilityMenu = null;  // Para controlar o menu de habilidades

    function resizeCanvas() {
        try {
            const displayWidth = mapContainer.clientWidth;
            const displayHeight = mapContainer.clientHeight;
            canvas.width = displayWidth;
            canvas.height = displayHeight;

            redrawCanvas();
        } catch (error) {
            console.error("Erro ao redimensionar o canvas:", error);
        }
    }


    // =================================================================
    // 2. FUNÇÕES DE INICIALIZAÇÃO
    // =================================================================
    function populateLists() {
        try {
            LANCERS.forEach(name => {
                const icon = createDraggableIcon(name, 'lancer', `assets/lancers/${name}.PNG`);
                lancersList.appendChild(icon);
            });
            UTILITIES.forEach(name => {
                const icon = createDraggableIcon(name, 'utility', `assets/utils/${name}.PNG`);
                utilitiesList.appendChild(icon);
            });
        } catch (error) {
            console.error("Erro ao popular as listas:", error);
        }
    }
    function createDraggableIcon(name, type, imagePath) {
        try {
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

            // Adiciona o evento de clique para exibir as habilidades
            div.addEventListener('click', () => {
                displayLancerAbilities(name);
            });
            return div;
        } catch (error) {
            console.error("Erro ao criar ícone arrastável:", error);
            return null;
        }
    }
    function loadMap() {
        try {
            const mapName = mapSelector.value;
            const imagePath = `assets/maps/${mapName}.PNG`;
            backgroundImage.src = imagePath;
            backgroundImage.onload = () => {
                console.log("Mapa carregado com sucesso:", mapName);
                redrawCanvas();
            };
            backgroundImage.onerror = () => {
                const errorMessage = `ERRO: Não foi possível carregar o mapa!\n\nVerifique se o arquivo existe em:\n${imagePath}`;
                console.error(errorMessage);
                alert(errorMessage);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            };
        } catch (error) {
            console.error("Erro ao carregar o mapa:", error);
        }
    }

    // =================================================================
    // 3. LÓGICA DO CANVAS E DESENHO
    // =================================================================
    function redrawCanvas() {
        try {
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
        } catch (error) {
            console.error("Erro ao redesenhar o canvas:", error);
        }
    }

    // Apenas a função de desenhar caminho livre permanece
    function drawPath(obj){
        try {
            ctx.beginPath();
            ctx.moveTo(obj.points[0].x, obj.points[0].y);
            obj.points.forEach(point => ctx.lineTo(point.x, point.y));
            ctx.strokeStyle = obj.color;
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.stroke();
        } catch (error) {
            console.error("Erro ao desenhar o caminho:", error);
        }
    }
    // Funções drawLine, drawRect, drawCircle foram removidas

    // =================================================================
    // 4. MANIPULAÇÃO DE EVENTOS
    // =================================================================
    canvas.addEventListener('dragover', (e) => e.preventDefault());

    canvas.addEventListener('drop', (e) => {
        try {
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
        } catch (error) {
            console.error("Erro ao soltar o ícone no canvas:", error);
        }
    });

    canvas.addEventListener('mousedown', (e) => {
        try {
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
        } catch (error) {
            console.error("Erro ao clicar no canvas:", error);
        }
    });

    canvas.addEventListener('mousemove', (e) => {
        try {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            // Lógica do Menu de Habilidades (Hover)
            const objectUnderMouse = getObjectAtPosition(mouseX, mouseY);
            if (objectUnderMouse && objectUnderMouse.type === 'icon') {
                canvas.style.cursor = 'grab';
            } else {
                canvas.style.cursor = currentTool === 'eraser' ? 'cell' : 'crosshair';
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
        } catch (error) {
            console.error("Erro ao mover o mouse no canvas:", error);
        }
    });

    canvas.addEventListener('mouseup', (e) => {
        try {
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
        } catch (error) {
            console.error("Erro ao soltar o mouse no canvas:",