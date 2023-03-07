const { faker } = require('@faker-js/faker');
const fs = require('fs');

faker.setLocale('pt_BR');

// Função para gerar um endereço aleatório
function generateEndereco() {
  return {
    rua: faker.address.street(),
    numero: Math.floor(Math.random() * 9999) + 1,
    cidade: faker.address.city(),
    uf: faker.address.stateAbbr(),
    pais: 'Brasil',
    cep: faker.address.zipCode(),
  };
}

// Função para gerar um telefone
function generateTelefone() {
  return {
    id: +faker.random.numeric(),
    numero: faker.phone.number(),
  };
}

// Função para gerar um email
function generateEmail(){
  return {
    id: +faker.random.numeric(),
    endereco: faker.internet.email(),
  };
}

// Função para gerar um usuário chave
function generateUsuarioChave() {
  return {
    id: +faker.random.numeric(),
    nome: faker.name.fullName(),
    cpf: '000.000.000-00',
    email: faker.internet.email(),
    fones: [generateTelefone(1), generateTelefone(2)],
  };
}

// Função para gerar uma empresa
function generateEmpresa() {
  return {
    id: +faker.random.numeric(),
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
for (let i = 1; i < 5; i++) {
  empresas.push(generateEmpresa());
}

fs.writeFileSync(
  `./empresas.json`,
  JSON.stringify(empresas, null, 2),
  'utf-8',
);

console.log(empresas);

/* const empresa = generateEmpresa();
console.log(empresa, empresa.usuario_chave); */
