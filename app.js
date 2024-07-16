// Function para criptografar o texto
function criptografar() {
    // pega o txt original do txtareaa e converte para minúsculas
    const textoOriginal = document.getElementById('naocripto').value.toLowerCase();

    //cripos = o que será criptografado
    const criptos = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Limpa o txtarea de texto descriptografado
    document.getElementById('naocripto').value = '';

    // Criptografa o texto original substituindo cada letra pelas sua cripto
    let textoCriptografado = textoOriginal.replace(/[eioua]/g, function(match) {
        return criptos[match];
    });

    // Atualiza o textarea de texto criptografado
    document.getElementById('cripto').value = textoCriptografado;
}


// Function para descriptografar o texto
function descriptografar() {
    const textoCriptografado = document.getElementById('cripto').value.toLowerCase();
    const descriptos = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Construir a expressão regular para encontrar todas as palavras criptografadas
    const regex = new RegExp(Object.keys(descriptos).join('|'), 'g');

    // Substituir as palavras criptografadas pelas letras originais
    let textoDescriptografado = textoCriptografado.replace(regex, function(match) {
        return descriptos[match];
    });

    // Atualizar o textarea de texto descriptografado
    document.getElementById('naocripto').value = textoDescriptografado;
}

// Function para limpar os textos
function limpar() {
    document.getElementById('naocripto').value = '';
    document.getElementById('cripto').value = '';
}


// Function para copiar o texto criptografado
function copyText() {
    const textareaCripto = document.getElementById('cripto');
    
    // Selecionar o texto dentro do textarea
    textareaCripto.select();
    textareaCripto.setSelectionRange(0, 99999);
    
    // Copiar o texto selecionado para a área de transferência
    document.execCommand('copy');
    
    // aviso para o usuário
    alert('Texto copiado para a área de transferência!');
}
