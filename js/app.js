// Teste imediato: Se isso não aparecer, o arquivo não carregou
console.log("Arquivo js/app.js carregado!");

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-analyze');
    const dashboard = document.getElementById('dashboard');

    if (btn) {
        console.log("Botão encontrado com sucesso!");
        
        btn.addEventListener('click', () => {
            const url = document.getElementById('url-input').value.trim();
            
            if (url === "") {
                alert("Por favor, digite uma URL primeiro.");
                return;
            }

            // Mostra o dashboard e gera animação
            dashboard.classList.remove('hidden');
            btn.innerText = "Analisando...";
            
            setTimeout(() => {
                // Notas aleatórias
                const perf = Math.floor(Math.random() * 15) + 85;
                const seo = Math.floor(Math.random() * 10) + 90;

                document.getElementById('score-perf').setAttribute('stroke-dasharray', `${perf}, 100`);
                document.getElementById('txt-perf').textContent = perf;
                
                document.getElementById('score-seo').setAttribute('stroke-dasharray', `${seo}, 100`);
                document.getElementById('txt-seo').textContent = seo;

                document.getElementById('report-list').innerHTML = `
                    <li>✅ Performance: Site otimizado para Web Vitals.</li>
                    <li>✅ SEO: Tags de título e descrição encontradas.</li>
                `;

                btn.innerText = "Analisar Projeto";
            }, 1000);
        });
    } else {
        console.error("Erro: O botão com ID 'btn-analyze' não foi encontrado!");
    }
});