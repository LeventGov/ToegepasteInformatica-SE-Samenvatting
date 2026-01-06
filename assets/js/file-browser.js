// File structure mapping
const fileStructure = {
    'files': [
        { name: 'question1.js', path: 'files/question1.js' },
        { name: 'labyrinth', type: 'folder', files: [
            { name: 'player.js', path: 'files/labyrinth/player.js' },
            { name: 'tile.js', path: 'files/labyrinth/tile.js' },
            { name: 'game.js', path: 'files/labyrinth/game.js' }
        ]},
        { name: 'taylor-swift', type: 'folder', files: [
            { name: 'question3a.js', path: 'files/taylor-swift/question3a.js' },
            { name: 'question3b.js', path: 'files/taylor-swift/question3b.js' }
        ]},
        { name: 'super-mario', type: 'folder', files: [
            { name: 'index.html', path: 'files/super-mario/index.html' },
            { name: 'ts', type: 'folder', files: [
                { name: 'index.ts', path: 'files/super-mario/ts/index.ts' },
                { name: 'api', type: 'folder', files: [
                    { name: 'responses', type: 'folder', files: [
                        { name: 'character.ts', path: 'files/super-mario/ts/api/responses/character.ts' }
                    ]}
                ]}
            ]}
        ]}
    ],
    'solution': [
        { name: 'question1-solution.js', path: 'solution/question1-solution.js' },
        { name: 'labyrinth', type: 'folder', files: [
            { name: 'player-solution.js', path: 'solution/labyrinth/player-solution.js' },
            { name: 'tile-solution.js', path: 'solution/labyrinth/tile-solution.js' },
            { name: 'game-solution.js', path: 'solution/labyrinth/game-solution.js' }
        ]},
        { name: 'taylor-swift', type: 'folder', files: [
            { name: 'question3a-solution.js', path: 'solution/taylor-swift/question3a-solution.js' },
            { name: 'question3b-solution.js', path: 'solution/taylor-swift/question3b-solution.js' }
        ]},
        { name: 'super-mario', type: 'folder', files: [
            { name: 'index-solution.html', path: 'solution/super-mario/index-solution.html' }
        ]}
    ]
};

// Syntax highlighting is provided by assets/js/syntax-highlight.js
// Ensure the function exists; if not, fallback to escaping only
function highlightCode(code, fileType) {
    if (typeof window.highlightCode === 'function') {
        return window.highlightCode(code, fileType);
    }
    return escapeHtml(code);
}

// Build file tree
function buildFileTree(items, parent = null) {
    const ul = document.createElement('ul');
    ul.className = 'file-tree';

    items.forEach(item => {
        const li = document.createElement('li');

        if (item.type === 'folder') {
            const folderBtn = document.createElement('div');
            folderBtn.className = 'file-item folder';
            folderBtn.textContent = item.name;
            li.appendChild(folderBtn);

            if (item.files) {
                li.appendChild(buildFileTree(item.files));
            }
        } else {
            const fileBtn = document.createElement('a');
            fileBtn.className = 'file-item file';
            fileBtn.textContent = item.name;
            fileBtn.href = '#';
            fileBtn.onclick = (e) => {
                e.preventDefault();
                loadFile(item.path, item.name);
                
                // Update active state
                document.querySelectorAll('.file-item.active').forEach(el => {
                    el.classList.remove('active');
                });
                fileBtn.classList.add('active');
            };
            li.appendChild(fileBtn);
        }

        ul.appendChild(li);
    });

    return ul;
}

// Load file content
async function loadFile(path, name) {
    const fullPath = `../../../courses/webtech/proefexam/${path}`;
    
    try {
        const response = await fetch(fullPath);
        const content = await response.text();

        const display = document.getElementById('file-display');
        
        const header = document.createElement('div');
        header.className = 'file-header';
        header.innerHTML = `
            <div>
                <h2>${name}</h2>
                <p class="file-path">${path}</p>
            </div>
        `;

        const viewer = document.createElement('div');
        viewer.className = 'file-viewer';
        let highlightedCode;
        try {
            // Pass full path for robust extension detection
            highlightedCode = highlightCode(content, path);
        } catch (e) {
            highlightedCode = escapeHtml(content);
        }

        // Build line numbers
        const lines = content.split(/\r?\n/);
        const numsHtml = lines.map((_, idx) => `<span>${idx + 1}</span>`).join('');

        // Copy button
        const copyHtml = `<div class="copy-row"><button class="copy-btn" aria-label="Copy code">Copy</button></div>`;
        const codeHtml = `
            <div class="code-wrap">
                <div class="line-numbers">${numsHtml}</div>
                <pre><code>${highlightedCode}</code></pre>
            </div>
        `;

        viewer.innerHTML = copyHtml + codeHtml;
        
        // Wire copy
        const btn = viewer.querySelector('.copy-btn');
        btn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(content);
                btn.textContent = 'Copied!';
                setTimeout(() => btn.textContent = 'Copy', 1200);
            } catch (_) {
                btn.textContent = 'Error';
                setTimeout(() => btn.textContent = 'Copy', 1200);
            }
        });

        display.innerHTML = '';
        display.appendChild(header);
        display.appendChild(viewer);
    } catch (error) {
        document.getElementById('file-display').innerHTML = `
            <p style="color: var(--accent-error);">❌ Kon bestand niet laden</p>
            <p>${error.message}</p>
        `;
    }
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Initialize
function init() {
    const fileTree = buildFileTree(
        [
            { name: 'Startbestanden', type: 'folder', files: fileStructure.files },
            { name: 'Uitwerkingen', type: 'folder', files: fileStructure.solution }
        ]
    );
    document.getElementById('file-tree').appendChild(fileTree);

    // Check if there's a file parameter in URL hash
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const fileToOpen = urlParams.get('file');
    
    if (fileToOpen) {
        // Helper: get the first file path from a nested structure
        const getFirstFile = (items) => {
            for (let item of items) {
                if (item.path) return item;
                if (item.files) {
                    const found = getFirstFile(item.files);
                    if (found) return found;
                }
            }
            return null;
        };

        // If user passed a top-level group ("files" or "solution"), open first file
        if (fileToOpen === 'files' || fileToOpen === 'solution') {
            const list = fileStructure[fileToOpen];
            const first = getFirstFile(list);
            if (first) {
                loadFile(first.path, first.name);
            }
            return;
        }

        // Find and load the specific file by exact path
        const findFile = (items) => {
            for (let item of items) {
                if (item.path === fileToOpen) {
                    loadFile(item.path, item.name);
                    // Mark as active
                    setTimeout(() => {
                        const buttons = document.querySelectorAll('.file-item');
                        buttons.forEach(btn => {
                            if (btn.textContent === item.name) {
                                btn.classList.add('active');
                            }
                        });
                    }, 100);
                    return true;
                }
                if (item.files && findFile(item.files)) {
                    return true;
                }
            }
            return false;
        };
        
        findFile(fileStructure.files);
        findFile(fileStructure.solution);
    }
}

init();
