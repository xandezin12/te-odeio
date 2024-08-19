// Função que calcula a previsão de alugueis baseado no histórico
function predictRentals() {
    // Obtem os valores selecionados do formulário
    const dayOfWeek = document.getElementById('dayOfWeek').value;
    const weather = document.getElementById('weather').value;

    // Define a tabela de previsões com base em dados históricos fictícios
    const rentalHistory = {
        'Segunda': { 'Ensolarado': 30, 'Nublado': 25, 'Chuvoso': 15 },
        'Terca': { 'Ensolarado': 40, 'Nublado': 35, 'Chuvoso': 20 },
        'Quarta': { 'Ensolarado': 50, 'Nublado': 45, 'Chuvoso': 30 },
        'Quinta': { 'Ensolarado': 60, 'Nublado': 55, 'Chuvoso': 35 },
        'Sexta': { 'Ensolarado': 70, 'Nublado': 65, 'Chuvoso': 45 },
        'Sabado': { 'Ensolarado': 80, 'Nublado': 75, 'Chuvoso': 50 },
        'Domingo': { 'Ensolarado': 90, 'Nublado': 85, 'Chuvoso': 60 }
    };

    // Calcula a previsão com base no dia da semana e clima selecionado
    const predictedRentals = rentalHistory[dayOfWeek][weather];

    // Exibe o resultado na página
    document.getElementById('result').innerText = `Previsão de aluguéis: ${predictedRentals}`;
}
