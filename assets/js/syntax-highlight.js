// Simple robust syntax highlighter with tokenization to avoid nested spans
(function(global){
    function escapeHtml(text) {
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    function highlightCode(rawCode, fileName) {
        const name = (fileName || '').toLowerCase();
        const isJs = name.endsWith('.js') || name.endsWith('.ts') || name === 'js' || name === 'ts';
        const isHtml = name.endsWith('.html');

        // If not recognized, just escape
        if (!isJs && !isHtml) {
            return escapeHtml(rawCode);
        }

        // Tokenize strings and comments first to avoid overlapping replacements
        let i = 0;
        const src = rawCode;
        let out = '';
        const tokens = []; // {type: 'string'|'comment', text: '...'}

        function pushToken(type, text){
            const idx = tokens.length;
            tokens.push({type, text});
            return `__TOKEN_${idx}__`;
        }

        while (i < src.length) {
            const ch = src[i];
            const next2 = src.slice(i, i+2);
            // Block comment /* ... */
            if (next2 === '/*') {
                const end = src.indexOf('*/', i+2);
                const endIdx = end === -1 ? src.length : end + 2;
                const text = src.slice(i, endIdx);
                out += pushToken('comment', text);
                i = endIdx;
                continue;
            }
            // Line comment // ... (until newline)
            if (next2 === '//') {
                let endIdx = src.indexOf('\n', i+2);
                if (endIdx === -1) endIdx = src.length;
                const text = src.slice(i, endIdx);
                out += pushToken('comment', text);
                i = endIdx;
                continue;
            }
            // Strings: '...'/"..."/`...`
            if (ch === '"' || ch === '\'' || ch === '`') {
                const quote = ch;
                let j = i + 1;
                while (j < src.length) {
                    const cj = src[j];
                    if (cj === '\\') { j += 2; continue; }
                    if (cj === quote) { j++; break; }
                    j++;
                }
                const text = src.slice(i, j);
                out += pushToken('string', text);
                i = j;
                continue;
            }
            // default char
            out += ch;
            i++;
        }

        // Escape entire placeholderized output
        let safe = escapeHtml(out);

        // Apply keyword-ish highlighting on the escaped text (placeholders won't match keywords)
        if (isJs) {
            // Keywords
            safe = safe.replace(/\b(function|const|let|var|if|else|for|while|do|switch|case|break|continue|return|class|extends|import|export|async|await|new|this|static|private|public|interface|type|abstract|super|try|catch|finally|throw|typeof|instanceof)\b/g,
                '<span class="keyword">$1</span>');
            // Numbers
            safe = safe.replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
            // Function calls (identifier followed by paren)
            safe = safe.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span class="function">$1</span>');
            // Class names (after class/new keywords only to reduce noise)
            safe = safe.replace(/\b(class|new)\s+([A-Z][a-zA-Z0-9_]*)/g, '$1 <span class="class-name">$2</span>');
        }
        if (isHtml) {
            // Simple HTML tag highlighting
            safe = safe.replace(/(&lt;\/?)([a-zA-Z0-9\-]+)([^&]*?&gt;)/g, '$1<span class="keyword">$2</span>$3');
            safe = safe.replace(/([a-zA-Z\-]+)=(&quot;[^&]*?&quot;)/g, '<span class="function">$1</span>=<span class="string">$2</span>');
        }

        // Restore tokens with spans (escape individual token text)
        tokens.forEach((tok, idx) => {
            const escaped = escapeHtml(tok.text);
            const html = `<span class="${tok.type}">${escaped}</span>`;
            const placeholder = `__TOKEN_${idx}__`;
            // Placeholders were escaped as-is, so direct replace is fine
            safe = safe.replace(new RegExp(placeholder, 'g'), html);
        });

        return safe;
    }

    // Expose
    global.highlightCode = highlightCode;
})(window);
