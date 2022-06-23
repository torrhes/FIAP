var texto = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>"

//O nome das cidades avaliadas
var cidades;
cidades = texto.split(" - Roteiros para")
var cidade1 = cidades[1].split("*")[1];
var cidade2 = cidades[2].split("*")[1];
var cidade3 = cidades[3].split("*")[1];
alert(`As cidades são: ${cidade1}, ${cidade2}, e, ${cidade3}`);

//conteúdo do roteiro A de cada cidade avaliada.
var conteudo;
conteudo = texto.split("#")
conteudo1 = conteudo[1];
conteudo2 = conteudo[4];
conteudo3 = conteudo[7];
alert(`São paulo: ${conteudo1}`);
alert(`Las Vegas: ${conteudo2}`);
alert(`Moscou: ${conteudo3}`);

//Quantos locais são citados no roteiro A de cada cidade.
loc1 = conteudo[1].split("Roteiro A | Região: Avenida Paulista<br>");
loc2 = conteudo[4].split("Roteiro A | Região: Las Vegas Boulevard South<br>");
loc3 = conteudo[7].split("Roteiro A | Região: Praça Vermelha<br>");
local1 = loc1[1].split(";").lenght;
local2 = loc2[1].split(";").length;
local3 = loc3[1].split(";").length;
alert(`No roteiro A em São Paulo temos: ${local1}lugares citados`);
alert(`No roteiro A em Las Vegas temos: ${local2} lugares citados`);
alert(`No roteiro A em Moscou temos: ${local3} lugares citados`);

//nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.
var pontosSp;
pontosSp = conteudo[2].split("Roteiro B | Região: Centro<br>")
alert(`Os nomes dos pontos localizados no bairro Centro da cidade de São Paulo são: ${pontosSp[1]}, ${pontosSp[2]},${pontosSp[3]}`)

//nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles.
var pontosLa;
pontosLa = conteudo[5].split("Roteiro B | Região: Downtown<br>;")
alert(`Os nomes dos pontos localizados no bairro Downtown na cidade de Los Angeles são: ${pontosLa[1]}, ${pontosLa[2]},${pontosLa[3]}`)

