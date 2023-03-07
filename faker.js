const { faker } = require('@faker-js/faker');

faker.setLocale('pt_BR');

// Função para gerar um endereço aleatório
function generateEndereco() {
  return {
    rua: faker.address.street(),
    numero: Math.floor(Math.random() * 9999) + 1,
    cidade: faker.address.city(),
    uf: faker.address.stateAbbr(),
    pais: faker.address.country(),
    cep: faker.address.zipCode(),
  };
}

// Função para gerar um telefone
function generateTelefone(id) {
  return {
    id,
    numero: faker.phone.number(),
  };
}

// Função para gerar um email
function generateEmail(id){
  return {
    id,
    endereco: faker.internet.email(),
  };
}

// Função para gerar um usuário chave
function generateUsuarioChave(id) {
  return {
    id,
    nome: faker.name.fullName(),
    cpf: faker.br.cpf(),
    email: faker.internet.email(),
    fones: [generateTelefone(1), generateTelefone(2)],
  };
}

// Função para gerar uma empresa
function generateEmpresa(id) {
  return {
    id,
    nome: faker.company.name(),
    cnpj: '000000000',
    endereco: generateEndereco(),
    fones: [generateTelefone(1), generateTelefone(2)],
    emails: [generateEmail(1), generateEmail(2)],
    usuario_chave: generateUsuarioChave(1),
  };
}

// Gerando 10 endereços aleatórios
const empresas = [];
for (let i = 0; i < 5; i++) {
  empresas.push(generateEmpresa());
}

console.log(empresas);
